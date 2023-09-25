import { useState } from 'react';
import { motion } from 'framer-motion';
import { musicAPI } from './music';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './MusicPlayer.css';

function MusicPlayer() {

  //  audioplayer
  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicAPI.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicAPI.length - 1 ? currentTrack + 1 : 0
    );
  };

  //Todo: add playlist functionality


  return (
    <motion.div
      initial={{width:0}}
      animate={{width:'100%'}}
      exit={{x:window.innerWidth, transition:{duration:0.1}}}
    >
    <div className= 'container'  >
      <div className="music-container">

      <AudioPlayer
        // style={{ width: "300px" }}
        style={{ borderRadius: "1rem", color:'black', fontSize:'1rem', width:'100%', height:'100%' }}
        autoPlay
        //layout="horizontal"
        src={musicAPI[trackIndex].src}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        header={`Now playing: ${musicAPI[trackIndex].name}`}
        footer="Music from: www.bensound.com"
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        
        />
        </div>
    </div>
    </motion.div>
  );
}

export default MusicPlayer;