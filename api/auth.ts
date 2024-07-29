import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
    return response.data;
};

export const signup = async (fullname: string, email: string, password: string) => {
    const response = await axios.post(`${API_URL}/api/auth/signup`, { fullname, email, password });
    return response.data;
};
