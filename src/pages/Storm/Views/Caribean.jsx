import React from "react";
import { storm } from "../storm";

const Caribbean = () => {
  const filtered = storm.filter(
    (s) => s.name === "Conditions in the Caribbean Sea"
  );

  return (
    <div className="caribbean">
      <div>
        <h1 className="caribbean-title">Conditions in the Central America</h1>
        <div className="caribbean-list">
          <div className="list-item">
            <h1>{filtered[0].desc}</h1>
            <img
              src={filtered[0].url}
              alt="caribbean"
              width={350}
              height={150}
              title="Enhanced Satellite-SkyTower "
            />
          </div>

          {/*ToDo: component GalleryImages */}

          <div className="list-item">
            <h1>{filtered[0].desc2}</h1>
            <img
              src={filtered[0].url2}
              alt="caribbean2"
              width={350}
              height={150}
              title="Satellite (Infrared) animated image"
            />
          </div>
          
          <div className="list-item">
            <h1>{filtered[0].desc3}</h1>
            <img
              src={filtered[0].url3}
              alt="caribbean3"
              width={350}
              height={150}
              title="Satellite image of the Caribbean"
            />
          </div>

          <div className="list-item">
            <h1>{filtered[0].desc4}</h1>
            <img
              src={filtered[0].url4}
              alt="caribbean4"
              width={350}
              height={150}
              title={filtered[0].desc4}
            />
          </div>

          <div className="list-item">
            <h1>{filtered[0].desc5}</h1>
            <img
              src={filtered[0].url5}
              alt="caribbean5"
              width={350}
              height={150}
              title={filtered[0].desc5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caribbean