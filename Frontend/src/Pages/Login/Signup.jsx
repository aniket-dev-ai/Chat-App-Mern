import React, { useState } from 'react';

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600">
            <div className="w-full max-w-md p-8 glassmorphism rounded-2xl">
                {/* Tabs */}
                <div className="flex justify-around mb-6">
                    <button
                        className={`text-lg font-semibold text-white cursor-pointer ${isLogin ? 'border-b-2 border-white' : ''}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`text-lg font-semibold text-white cursor-pointer ${!isLogin ? 'border-b-2 border-white' : ''}`}
                        onClick={() => setIsLogin(false)}
                    >
                        Signup
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 rounded-md bg-white/20 placeholder-white text-white focus:outline-none"
                            required
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded-md bg-white/20 placeholder-white text-white focus:outline-none"
                        required
                    />

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full p-3 rounded-md bg-white/20 placeholder-white text-white focus:outline-none pr-10"
                            required
                        />
                        <span
                            className="absolute inset-y-0 right-3 flex items-center text-white cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </span>
                    </div>

                    {!isLogin && (
                        <input
                            type="file"
                            className="w-full text-white cursor-pointer"
                            accept="image/*"
                        />
                    )}

                    <button
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                    >
                        {isLogin ? 'Login' : 'Signup'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginSignup;
