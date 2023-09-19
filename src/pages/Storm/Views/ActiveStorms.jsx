import React from "react";
import "../Storm.css";
import ImageGallery from "../../../components/ImageGallery/ImageGallery";

const ActiveStorms = () => {
  const namePage = "Active Storms";
  // console.log(filtered);
  return <ImageGallery namePage={namePage} />;
};

export default ActiveStorms;
