'use client'

import {ReactNode, useState} from 'react';
import Sidebar from "@/components/Sidebar";
import TaskModal from "@/components/TaskModal";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {

    const [showModal, setShowModal] = useState(false);

    const handleAddNewTask = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveTask = (task: any) => {
        console.log('New Task Saved', task);
        setShowModal(false);
    };


    return (
        <div className="flex">
            <Sidebar onAddNewTask={handleAddNewTask}/>
            <main className="flex-grow bg-[#F9F9F9] p-8">
                {children}
            </main>

            {/* Task Modal */}
            {showModal && (
                <TaskModal onClose={handleCloseModal} onSave={handleSaveTask} />
            )}
        </div>
    );
}
