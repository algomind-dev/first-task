import type { LucideIcon } from "lucide-react";
type InputProps = {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    disabled?:boolean,
    Icon?: LucideIcon;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
  };

export const InputWithIcon = (
      {
          className = "",
          label,
          name,
          type = "text", 
          placeholder,
          value,
          disabled=false,
          Icon,
          onChange,
      }: InputProps
  ) => {
  
      return (
            <>
                <label htmlFor={name} className="my-1 px-1 block text-sm text-blue-700 text-start  font-bold ">{label}</label>
                <div className="relative">
                    <input
                        id={name}
                        name={name}
                        type={type}
                        value={value}
                        disabled={disabled}
                        onChange={onChange}
                        placeholder={placeholder}
                        className={`w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
                    />
                    {Icon && (
                        <Icon
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-700"
                            // color="blue"
                        />
                    )}
                    {/* <div className="absoute top-0 left-10">
                    </div> */}
                </div>
            </>
      )
  }