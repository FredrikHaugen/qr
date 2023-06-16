import React, { useState, useEffect } from 'react';

function ScansCard({ days }) {
  const [scansData, setScansData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const generateScansData = (days) => {
    const data = [];
    for(let i=0; i<days; i++){
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({ date, scans: Math.floor(Math.random() * 300) });
    }
    return data;
  };

  const displayDate = (date) => {
    return `${("0" + date.getDate()).slice(-2)}.${("0" + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}`;
  }

  useEffect(() => {
    setScansData(generateScansData(days));
  }, [days]);

  const displayedData = isExpanded ? scansData : scansData.slice(0, 5);

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
      Scans</h1>
      <div>
        {displayedData.map((data, index) => (
          <div key={index} className='flex justify-center items-center space-x-2'>
            <p className='text-slate-800 text-xl font-thin'>
              {displayDate(data.date)} - Scans:</p>
            <span className='text-slate-800 text-2xl font-thin'> {data.scans}
            </span>
          </div>
        ))}
      </div>
      {scansData.length > 5 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className=" border-[0.5px] rounded-md shadow-sm  hover:shadow-md ease-in-out duration-300 text-transparent p-1 bg-clip-text bg-gradient-to-br from-red-800 to-blue-400 text-md font-thin mt-1"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}

export default ScansCard;
