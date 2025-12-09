import React from "react";

type BlueButtonProps = {
    children?: React.ReactNode;
    className?: string;
    action?: React.MouseEventHandler<HTMLButtonElement>;
    buttonType?: "button" | "submit" | "reset";
};

export const BlueButton = ({
    children,
    className = "",
    action,
    buttonType = "button",
}: BlueButtonProps) => {
    return (
        <button
        type={buttonType}
        className={`
            ${className}
            flex items-center rounded-md border px-8 
            hover:bg-blue-700 text-blue-700 
            hover:border-blue-700 hover:text-white
        `}
        onClick={action}
        >
        {children}
        </button>
    );
};