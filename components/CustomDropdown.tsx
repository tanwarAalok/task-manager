'use client'

import { useState } from 'react';

type DropdownOption = {
    label: string;
    value: string | null;
};

type CustomDropdownProps = {
    options: DropdownOption[];
    value: string | null;
    onChange: (value: string) => void;
    label: string;
    icon: string;
};

export default function CustomDropdown({
                                           options,
                                           value,
                                           onChange,
                                           label,
                                           icon,
                                       }: CustomDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const selectedOption = options.find((option) => option.value === value) || { label: 'Not selected', value: null };

    return (
        <div className="relative">
            <div
                className="flex items-center p-2 w-full"
            >
                <div className="flex gap-4 w-1/3">
                    <img src={icon} alt={icon} className="w-6 h-6"/>
                    <span className="">
                        {label}
                    </span>
                </div>
                <span className={`cursor-pointer ${
                    value ? 'text-primary' : 'text-[#C1BDBD]'
                }`} onClick={() => setIsOpen(!isOpen)}>
                    {selectedOption.label}
                </span>
            </div>
            {isOpen && (
                <div className="absolute mt-1 w-full bg-white border rounded shadow-lg z-10">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => {
                                onChange(option.value!);
                                setIsOpen(false);
                            }}
                        >
                            <span>{option.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
