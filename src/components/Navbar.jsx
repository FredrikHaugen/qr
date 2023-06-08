import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Asset 1.svg';

function Navbar() {
  return (
    <div className='bg-slate-700 h-[5vh] flex items-center justify-between px-6 py-3'>
      <div className='flex items-center'>
        <img src={Logo} alt="logo" className='mr-4 w-[4vh] h-[4vh]' />
        <h1 className=' text-white text-2xl'>Some Name</h1>
      </div>
      <div className='flex'>
        <Link to="/" className='px-4 py-2 mx-2 bg-slate-500 text-white rounded-md shadow hover:shadow-lg active:bg-slate-600 transition duration-200 ease-in-out'>
          Home
        </Link>
        <Link to="/qr-gen" className='px-4 py-2 mx-2 bg-slate-500 text-white rounded-md shadow hover:shadow-lg active:bg-slate-600 transition duration-200 ease-in-out'>
          QR-Gen
        </Link>
        <Link to="/dashboard" className='px-4 py-2 mx-2 bg-slate-500 text-white rounded-md shadow hover:shadow-lg active:bg-slate-600 transition duration-200 ease-in-out'>
          Dashboard
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
