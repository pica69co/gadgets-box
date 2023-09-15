import React, { useState, useEffect } from 'react';
import { convertTimeTo12HourFormat } from './utils';
import AnalogClock from './Clock/AnalogClock';
import { countries } from './countries';
import './Clock/Time.css'

function Time() {
  const [time, setTime] = useState(new Date());
  const [time12, setTime12] = useState('');
  //const [timeutc12, setTimeutc12] = useState('');
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
    const result = countries.filter((c) => c.country === country);
    setOffset({capital:result[0].capital, gmt:result[0].gmt});
    // console.log('capital', result[0].capital);
  }
  
 // console.log(offset);
  
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
      >
        
        { offset && offset.capital ? `${utc}:${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`} 
        { offset && offset.capital ? <span className='span'>GMT {offset.gmt} - {offset.capital}</span> : null }   
      </h1>
      <AnalogClock time={time} />
      <h1 className='utc'>UTC Now: {`${utc}:${minutes}:${seconds}`}</h1>
      <div className="list" >
        {countries.map((c) => (
            <h1 key={c.country} title={c.country} onClick={handleClick}>{c.capital}</h1>
            ))}
      </div>
      <h2>&copy;{`${dayName}, ${monthName}. ${year}`}</h2>
    </div>
  );
}

export default Time;
