import React from 'react'
import and from '../img/and.png';

export default function Resister() {
  return (
   <div className="formContainer">
    <div className="formWrapper">
        <span className='logo'> Lama chat</span>
        <span className='title'> Resister</span>
        <form>
            <input type="text"placeholder='display name' />
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <input style={{display:'none'}} type="file" id='file' />
            <label htmlFor="file">
                <img src={and} alt="" width="50" height="60" />
                <span>add inage </span>
            </label>
            <button> Sign up </button>
        </form>
        <p>you do have an account ? Login </p>
    </div>
   </div>
  );
}
