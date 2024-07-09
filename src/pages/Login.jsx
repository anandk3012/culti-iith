import React, { useState } from "react";
import { signIn } from "../functions/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signIn(email, password);
  };

  return (
    <div className="min-h-screen flex items-center">
      <div className="flex flex-col w-1/3 md-w-1/2 px-10 mx-auto my-5 gap-4 py-10 rounded-3xl  border-none shadow-2xl bg-gray-100">
        <h1 className='text-2xl font-bold'>Login</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className='bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}