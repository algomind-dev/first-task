'use client'
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useProductsStore } from "@/store/onboardingStore";
import { CircleArrowDown, CircleArrowUp, Euro } from "lucide-react";
import { WidgetValue } from "@/store/onboardingStore";

export default function page(){
     const [ articleState, setArticleState ] = useState(true);
     const { setStep, checked, widgetValue, statementValue, templateCount, widgetSelect } = useProductsStore();
     let total = widgetValue[widgetSelect as keyof WidgetValue] * (checked.checkedOne ? 1 : 0) + templateCount*150 * (checked.checkedTwo ? 1 : 0) + statementValue * (checked.checkedThree ? 1 : 0);

     const nextDashboard = (e: React.MouseEvent<HTMLButtonElement>) => {
          redirect('/onboarding/dashboard');
      };
     const toggleArticle = () => {
          setArticleState(!articleState);
     }
     const prevPage = () => {
          redirect('/onboarding/customer');
     }
     useEffect(() => {
          setStep(3);
     }, [])
      
     return (
          <div className="p-8">
               <section className="w-full rounded-2xl border border-gray-200 p-8 text-black">
                    <div className="my-3">
                         <p className="font-bold">Step 3: Review and Payment</p>
                         <p className="text-sm text-gray-500">Review your order and complete payment.</p>
                    </div>
                    <button type="button" className="flex justify-between items-center w-full" onClick={toggleArticle} >
                         <div className="text-lg">Your Articles(3)</div>
                         {articleState ? <CircleArrowUp /> : <CircleArrowDown />}
                    </button>
                    <div className={`my-3 rounded-lg border ${articleState ? "" : "hidden"}`}>
                         {checked.checkedOne ? (
                              <div className="p-3">
                                   <div className="flex justify-between">
                                        <div>Accessibility Widget - {widgetSelect} site</div>
                                        <div className="flex text-2xl py-2 items-center justify-center">
                                             <Euro  size={12}/>
                                             <p className="text-sm">{widgetValue[widgetSelect as keyof WidgetValue]}</p>
                                        </div>
                                   </div>
                                   <p className="text-sm text-gray-500">Lump sum</p>
                              </div>
                         ) : ("")}
                         {checked.checkedTwo ? (
                              <div className="p-3">
                                   <div className="flex justify-between">
                                        <div>Accessibility audit</div>
                                        <div className="flex text-2xl py-2 items-center justify-center">
                                             <Euro  size={12}/>
                                             <p className="text-sm">{templateCount * 150}</p>
                                        </div>
                                   </div>
                                   <p className="text-sm text-gray-500">Lump sum</p>
                              </div>
                         ) : ("")}
                         {checked.checkedThree ? (
                              <div className="p-3">
                                   <div className="flex justify-between">
                                        <div>Accessibility Statement</div>
                                        <div className="flex text-2xl py-2 items-center justify-center">
                                             <Euro  size={12}/>
                                             <p className="text-sm">{statementValue}</p>
                                        </div>
                                   </div>
                                   <p className="text-sm text-gray-500">Lump sum</p>
                              </div>
                         ) : ("")}
                    </div>
                    <div className="border rounded-lg bg-gray-100">
                    <div className="my-3 p-3">
                              <div className="flex justify-between">
                                   <div>Subtotal</div>
                                   <div className="flex text-2xl py-2 items-center justify-center">
                                        <Euro  size={12}/>
                                        <p className="text-sm">{total}</p>
                                   </div>
                              </div>
                              <div className="flex justify-between">
                                   <div>VAT(22%)</div>
                                   <div className="flex text-2xl py-2 items-center justify-center">
                                        <Euro  size={12}/>
                                        <p className="text-sm">{Math.floor(total * 22 / 100)}</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <button type="button" className="w-full rounded-lg my-3 p-1 bg-blue-700 text-white text-center" onClick={nextDashboard}>Pay now</button>
               </section>
          </div>
     )
}