import React, { useState, useEffect } from "react";
import { convertTimeTo12HourFormat, langs } from "./utils";
import { motion } from 'framer-motion'
import AnalogClock from "./Clock/AnalogClock";

import "./Clock/Time.css";
import { timeZone } from "./Clock/timezone";

function Time() {
  const [time, setTime] = useState(new Date());

  const [time12, setTime12] = useState("");
  const [timezone, setTimezone] = useState("America/Bogota");
  const [utc, setUtc] = useState("");
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

  const localTime = time.toLocaleTimeString("en-US", { timeZone: timezone });
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  // const day = time.getDay();
  // const any = time.getUTCDay()
  const dayName = time.toLocaleString("en-US", { weekday: "short" });
  //const month = time.getMonth();
  const monthName = time.toLocaleString("en-US", { month: "short" });
  const year = time.getFullYear();

  const handleClick = (e) => {
    const country = e.target.title;
    const result = timeZone.filter((c) => c.country === country);
    setTimezone(result[0].timezone);
    setOffset({
      city: result[0].city,
      country: result[0].country,
      utc: result[0].utc,
    });
  };

  return (
    <motion.div 
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth, transition:{duration:0.1}}}
    >
      {/* <h2>{time12}</h2> */}
      <div>
        <h1
          className="digital-clock"
          style={{
            textAlign: "center",
            marginTop: "20px",
            width: "fit-content",
            padding: "30px",
            border: "3px solid #333",
            borderRadius: "10px",
            boxShadow: "0 0 10px #333",
          }}
        >
          {offset ? <span>{localTime}</span> : time12}
        </h1>
        <h2 className="date">{`${dayName}, ${monthName}. ${year}`}</h2>
        {offset && timezone ? (
          <p className="date">
            {offset.city} GMT/UTC {offset.utc}
          </p>
        ) : (
          <p className="date">Current Local Time</p>
        )}
      </div>
      <AnalogClock time={time} />
      <h1 className="utc">UTC Now: {`${utc}:${minutes}:${seconds}`}</h1>
      <div className="list">
        {timeZone.map((c, idx) => (
          <div key={c.idx}>
            <h1 title={c.country} onClick={handleClick}>
              {c.city}
            </h1>
          </div>
        ))}
      </div>
      <div className="lang-list">
        {langs.map((lang, idx) => (
          <div key={lang.idx}>
            <h5 title={lang.title}>{lang.question} </h5>
          </div>
        ))}
      </div>
      <h5>&copy;Oscar Warrieta</h5>
    </motion.div>
  );
}

export default Time;
