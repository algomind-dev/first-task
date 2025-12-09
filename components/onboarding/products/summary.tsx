
import { ShoppingCart, Euro, PenTool, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useProductsStore } from "@/store/onboardingStore"
import { WidgetValue } from "@/store/onboardingStore"

export const Summry = () => {
     const { widgetState, checked, widgetSelect, widgetValue, templateCount, statementValue } = useProductsStore();
     
     let total = widgetValue[widgetSelect as keyof WidgetValue] * (checked.checkedOne ? 1 : 0) + templateCount*150 * (checked.checkedTwo ? 1 : 0) + statementValue * (checked.checkedThree ? 1 : 0);
     return (
          <div className="lg:cols-span-1 space-y-8 md:mt-8 lg:mt-0">
               <div className="sticky top-24">
                    <section className="w-full rounded-2xl bg-gray-50 border-2 border-gray-200">
                         <div className="flex p-4 pt-4 gap-8 ">
                              <div className="flex items-center "><ShoppingCart size={24} color="black" /></div>
                              <p className="text-xl font-bold text-black">Order Summry</p>
                         </div>
                         <div className="text-sm p-6 text-gray-500 leading-7">
                              {checked.checkedOne ? (
                                   <div className="flex justify-between">
                                        <p className="text-sm">Wodget ({widgetSelect} Plan)</p>
                                        <p className="flex items-center text-[3]"><Euro size={12} />{widgetValue[widgetSelect as keyof WidgetValue]}/year + VAT</p>
                                   </div>
                                   ) : ("")
                              }
                              {checked.checkedTwo ? (
                                   <div className="flex justify-between">
                                        <p className="text-sm">Security Audit (X{templateCount})</p>
                                        <p className="flex items-center text-[3]"><Euro size={12} />{templateCount*150}</p>
                                   </div>
                                   ) : ("")
                              }
                              {checked.checkedThree ? (
                                   <div className="flex justify-between">
                                        <p className="text-sm">Accessibility Statement</p>
                                        <p className="flex items-center text-[3]"><Euro size={12} />490/year + VAT</p>
                                   </div>
                                   ) : ("")
                              }
                         </div>
                         <div className="px-5">
                              <div className="border"></div>
                         </div>
                         <div className="text-sm p-6 text-gray-500 leading-7">
                              <p className="font-bold">Coupon Code(optional)</p>
                              <div className="flex gap-2">
                                   <input className="w-full p-1 px-2 border rounded-sm"></input>
                                   <div className="flex items-center justify-center">
                                        <PenTool size={16} />
                                   </div>
                              </div>
                         </div>
                         <div className="px-5">
                              <div className="border"></div>
                         </div>
                         <div className="text-sm p-6 text-gray-500 leading-7">
                              <div className="flex justify-between ">
                                   <p className="text-sm">Subtotal</p>
                                   <p className="flex items-center text-[3]"><Euro size={12} />3000</p>
                              </div>
                              <div className="flex justify-between">
                                   <p className="text-sm">VAT(22)</p>
                                   <p className="flex items-center text-[3]"><Euro size={12} />490/year + VAT</p>
                              </div>
                         </div>
                         <div className="px-5 ">
                              <div className="border"></div>
                         </div>
                         <div className="p-6 leading-7">
                              <div className="flex justify-between text-lg  text-black font-bold">
                                   <p className="">Total</p>
                                   <p className="flex items-center"><Euro size={16} />{total}</p>
                              </div>
                              <p className="text-xs text-gray-400 py-3">Subscription fees are billed annually.</p>
                              <div className="">

                              </div>
                              <div className="w-full  bg-blue-700 rounded-lg p-2 text-sm text-white"><Link href="/onboarding/customer" className="flex justify-center items-center" >Next: Customer Details   <ArrowRight size={16} /></Link></div>
                         </div>
                    </section>
               </div>
          </div>
     )
}
