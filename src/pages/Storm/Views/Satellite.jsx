import React from "react";
import { storm } from "../storm";

const Satellite = () => {
  const filtered = storm.filter(
    (s) => s.name === "Satellite images for cyclone tracking"
  );

  return (
    <div className="satellite">
      <div>
        <h1 className="satellite-title">Satellite Images</h1>
        <div className="satellite-list">
          <div className="list-item">
            <h1>{filtered[0].desc}</h1>
            <img
              src={filtered[0].url}
              alt="satellite"
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
              alt="satellite"
              width={350}
              height={150}
              title={filtered[0].desc2}
            />
          </div>
          {!filtered[0].desc3 ? null : (
            
          <div className="list-item">
            <h1>{filtered[0].desc3}</h1>
            <img
              src={filtered[0].url3}
              alt="satellite3"
              width={350}
              height={150}
              title={filtered[0].desc3}
            />
          </div>
          )}

          <div className="list-item">
            <h1>{filtered[0].desc4}</h1>
            <img
              src={filtered[0].url4}
              alt="satellite4"
              width={450}
              height={250}
              title={filtered[0].desc4}
            />
          </div>
         
        </div>
      </div>
    </div>
  );
};


export default Satellite