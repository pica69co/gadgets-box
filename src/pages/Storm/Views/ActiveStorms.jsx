import React from 'react'
import { storm } from '../storm'
import '../Storm.css'


const ActiveStorms = () => {
  const filtered = storm.filter(s=>s.name === 'Active Storms')
  // console.log(filtered);
  return (
    
    <div className='active-storms'>
      <div>
        <h1>ActiveStorms</h1>
        <div className='active-list'>
          <div className='list-item'>
              <h1>{filtered[0].desc}</h1>
              <img src={filtered[0].url} alt='active-storm' width={550} height={320} />
          </div>
          {/*  */}
        </div>

      
      </div>

    </div>
  )
}

export default ActiveStorms