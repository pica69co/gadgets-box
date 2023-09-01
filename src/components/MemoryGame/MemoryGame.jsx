import React, { useState } from 'react'

import Background from './Background/'
import Settings from './Settings/'
import Board from './Board/'

const MemoryGame = () => {
  const [gameOptions, setGameOptions] = useState(null)
  

  const startGame = (options) => {
    console.log('options',options);
    setGameOptions(options)
  }
  
  return (
    <div >
      <h1>Play Memory Game</h1>
     <Background />
     {!gameOptions ? <Settings startGame={startGame}/> : <Board gameOptions={gameOptions}/>}
    
    </div>
  )
}

export default MemoryGame