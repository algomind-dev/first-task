"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useActionState } from "react";
import { SignInput } from "@/components/auth/elements/signInput";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

export function SignIn(){
    
    const [state, action, pending] = useActionState(
        async () => {
            const res = await signIn("email", { email: formData.email, redirect: false } );
            if (res) redirect(`/auth/verify?email=${formData.email}`);
        }, 
        undefined
    );
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    

    return ( 
        <>
            <div className="relative flex items-center justify-center py-10">
                <span className="absolute inset-x-0 h-px bg-gray-300"></span>
                <span className="absolute px-3 text-gray-500 -translate-x-1/2 bg-white left-1/2">Or, sign in with your email</span>
            </div>
            <form action={action} className="text-start">
                <SignInput
                    className="" 
                    label="Work Email"
                    name="email" 
                    type="email"
                    placeholder="Enter your email" 
                    value={formData.email} 
                    onChange={handleChange}
                />
                <div className="relative">
                    <button type="submit" disabled={pending} className={`w-full  my-4 py-3 text-white roun ${pending ? "bg-blue-300" : "bg-blue-500"}`} >Sign In</button>
                    {pending ? (
                        <div className="absolute w-full top-6">
                            <div className="flex items-center justify-center">
                                <div className="w-7 h-7 border-4 border-blue-700 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        </div>
                    ) : ("")}
                </div>
            </form>
            <div className="text-sm">Don’t you have an account? <Link href="/auth/signup" className="text-gray-500">Sign Up</Link></div>
        </>
    )
}