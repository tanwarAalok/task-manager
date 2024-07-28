'use client'

import Login from "@/components/Login";
import {useState} from "react";
import Register from "@/components/Register";

export default function AuthPage() {

    const [isLogin, setIsLogin] = useState<boolean>(true);

    return (
        <div className="min-h-screen bg-gradient-bg flex flex-col items-center pt-20">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Welcome to <span className="text-[#4534ac]">Workflo!</span>
                </h1>

                {isLogin ? <Login/> : <Register/>}

                <p className="mt-4 text-center text-sm text-gray-600">
                    {isLogin ? "Don't have an account? Create a" : "Already have an account?"}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="ml-1 font-medium text-blue-600 hover:text-blue-500"
                    >
                        {isLogin ? 'new account.' : 'Log in.'}
                    </button>
                </p>
            </div>
        </div>
    );
}