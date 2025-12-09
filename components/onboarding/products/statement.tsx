import { ChartColumnIncreasing } from "lucide-react"
import { useProductsStore } from "@/store/onboardingStore";

export const Statement =() => {

     const { checked, toggleCheck } = useProductsStore();
     return (
          <section className={`w-full rounded-2xl bg-gray-50 border-2 border-${checked.checkedThree ? "blue-700" :"gray-200"} text-${!checked.checkedThree ? "gray-500" :"black"}`}>
               <div className="flex p-4  justify-between gap-8">
                    <div className="flex  gap-8 pt-4">
                    <div className="flex items-center "><ChartColumnIncreasing size={24} color="black" /></div>
                         <div>
                              <p className="text-xl font-bold text-black">Accessibility Statement</p>
                              <p className="text-xs ">Integrate an accessibility widget into your site in just a few clicks. Customizable. fas, and compatible with any CMS.</p>
                         </div>
                    </div>                                             
                    <div>
                         <input
                              type="checkbox"
                              checked={checked.checkedThree}
                              onChange={() => toggleCheck("checkedThree")}
                         />
                    </div>
               </div>

               <div className="text-sm p-6 -500 leading-6">
                    <p className="text-2xl">$500 <span className="text-sm">one-time payment</span></p>
               </div>
          </section>
     )
}