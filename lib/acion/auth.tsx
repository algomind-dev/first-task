import { AuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '../prisma';
import { customVerificationRequest } from '../signinEmail';
import { User } from '@prisma/client';
import { DefaultSession } from 'next-auth';

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    } & DefaultSession["user"];
  }
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      from: process.env.EMAIL_FROM,
      generateVerificationToken: async () => {
        return (Math.floor(Math.random() * 900000) + 100000).toString();
      },
      maxAge: 3*60,
      sendVerificationRequest: customVerificationRequest,
    })
  ],
  pages: {
    signIn: '/auth/signin',
    verifyRequest: '/auth/verify'
  },
  callbacks: {
    async session({ session, user }: { session: any, user: any }) {
      session.user.id = user.id;
      session.user.name = user.name;
      session.user.image = user.image;
      return session;
    }
  }
};

