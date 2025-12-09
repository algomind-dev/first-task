import { CommonSign } from "@/components/auth/commonSign";
import { SignIn } from "@/components/auth/signin";
import { Suspense } from "react";

export default function Page() {
    return (
        <CommonSign>
            <Suspense >
                <SignIn />
            </Suspense>
        </CommonSign>
    )
}
