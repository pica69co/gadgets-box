import React from 'react'
import Board from './Board/Board';
import UpcomingBlocks from './Board/UpcomingBlocks';
import { useTetris } from './Hooks/useTetris';
import '../Tetris/Tetris.css'

const Tetris = () => {
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
      <h5>credits: Conner Ardman</h5>
      <p>&copy;2023 Oscar Warrieta</p>
      </div>
      
    </div>
  );
}

export default Tetris

