import React from 'react'
import Board from './Board/Board';
import UpcomingBlocks from './Board/UpcomingBlocks';
import { useTetris } from './Hooks/useTetris';
import '../Tetris/Tetris.css'

const Tetris = () => {
  // return (
  //   <div>
  //   <h1>Play Tetris</h1>
  //   <p>Under Construction...</p>
  //   <img src="https://cdn.pixabay.com/photo/2016/03/26/09/42/road-sign-1280257_960_720.jpg" alt="icon"  />
  //   </div>
  // )
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();
  
  return (
    <div className="tetris-app">
      <h1>Tetris</h1>
      <Board currentBoard={board} />
      <div className="controls">
        <h2>Score: {score}</h2>
        {isPlaying ? (
          <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
          ) : (
            <button onClick={startGame}>New Game</button>
            )}
      </div>
    </div>
  );
}

export default Tetris

