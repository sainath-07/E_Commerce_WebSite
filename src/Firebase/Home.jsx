import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from './firebase'
import {  useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate=useNavigate()
    const handlelogout=async ()=>{
        await signOut(auth);
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/login')
    }


    
  return(
    <div className='bg-stone-900 text-white'>
        <h1 >welcome to react firebase Auth using email and password</h1>
        <button onClick={handlelogout}>Logout</button>
    </div>
  )
}
