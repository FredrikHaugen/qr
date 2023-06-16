import React, { useState, useEffect } from 'react';

function generateClicksData(days) {
  const data = [];
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    data.push({ 
      date,
      clicks: Math.floor(Math.random() * 100) // Replace this with real clicks data
    });
  }
  return data;
}

function ClicksCard() {
  const [days, setDays] = useState(5);
  const [inputValue, setInputValue] = useState(5);
  const [clicksData, setClicksData] = useState([]);

  useEffect(() => {
    setClicksData(generateClicksData(days));
  }, [days]);

  const displayDate = (date) => {
    return `${("0" + date.getDate()).slice(-2)}.${("0" + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}`;
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const value = parseInt(inputValue, 10);
      if (value >= 1 && value <= 10) {
        setDays(value);
      }
    }
  }

  return (
    <div className="rounded-2xl px-12 py-4 text-center relative"
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255,255,255,0.15)',
        border: '1px solid rgba(255,255,255,0.7)',
        backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.15))',
      }}
    >
      <h1 className='text-transparent py-2 bg-clip-text bg-gradient-to-br from-red-800 to-blue-400 text-4xl font-thin'>
      Clicks
      </h1>
      <div className='absolute top-4 right-4 py-2'>
        <input type='text' value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} 
        className='rounded-md px-2 text-white text-xl font-thin appearance-none'
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(150,150,150,0.6)',
          border: '1px solid rgba(100,100,100,0.4)',
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.15))',
          width: '40px',
          height: '40px',
          textAlign: 'center'
        }}
        />
      </div>
      <div>
        {clicksData.map(({ date, clicks }) => (
          <p key={date} className='flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-br to-red-800 from-blue-600 text-xl font-thin'>
            {displayDate(date)} - Clicks: <span className='ml-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-pink-500 text-2xl font-thin'>{clicks}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default ClicksCard;
