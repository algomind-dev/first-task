import { SignButton } from "@/components/auth/elements/signButton"

export const CommonSign = ( { children }: { children: React.ReactNode } ) => {
    return ( 
        <div className="w-full min-h-screen bg-blue-900 py-20 flex justify-center">
            <div className="w-full max-w-lg">
                <h1 className="text-center p-4 text-2xl font-bold">AccessiBit</h1>
                <div className="p-10 rounded-lg bg-white text-gray-900 text-center">
                    <h1 className="text-black text-2xl">Welcome to Accessibit </h1>
                    <p className="text-gray-500 mt-3 mb-8 font-light">Login to your account for a faster checkout.</p>
                    <SignButton buttonStyle="text-gray-700 bg-white hover:bg-gray-100">
                        <img alt="google" src="/img/google-icon.svg" width="30" height="29" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}}/>
                        <span className="mx-2">Sign in with Google</span>
                    </SignButton>
                    <SignButton buttonStyle="text-gray-100 bg-[#0e76a8] hover:bg-[#0e76a8]/90">
                        {/* <FaLinkedinIn className="font-bold text-3xl text-white"/> */}
                        <span className="mx-2">Sign in with Google</span>
                    </SignButton>
                    {children}
                </div>
            </div>
        </div>
    )
}