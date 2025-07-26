import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) return alert("Please fill all fields");
    localStorage.setItem("auth", JSON.stringify({ email }));
    navigate("/login");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>
      <input className="mb-2 p-2 bg-gray-700 rounded" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" className="mb-4 p-2 bg-gray-700 rounded" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="bg-green-600 px-4 py-2 rounded" onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;