import prisma from "@/lib/prisma";
import { User } from '@prisma/client';

export async function getUser(email: string): Promise<User | null> {
    try {
      
      const user = await prisma.user.findUnique({
        where: { email }
      });
      return user;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }