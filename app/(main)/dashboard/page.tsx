'use client'; 

import { signOut } from "next-auth/react";
import { GeneralLayout } from "@/components/layout/GeneralLayout";
import { Dashboard } from "./dashboard";
export default function page() {
  // const { data: session, status } = useSession();
  // console.log("session: ", session, status);
  return (
    <>
      <GeneralLayout props={<Dashboard />}/>
    </>
  );
}