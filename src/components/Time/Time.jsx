import React, { useState, useEffect } from 'react';
import { convertTimeTo12HourFormat } from './utils';
import AnalogClock from './Clock/AnalogClock';

import './Clock/Time.css'
import { timeZone } from './Clock/timezone';

function Time() {
  const [time, setTime] = useState(new Date());
  
  const [time12, setTime12] = useState('');
  const [timezone, setTimezone] = useState('America/Bogota');
  const [utc, setUtc] = useState('');
  const [offset, setOffset] = useState(false);
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
      setTime12(convertTimeTo12HourFormat(new Date()));
      setUtc(new Date().getUTCHours());
    }, 1000); // Actualiza la hora cada segundo

    // Limpia el interval cuando el componente se desmonta
    return () => clearInterval(intervalID);
  }, []);

  const localTime = time.toLocaleTimeString('en-US',  {timeZone:timezone} );
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  // const day = time.getDay();
  // const any = time.getUTCDay()
  const dayName = time.toLocaleString('en-US', { weekday: 'short' });
  //const month = time.getMonth();
  const monthName = time.toLocaleString('en-US', { month: 'short' });
  const year = time.getFullYear();
  
  const handleClick = (e) => {
    const country = e.target.title;
    const result = timeZone.filter((c) => c.country === country);
    setTimezone(result[0].timezone);
    setOffset({
      city:result[0].city,
      country:result[0].country,
      utc:result[0].utc,
    })
  }
  
    
  return (
    <div>
       {/* <h2>{time12}</h2> */}
      <div>

      <h1 className='digital-clock'
       style={{
        fontSize: '5.2rem',
        textAlign: 'center',
        marginTop: '20px',
        width:'500px',
        border: '3px solid #333',
      }}
      >
         { offset 
            ? ( <span>{localTime}</span>
            
            ):( `${hours}:${minutes}:${seconds}`)}
          
      </h1>
          {offset && timezone ? (<p>{offset.city} UTC:{offset.utc}</p>) : <p>Local Time</p>}
      </div>
      <AnalogClock time={time} />
      <h1 className='utc'>UTC Now: {`${utc}:${minutes}:${seconds}`}</h1>
      <div className="list" >
        {timeZone.map((c) => (
            <div key={c.country}>
               <h1  title={c.country} onClick={handleClick}>{c.city}</h1>
            </div>
            ))}
      </div>
      <h2>&copy;{`${dayName}, ${monthName}. ${year}`}</h2>
    </div>
  );
}

export default Time;
