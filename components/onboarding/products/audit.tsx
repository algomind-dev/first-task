import { Scan } from "lucide-react"
import { useProductsStore } from "@/store/onboardingStore";
import { Euro } from "lucide-react";
export const Audit =() => {
     const { checked, toggleCheck, setTemplateCount, templateCount }  = useProductsStore();
     const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
          const val = e.target.value;
          setTemplateCount(Number(val));
     }
     
     return (
          <section className={`w-full rounded-2xl bg-gray-50 border-2 border-${checked.checkedTwo ? "blue-700" :"gray-200"} text-${!checked.checkedTwo ? "gray-500" :"black"}`}>
               <div className="flex p-4  justify-between gap-4">
                    <div className="flex  gap-4 pt-4">
                         <div className="flex items-center "><Scan size={24} color="black" /></div>
                         <div>
                              <p className="text-xl font-bold text-black">Accessibility Audit</p>
                              <p className="text-xs ">Integrate an accessibility widget into your site in just a few clicks. Customizable. fas, and compatible with any CMS.</p>
                         </div>
                    </div>
                    <div >
                         <input
                              type="checkbox"
                              checked={checked.checkedTwo}
                              onChange={() => toggleCheck("checkedTwo")}
                         />
                    </div>
               </div>

               <div className="text-sm p-6  leading-6">
                    <p>Number of templates to review.</p>
                    <input 
                         type="number" 
                         className="w-[200] p-1 px-2 border rounded-sm border-gray-300"
                         value={templateCount}
                         min={0}
                         disabled={checked.checkedTwo ? false : true}
                         onChange={onChange}
                    />
                    <div className="flex items-center"><p className="text-lg font-bold text-black">Total:  </p>  <Euro size={12} />{templateCount * 150}</div>
               </div>
          </section>
     )
}