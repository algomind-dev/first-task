type SignInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const SignInput = (
    {
        className = "",
        label,
        name,
        type = "text", 
        placeholder,
        value,
        onChange,
    }: SignInputProps
) => {

    return (
        <>
            <label htmlFor={name} className="my-4 block text-sm text-white-100 text-start px-1 text-bold ">{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
            />
        </>
    )
}