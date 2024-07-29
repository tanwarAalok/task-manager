'use client'

import {FormEvent, useState} from "react";
import { useRouter } from 'next/navigation';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {loginUser} from "@/redux/authSlice";

export default function Login(){
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state: RootState) => state.auth);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const router = useRouter();

    const isFormValid = email.trim() !== '' && password.trim() !== '';

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // @ts-ignore
            await dispatch(loginUser({ email, password })).unwrap();
            router.push('/');
        } catch (err) {
            console.error('Failed to login:', err);
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 bg-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-gray-200"
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                className="block w-full px-3 py-2 bg-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-gray-200"
            />

            <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                        ${isFormValid
                    ? 'bg-gradient-btn-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-btn-dark'
                    : 'bg-btn-light cursor-not-allowed'}`}
            >
                Login
            </button>
        </form>
    )
}