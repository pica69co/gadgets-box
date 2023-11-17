import React from "react";
import "./VideoPlayer.css";
const VideoPlayer = ({ camDetails, modal, setModal, loading, setLoading }) => {
  console.log("webcams details", camDetails);
  console.log("VideoPlayer", camDetails?.player.day);
  return (
    <div className="videoPlayer-container">
      <h1>VideoPlayer</h1>

      {camDetails === undefined ? (
        "Loading..."
      ) : (
        <div className="video-player">
          <div className="cam-detail">
            <iframe
              src={camDetails?.player.day}
              title={camDetails?.title}
              width="100%"
              height="100%"
              allowFullScreen
            ></iframe>

            {/* <a
              className="link"
              href={camDetails?.player.day}
              rel="noreferrer noopener"
            >
              {camDetails?.title}{" "}
            </a> */}
          </div>
        </div>
      )}
      <button onClick={() => setModal(false)} className="button-modal">
        Close
      </button>
    </div>
  );
};

export default VideoPlayer;
