import React from "react";
import { storm } from "../storm";

const Central = () => {
  const filtered = storm.filter(
    (s) => s.name === "Conditions in Central America"
  );

  return (
    <div className="central">
      <div>
        <h1 className="central-title">Conditions in the Central America</h1>
        <div className="central-list">
          <div className="list-item">
            <h1>{filtered[0].desc}</h1>
            <img
              src={filtered[0].url}
              alt="central"
              width={350}
              height={150}
              title=""
            />
          </div>

          {/*ToDo: component GalleryImages */}

          <div className="list-item">
            <h1>{filtered[0].desc2}</h1>
            <img
              src={filtered[0].url2}
              alt="central2"
              width={350}
              height={150}
              title=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Central;
