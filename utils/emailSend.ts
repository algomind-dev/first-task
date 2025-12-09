import { prisma } from "@/lib/prisma";
// import { generateNumericCode } from "../lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationOTP = async ({ identifier, url, provider, token, theme }: {
    identifier: string;
    url: string;
    provider: { maxAge: number };
    token?: string;
    theme?: any;
}) => {
    const code = ( Math.floor(Math.random() * 900000 + 100000 )).toString();
    const { host } = new URL(url);

    await prisma.verificationToken.create({
        data: {
            identifier,
            token: code,
            expires: new Date(Date.now() + provider.maxAge * 1000)
        },
    });

    try {
        await resend.emails.send({
            from: process.env.EMAIL_FROM as string,
            to: identifier,
            subject: `Sign in to ${host}`,
            html: `
              <p>Use this code to sign in:</p>
              <p style="font-size:24px; font-weight:bold; letter-spacing:2px;">${code}</p>
              <p>Or click <a href="${url}">this link</a>.</p>
              <p>(Expires in 5 minutes)</p>
            `,
        });
    } catch (error) {
        console.error("Resend email error:", error);
        throw new Error("Email sending failed");
    }
}