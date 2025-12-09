type InputProps = {
     label: string;
     name: string;
     type?: string;
     placeholder?: string;
     value?: string;
     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
     className?: string;
   };
   
export const InputWithLabel = (
       {
           className = "",
           label,
           name,
           type = "text", 
           placeholder,
           value,
           onChange,
       }: InputProps
   ) => {
   
       return (
           <>
               <label htmlFor={name} className="my-1 block text-sm text-white-100 text-start px-1 text-bold ">{label}</label>
               <input
                   id={name}
                   name={name}
                   type={type}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder}
                   className={`w-full px-4 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
               />
           </>
       )
   }