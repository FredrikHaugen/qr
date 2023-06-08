import React from 'react'

function Header() {
  return (
    <div className=' bg-slate-400 opacity-70 h-[5vh] flex align-middle justify-between items-center'>
        <div className='pl-24'>
            <h1>logo</h1>
        </div>
        <div className='pr-24'>
            <button className=' mx-6 p-2 bg-slate-200 rounded-sm drop-shadow-lg hover:bg-slate-300'>
                Home
            </button>
            <button className=' mx-6 p-2 bg-slate-200 rounded-sm drop-shadow-lg'>
                Home
            </button>
            <button className=' mx-6 p-2 bg-slate-200 rounded-sm drop-shadow-lg'>
                Home
            </button>
        </div>
    </div>
  )
}

export default Header