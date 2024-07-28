'use client'

import {useEffect, useRef, useState} from 'react';

type CustomTextInputProps = {
    value: string;
    onChange: (value: string) => void;
    label: string;
    icon: string;
};

export default function CustomTextInput({
                                            value,
                                            onChange,
                                            label,
                                            icon,
                                        }: CustomTextInputProps) {
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className="relative w-full">
            <div className="flex items-center p-2">
                <div className="flex gap-4 w-1/3">
                    <img src={icon} alt={icon} className="w-6 h-6"/>
                    <span>{label}</span>
                </div>
                {isEditing ? (
                    <input
                        type="text"
                        value={value}
                        onChange={handleTextChange}
                        ref={inputRef}
                        className="cursor-pointer"
                        onBlur={() => setIsEditing(false)}
                    />
                ) : (
                    <span
                        className={`cursor-pointer w-2/3 text-ellipsis overflow-hidden ${
                            value ? 'text-primary' : 'text-[#C1BDBD]'
                        }`}
                        onClick={() => setIsEditing(true)}
                        title={value}
                    >
                        {value ? value : "Not selected"}
                    </span>
                )}
            </div>
        </div>
    );
}
