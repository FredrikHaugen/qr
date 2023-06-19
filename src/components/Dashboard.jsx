import React, { useState } from 'react';
import ClicksCard from './ClicksCard';
import ScansCard from './ScansCard';
import DemographicsCard from './DemographicsCard';
import GeographicsCard from './GeographicsCard';

function Dashboard() {
  const [days, setDays] = useState(1);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const value = Number(e.target.value);
      if (value >= 1 && value <= 30) {
        setDays(value);
      } else {
        alert("Please enter a value between 1 and 30");
        e.target.value = days; // reset input value
      }
    }
  }

  return (
    <div className='bg-gradient-to-tr from-teal-200 to-slate-300 h-screen flex flex-col items-center justify-center p-10'>
      <h1 className='pt-24 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-pink-500 text-6xl font-thin mb-10'>
        Welcome to the Dashboard
      </h1>
      <input type='text' pattern="\d*" min='1' max='30' placeholder='Days to display' onKeyDown={handleKeyDown}  
        className='rounded-md mb-8 text-xl font-thin appearance-none text-center'
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255,255,255,0.15)',
          border: '1px solid rgba(255,255,255,0.7)',
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.15))',
          width: '200px',
        }}
      />
      <div className='grid grid-cols-2 gap-4'>
        <ClicksCard days={days} />
        <ScansCard days={days} className="row-span-2"/>
        <DemographicsCard className="col-span-2"/>
        <GeographicsCard className="col-span-2"/>
      </div>
    </div>
  )
}

export default Dashboard;
