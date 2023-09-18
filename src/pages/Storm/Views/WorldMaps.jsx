import React from "react";
import { storm } from "../storm";

const WorldMaps = () => {
  const filtered = storm.filter(
    (s) => s.name === "world maps"
  );

  return (
    <div className="world">
      <div>
        <h1 className="world-title">World Maps</h1>
        <div className="world-list">
          <div className="list-item">
            <h1>{filtered[0].desc}</h1>
            <img
              src={filtered[0].url}
              alt="world"
              width={350}
              height={150}
              title={filtered[0].desc}
            />
          </div>

          {/*ToDo: component GalleryImages */}

          <div className="list-item">
            <h1>{filtered[0].desc2}</h1>
            <img
              src={filtered[0].url2}
              alt="world2"
              width={350}
              height={150}
              title={filtered[0].desc2}
            />
          </div>
          
          <div className="list-item">
            <h1>{filtered[0].desc3}</h1>
            <img
              src={filtered[0].url3}
              alt="world3"
              width={350}
              height={150}
              title={filtered[0].desc3}
            />
          </div>

          <div className="list-item">
            <h1>{filtered[0].desc4}</h1>
            <img
              src={filtered[0].url4}
              alt="world4"
              width={350}
              height={150}
              title={filtered[0].desc4}
            />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default WorldMaps