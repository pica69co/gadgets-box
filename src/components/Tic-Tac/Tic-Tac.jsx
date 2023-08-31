import React, { useEffect, useState } from "react";
import "./TicTac.css";
import Cell from "./Cell";

const TicTac = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  console.log(cells);
  const [go, setGo] = useState("circle");
  const [winMsg, setWinMsg] = useState(null);

  const message = `It's now ${go}'s go.`;

  const checkScore = () => {
    const winnerCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winnerCombos.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === "cross");
      crossWins && setWinMsg("Cross Wins!");
    });
    winnerCombos.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "circle");
      circleWins && setWinMsg("Circle Wins!");
    });
  };

  useEffect(() => {
    checkScore();
  }, [cells]);
  const handleGame = () => {
    window.location.reload(true);
  };
  return (
    <div className="app">
      <h1>Play Tic-Tac-Toe</h1>

      <div className="gameboard">
        {cells.map((cell, idx) => (
          <Cell
            key={idx}
            id={idx}
            cell={cell}
            setCells={setCells}
            cells={cells}
            go={go}
            setGo={setGo}
            winMsg={winMsg}
          />
        ))}
      </div>

      <p className={!winMsg ? "message" : "win-message"}>{winMsg || message}</p>
      <button className="btn-tic" onClick={handleGame}>Play Again</button>
    </div>
  );
};

export default TicTac;
