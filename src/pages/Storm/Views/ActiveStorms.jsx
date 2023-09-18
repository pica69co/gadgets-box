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
              <img
                 src={filtered[0].url} 
                 alt='active-storm' 
                 width={550} height={300} 
                 title={filtered[0].desc} 
              />
          </div>
          {/*  */}
          <div className='list-item'>
              <h1>{filtered[0].desc3}</h1>
              <img 
                src={filtered[0].url3} 
                alt='active-storm' 
                width={550} height={220} 
                title={filtered[0].desc3}  
              />
          </div>
        </div>

      
      </div>

    </div>
  )
}

export default ActiveStorms