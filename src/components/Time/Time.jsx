import React, { useState, useEffect } from 'react';
import { convertTimeTo12HourFormat } from './utils';
import AnalogClock from './Clock/AnalogClock';
import './Clock/Time.css'

function Time() {
  const [time, setTime] = useState(new Date());
  const [time12, setTime12] = useState('');
  const [utc, setUtc] = useState('');
  const [offset, setOffset] = useState();
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
      setTime12(convertTimeTo12HourFormat(new Date()));
      setUtc(new Date().getUTCHours());
    }, 1000); // Actualiza la hora cada segundo

    // Limpia el interval cuando el componente se desmonta
    return () => clearInterval(intervalID);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const day = time.getDay();
  const dayName = time.toLocaleString('en-US', { weekday: 'long' });
  const month = time.getMonth();
  const year = time.getFullYear();
     
  return (
    <div>
       {/* <h2>{time12}</h2> */}
      <h1 className='digital-clock'
       style={{
        fontSize: '5.2rem',
        textAlign: 'center',
        marginTop: '20px',
        width:'500px',
        border: '3px solid #333',
      }}
      >{`${hours}:${minutes}:${seconds}`} <span style={{fontSize:'25px'}}>GMT -5 </span></h1>
      <AnalogClock />
      <h1 className='utc'>UTC Now: {`${utc}:${minutes}:${seconds}`}</h1>
      <div className="list">
      <h1>Buenos Aires </h1>
      <h1>Moscow </h1>
      <h1>Rio Do Janeiro </h1>
      <h1>New Delhi</h1>
      <h1>Pekin</h1>
      <h1>Pretoria</h1>
      <h1>London</h1>
      <h1>Madrid</h1>
      <h1>Los Angeles</h1>
      </div>
      <h2>&copy;{`${dayName} ${day}-${month}-${year}`}</h2>
    </div>
  );
}

export default Time;
