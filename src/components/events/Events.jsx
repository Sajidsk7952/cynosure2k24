import React, { useEffect } from "react";
import { cynosureEvents } from "../../assests/data"; // Corrected import statement
// import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import "./event.css";
import { useNavigate } from "react-router-dom";
const Cards = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="cards" data-aos="fade-up">
      {/* <h1 className="cards-title">Events</h1> */}
      <div className="cards-container">
        {cynosureEvents.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-image-container">
              <img src={item.img} alt={item.name} className="card-image" />
            </div>
            <div className="card-content">
              <h5 className="card-content-title">{item.name}</h5>
              <p className="card-content-info">{item.content}</p>
              <div className="button-container">
                <button
                  className="view-button"
                  onClick={() => {
                    navigate(`/events/:${item.id}`);
                  }}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
