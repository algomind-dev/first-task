// "use client";

// import { useState} from "react";
// import Link from "next/link";
// import { SignInput } from "@/components/auth/elements/signInput";
// import { useActionState } from "react";
// import { signup } from "@/lib/signupAuth";

// export function SignUp(){
//     const [state, action, pending] = useActionState(signup, undefined);
//     const [formData, setFormData] = useState({
//         username: "",
//         email: "",
//         password: "",
//         confirmPassword: ""
//     });
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData((prevState) => ({ ...prevState, [name]: value }));
//     };
    
//     return ( 
//         <>
//             <div className="relative flex items-center justify-center py-10">
//                 <span className="absolute inset-x-0 h-px bg-gray-300"></span>
//                 <span className="absolute px-3 text-gray-500 -translate-x-1/2 bg-white left-1/2">Or, sign up with your email</span>
//             </div>
//             <form action={ action} className="text-start">
//                 <SignInput
//                     className="" 
//                     label="Full Name"
//                     name="username" 
//                     type="text"
//                     placeholder="Enter your full name" 
//                     value={formData.username} 
//                     onChange={handleChange}
//                 />
//                 {state?.errors?.username && (
//                     <p className="text-red-600 text-sm">{state.errors.username}</p>
//                 )}
//                 <SignInput
//                     className="" 
//                     label="Work Email"
//                     name="email" 
//                     type="email"
//                     placeholder="Enter your email" 
//                     value={formData.email} 
//                     onChange={handleChange}
//                 />
//                 {state?.errors?.email && (
//                     <p className="text-red-600 text-sm">{state.errors.email}</p>
//                 )}
//                 {state?.message && (
//                     <p className="text-red-600 text-sm">{state?.message}</p>
//                 )}
//                 <SignInput
//                     className="" 
//                     label="Password"
//                     name="password" 
//                     type="password"
//                     placeholder="Enter your password" 
//                     value={formData.password} 
//                     onChange={handleChange}
//                 />
//                 {state?.errors?.password && (
//                     <p className="text-red-600 text-sm">{state.errors.password}</p>
//                 )}
//                 <SignInput
//                     className="" 
//                     label="Confirm Password"
//                     name="confirmPassword" 
//                     type="password"
//                     placeholder="Confirm your password" 
//                     value={formData.confirmPassword} 
//                     onChange={handleChange}
//                 />
//                 {state?.errors?.confirmPassword && (
//                     <p className="text-red-600 text-sm">{state.errors.confirmPassword}</p>
//                 )}
//                 <button type="submit" disabled={pending} className="w-full bg-blue-500 my-4 py-3 text-white roun">Sign up</button>
//             </form>
//             <div className="text-sm">Already using Startup? <Link href="/auth/signin" className="text-gray-500">Sign In</Link></div>
//         </>
//     )
// }