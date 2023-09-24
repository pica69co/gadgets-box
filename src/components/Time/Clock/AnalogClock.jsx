import React from 'react';
import './Time.css';
function AnalogClock({time}) {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
  const hourDeg = ((hours % 12 + minutes / 60) / 12) * 360;

  return (
    <div className="analog-clock">
      <div className="clock-face">
      <div class="numbers">
        <ul>
          <li>12</li>
          <li>3</li>
          <li>6</li>
          <li>9</li>
        </ul>
      </div>
           
        <div
          className="clock-hand hour-hand"
          style={{ transform: `rotate(${hourDeg}deg)` }}
        ></div>
        <div
          className="clock-hand minute-hand"
          style={{ transform: `rotate(${minuteDeg}deg)` }}
        ></div>
        <div
          className="clock-hand second-hand"
          style={{ transform: `rotate(${secondDeg}deg)` }}
        ></div>
      </div>
      
    </div>
  );
}

export default AnalogClock;
