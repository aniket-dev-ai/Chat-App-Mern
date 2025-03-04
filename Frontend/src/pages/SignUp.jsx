import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaCamera, FaMeteor } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const cosmicColors = "from-purple-500 via-indigo-500 to-pink-500";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    photo: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSignup = () => {
    console.log('User Created:', formData);
  };

  const handleGuestSignup = () => {
    const guestUser = {
      username: `CosmicGuest_${uuidv4().slice(0, 6)}`,
      email: `guest_${uuidv4().slice(0, 6)}@cosmicmail.com`,
      password: 'guest123',
      photo: null
    };
    console.log('Guest User Created:', guestUser);
  };

  return (
    <div className={`flex justify-center items-center min-h-screen bg-gradient-to-br ${cosmicColors} p-4`}>
      <div className="backdrop-blur-lg bg-white/20 shadow-2xl rounded-xl p-8 w-full max-w-md text-white space-y-6">
        <h2 className="text-3xl font-bold text-center tracking-wider">Signup 🚀</h2>
        <div className="space-y-4">
          <div className="flex items-center bg-white/20 rounded-lg p-2">
            <FaUser className="text-xl mr-2" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="bg-transparent focus:outline-none w-full placeholder-white"
              onChange={handleInputChange}
            />
          </div>
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
          <div className="flex items-center bg-white/20 rounded-lg p-2">
            <FaCamera className="text-xl mr-2" />
            <input
              type="file"
              accept="image/*"
              className="bg-transparent focus:outline-none w-full placeholder-white"
              onChange={handleFileChange}
            />
          </div>
          <button onClick={handleSignup} className="w-full bg-white/30 py-2 rounded-lg hover:bg-white/50 transition">Signup</button>
          <button onClick={handleGuestSignup} className="w-full bg-white/30 py-2 rounded-lg hover:bg-white/50 transition flex items-center justify-center">
            <FaMeteor className="mr-2" />Signup as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
