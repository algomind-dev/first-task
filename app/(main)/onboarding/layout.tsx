
'use client'
import { useProductsStore } from "@/store/onboardingStore";
import { Undo2 } from "lucide-react";
import { redirect } from "next/navigation";
import { onboardingRidirect } from "@/lib/url";
export default function Onboarding({ children }: { children: React.ReactNode }){
     const { step } = useProductsStore();
     const onredirect = () => {
          if(step === 1) return;
          redirect(onboardingRidirect[step-2]);
     }

     return (
          <div className="w-scren min-h-screen bg-gray-100 flex justify-center box-content">
               <div className="w-full max-w-7xl ">
                    <div className="w-full flex justify-center my-3 p-8">
                         <button 
                              className={`flex justify-center items-center md:w-1/2  p-2 rounded-xl ${step === 1 ? "invisible" : "bg-blue-700"}  text-white`}
                              onClick={onredirect}     
                         >
                              <Undo2 />
                              <p className="">Previous Page</p>
                         </button>
                    </div>
                    <div className="p-8">
                         <div className="flex justify-between py-3">
                              <div className="text-lg font-bold text-black">Onboarding</div>
                              <div className="text-sm text-bold text-gray-400">step {step} of 4</div>
                         </div>
                         <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                   className="bg-blue-700 h-2 rounded-full" 
                                   style={{ width: `${25*(step)}%` }}
                              ></div>
                              <div className="flex text-[12] py-3">
                                   <div className="w-1/4 text-center text-blue-600">products</div>
                                   <div className={`w-1/4 text-center text-${step>1 ? "blue-600" : "gray-400"}`}>customer</div>
                                   <div className={`w-1/4 text-center text-${step>2 ? "blue-600" : "gray-400"}`}>payment</div>
                                   <div className={`w-1/4 text-center text-${step>3 ? "blue-600" : "gray-400"}`}>Dashboard</div>
                              </div>
                         </div>
                    </div>
                    <>
                         {children}
                    </>
               </div>
          </div>
     )
}