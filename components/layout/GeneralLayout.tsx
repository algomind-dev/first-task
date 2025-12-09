import Link from "next/link"
// import { useSession, signIn, signOut } from "next-auth/react"
import { redirect } from "next/navigation"
import { LayoutDashboard,FileImage, Settings, HandCoins, CircleDollarSign, MessageSquareCode } from "lucide-react"
import DropdownProfile from "../elements/dropdownProfile"
import DropdownCountry from "../elements/dropdownCountry"

export const GeneralLayout = ({ props } : { props: React.ReactNode }) => {
    // const  {data: session } = useSession();
    const redirectPage = (e:React.MouseEvent<HTMLDivElement>, url:string) => {
        e.preventDefault();
        redirect(url);
    }

    return (
        <div className="w-full min-h-screen flex bg-gray-200 border">
            <div className="w-95 min-h-full bg-white p-5 px-6 shadow text-black">
                <img src="/img/logo-accessibit.webp" alt="logo" className="w-36 h-7" />
                <div className="w-full my-10 p-2 rounded-4xl border-2 border-blue-700 text-center text-blue-700 cursor-default"> + Add site</div>
                <div className="w-full flex my-2 p-3  rounded-xl shadow-2xl bg-blue-700 text-white cursor-default"  onClick={(e) => redirectPage(e, "/dashboard")}><LayoutDashboard className="mx-3"/>Dashboard</div>
                <div className="w-full flex my-1 p-3 rounded-xl  bg-transparent hover:bg-blue-100 text-gray-800 cursor-default"><MessageSquareCode className="mx-3"/>Script del Widget</div>
                <div className="w-full flex my-1 p-3 rounded-xl  bg-transparent hover:bg-blue-100 text-gray-800 cursor-default"><FileImage className="mx-3"/>Alt image</div>
                <div className="w-full flex my-1 p-3 rounded-xl  bg-transparent hover:bg-blue-100 text-gray-800 cursor-default" onClick={(e) => redirectPage(e, "/account")} ><Settings className="mx-3"/>Account settings</div>
                <div className="w-full flex my-1 p-3 rounded-xl  bg-transparent hover:bg-blue-100 text-gray-800 cursor-default"><CircleDollarSign className="mx-3"/>Invoices & Payments</div>
                <div className="w-full flex my-1 p-3 rounded-xl  bg-transparent hover:bg-blue-100 text-gray-800 cursor-default"><HandCoins className="mx-3"/>Subscriptions</div>
            </div>
            <div className="w-full">
                <div className="w-full flex justify-end bg-white h-16 border-2">
                    <div className="flex items-center ">
                        <div className="">
                            <DropdownCountry />
                        </div>
                        <div className="">
                            <DropdownProfile />
                        </div>
                    </div>
                </div>
                <div className="p-8">
                    { props }
                </div>
            </div>
        </div>
    )
}