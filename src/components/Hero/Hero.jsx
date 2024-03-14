import React, { useEffect } from "react";
import { gsap } from "gsap";
import Parallax from "parallax-js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { bannerImgs } from "../../assests/banner";
import "./Home.css";
import QueryForm from "../queryform/QueryForm";
import Cards from "../events/Events";
import VideoComp from "../video/VideoComp";

const Smoke = () => (
  <section className="smoke-section">
    <h1 className="head">
      <span>C</span>
      <span>Y</span>
      <span>N</span>
      <span>O</span>
      <span>S</span>
      <span>U</span>
      <span>R</span>
      <span>E</span>
    </h1>
    {/* <div className="mouse-scroll">
      <div className="arrow-scroll">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </div>
    </div> */}
  </section>
);

const Header = () => {
  useEffect(() => {
    const parallaxInstance = new Parallax(document.getElementById("scene"));

    gsap.to(".rock1", {
      y: 12,
      repeat: -1,
      yoyo: true,
      duration: 2,
      delay: 0,
    });

    return () => parallaxInstance.destroy();
  }, []);

  return (
    <section id="sectionone" className="screen">
      <div id="scene" className="scene">
        <div data-depth="0.1" className="bg">
          <img src={bannerImgs.background} alt="background" />
        </div>
        <div data-depth="0.2" className="rock1">
          <img src={bannerImgs.rock} alt="rock" />
        </div>
        <div data-depth="1.2" className="earth">
          <img src={bannerImgs.earth} alt="earth" />
        </div>
        <div data-depth="0.4" className="mid">
          <img src={bannerImgs.mid} alt="mid" />
        </div>
        <div data-depth="0.1" className="fore">
          <img src={bannerImgs.foreground} alt="foreground" />
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
        <section className="top">
          <div>
            <Header />
            <h1>
              <Smoke />
            </h1>
          </div>
        </section>
      <Cards />
      <VideoComp/>
      <QueryForm />
    </>
  );
};

export default Home;
