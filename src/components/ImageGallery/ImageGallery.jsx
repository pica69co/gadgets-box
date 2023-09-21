import React from "react";
import "./ImageGallery.css";
import { storm } from "../../pages/Storm/storm";

const ImageGallery = ({ namePage }) => {
  const filtered = storm.filter((s) => s.name === namePage);
  
  return (
    <div className="images-container">
      <aside className="helper"> <a href="/storm">Storm-Tracking</a></aside>
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
                  <a href={url.url} rel="noopener noreferrer" target="_blank">
                    <img src={url.url} alt={url.alt} title={url.title} />
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
