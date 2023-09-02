import { useState } from 'react'

import Background from './Background/'
import Board from './Board/'
import Settings from './Settings/'

const MemoryGame = () => {
  const [gameOptions, setGameOptions] = useState(null)
  

  const startGame = (options) => {
    setGameOptions(options)
  }

  const restartGame = ()=> {
    setGameOptions(null)
  }
  
  return (
    <>
            <Background />
            <h1>Memory Game</h1>
            {!gameOptions ? (
                <Settings startGame={startGame} />
            ) : (
                <Board gameOptions={gameOptions} restartGame={restartGame} />
            )}
        </>
  )
}

export default MemoryGame