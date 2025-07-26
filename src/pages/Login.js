import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const stored = JSON.parse(localStorage.getItem("auth"));
    if (stored?.email === email) {
      localStorage.setItem("auth", JSON.stringify({ email }));
      navigate("/summarify");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input className="mb-2 p-2 bg-gray-700 rounded" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" className="mb-4 p-2 bg-gray-700 rounded" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-600 px-4 py-2 rounded" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
