import React, { useEffect, useState } from "react";
import { FetchWebcams, FetchWebcamsById } from "../webcams";
import VideoPlayer from "../../../components/VideoPlayer/VideoPlayer";
import link from "../../../assets/images/link-svgrepo-com.svg";
import "../Storm.css";

const Webcams = () => {
  const [webcams, setWebcams] = useState(null);
  const [camDetails, setCamDetails] = useState(null);

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    FetchWebcams().then((data) => setWebcams(data));
    setLoading(false);
  }, []);

  const handlerClick = (e) => {
    const webcamId = e.target.id;
    setLoading(true);
    setModal(true);

    FetchWebcamsById(webcamId)
      .then((data) => {
        setCamDetails(data);
      })
      .catch((error) => {
        console.log(error);
      });

    setLoading(false);
  };
  //console.log(camDetails);
  return (
    <div>
      <div className="head">
        <h1>Webcams</h1>
      </div>
      {/*TODO: Modal */}
      {modal && (
        <VideoPlayer
          camDetails={camDetails}
          modal={modal}
          setModal={setModal}
          loading={loading}
          setLoading={setLoading}
        />
      )}
      <div>
        <h5 style={{ color: "chocolate" }}>
          Sorry, This Page is Actually Under Construction
        </h5>
        {loading
          ? "Loading..."
          : webcams?.webcams?.map((webcam, id) => (
              <div key={id} className="webcams-list">
                <h3>{webcam.title}</h3>
                {/* <h5>{webcam.status}</h5> */}
                <button
                  className="button-getLink"
                  id={webcam.webcamId}
                  onClick={handlerClick}
                >
                  <img src={link} alt="link" width={12} height={10} />
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Webcams;
