import React from 'react'
import { storm } from '../storm'
import '../Storm.css'
const Atlantic = () => {
  const filtered = storm.filter(s=>s.name === 'Conditions in the Atlantic Ocean')
  

  return (
    <div className='atlantic'>
      <div>
        <h1 className='atlantic-title'>Conditions in the Atlantic Ocean</h1>
        <div className='atlantic-list'>
          <div className='list-item'>
              <h1>{filtered[0].desc}</h1>
              <img src={filtered[0].url} alt='atlantic' width={300} height={150} />
          </div>
          
          {/*ToDo: component GalleryImages */}
          <div className='list-item'>
              <h1>{filtered[0].desc2}</h1>
              <img src={filtered[0].url2} alt='atlantic2' width={300} height={150} />
          </div>
          <div className='list-item'>
              <h1>{filtered[0].desc3}</h1>
              <img src={filtered[0].url3} alt='atlantic3' width={300} height={150} />
          </div>
          <div className='list-item'>
              <h1>{filtered[0].desc4}</h1>
              <img src={filtered[0].url4} alt='atlantic4' width={350} height={150} />
          </div>
        </div>

      
      </div>

    </div>
  )
}

export default Atlantic