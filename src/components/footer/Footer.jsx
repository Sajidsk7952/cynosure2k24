import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  console.log(" footer component ");
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="textsection">
          <h2 className="footer_heading">
            <span className="footer-cse">C</span>yno
            <span className="footer-cse">S</span>ur
            <span className="footer-cse">E</span>
          </h2>
          <p className="footer_terms">
            <Link to="/terms">terms & conditions</Link>
          </p>
        </div>
        <div className="icons" target="blank">
          <a
            href="https://www.instagram.com/cynosure_2k24?igsh=b21iNDg1eWN0ZWto"
            target="blank"
          >
            <FaInstagram />
          </a>
          {/* <a href="">
              <FaWhatsapp />
            </a> */}
          <a
            href="https://youtube.com/@svucestudentversion5669?si=mC6aChyBeSwCe-ZF"
            target="blank"
          >
            <CiYoutube />
          </a>
          <a href="mailto:csecynosure2k24@gmail.com" target="blank">
            <BiLogoGmail />
          </a>
        </div>
      </div>
      <p className="svuce">
        made with{" "}
        <FaHeart
          style={{ color: "red", fontSize: "18px", margin: "0", padding: "0" }}
        />{" "}
        from SVUCE
      </p>
    </footer>
  );
};

export default Footer;
