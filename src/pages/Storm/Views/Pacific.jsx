import React from 'react'
import { storm }  from '../storm'

const Pacific = () => {
  const filtered = storm.filter(s=>s.name === 'Conditions in the Pacific Ocean')
  
  return (
    <div className='pacific'>
      <div>
        <h1 className='pacific-title'>Conditions in the Pacific Ocean</h1>
        <div className='pacific-list'>
          <div className='list-item'>
              <h1>{filtered[0].desc}</h1>
              <img 
                src={filtered[0].url} 
                alt='pacific' 
                width={300} height={150}
                title='Currently Active Tropical Systems'
                />
          </div>
          
          {/*ToDo: component GalleryImages */}
          <div className='list-item'>
              <h1>{filtered[0].desc3}</h1>
              <img 
                src={filtered[0].url3} 
                alt='pacific3' 
                width={300} height={150} 
                title='Tropical Cyclones Formation Probability'  
              />
          </div>
          <div className='list-item'>
              <h1>{filtered[0].desc4}</h1>
              <img src={filtered[0].url4} alt='pacific4' width={350} height={150} />
          </div>

          <div className='list-item'>
              <h1>{filtered[0].desc5}</h1>
              <img 
                src={filtered[0].url5} 
                alt='pacific2' 
                width={300} height={150}
                title='Graphical Tropical Weather Outlook'
                />
          </div>
        
          <div className='list-item'>
              <h1>{filtered[0].desc2}</h1>
              <img 
                src={filtered[0].url2} 
                alt='pacific5' 
                width={350} height={150}
                title='Global Tropics Hazards outlook'
                />
          </div>
        </div>


          

      
      </div>

    </div>
  )
}

export default Pacific