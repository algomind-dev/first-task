'use client'
import { useState, useRef } from "react"
import { redirect, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { createSession } from "@/lib/session";

export default function Page(){

    const verifyCodeArr = [1,2,3,4,5,6];
    const [verificationCode, setVerificationCode] = useState(Array(6).fill(""));
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const [error, setError] = useState(0);
    const email = useSearchParams().get('email')?.replace(/"/g, "");

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement>, index:number) => {
        e.preventDefault();

        setError(0)
        const { name, value } = e.target;
        if(value && !/^\d$/.test(value)) {
            e.target.value = "";
            return;
        }

        const newformData = [...verificationCode];
        newformData[index] = value;
        setVerificationCode(newformData);
        if (index < 5) inputRefs.current[index + 1]?.focus();
    };
    
    const handlePaste = ( e: React.ClipboardEvent<HTMLInputElement>, index:number) => {
        e.preventDefault();
        setError(0)
        const value = e.clipboardData.getData("text").replace(/\D/g, "")
        const newCode = [...verificationCode];
        value.split("").forEach(((digit, i) => {
            if(index + i < 6) {
                newCode[index+i] = digit;
                // inputRefs.current[index + i].value=digit;
                const inputEl = inputRefs.current[index + i];
                if (inputEl) {
                    inputEl.value = digit;
                }
                inputRefs.current[index+1+i]?.focus();
            }
        }))
        setVerificationCode(newCode);
    };

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const code = verificationCode.join("");
    
        if (code.length === 6 && email) {
            const formattedEmail = encodeURIComponent(email.toLowerCase().trim());
            const formattedCode = encodeURIComponent(code);
            const formattedCallback = encodeURIComponent("/onboarding/products");
            const otpRequestURL = `/api/auth/callback/email?email=${formattedEmail}&token=${formattedCode}&callbackUrl=${formattedCallback}`;
            
            const response = await fetch(otpRequestURL);
            
            if (response.ok) {
                await createSession(email);
                redirect(response.url);
            }
        }
    };

    const onRecendOTP = async () => {
        if(email){
            const formattedEmail = email.toString();
            const res = await signIn("email", { email: email, redirect: false } );
        }
    }
    
    return (
        <div className="bg-blue-900 w-full min-h-screen flex p-10 justify-center">
            <div className="max-w-lg w-full py-10">
                <h1 className="text-center text-white font-bold text-3xl">AccessiBit</h1>
                <div className="bg-white border rounded-lg shadow p-10 text-black">
                    <h1 className="text-center text-xl py-4">Verify your OTP</h1>
                    <p className="text-center py-2">We have sent a 6-digit OTP to your email</p>
                    <p className="text-center text-bold text-sm ">One-time access code:</p>
                    <div className="flex justify-around">
                        {verifyCodeArr.map((item, index) => (
                            <input 
                                key={index}
                                type="text" 
                                name={`number_${item}`}
                                maxLength={1} 
                                inputMode="numeric"
                                autoComplete="off"
                                className="w-10 h-12 py-4 p-3 border rounded-md"
                                onChange={(e) => handleChange(e, index)}
                                ref={el => { inputRefs.current[index] = el; }}
                                onPaste={(e) => handlePaste(e, index)}
                            />
                        ))}
                    </div>
                    {error ? <p className="text-sm text-center text-red-600">Please insert correct code</p> : ""}
                    <div className="py-4 text-center">
                        <button type="button" className="font-bold p-1 underline" onClick={onRecendOTP}>Resend OTP</button>
                        <p className="text-xs text-gray-700 p-1">If you have not received it, check your spam or</p>
                        {/* <Link href="/auth/verify" className="font-bold p-1 underline">Resend OTP</Link> */}
                        <p className="p-1 text-xs">Please note that the access code sent via email will expire after 3</p>
                        <p className="p-1 text-xs font-bold">minutes.</p>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="w-5/6 bg-blue-700 text-white py-3 rounded-md" onClick={onSubmit}>Check</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
