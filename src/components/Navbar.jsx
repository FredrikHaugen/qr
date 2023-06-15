import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from '../assets/Logo.svg';

function Navbar() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const MenuIcon = menuOpen ? AiOutlineClose : AiOutlineMenu;
 
  return (
    <div className='fixed top-0 w-full bg-slate-700 h-[5vh] flex items-center justify-between px-6 py-3 shadow-md backdrop-filter backdrop-blur-md bg-opacity-90 border-b-[1px] border-white z-50 '>
      <div className='flex items-center'>
        <img src={Logo} alt="logo" className='mr-4 w-[4vh] h-[4vh]' />
        <h1 className='text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-400 text-4xl font-thin'>Omnia</h1>
      </div>
      {isTabletOrMobile ? (
        <div>
          <MenuIcon onClick={toggleMenu} className='text-3xl text-white cursor-pointer' />
          {menuOpen && (
            <div className='absolute right-5 bg-gradient-to-bl from-slate-300 to-slate-100 rounded-sm shadow-md divide-y divide-white divide-opacity-60 flex flex-col justify-between transition-all duration-500 ease-in-out'>
              <div className='hover:shadow-lg duration-300 ease-in-out'>
                <Link to="/" className='flex-grow text-center text-xl text-light text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-blue-300 font-light flex items-center justify-center' onClick={closeMenu}>
                  <span className='py-4 px-16 m-1'>Home</span>
                </Link>
              </div>
              <div className='hover:shadow-lg duration-300 ease-in-out'>
                <Link to="/qr-gen" className='flex-grow px-4 py-2 text-center text-xl text-light text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-400 font-light flex items-center justify-center' onClick={closeMenu}>
                  <span className='py-4 px-16 m-1'>QR-Gen</span>
                </Link>
              </div>
              <div className='hover:shadow-lg duration-300 ease-in-out'>
                <Link to="/dashboard" className='flex-grow px-4 py-2 text-center text-xl text-light text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-yellow-400 font-light flex items-center justify-center' onClick={closeMenu}>
                  <span className='py-4 px-16 m-1'>Dashboard</span>
                </Link>
              </div>
          </div>
          
          )}
        </div>
      ) : (
        <div className='flex space-x-4'>
          <Link to="/" className='px-4 py-2 text-center text-xl text-light text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-400 border border-white border-opacity-50 rounded-md backdrop-filter backdrop-blur-md bg-opacity-40 hover:bg-opacity-60 transition duration-200 ease-in-out'>Home</Link>
          <Link to="/qr-gen" className='px-4 py-2 text-center text-xl text-light text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-400 border border-white border-opacity-50 rounded-md backdrop-filter backdrop-blur-md bg-opacity-40 hover:bg-opacity-60 transition duration-200 ease-in-out'>QR-Gen</Link>
          <Link to="/dashboard" className='px-4 py-2 text-center text-xl text-light text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-yellow-400 border border-white border-opacity-50 rounded-md backdrop-filter backdrop-blur-md bg-opacity-40 hover:bg-opacity-60 transition duration-200 ease-in-out'>Dashboard</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar;
