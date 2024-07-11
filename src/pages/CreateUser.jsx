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
    <div className='min-h-screen flex bg-[#FEC601]'>
      <div className='flex flex-col h-fit sm:w-1/2 md:w-1/3 px-10 mx-auto my-5 gap-4 py-10 rounded-3xl  border-none shadow-2xl shadow-black bg-gray-100'>
        <h1 className='text-3xl text-center font-bold'>Sign Up</h1>
        <input type="text" name="firstname" id="1" placeholder='First Name'
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input type="text" name="lastname" id="2" placeholder='Last Name'
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input type="email" name="email id" id="3" placeholder='Email ID'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input type="password" name="password" id="4" placeholder='password'
          onChange={(e) => {
            setPassword(e.target.value);
            checkConfirmPwd();
          }}
        />
        <input type="password" name="confirmpwd" id="5" placeholder='confirm password'
          onChange={(e) => {
            checkConfirmPwd();
            setConfirmPassword(e.target.value);
          }}
        />
        {
          (passwordMatch && confirmPassword != ' ') ? <></> :
            <p className='text-red-500'>Passwords do not match !!</p>
        }
        <Link to="/login" className='w-fit text-sm text-gray-700 underline text-center mx-auto'>Already have an account? <br />Login</Link>
        <button className='bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          onClick={handleCreateUser}

          disabled={!passwordMatch}
        >Register</button>

        <div className="text-center text-gray-700">or</div>
        <button className="flex items-center gap-3 text-sm font-semibold w-fit p-3 rounded-3xl bg-yellow-400 hover:bg-yellow-500 mx-auto" onClick={handleGoogleLogin}> <img src={googleLogo} alt="" className="w-6 h-6" /> <p> Continue With Google</p></button>
      </div>
    </div>
  )
}
