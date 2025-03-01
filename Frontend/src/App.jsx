import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import LoginSignup from "./Pages/Login/Signup";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/Login_SignUp" element={<LoginSignup />} />
      </Routes>
    </div>
  );
}
