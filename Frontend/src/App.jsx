import React, { useState } from 'react'
import Login from './pages/Login'
import Signup from './pages/SignUp'

function App() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
     <div>
      {showLogin ? <Login /> : <Signup />}
      <button
        onClick={() => setShowLogin(!showLogin)}
        className="absolute top-4 right-4 bg-black text-white py-1 px-4 rounded-lg"
      >
        {showLogin ? 'Go to Signup' : 'Go to Login'}
      </button>
    </div>
    </>
  )
}

export default App