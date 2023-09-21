import React from "react";
import "./ImageGallery.css";
import { storm } from "../../pages/Storm/storm";

const ImageGallery = ({ namePage }) => {
  const filtered = storm.filter((s) => s.name === namePage);
 const item = filtered.map((item, idx) => item)
 console.log(item); 
 return (
      
  <div className="images-container">
    <h2 className="head">{namePage}</h2>
    <div className="image-gallery">
      {filtered.map((item, idx) => (
        <div className="image-list" key={idx}>
          {item.url.map((url, idx) => (
            <div className="image" key={idx + 1}>
              <h3>{url.desc}</h3> 
              {namePage === "Interactive forecast models" ? (
                <h3 className="windy-title">
                  <a 
                    href={url.url} 
                    rel="noreferrer noopener"
                    className="windy-link"
                    >
                    Go to Windy
                  </a>
                </h3>
              ) : (
                <a  href={url.url} rel="noopener noreferrer" target="_blank">

                  <img 
                  src={url.url} 
                  alt={url.alt} 
                  title={url.title} 
                  
                    />
                </a>
                  )}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
  );
};

export default ImageGallery;
