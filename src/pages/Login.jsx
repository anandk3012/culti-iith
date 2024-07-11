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
    <div className="min-h-screen flex bg-[#292927] text-white">
      <div className="flex flex-col h-fit w-[90%] md:w-[40%] px-10 mx-auto my-5 gap-4 pt-6 pb-10 rounded-3xl  border-none shadow-2xl shadow-black bg-[#3E3E3A] ">
        <h1 className='text-3xl text-center font-bold mb-5'>Login</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className=" bg-[#292927] border-none rounded-[3rem] pl-4 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="bg-[#292927] border-none rounded-[3rem] pl-4 text-white"
        />
        <a className="text-sm text-white underline text-center" href="">Forgot your password?</a>
        <button className='bg-[#FEC601] hover:bg-yellow-500 text-black text-xl font-medium py-3 px-4 rounded-[3rem] focus:outline-none focus:shadow-outline'
          onClick={handleLogin}
        >
          Login
        </button>
        
        <Link to="/create-user" className="text-sm text-white underline text-center" > Don&apos;t have an account? Sign up</Link>

        <div className="flex items-center justify-evenly gap-2">
          <hr className="w-1/3"/>
          <p>OR</p>
          <hr className="w-1/3"/>
        </div>

        <button className="flex items-center gap-3 text-black text-sm font-medium w-fit p-3 rounded-[3rem] bg-[#FEC601] hover:bg-yellow-500 mx-auto" onClick={handleGoogleLogin}> <img src={googleLogo} alt="" className="w-7 h-7" /> <p> Continue With Google</p></button>
      </div>
    </div>
  );
}