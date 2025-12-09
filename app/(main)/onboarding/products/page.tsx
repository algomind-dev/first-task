'use client'
import { useEffect } from "react";
import { ShoppingCart,Euro, PenTool, ArrowRight } from "lucide-react"
import { useProductsStore } from "@/store/onboardingStore";
import { Widget } from "@/components/onboarding/products/widget";
import { Audit } from "@/components/onboarding/products/audit";
import { Statement } from "@/components/onboarding/products/statement";
import { Summry } from "@/components/onboarding/products/summary";
export default function page(){

     const setStep = useProductsStore((state) => state.setStep);

     useEffect(() => {
          setStep(1);
     }, [])

     return (
          
          <div className="p-8">
               <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
                    <div className="space-y-8 lg:col-span-2">
                         <Widget />
                         <Audit />
                         <Statement />                         
                    </div>
                    <Summry />
               </div>
          </div>
     )
}