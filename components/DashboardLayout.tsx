'use client'

import {ReactNode, useState} from 'react';
import Sidebar from "@/components/Sidebar";
import TaskModal from "@/components/TaskModal";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {closeTaskModal, openNewTaskModal} from "@/redux/taskSlice";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const dispatch = useDispatch();
    const {isModalOpen} = useSelector((state: RootState) => state.task);

    const handleCloseModal = () => {
        dispatch(closeTaskModal())
    }

    const handleOpenModal = () => {
        dispatch(openNewTaskModal(null))
    }

    const handleSaveTask = () => {}

    return (
        <div className="flex">
            <Sidebar onAddNewTask={handleOpenModal}/>
            <main className="flex-grow bg-[#F9F9F9] p-8">
                {children}
            </main>

            {/* Task Modal */}
            {isModalOpen && (
                <TaskModal onClose={handleCloseModal} onSave={handleSaveTask} />
            )}
        </div>
    );
}
