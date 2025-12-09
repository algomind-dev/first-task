'use client'
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useProductsStore } from "@/store/onboardingStore";
import { CircleCheckBig } from "lucide-react";
export default function page(){
     const setStep = useProductsStore((state) => state.setStep);
     const goToDashboard = (e: React.MouseEvent<HTMLButtonElement>) => {
          redirect('/dashboard');
      };
     useEffect(() => {
          setStep(4);
     }, [])
     
     return (
          <div className="p-8">
               <div className="w-full my-3 p-8 rounded-2xl border border-gray-200 shadow  text-black text-center">
                    <div className="w-full flex justify-center ">
                         <div className="bg-green-200 p-3 rounded-full"> <div>
                              <CircleCheckBig size={32} color="green" />
                         </div></div>
                    </div>
                    <p className="text-lg font-bold">Onboarding Complete!</p>
                    <p className=" text-gray-500 text-sm">Welcome aboard! Your account isset up and you'll receive an invoice soon</p>
                    <p className="p-3 text-gray-500 text-sm">You can now access the main dashboard of the application.</p>
                    <div className="w-full flex justify-center ">
                         <div className=""> 
                              <button className="m-2 p-2 px-3 rounded-md bg-blue-700 text-white text-sm font-bold" onClick={goToDashboard}>Go to Dashboard</button>
                              <button className="m-2 p-2 px-10 rounded-md bg-gray-200 text-sm ">Restart</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}