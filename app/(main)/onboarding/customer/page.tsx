'use client'
import { useActionState, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { InputWithLabel } from "@/components/elements/input/input";
import { customerFormValidate } from "@/lib/acion/onboarding";
import { useProductsStore } from "@/store/onboardingStore";

export default function page(){
     const [ state, action, pending ] = useActionState( customerFormValidate, undefined );
     const customerFormVal = useProductsStore((state) => state.customerFormVal);
     const setStep = useProductsStore((state) => state.setStep);
     const setCustomval = useProductsStore((state) => state.setCustomval);

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          setCustomval({name, value});
      };
      const prevPage = () => {
          redirect('/onboarding/products');
     }
     useEffect(() => {
          setStep(2);
     }, [])
      
     return (
          <div className="p-8">
               <section className="w-full rounded-2xl bg-gray-50 border border-gray-200 p-8 text-black">
                    <p>Step2: Customer Details and Billing</p>
                    <p>please provide your information and billing address.</p>
                    <form action={action}>
                         <InputWithLabel 
                              label="Full Name" 
                              name="fullname" 
                              type="text" 
                              className="border rounded"
                              value={customerFormVal.fullname}
                              onChange={handleChange}
                         />
                         {state?.errors?.fullname && (
                              <p className="text-red-600 text-sm">{state.errors.fullname}</p>
                         )}
                         <InputWithLabel 
                              label="E-mail address" 
                              name="email" 
                              type="text" 
                              className="border rounded" 
                              value={customerFormVal.email}
                              onChange={handleChange} 
                         />
                         {state?.errors?.email && (
                              <p className="text-red-600 text-sm">{state.errors.email}</p>
                         )}
                         <p>Billing address</p>
                         <InputWithLabel 
                              label="Address" 
                              name="address" 
                              type="text" 
                              className="border rounded" 
                              value={customerFormVal.address}
                              onChange={handleChange} 
                         />
                         {state?.errors?.email && (
                              <p className="text-red-600 text-sm">{state.errors.email}</p>
                         )}
                         <InputWithLabel 
                              label="Address (line 2)" 
                              name="address2" 
                              type="text" 
                              className="border rounded" 
                              value={customerFormVal.address2}
                              onChange={handleChange} 
                         />
                         {state?.errors?.email && (
                              <p className="text-red-600 text-sm">{state.errors.email}</p>
                         )}
                         <div className="grid grid-cols-2 gap-4">
                              <div className="col-span-1">
                                   <InputWithLabel 
                                        label="City)" 
                                        name="city" 
                                        type="text" 
                                        className="border rounded" 
                                        value={customerFormVal.city}
                                        onChange={handleChange} 
                                   />
                                   {state?.errors?.email && (
                                        <p className="text-red-600 text-sm">{state.errors.email}</p>
                                   )}
                              </div>
                              <div className="col-span-1">
                                   <InputWithLabel 
                                        label="Province" 
                                        name="province" 
                                        type="text" 
                                        className="border rounded" 
                                        value={customerFormVal.province}
                                        onChange={handleChange} 
                                   />
                                   {state?.errors?.email && (
                                        <p className="text-red-600 text-sm">{state.errors.email}</p>
                                   )}
                              </div>
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                              <div className="col-span-1">
                                   <InputWithLabel 
                                        label="Zip Code" 
                                        name="zipcode" 
                                        type="text" 
                                        className="border rounded" 
                                        value={customerFormVal.zipcode}
                                        onChange={handleChange} 
                                   />
                                   {state?.errors?.email && (
                                        <p className="text-red-600 text-sm">{state.errors.email}</p>
                                   )}
                              </div>
                              <div className="col-span-1">
                                   <InputWithLabel 
                                        label="Village" 
                                        name="village" 
                                        type="text" 
                                        className="border rounded" 
                                        value={customerFormVal.village}
                                        onChange={handleChange} 
                                   />
                              </div>
                         </div>
                         <InputWithLabel 
                              label="Tax ID code" 
                              name="taxidcode" 
                              type="text" 
                              className="border rounded" 
                              value={customerFormVal.taxidcode}
                              onChange={handleChange} 
                         />
                         {state?.errors?.email && (
                              <p className="text-red-600 text-sm">{state.errors.email}</p>
                         )}
                         <button type="submit" className="w-full bg-blue-700 rounded-lg my-3 p-1 text-center text-white">Next Payment</button>
                    </form>
               </section>
          </div>
     )
}