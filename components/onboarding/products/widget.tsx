import { useState } from "react";
import { SquaresExclude, Euro, CircleCheck } from "lucide-react"
import { useProductsStore } from "@/store/onboardingStore";
export const Widget = () => {
     const { checked, toggleCheck, setWidgetState, widgetState }  = useProductsStore();
     const onToggleWidgetState = (
          e: React.MouseEvent<HTMLDivElement>,
          name: keyof typeof widgetState
        ) => {
          if(checked.checkedOne) setWidgetState(name);
        };
     
     return (
          <section className= {`w-full rounded-2xl bg-gray-50 border-2 border-${checked.checkedOne ? "blue-700" :"gray-200"} text-${!checked.checkedOne ? "gray-500" :"black"}`}>
               <div className="flex p-4  justify-between gap-4" >
                    <div className="flex  gap-4 pt-4">
                         <div className="flex items-center "><SquaresExclude size={24} color="black" /></div>
                         <div>
                              <p className="text-xl font-bold text-black">Accessibility Widget</p>
                              <p className="text-xs ">Integrate an accessibility widget into your site in just a few clicks. Customizable. fas, and compatible with any CMS.</p>
                         </div>
                    </div>
                    {/* <div className="flex items-center"><input type="checkbox" /></div> */}
                    <div className="flex items-center">
                         <input
                              type="checkbox"
                              checked={checked.checkedOne}
                              onChange={() => toggleCheck("checkedOne")}
                         />
                    </div>
               </div>

               <div className=" p-4  font-bold">
                    <p className="py-4">Choose a plan</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                         <div 
                              className={`relative col-span-1 border-2  ${widgetState.small ? "border-blue-400 bg-blue-100":"border-gray-400"} shadow rounded-[6px] text-center ${checked.checkedOne ? "cursor-grabbing" : "cursor-not-allowed"} `} 
                              onClick={(e) => onToggleWidgetState(e, "small")}
                         >
                              <p className="text-[18] py-2">Small</p>
                              <div className="flex text-2xl py-2 items-center justify-center">
                                   <Euro size={24} />
                                   <p>490/<span className="text-xs">year+VAT</span></p>
                              </div>
                              <div className="border border-gray-300"></div>
                              <div className="flex gap-2 text-sm pt-5">
                                   <div className="flex items-center justify-center">
                                        <CircleCheck size={16} color="green" />
                                   </div>
                                   <div className="w-full">
                                        <p className="text-center">Up to 100,000 page views per month</p>
                                   </div>
                              </div>
                         </div>

                         <div 
                              className={`relative col-span-1 border-2  ${widgetState.medium ? "border-blue-400 bg-blue-100":"border-gray-400"} shadow rounded-[6px] text-center ${checked.checkedOne ? "cursor-grabbing" : "cursor-not-allowed disabled"} `} 
                              onClick={(e) => onToggleWidgetState(e, "medium")}
                         >
                              <div className="absolute flex justify-center w-full top-[-12] px-2">
                                   <div className="rounded-xl px-3 bg-blue-600 font-light text-sm text-white ">POPULAE</div>
                              </div>
                              <div className="p-4">
                                   <p className="py-2 text-[18]">Medium</p>
                                   <div className="flex text-2xl py-2 items-center justify-center">
                                        <Euro size={24} />
                                        <p>1290/<span className="text-xs">year+VAT</span></p>
                                   </div>
                                   <div className="border border-gray-300 bg-black"></div>
                                   <div className="flex gap-2 text-sm pt-5">
                                        <div className="flex items-center justify-center">
                                             <CircleCheck size={16} color="green" />
                                        </div>
                                        <div className="w-full">
                                             <p className="text-center">Up to 100,000 page views per month</p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div 
                              className={`relative col-span-1 border-2  ${widgetState.large ? "border-blue-400 bg-blue-100":"border-gray-400"} shadow rounded-[6px] text-center ${checked.checkedOne ? "cursor-grabbing" : "cursor-not-allowed"} `} 
                              onClick={(e) => onToggleWidgetState(e, "large")}
                         >
                              <div className="p-4">
                                   <p className="py-2 text-[18]">Large</p>
                                   <div className="flex text-2xl py-2 items-center justify-center">
                                        <Euro size={24} />
                                        <p>3290/<span className="text-xs">year+VAT</span></p>
                                   </div>
                                   <div className="border border-gray-300 bg-black"></div>
                                   <div className="flex gap-2 text-sm pt-5">
                                        <div className="flex items-center justify-center">
                                             <CircleCheck size={16} color="green" />
                                        </div>
                                        <div className="w-full">
                                             <p className="text-center">Up to 100,000 page views per month</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}