import axios from 'axios';
import {TaskBody} from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
    return response.data;
};

export const signup = async (fullname: string, email: string, password: string) => {
    const response = await axios.post(`${API_URL}/api/auth/signup`, { fullname, email, password });
    return response.data;
};

export const fetchUserBoard = async (userId: string) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    const response = await axios.get(`${API_URL}/api/task/get/board/${userId}`, config);
    return response.data;
}

export const createNewTask = async (task: TaskBody, userId: string) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    };
    const response = await axios.post(`${API_URL}/api/task/create?userId=${userId}`, task, config);
    return response.data;
}

export const updateTaskStatus = async (taskId: string, newStatus: string) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    };
    const response = await axios.put(`${API_URL}/api/task/update/status/${taskId}`, {status: newStatus}, config);
    return response.data;
}