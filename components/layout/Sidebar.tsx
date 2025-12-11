"use client";

import { useRouter } from "next/navigation";
import { LayoutDashboard, FileImage, Settings, HandCoins, CircleDollarSign, MessageSquareCode } from "lucide-react";

export default function Sidebar() {
    const router = useRouter();
    return (
        <div className=" lg:w-[350px] lg:none min-h-full bg-white p-5 px-6 shadow text-black">
            <img src="/img/logo-accessibit.webp" alt="logo" className="w-36 h-7" />

            <div 
                className="w-full my-10 p-2 rounded-4xl border-2 border-blue-700 text-center text-blue-700 cursor-pointer"
                onClick={() => router.push("/add-site")}
            >
                + Add site
            </div>

            <div
                className="w-full flex my-2 p-3 rounded-xl shadow-2xl bg-blue-700 text-white cursor-pointer"
                onClick={() => router.push("/dashboard")}
            >
                <LayoutDashboard className="mx-3" />
                Dashboard
            </div>

            <div className="w-full flex my-1 p-3 rounded-xl bg-transparent hover:bg-blue-100 text-gray-800 cursor-pointer">
                <MessageSquareCode className="mx-3" />
                Script del Widget
            </div>

            <div className="w-full flex my-1 p-3 rounded-xl bg-transparent hover:bg-blue-100 text-gray-800 cursor-pointer">
                <FileImage className="mx-3" />
                Alt image
            </div>

            <div
                className="w-full flex my-1 p-3 rounded-xl bg-transparent hover:bg-blue-100 text-gray-800 cursor-pointer"
                onClick={() => router.push("/account")}
            >
                <Settings className="mx-3" />
                Account settings
            </div>

            <div className="w-full flex my-1 p-3 rounded-xl bg-transparent hover:bg-blue-100 text-gray-800 cursor-default">
                <CircleDollarSign className="mx-3" />
                Invoices & Payments
            </div>

            <div className="w-full flex my-1 p-3 rounded-xl bg-transparent hover:bg-blue-100 text-gray-800 cursor-default">
                <HandCoins className="mx-3" />
                Subscriptions
            </div>
        </div>
    );
}

// hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col