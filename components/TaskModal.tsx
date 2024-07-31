'use client'

import {useEffect, useState} from 'react';
import CustomDropdown from "@/components/CustomDropdown";
import {priorityOptions, statusOptions} from "@/utils/selectOptions";
import CustomTextInput from "@/components/CustomTextInput";
import CustomDatePicker from "@/components/CustomDatePicker";
import { useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {NewTask, Task, TaskBody} from "@/types";
import {validateTaskBody} from "@/utils/helperFunctions";

type TaskModalProps = {
    onClose: () => void;
    onSave: (task: TaskBody, taskId: string) => void;
    onDelete: (taskId: string) => void;
};

export default function TaskModal({ onClose, onSave, onDelete }: TaskModalProps) {
    const { currentTask, isNewTask } = useSelector((state: RootState) => state.task);

    // State for local management
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState<string | null>(null);
    const [priority, setPriority] = useState<string | null>(null);
    const [deadline, setDeadline] = useState<string | null>(null);
    const [description, setDescription] = useState<string>('');
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    useEffect(() => {
        if (currentTask) {
            setTitle(currentTask.title || '');
            setStatus(currentTask.status || '');
            setPriority(currentTask.priority || '');
            setDeadline(currentTask.deadline ? new Date(currentTask.deadline).toISOString() : null);
            setDescription(currentTask.description || '');
        }
    }, [currentTask]);



    const handleSave = () => {
        const newTask = {
            title,
            ...(description && { description }),
            ...(priority && { priority }),
            status,
            deadline,
        };


        if(validateTaskBody(newTask) && currentTask){
            if ("_id" in currentTask) {
                onSave(newTask, currentTask._id);
            }else onSave(newTask, '');
        }
        else {
            console.error('Invalid task properties');
        }
    };

    const handleDelete = () => {
        if(currentTask && "_id" in currentTask){
            onDelete(currentTask._id);
        }
    }

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
                        <button onClick={handleSave} className="flex items-center px-4 py-2 text-[#797979] bg-[#F4F4F4] rounded">
                            {isNewTask ? 'Create' : 'Save'}
                        </button>
                        <button onClick={handleDelete} className="flex items-center px-4 py-2 text-[#797979] bg-[#F4F4F4] rounded">
                            Delete
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
