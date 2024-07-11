import React, { useState, useEffect } from 'react'
import { signUp, signInWithGoogle } from '../functions/auth';
import { Link } from 'react-router-dom';
import googleLogo from '../assets/google-color-svgrepo-com.png'

export default function CreateUser() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordMatch, setPasswordMatch] = useState(false);

  useEffect(() => {
    checkConfirmPwd();
  }, [password, confirmPassword])

  const userData = {
    firstName,
    lastName,
    email,
    password
  }

  const handleCreateUser = () => {
    if (password != confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    else if (!email) {
      alert('Please enter an email address');
    }
    else if (!password) {
      alert('Password required');
      return;
    }
    else {
      signUp(email, password, userData);
      console.log(userData);
    }
  }
  const checkConfirmPwd = () => {
    if (password != confirmPassword) {
      setPasswordMatch(false);
    }
    else {
      setPasswordMatch(true);
    }
  }

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  return (
    <div className='min-h-screen flex bg-[#292927] text-white'>
      <div className='flex flex-col h-fit w-[90%] md:w-[40%] px-10 mx-auto my-5 gap-4 pt-6 pb-10 rounded-3xl  border-none shadow-2xl shadow-black bg-[#3E3E3A]'>
        <h1 className='text-3xl text-center font-bold mb-5'>Sign Up</h1>
        <input type="text" name="firstname" id="1" placeholder='First Name'
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          className=" bg-[#292927] border-none rounded-[3rem] pl-4 text-white"

        />
        <input type="text" name="lastname" id="2" placeholder='Last Name'
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          className=" bg-[#292927] border-none rounded-[3rem] pl-4 text-white"

        />
        <input type="email" name="email id" id="3" placeholder='Email ID'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className=" bg-[#292927] border-none rounded-[3rem] pl-4 text-white"

        />
        <input type="password" name="password" id="4" placeholder='password'
          onChange={(e) => {
            setPassword(e.target.value);
            checkConfirmPwd();
          }}
          className=" bg-[#292927] border-none rounded-[3rem] pl-4 text-white"

        />
        <input type="password" name="confirmpwd" id="5" placeholder='confirm password'
          onChange={(e) => {
            checkConfirmPwd();
            setConfirmPassword(e.target.value);
          }}
          className=" bg-[#292927] border-none rounded-[3rem] pl-4 text-white"

        />
        {
          (passwordMatch && confirmPassword != ' ') ? <></> :
            <p className='text-red-500'>Passwords do not match !!</p>
        }
        <Link to="/login" className='w-fit mx-auto text-sm text-white underline text-center'>Already have an account? <br />Login</Link>
        <button className='bg-[#FEC601] hover:bg-yellow-500 text-black text-xl font-medium py-3 px-4 rounded-[3rem] focus:outline-none focus:shadow-outline'
          onClick={handleCreateUser}

          disabled={!passwordMatch}
        >Register</button>

        <div className="flex items-center justify-evenly gap-2">
          <hr className="w-1/3" />
          <p>OR</p>
          <hr className="w-1/3" />
        </div>
        <button className="flex items-center gap-3 text-black text-sm font-medium w-fit p-3 rounded-[3rem] bg-[#FEC601] hover:bg-yellow-500 mx-auto" onClick={handleGoogleLogin}> <img src={googleLogo} alt="" className="w-6 h-6" /> <p> Continue With Google</p></button>
      </div>
    </div>
  )
}
