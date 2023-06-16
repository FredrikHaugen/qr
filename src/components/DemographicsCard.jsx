import React from 'react';

function DemographicsCard() {
  return (
    <div className="rounded-2xl px-12 py-4 text-center"
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255,255,255,0.15)',
        border: '1px solid rgba(255,255,255,0.7)',
        backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.15))',
      }}
    >
      <h1 className='text-transparent py-2 bg-clip-text bg-gradient-to-br from-red-400 to-blue-400 text-4xl font-thin'>
      Demographics</h1>
      <p>Placeholder for demographics data</p>
    </div>
  );
}

export default DemographicsCard;
