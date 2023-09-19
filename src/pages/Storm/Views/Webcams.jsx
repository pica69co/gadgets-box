import React, { useEffect, useState } from 'react'
import FetchWebcams from '../webcams'

const Webcams = () => {
  const [webcams, setWebcams] = useState(null)
 
  useEffect(() => {
    FetchWebcams().then((data) => setWebcams(data))
    
  },[])

   return ( 

    <div>
        <h1>Webcams</h1>
        <div>
          {webcams?.webcams?.map((webcam, id) => (
            <div key={id}>
              <h3>{webcam.title}</h3>
              <h5>{webcam.status}</h5>
            </div>
          ))}
          </div>
    </div>
  )
}

export default Webcams