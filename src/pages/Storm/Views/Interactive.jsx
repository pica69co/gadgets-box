import React from 'react'
import { storm } from '../storm'
import '../Storm.css'


const Interactive = () => {
  const filtered = storm.filter(s=>s.name === 'Interactive forecast models')
  return (
    <div className='interactive'>
      <div>
          {/*ToDo: component GalleryImages */}
        <h1 className='interactive-title'>Conditions in the Atlantic Ocean</h1>
        <div className='interactive-list'>
          <div className='list-item'>
              
              <a title='Windy weather interactive map' href={filtered[0].url} target='_blank' rel='noreferrer noopener'  ><h1>{filtered[0].desc}</h1></a>
                        
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interactive