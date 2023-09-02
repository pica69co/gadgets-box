import React from "react";
import "./PocketGames.css";
import games from "./dataGames";
import Background from "../../components/MemoryGame/Background";

const PocketGames = () => {
  const handleClickGame = (url) => {
    window.open(`${url}`, "Hunt The Ace Window", "width=800, height=900");
  };

  return (
    <div>
      <div className="title">
        <h1>PocketGames</h1>
      </div>
      <div className="hunt">
        {games.map((game) => (
          <ul key={game.name} className="list-group">
            <li
              className="list-item"
              type="submit"
              onClick={() => handleClickGame(game.url)}
              >
              {game.name}
            </li>
          </ul>
        ))}
      </div>
    <Background/>
    </div>
  );
};

export default PocketGames;
