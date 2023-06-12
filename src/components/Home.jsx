import React from 'react';
import Logo from '../assets/Asset 1.svg';

function Home() {
  return (
    <div className='h-screen w-screen bg-gradient-to-tr from-pink-200 to-slate-300 flex flex-col items-center justify-center space-y-8'>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-pink-500 text-6xl font-bold'>
        Omnia Consulting
      </h1>
      <div className='relative w-[40vw] h-[40vw]'>
        <img src={Logo} alt="logo" className='w-full h-full object-cover opacity-20' />
        <div className='absolute inset-0 flex flex-col items-center justify-center space-y-8'>
          <button className='w-1/2 py-4 mb-4 text-xl font-bold text-white bg-green-500 rounded-md shadow hover:shadow-lg active:bg-green-600 transition duration-200 ease-in-out'>Sign In</button>
          <button className='w-1/2 py-4 text-xl font-bold text-white bg-blue-500 rounded-md shadow hover:shadow-lg active:bg-blue-600 transition duration-200 ease-in-out'>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
