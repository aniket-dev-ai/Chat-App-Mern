import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';

const cosmicColors = "from-purple-500 via-indigo-500 to-pink-500";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    console.log('Login Attempt:', formData);
  };

  return (
    <div className={`flex justify-center items-center min-h-screen bg-gradient-to-br ${cosmicColors} p-4`}>
      <div className="backdrop-blur-lg bg-white/20 shadow-2xl rounded-xl p-8 w-full max-w-md text-white space-y-6">
        <h2 className="text-3xl font-bold text-center tracking-wider">Login 🌌</h2>
        <div className="space-y-4">
          <div className="flex items-center bg-white/20 rounded-lg p-2">
            <FaEnvelope className="text-xl mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-transparent focus:outline-none w-full placeholder-white"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center bg-white/20 rounded-lg p-2">
            <FaLock className="text-xl mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-transparent focus:outline-none w-full placeholder-white"
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleLogin} className="w-full bg-white/30 py-2 rounded-lg hover:bg-white/50 transition flex items-center justify-center">
            <FaSignInAlt className="mr-2" />Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
