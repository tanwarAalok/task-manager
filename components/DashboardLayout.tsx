'use client'

import {ReactNode, useState} from 'react';
import Sidebar from "@/components/Sidebar";
import TaskModal from "@/components/TaskModal";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {closeTaskModal, openNewTaskModal} from "@/redux/taskSlice";
import {TaskBody} from "@/types";
import {createNewTask} from "@/api/apiFetcher";
import {fetchBoard} from "@/redux/boardSlice";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const dispatch = useDispatch();
    const {isModalOpen} = useSelector((state: RootState) => state.task);
    const {user} = useSelector((state: RootState) => state.auth);

    const handleCloseModal = () => {
        dispatch(closeTaskModal())
    }

    const handleOpenModal = () => {
        dispatch(openNewTaskModal(null))
    }

    const handleSaveTask = async (newTask: TaskBody) => {
        try{
            await createNewTask(newTask, user!._id);
            // @ts-ignore
            dispatch(fetchBoard(user!._id))
            dispatch(closeTaskModal())
        }catch (err){
            console.log(err)
        }
    }

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
