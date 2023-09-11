import React from "react";
import wikis from "./dataWikis";
import Background from "../../../components/MemoryGame/Background";

const PocketWikis = () => {
  const handleClickGame = (url, name) => {
    window.open(`${url}`, `${name}`, "width=800, height=900");
  };

  return (
    <div>
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
    </div>
  );
};
export default PocketWikis