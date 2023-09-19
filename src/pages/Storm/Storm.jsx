import React from "react";
import { storm } from './storm'
import "./Storm.css";

const Storm = () => {
  return (
    <div className="body">
      <h1>Storm-Tracking </h1>
      <div className="widget-content">
        <h3><strong>The hurricane season</strong> in the Atlantic extends from June 1-Nov 30 and in the Eastern Pacific from May 15-Nov 30.          
        </h3>
        </div>
           <img src='https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-CAR-02-1000x1000.gif' alt='background' width={300} height={180} />
        <div className="tabs section" id="crosscol-overflow">
          <div className="widget PageList" >
            <h2>Pages</h2>
              <div className="widget-content">
                {storm.map((item,idx) => 
                <ul key={idx}>
                  <h4>
                    <a href={`/storm/${item.path}`}>{item.name}</a>
                  </h4>
                </ul>
                )}
            </div>
            <div className="clear">
              <h5>&copy;2023 Oscar Warrieta</h5>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Storm;
