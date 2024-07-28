'use client'

import {FormEvent, useState} from "react";

export default function Register(){
    const [fullname, setFullname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const isFormValid = fullname.trim() !== '' && email.trim() !== '' && password.trim() !== '';

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Login submitted', { email, password });
    };

    return (
        <form className="space-y-4">
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
                disabled={!isFormValid}
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