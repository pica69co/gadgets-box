import React, { useState, useEffect } from "react";
import './OtherNewYear.css'
const CountdownTimer = () => {
  const christmasDate = new Date("December 25, 2023 00:00:00").getTime();
  const newYearDate = new Date("January 1, 2024 00:00:00").getTime();

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timeRemainingYear, setTimeRemainingYear] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeUntilChristmas = christmasDate - now;
      const timeUntilNewYear = newYearDate - now;

      setTimeRemaining(calculateTimeRemaining(timeUntilChristmas));
      setTimeRemainingYear(calculateTimeRemaining(timeUntilNewYear));
    };

    const calculateTimeRemaining = (time) => {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((time % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  
  return (
    <div className="countdown-timer">
      <div className="christmas">

      {timeRemaining.days > 0 && (
        <div className="time-unit">
          <h1>Count Down Christmas 2023!</h1>
          <span className="value">{timeRemaining.days}</span>
          <span className="label">{' '} Days</span>
        </div>
      )}
      <div className="time-unit">
        <span className="value">{timeRemaining.hours}</span>
        <span className="label">{' '} Hours</span>
      </div>
      <div className="time-unit">
        <span className="value">{timeRemaining.minutes}</span>
        <span className="label">{' '} Minutes</span>
      </div>
      <div className="time-unit">
        <span className="value">{timeRemaining.seconds}</span>
        <span className="label">{' '} Seconds</span>
      </div>
      </div>
      <div className="year">

      { timeRemainingYear.days > 0 && ( 
      <div className="time-unit">
        <h1>Happy New Year 2024!</h1>
        {timeRemaining.days > 0 && (
          <div className="time-unit">
            <span className="value">{timeRemainingYear.days}</span>
            <span className="label">{' '} Days</span>
          </div>
        )}
        <div className="time-unit">
          <span className="value">{timeRemainingYear.hours}</span>
          <span className="label">{' '} Hours</span>
        </div>
        <div className="time-unit">
          <span className="value">{timeRemainingYear.minutes}</span>
          <span className="label">{' '} Minutes</span>
        </div>
        <span className="value">{timeRemainingYear.seconds}</span>
        <span className="label">{' '} Seconds</span>
      </div>)}
      </div>

    </div>
  );
};

export default CountdownTimer;
