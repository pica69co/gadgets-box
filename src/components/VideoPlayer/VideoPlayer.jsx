import React from "react";
import './VideoPlayer.css'

const VideoPlayer = ({ camDetails, modal, setModal, loading, setLoading }) => {
  console.log("webcams details", camDetails);

  return (
    <div className="videoPlayer-container">
      <h1>VideoPlayer</h1>

      {camDetails === null ? (
        "Loading..."
      ) : (
        <div className="video-player">
          <div className="cam-detail">
            <a 
            className="link"
            href={camDetails?.player.day} rel="noreferrer noopener">
              {camDetails.title}{" "}
            </a>
          </div>
          <button 
          onClick={() => setModal(false)} className="button-modal"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
