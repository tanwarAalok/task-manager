'use client'

import { useState } from 'react';
import CustomDropdown from "@/components/CustomDropdown";
import {priorityOptions, statusOptions} from "@/data/selectOptions";
import CustomTextInput from "@/components/CustomTextInput";
import CustomDatePicker from "@/components/CustomDatePicker";

type TaskModalProps = {
    onClose: () => void;
    onSave: (task: any) => void;
};

export default function TaskModal({ onClose, onSave }: TaskModalProps) {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    const [deadline, setDeadline] = useState('');
    const [description, setDescription] = useState('');
    const [customProperties, setCustomProperties] = useState<string[]>([]);

    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);


    const handleAddCustomProperty = () => {
        setCustomProperties([...customProperties, '']);
    };

    const handleCustomPropertyChange = (index: number, value: string) => {
        const newProperties = [...customProperties];
        newProperties[index] = value;
        setCustomProperties(newProperties);
    };

    const handleSave = () => {
        const newTask = {
            title,
            status,
            priority,
            deadline,
            description,
            customProperties
        };
        onSave(newTask);
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className={`bg-white p-6 rounded-lg shadow-lg ${isFullscreen ? 'w-full h-full' : 'w-3/4 max-w-3xl'}`}>
                {/* Top Section */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex space-x-4">
                        <button onClick={onClose}>
                            <img src="/closeIcon.svg" alt="closeIcon" className="w-6 h-6"/>
                        </button>
                        <button onClick={() => setIsFullscreen(!isFullscreen)}>
                            <img src="/expandIcon.svg" alt="expandIcon" className="w-6 h-6"/>
                        </button>
                    </div>
                    <div className="flex space-x-4">
                        <button className="flex items-center px-4 py-2 text-[#797979] bg-[#F4F4F4] rounded">
                            Share
                            <img src="/shareIcon.svg" alt="shareIcon" className="ml-2"/>
                        </button>
                        <button className="flex items-center px-4 py-2 text-[#797979] bg-[#F4F4F4] rounded">
                            Favorite
                            <img src="/favoriteIcon.svg" alt="favoriteIcon" className="ml-2"/>
                        </button>
                    </div>
                </div>

                {/* Title Input */}
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-5xl font-semibold mb-6 placeholder:text-[#CCCCCC] focus:outline-none"
                />

                {/* Select Inputs */}
                <div className="flex flex-col gap-4">
                    <CustomDropdown
                        options={statusOptions}
                        value={status}
                        onChange={setStatus}
                        label="Status"
                        icon="/statusIcon.svg"
                    />

                    <CustomDropdown
                        options={priorityOptions}
                        value={priority}
                        onChange={setPriority}
                        label="Priority"
                        icon="/priorityIcon.svg"
                    />
                    <CustomDatePicker
                        value={deadline}
                        onChange={setDeadline}
                        label="Deadline"
                        icon="/calendarIcon.svg"
                    />
                    <CustomTextInput
                        value={description}
                        onChange={setDescription}
                        label="Description"
                        icon="/editIcon.svg"
                    />
                </div>

                {/* Add Custom Property Button */}

                <button className="relative w-full mt-4">
                    <div className="flex items-center p-2">
                        <div className="flex gap-4 w-1/3">
                            <img src="/addIcon3.svg" alt="addIcon" className="w-6 h-6"/>
                            <span>Add custom property</span>
                        </div>
                    </div>
                </button>

                <hr className="my-4 mt-8"/>

                <textarea
                    placeholder="Start writing, or drag your own files here."
                    className="w-full h-64 px-4 py-2 rounded outline-none"
                ></textarea>
            </div>
        </div>
    );
}
