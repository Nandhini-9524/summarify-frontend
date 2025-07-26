import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-gray-800 to-black">
      <h1 className="text-4xl font-bold mb-4">👋 Welcome to Summarify</h1>
      <p className="mb-6">Summarize and extract Q&A from your study material easily.</p>
      <div className="space-x-4">
        <Link to="/signup" className="bg-green-600 px-4 py-2 rounded">Signup</Link>
        <Link to="/login" className="bg-blue-600 px-4 py-2 rounded">Login</Link>
      </div>
    </div>
  );
}

export default Welcome;