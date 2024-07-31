import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewTask, Task } from '@/types';
import {TypedColumns} from "@/utils/enums";

interface TaskState {
    tasks: Record<string, Task>; // Use Record<string, Task> instead of Map
    isModalOpen: boolean;
    currentTask: Task | null | NewTask;
    isNewTask: boolean;
}

const initialState: TaskState = {
    tasks: {}, // Initialize as an empty object
    isModalOpen: false,
    currentTask: null,
    isNewTask: false,
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            const newTask = action.payload;
            state.tasks[newTask._id] = newTask; // Use object property assignment
        },
        updateTask: (state, action: PayloadAction<Task>) => {
            const updatedTask = action.payload;
            if (state.tasks[updatedTask._id]) {
                state.tasks[updatedTask._id] = updatedTask; // Use object property assignment
            }
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            delete state.tasks[action.payload]; // Use delete operator
        },
        openExistingTaskModal: (state, action: PayloadAction<Task | null>) => {
            state.currentTask = action.payload;
            state.isModalOpen = true;
            state.isNewTask = false;
        },
        closeTaskModal: (state) => {
            state.currentTask = null;
            state.isModalOpen = false;
        },
        openNewTaskModal: (state, action: PayloadAction<TypedColumns | null>) => {
            state.currentTask = {
                title: '',
                description: '',
                status: action.payload ?? undefined,
                priority: undefined,
                deadline: undefined,
                createdAt: new Date(),
            };
            state.isModalOpen = true;
            state.isNewTask = true;
        },
    },
});

export const { openNewTaskModal, addTask, updateTask, deleteTask, openExistingTaskModal, closeTaskModal } = taskSlice.actions;
export default taskSlice.reducer;
