import React from "react";
import { storm } from './storm'
import "./Storm.css";

const Storm = () => {
  return (
    <div className="body">
      <h1>Storm-Tracking </h1>
      <div class="widget-content">
        <span> The </span><b>hurricane season </b>in the Atlantic extends from June 1 to November 30 and in the Eastern Pacific from May 15 to November 30.
        </div>
           <img src='https://cdn.pixabay.com/photo/2016/03/26/09/42/road-sign-1280257_960_720.jpg' alt='background' width={250} height={120} />
        <div className="tabs section" id="crosscol-overflow">
          <div className="widget PageList" >
            <h2>Pages</h2>
              <div className="widget-content">
                {storm.map((item,idx) => 
                <ul key={idx}>
                  <li>
                    <a href={`/storm/${item.path}`}>{item.name}</a>
                  </li>
                </ul>
                )}
            <div className="clear">
              <h5>&copy;Oscar Warrieta</h5>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Storm;
