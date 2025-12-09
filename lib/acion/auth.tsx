import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '../prisma';
import { customVerificationRequest } from '../signinEmail';

export const authOptions = {
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
};

