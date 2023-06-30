import React from 'react'

export default function Login() {
  return (
   <div className="formContainer">
    <div className="formWrapper">
        <span className='logo'> Lama chat</span>
        <span className='title'> Resister</span>
        <form>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            
            <button> Sign In </button>
        </form>
        <p>you don't have an account ? Resister </p>
    </div>
   </div>
  );
}
