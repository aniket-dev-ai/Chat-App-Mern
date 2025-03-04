import { useState } from "react";
import { FaUserAstronaut, FaUserSecret, FaEnvelope, FaLock, FaImage } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const randomName = () => `CosmicGuest_${Math.floor(Math.random() * 10000)}`;
const randomEmail = () => `guest${Math.floor(Math.random() * 10000)}@cosmicmail.com`;

export default function AuthForm({ type, onSubmit }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleGuestSignup = () => {
    const guestData = {
      username: randomName(),
      email: randomEmail(),
      password: "guest1234",
      photo: null,
    };
    onSubmit(guestData);
    toast.success("Guest account created! 🚀");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    toast.success(`${type} Successful! 🌟`);
  };

  return (
    <div className="glass-container w-96 space-y-6 text-white">
      <h2 className="glow-text text-center">{type === "Signup" ? "Create Account" : "Welcome Back!"}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {type === "Signup" && (
          <>
            <div className="flex items-center gap-2">
              <FaUserAstronaut />
              <input
                type="text"
                name="username"
                placeholder="Cosmic Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <FaImage />
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                className="w-full text-sm text-white file:bg-white file:text-black file:rounded file:py-1 file:px-2"
              />
            </div>
          </>
        )}
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <input
            type="email"
            name="email"
            placeholder="Cosmic Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white focus:outline-none"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <FaLock />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white focus:outline-none"
            required
          />
        </div>

        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded">
          {type}
        </button>

        {type === "Signup" && (
          <button
            type="button"
            onClick={handleGuestSignup}
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded flex items-center justify-center gap-2"
          >
            <FaUserSecret /> Signup as Guest
          </button>
        )}
      </form>
    </div>
  );
}
