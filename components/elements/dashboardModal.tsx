'use client'
import { X } from "lucide-react"
import { useState } from "react";
import { InputWithLabel } from "./input/input";
import { BlueButton } from "./button/blueButton";

type DashboardModalProps = {
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DashboardModal: React.FC<DashboardModalProps> = ({ setModalState }) =>  {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const handleButtonAction = async () => {
        const res = await fetch('/api/website/main/create/dashboardSite', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({siteUrl: inputValue})
        });
        setModalState(false);
    }

    return (
        <div className="absolute w-full min-h-screen flex justify-end top-0 left-0 bg-gray-900/50 z-10  text-gray-900">
            <div className="w-3xl h-screen bg-white p-10 border-s-2">
                <div className="flex justify-between my-4">
                    <p>Add site</p>
                    <button onClick={() => setModalState(false)}><X /></button>
                </div>
                <InputWithLabel
                    name="url"
                    value={inputValue}
                    onChange={handleChange}
                    label="Site URL"
                />
                <BlueButton className="my-3 py-3 bg-blue-700 text-white" action={handleButtonAction}>
                    Add Site & Continue
                </BlueButton>
            </div>
        </div>
    )
}