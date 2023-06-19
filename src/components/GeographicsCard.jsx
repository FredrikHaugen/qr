import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function GeographicsCard({ className }) {

  const positions = [
    [51.505, -0.09], // London
    [40.7128, -74.0060], // New York
    [35.6895, 139.6917], // Tokyo
    [-33.8688, 151.2093], // Sydney
    [48.8566, 2.3522] // Paris
  ];

  const mapCenter = [0, -15]; // Center the map at 0,0
  const zoom = 1; // Set zoom level to 1 to make the entire world visible

  return (
    <div className={`rounded-2xl px-12 py-4 text-center ${className}`}>
    
    <div className="rounded-2xl px-12 py-4 text-center"
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255,255,255,0.15)',
        border: '1px solid rgba(255,255,255,0.7)',
        backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.15))',
        overflow: 'hidden',
      }}
    >
      <h1 className='text-transparent py-2 bg-clip-text bg-gradient-to-br from-red-400 to-blue-400 text-4xl font-thin'>
      Geographics</h1>
      <div style={{ paddingTop: "100%", position: "relative" }}>
        <MapContainer center={mapCenter} zoom={zoom} style={{ height: "100%", width: "100%", position: "absolute", top: "0", bottom: "0", right: "0", left: "0" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {positions.map((position, idx) => (
            <Marker key={idx} position={position}>
              <Popup className='text-center'>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
    </div>
  );
}

export default GeographicsCard;
