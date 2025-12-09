import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function customVerificationRequest(params: any) {
    const { identifier: to, provider, url, token } = params
    const { host } = new URL(url)

    const { error } = await resend.emails.send({
        from: provider.from || "noreply@accessibit.com",
        to,
        subject: `Sign in to ${host}`,
        text: text({ token, host }),
        html: html({ token, host }),
      });
    
    if (error) {
    throw new Error(`Email could not be sent: ${error}`);
    }
  }

function html({ token, host }: { token: string; host: string }) {
    const escapedHost = host.replace(/\./g, "&#8203;.");

    const brandColor = "#175CFF";
    const color = {
        background: "#f4f4f7",
        text: "#333333",
        mainBackground: "#ffffff",
        highlightBackground: "#f2f4f6",
        buttonBackground: brandColor,
        buttonText: "#ffffff",
    };

    return `
        <body style="margin: 0; padding: 0; background-color: ${
            color.background
        }; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: ${
            color.background
            }; padding: 20px 0;">
            <tr>
                <td align="center">
                <table cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: ${
                    color.mainBackground
                }; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden;">
                    <tr>
                    <td style="background-color: ${brandColor}; padding: 24px; text-align: center;">
                        <h1 style="margin: 0; color: #fff; font-size: 24px;">Sign in Request</h1>
                    </td>
                    </tr>
                    <tr>
                    <td style="padding: 24px 32px; text-align: center; font-size: 18px; color: ${
                        color.text
                    };">
                        Sign in to <strong>${escapedHost}</strong>
                    </td>
                    </tr>
                    <tr>
                    <td style="padding: 12px 32px;">
                        <div style="background-color: ${
                        color.highlightBackground
                        }; padding: 16px; border-radius: 6px; text-align: center;">
                        <p style="margin: 0 0 8px; font-size: 16px; color: ${
                            color.text
                        };">Your one-time passcode:</p>
                        <p style="margin: 0; font-size: 32px; font-weight: bold; letter-spacing: 4px; font-family: 'Courier New', monospace;">${token}</p>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <td style="padding: 24px 32px; text-align: center; font-size: 14px; line-height: 1.6; color: ${
                        color.text
                    };">
                        This code will expire in <strong>3 minutes</strong>.<br />
                        If you did not request this email, you can safely ignore it.
                    </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                    <td style="padding: 16px 32px 24px; text-align: center; font-size: 12px; color: #999999;">
                        &copy; ${new Date().getFullYear()} ${escapedHost}. All rights reserved.
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            </table>
        </body>
    `;
}
  
/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ token, host }: { token: string; host: string }) {
    return `
      Sign in to ${host}
      
      Sign in code: ${token}
      
      Keep in mind that this code will expire after 3 minutes. If you did not request this email you can safely ignore it.
    `;
  }