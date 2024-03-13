import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import "./video.css";
import AOS from "aos";
import "aos/dist/aos.css";

const VideoComp = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="videoBox" >
      <div className="videoContainer" data-aos="zoom-in">
        <ReactPlayer
          className="react-player"
          url="https://youtu.be/9DbSHaOsLfI?si=kROUvRgkSe8N_CTs"
          controls={true}
          muted={true}
        />
      </div>
    </div>
  );
};

export default VideoComp;
