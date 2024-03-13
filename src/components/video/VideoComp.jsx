import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import "./video.css";
import AOS from "aos";
import "aos/dist/aos.css";

const VideoComp = () => {
  // const url = "https://youtu.be/9DbSHaOsLfI?si=kROUvRgkSe8N_CTs";
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="videoBox">
      <div className="videoContainer" data-aos="zoom-in">
        <div className="video-responsive">
          <iframe
            src="https://www.youtube.com/embed/9DbSHaOsLfI?si=8rSXRU5iNefpEnLU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoComp;
