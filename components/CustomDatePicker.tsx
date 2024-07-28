'use client'

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type CustomDatePickerProps = {
    value: string;
    onChange: (value: string) => void;
    label: string;
    icon: string;
};

export default function CustomDatePicker({
                                             value,
                                             onChange,
                                             label,
                                             icon,
                                         }: CustomDatePickerProps) {
    const [startDate, setStartDate] = useState<Date | null>(value ? new Date(value) : null);

    const handleChange = (date: Date | null) => {
        setStartDate(date);
        onChange(date ? date.toISOString().split('T')[0] : '');
    };

    return (
        <div className="relative w-full">
            <div className="flex items-center p-2">
                <div className="flex gap-4 w-1/3">
                    <img src={icon} alt={icon} className="w-6 h-6"/>
                    <span>{label}</span>
                </div>
                <span className="cursor-pointer">
                    <DatePicker
                        selected={startDate}
                        onChange={handleChange}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="Not selected"
                        className="border-none bg-transparent cursor-pointer custom-date-picker"
                        wrapperClassName="w-full"
                        calendarClassName="z-10"
                        onClickOutside={() => setStartDate(startDate)}
                    />
                </span>
            </div>
        </div>
    );
}
