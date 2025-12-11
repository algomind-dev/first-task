
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/acion/auth";
import prisma from "@/lib/prisma";
import Account from "../../../components/main/account";

export default async function page() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where:{id:session?.user?.id as string}
  })

  return (
    <Account user={user} />
  );
}