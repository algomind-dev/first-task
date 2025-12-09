// "use server";
// import { redirect } from 'next/navigation';
// import { z } from 'zod';

// import { AuthError } from 'next-auth';
// import { FormState, FormValue } from '@/lib/types'
// import { signIn } from '@/lib/signupAuth';

// export async function authenticate(
//   state: FormState,
//   // prevState: string | undefined,
//   formData: FormData,
// ) {
//   const data = Object.fromEntries(formData.entries());
//   console.log("data", data);
  
//   // const [ email, password ] = data;
//   const parsedCredentials = z.object({
//     username: z
//       .string()
//       .min(2, { error: 'Name must be at least 2 characters long.' })
//       .trim(),
//     email: z.email({ error: 'Please enter a valid email.' }).trim(),
//     password: z
//       .string()
//       .min(8, { error: 'Be at least 8 characters long' })
//       .regex(/[a-zA-Z]/, { error: 'Contain at least one letter.' })
//       .regex(/[0-9]/, { error: 'Contain at least one number.' })
//       .regex(/[^a-zA-Z0-9]/, {
//         error: 'Contain at least one special character.',
//       })
//       .trim(),
//       confirmPassword: z
//       .string()
//   }).refine(
//     (values) => {
//       return values.password === values.confirmPassword;
//     },
//     {
//       message: "Don't match",
//       path: ['confirmPassword'],
//     }
//   ).safeParse(data);
  
//   if(!parsedCredentials.success)return {
//     errors: parsedCredentials.error.flatten().fieldErrors,
//   }
  
//   await signIn('credentials',data);
//   try {
//       // return 
    
//   } catch (error) {
//     // if (error instanceof AuthError) {
//     //   switch (error.type) {
//     //     case 'CredentialsSignin':
//     //       return 'Invalid credentials.';
//     //     default:
//     //       return 'Something went wrong.';
//     //   }
//     // }
//     throw error;
//   }
 
// }

// // export async function signin(state: FormState, formData: FormData) {
  
// //   const validatedFields = SigninFormSchema.safeParse({
// //     email: formData.get('email'),
// //     password: formData.get('password'),
// //   })
 
// //   // If any form fields are invalid, return early
// //   if (!validatedFields.success) {
// //     return {
// //       errors: validatedFields.error.flatten().fieldErrors,
// //     }
// //   }
// //   const {email, password } = validatedFields.data;

// //   const res = await fetch('/api/auth/signin', {
// //     method: 'POST',
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({email: email, password: password })
// //   });
// //   const result = await res.json();
// //   console.log(result);
  
// //   if(result.state !== "success"){
// //     return {
// //       message: result.error,
// //     }
// //   }
// //   console.log(result.data);
// //   await createSession(result.data.token);
// //   redirect('/')
// // }

// // export async function verify(state: FormState, formData: FormData) {
  
// //   const validatedFields = SigninFormSchema.safeParse({
// //     email: formData.get('email'),
// //     password: formData.get('password'),
// //   })
 
// //   // If any form fields are invalid, return early
// //   if (!validatedFields.success) {
// //     return {
// //       errors: validatedFields.error.flatten().fieldErrors,
// //     }
// //   }
// //   const {email, password } = validatedFields.data;
 
// //   const res = await fetch('/api/auth/signin', {
// //     method: 'POST',
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({email: email, password: password })
// //   });
// //   const result = await res.json();
// //   console.log(result);
  
// //   if(result.state !== "success"){
// //     return {
// //       message: result.error,
// //     }
// //   }
// //   console.log(result.data);
  
// //   await createSession(result.data.token);

// //   redirect('/')
// // }
 
