import React, { useState } from 'react';
import ClicksCard from './ClicksCard';
import ScansCard from './ScansCard';
import DemographicsCard from './DemographicsCard';
import GeographicsCard from './GeographicsCard';

function Dashboard() {
  const [days, setDays] = useState(5);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1 && value <= 10) {
      setDays(value);
    }
  };

  return (
    <div className='h-screen w-screen bg-gradient-to-tr from-teal-200 to-slate-300 flex flex-col items-center justify-center p-10'>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-pink-500 text-6xl font-thin mb-10'>
        Welcome to the Dashboard
      </h1>
      <input type='text' placeholder='Days to display' onChange={handleInputChange}
        className='rounded-md mb-8 text-xl font-thin appearance-none text-center'
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255,255,255,0.15)',
          border: '1px solid rgba(255,255,255,0.7)',
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.15))',
        }}
      />
      <div className='grid grid-cols-2 gap-4'>
        <ClicksCard days={days} />
        <ScansCard days={days} />
        <DemographicsCard days={days} />
        <GeographicsCard days={days} />
      </div>
    </div>
  )
}

export default Dashboard;
