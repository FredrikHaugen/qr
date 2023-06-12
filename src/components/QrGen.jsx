import React, { useState } from 'react';
import QRCode from 'react-qr-code';

function QrGen() {
  const [link, setLink] = useState('');
  const [qrCodeValue, setQRCodeValue] = useState('');

  const generateQRCode = () => {
    setQRCodeValue(link);
  };

  return (
    <div className='h-screen w-screen bg-gradient-to-tr from-amber-200 to-slate-300 flex flex-col items-center justify-center space-y-8'>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-pink-500 text-6xl font-bold'>
        Generate QR Code
      </h1>
      <input
        type='text'
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder='Enter Link'
        className='mb-4 bg-slate-500 rounded-lg p-3 text-2xl'
      />
      <button onClick={generateQRCode} className='mb-4 bg-slate-400 rounded-lg px-3 py-2 text-amber-200 text-2xl border-b-gray-300'>
        Generate QR Code
      </button>
      {qrCodeValue && <QRCode value={qrCodeValue} />}
    </div>
  );
}

export default QrGen;
