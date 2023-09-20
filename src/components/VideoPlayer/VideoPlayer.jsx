import React from 'react'

const VideoPlayer = ({ 
    camDetails,
    modal, 
    setModal,
    loading,
    setLoading,}) => {
  
console.log(camDetails);

    return (
      <div>
        <h1>VideoPlayer</h1>
        {camDetails.player?.map(detail => (
            <div key={detail.webcamId}>
                <h1>{detail.title}</h1>
                <h5>{detail.status}</h5>
                <video controls>
                    <source src={detail.player.lifetime} type="video/mp4" />
                </video>
                <button onClick={() => setModal(false)}>Close</button>
            </div>
        ))}
      </div>
  )
}

export default VideoPlayer