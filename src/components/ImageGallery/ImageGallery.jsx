import React from "react";
import "./ImageGallery.css";
import { storm } from "../../pages/Storm/storm";

const ImageGallery = ({ namePage }) => {
  const filtered = storm.filter((s) => s.name === namePage);

  return (
    <div className="image-gallery">
      {filtered.map((item, idx) => (
        <div className="image-list" key={idx}>
          {item.url.map((url, idx) => (
            <div className="image" key={idx + 1}>
              <h2>{url.desc}</h2>
              {namePage === "Interactive forecast models" ? (
                <h1>
                  <a href={url.url} rel="noreferrer noopener">
                    Go to Windy
                  </a>
                </h1>
              ) : (
                <img src={url.url} alt={url.alt} title={url.title} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
