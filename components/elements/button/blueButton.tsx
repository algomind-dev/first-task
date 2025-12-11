import React from "react";

type BlueButtonProps = {
    children?: React.ReactNode;
    className?: string;
    value?:string;
    action?: React.MouseEventHandler<HTMLButtonElement>;
    buttonType?: "button" | "submit" | "reset";
};

export const BlueButton = ({
    children,
    className = "",
    action,
    value,
    buttonType = "button",
}: BlueButtonProps) => {
    return (
        <button
        type={buttonType}
        className={`
            flex items-center rounded-md border px-8 
            hover:bg-blue-700 text-blue-700 
            hover:border-blue-700 hover:text-white 
            ${className} 
        `}
        value={value}
        onClick={action}
        >
        {children}
        </button>
    );
};