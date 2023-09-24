import React from "react";
import { motion } from "framer-motion";
import "./PocketGames.css";
import games from "./dataGames";
import Background from "../../components/MemoryGame/Background";

const PocketGames = () => {
  const handleClickGame = (url) => {
    window.open(`${url}`, "Hunt The Ace Window", "width=800, height=900");
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
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
      <Background />
    </motion.div>
  );
};

export default PocketGames;
