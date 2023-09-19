import React, { useEffect, useState } from 'react'
import { FetchWebcams, FetchWebcamsById } from '../webcams'

const Webcams = () => {
  const [webcams, setWebcams] = useState(null)
 
  useEffect(() => {
    FetchWebcams().then((data) => setWebcams(data))
    
  },[])

  const handlerClick = (e) =>  {
    const webcamId = e.target.id  
    
    FetchWebcamsById(webcamId)
    .then((data) => {
      console.log(data)
    })
  }
   return ( 

    <div>
        <h1>Webcams</h1>
        <div>
          {webcams?.webcams?.map((webcam, id) => (
            <div key={id}>
              <h3>{webcam.title}</h3>
              <h5>{webcam.status}</h5>
              <button id={webcam.webcamId} onClick={handlerClick }>{webcam.webcamId}</button>
            </div>
          ))}
          </div>
    </div>
  )
}

export default Webcams