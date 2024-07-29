'use client'

import React, {FormEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {loginUser, signupUser} from "@/redux/authSlice";

type Props = {
    setIsLogin: (value: boolean) => void;
}

export default function Register({setIsLogin}: Props){
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state: RootState) => state.auth);
    const [fullname, setFullname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const isFormValid = fullname.trim() !== '' && email.trim() !== '' && password.trim() !== '';

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            // @ts-ignore
            await dispatch(signupUser({ fullname, email, password }));
            alert('User created successfully!');
            setIsLogin(true)
        } catch (err) {
            console.error('Failed to login:', err);
        }

    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <input
                type="text"
                name="fullname"
                placeholder="Full name"
                required
                value={fullname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullname(e.target.value)}
                className="block w-full px-3 py-2 bg-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-gray-200"
            />

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
                disabled={!isFormValid || loading}
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                        ${isFormValid
                    ? 'bg-gradient-btn-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-btn-dark'
                    : 'bg-btn-light cursor-not-allowed'}`}
            >
                Sign up
            </button>
        </form>
    )
}