import React, { useState } from "react";
import { signIn, signInWithGoogle } from "../functions/auth";
import { Link } from "react-router-dom";
import googleLogo from '../assets/google-color-svgrepo-com.png'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signIn(email, password);
  };
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  return (
    <div className="min-h-screen flex bg-[#FEC601]">
      <div className="flex flex-col h-fit sm:w-1/2 md:w-1/3 px-10 mx-auto my-5 gap-4 py-10 rounded-3xl  border-none shadow-2xl shadow-black bg-gray-100">
        <h1 className='text-3xl text-center font-bold'>Login</h1>
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
        <a className="text-sm text-gray-700 underline text-center" href="">Forgot your password?</a>
        <button className='bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          onClick={handleLogin}
        >
          Login
        </button>
        <Link to="/create-user" className="text-sm text-gray-700 underline text-center" > Don&apos;t have an account? Sign up</Link>
        <div className="text-center text-gray-700">or</div>
        <button className="flex items-center gap-3 text-sm font-semibold w-fit p-3 rounded-3xl bg-yellow-400 hover:bg-yellow-500 mx-auto" onClick={handleGoogleLogin}> <img src={googleLogo} alt="" className="w-6 h-6" /> <p> Continue With Google</p></button>
      </div>
    </div>
  );
}