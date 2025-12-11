import { redirect } from "next/navigation";
import { CustomerFormState } from "../types";
import { OnboardingFormDataSchema } from "../definitions";

export async function customerFormValidate( state: CustomerFormState, formData: FormData) {
     const validatedFields = OnboardingFormDataSchema.safeParse({
       fullname: formData.get('fullname'),
       email: formData.get('email'),
       address: formData.get('address'),
       address2: formData.get('address2'),
       city: formData.get('city'),
       province: formData.get('province'),
       zipcode: formData.get('zipcode'),
       village: formData.get('village'),
       taxidcode: formData.get('taxidcode'),
     })
     if (!validatedFields.success) {
       return {
         errors: validatedFields.error.flatten().fieldErrors,
       }
     }
     redirect(`/onboarding/checkout`);
   }