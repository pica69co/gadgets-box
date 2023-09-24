import React from "react";
import { motion } from "framer-motion";
import wikis from "./dataWikis";
import Background from "../../../components/MemoryGame/Background";

const PocketWikis = () => {
  const handleClickGame = (url, name) => {
    window.open(`${url}`, `${name}`, "width=800, height=900");
  };

  return (
    <motion.div 
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth, transition:{duration:0.1}}}
    >
      <div className="title">
        <h1>PocketWikis</h1>
      </div>
      <div className="hunt">
        {wikis.map((wiki) => (
          <ul key={wiki.name} className="list-group">
            <li
              className="list-item"
              type="submit"
              onClick={() => handleClickGame(wiki.url, wiki.name)}
              >
              {wiki.name}
            </li>
          </ul>
        ))}
      </div>
    <Background/>
    </motion.div>
  );
};
export default PocketWikis