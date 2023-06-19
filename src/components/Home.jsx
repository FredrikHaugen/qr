import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import '../customCSS/Home.css';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { animated, useTransition } from 'react-spring';



Modal.setAppElement('#root');

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const transitions = useTransition(modalIsOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 1500,
    },
  });
  

  function openModal(type) {
    setModalType(type);
    setModalIsOpen(true);
  }

  return (
    <div className='h-screen w-screen bg-gradient-to-tr from-pink-200 to-slate-300 pt-8'>
    <div className={modalIsOpen ? 'blur' : ''}>
    <div className="h-screen w-screen bg-gradient-to-tr from-pink-200 to-slate-300 flex flex-col items-center justify-top py-24 space-y-8">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-pink-500 text-6xl font-thin p-2">QRanalytics</h1>
      <div className="relative w-10/12 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 h-[35%]">
      <Logo className="w-full h-full opacity-10 oceanMove" />
        <div className="absolute inset-0 flex items-center justify-center space-x-2">
          <button onClick={() => openModal('Sign In')} className="w-28 h-28 text-2xl font-light text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-400 backdrop-blur-md bg-opacity-40 border-0.5 border-white border-opacity-70 rounded-md shadow hover:shadow-lg active:scale-95 transition transform duration-300 ease-in-out">
            Sign In
          </button>
          <button onClick={() => openModal('Sign Up')} className="w-28 h-28 text-2xl font-light text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-500 backdrop-blur-md bg-opacity-40 border-0.5 border-white border-opacity-70 rounded-md shadow hover:shadow-lg active:scale-95 transition transform duration-300 ease-in-out">
            Sign Up
          </button>
        </div>
      </div>

      <div 
        className="max-w-2xl mx-auto rounded-2xl p-8 backdrop-blur-lg bg-clip-text bg-gradient-to-br from-green-400 to-blue-400"
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255,255,255,0.15)',
          border: '1px solid rgba(255,255,255,0.4)',
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.15))',
        }}>
        <p className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-pink-500 text-3xl font-thin p-2">Create personalized QR codes for your links effortlessly on our website. Sign up for an account to unlock a comprehensive dashboard that provides insightful analytics, tracking the performance of your QR codes, including scan locations, demographics, and age groups.</p>
      </div>


      
      {transitions((style, item) =>
  item ? (
    <animated.div style={style}>
      <Modal
  isOpen={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
  style={{
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.05)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      background: 'transparent',
      border: 'none',
      borderRadius: '10px',
      overflow: 'hidden',
    },
  }}
>
  <div
    className="rounded-2xl p-2"
    style={{
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255,255,255,0.15)',
      border: '1px solid rgba(255,255,255,0.7)',
      backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.15))',
    }}
  >
    <button
      onClick={() => setModalIsOpen(false)}
      className="absolute right-4 top-4 text-3xl text-slate-100 hover:text-slate-700 duration-300 ease-in-out"
    >
      <AiOutlineClose />
    </button>
    <h2 className="text-4xl font-thin text-center text-indigo-400 mb-2">{modalType}</h2>
    {modalType === 'Sign In' ? <SignIn /> : <SignUp />}
  </div>
</Modal>

    </animated.div>
  ) : null
)}

    </div>
    </div>
    </div>
  );
}

export default Home;

