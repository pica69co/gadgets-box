import React, { useEffect, useState } from 'react'
import { FetchWebcams, FetchWebcamsById } from '../webcams'
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer'
import '../Storm.css'

const Webcams = () => {
  const [webcams, setWebcams] = useState(null)
  const [camDetails, setCamDetails] = useState(null)
  
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    FetchWebcams().then((data) => setWebcams(data))
    setLoading(false)
  },[])
  

  const handlerClick = (e) =>  {
    const webcamId = e.target.id  
    setLoading(true)
    setModal(true)
    FetchWebcamsById(webcamId)
    .then((data) => {
      setCamDetails(data)
    })
    .catch((error) => {
      console.log(error)
    })
    setLoading(false)
  }
  //console.log(camDetails);
   return ( 

    <div>
        <div className='head'><h1>Webcams</h1>
        </div>      
        {/*TODO: Modal */}
           {modal && (
            <VideoPlayer 
              camDetails={camDetails} 
              modal={modal} 
              setModal={setModal}
              loading={loading}
              setLoading={setLoading}
              />
          )}
        <div>
          { loading ? 'Loading...' :
          webcams?.webcams?.map((webcam, id) => (
            <div key={id} className='webcams-list'>
              <h3>{webcam.title}</h3>
              {/* <h5>{webcam.status}</h5> */}
              <button className='button-getLink' id={webcam.webcamId} onClick={handlerClick }>Get Link</button>
            </div>
          ))}
          </div>
    </div>
  )
}

export default Webcams