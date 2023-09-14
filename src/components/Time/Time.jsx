import React, { useState, useEffect } from 'react';

//   const timeConverter = (time, offset) => {
//   const d = new Date(time);
//   const utc = d.getTime() + d.getTimezoneOffset() * 60000;
//   const nd = new Date(utc + 3600000 * offset);
//   return nd.toLocaleString();
// };
//   console.log(timeConverter(Date.now(), -5));

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000); // Actualiza la hora cada segundo

    // Limpia el interval cuando el componente se desmonta
    return () => clearInterval(intervalID);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const day = time.getDay();
  const month = time.getMonth();
  const year = time.getFullYear();
  return (
    <div className="clock">
      <h2>{`${day}-${month}-${year}`}</h2>
      <h1>{`${hours}:${minutes}:${seconds}`}</h1>
    </div>
  );
}

export default Time;
