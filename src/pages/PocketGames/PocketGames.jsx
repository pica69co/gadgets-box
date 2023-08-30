import React from "react";
import "./PocketGames.css";
import games from "./dataGames";

const PocketGames = () => {
  const handleClickGame = () => {
    window.open(
      `https://the-ace-hunt-js-game.vercel.app/`,
      "Hunt The Ace Window",
      "width=800, height=900"
    );
  };

  return (
    <div>
      <div className="title">
        <h1>PocketGames</h1>
      </div>
      <div className="hunt">
        {games.map((game) => (
          <ul key={game.name} className="list-group">
            <li className="list-item" type="submit" onClick={handleClickGame}>
              {game.name}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default PocketGames;
