import * as z from 'zod'


export const OnboardingFormDataSchema = z.object({
    fullname: z
       .string()
       .min(2, { error: 'Name must be at least 2 characters long.' })
       .trim(),
    email: z.email({ error: 'Please enter a valid email.' }).trim(),
    address: z
       .string()
       .min(2, { error: 'Name must be at least 2 characters long.' })
       .trim(),
    address2: z
       .string()
       .min(2, { error: 'Name must be at least 2 characters long.' })
       .trim(),
    city: z
       .string()
       .min(2, { error: 'Name must be at least 2 characters long.' })
       .trim(),
    province: z
       .string()
       .min(2, { error: 'Name must be at least 2 characters long.' })
       .trim(),
    zipcode: z
       .string()
       .min(2, { error: 'Name must be at least 2 characters long.' })
       .trim(),
    village: z
       .string()
       .min(2, { error: 'Name must be at least 2 characters long.' })
       .trim(),
    taxidcode: z
       .string()
       .min(2, { error: 'Name must be at least 2 characters long.' })
       .trim(),     
   });

export const SignupFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { error: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.email({ error: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { error: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { error: 'Contain at least one letter.' })
    .regex(/[0-9]/, { error: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      error: 'Contain at least one special character.',
    })
    .trim(),    
  confirmPassword: z
    .string()
    .min(8, { error: 'Be at least 8 characters long' })
    .trim(),
}).refine(
  (values) => {
    return values.password === values.confirmPassword;
  },
  {
    message: "Don't match",
    path: ['confirmPassword'],
  }
);

export const SigninFormSchema = z.object({
  email: z.email({ error: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { error: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { error: 'Contain at least one letter.' })
    .regex(/[0-9]/, { error: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      error: 'Contain at least one special character.',
    })
    .trim(),
})

export const VerifyFormSchema = z.object({
  email: z.email({ error: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { error: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { error: 'Contain at least one letter.' })
    .regex(/[0-9]/, { error: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      error: 'Contain at least one special character.',
    })
    .trim(),
})

