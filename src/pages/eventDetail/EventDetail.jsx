import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdEmail } from "react-icons/md"; // Import necessary react-icons
import { BsInstagram } from "react-icons/bs";
import { cynosureEvents } from "../../assests/data";
import "./eventdetail.css";
import AOS from "aos";
import "aos/dist/aos.css";
const EventInfoPage = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top: 0,
    });
  }, []);
  const eventId = useParams(); // Extracting eventId from URL params
  console.log(eventId.id);
  const eventid = eventId.id.substring(1);
  console.log(eventid);
  // Finding the event object from the events array based on eventId
  const event = cynosureEvents.find((event) => event.id === eventid);
  console.log(event);
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-info" data-aos="fade-up" data-aos-duration="1000">
      <h2
        className="event-info-heading"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        {event.name}
      </h2>
      <p
        className="event-info-content"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        {event.description}
      </p>
      <h3
        className="event-inst-heading"
        data-aos="fade-up-right"
        data-aos-duration="3000"
      >
        Instructions:
      </h3>
      <ul
        className="event-inst-lest"
        data-aos="fade-up-right"
        data-aos-duration="3000"
      >
        {event.instructions.rounds === 2 && (
          <h3 className="event-inst-head">Round 1:</h3>
        )}
        {event.instructions.round1?.map((instruction, index) => (
          <li key={index} className="event-inst-info">
            {instruction}
          </li>
        ))}
      </ul>
      <ul
        className="event-inst-lest"
        data-aos="fade-up-right"
        data-aos-duration="3000"
      >
        {event.instructions.rounds === 2 && (
          <h3 className="event-inst-head">Round 2:</h3>
        )}
        {event.instructions.round2?.map((inst, index) => (
          <li key={index} className="event-inst-info">
            {inst}
          </li>
        ))}
      </ul>
      {event.topics ? (
        <div className="topics">
          <h2 className="topic_head">Topics:</h2>
          <p className="topic_text">
            The topic of the paper should be related to the field of Computer
            science.
          </p>
          <p className="topic_text">
            Some topics related to Computer Science and Engineering are:(but not
            limited)
          </p>
          <ul className="topics_list">
            {event.topics.map((topic,index)=>(
              <li key={index} className="topic_info">{topic}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <h3
        className="coordinator-head"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Co-Ordinators
      </h3>
      <div className="coordinator-cards">
        {event.coOrdinaters?.map((coOrdinator) => (
          <div
            className="testimonialContainer"
            key={coOrdinator.name}
            data-aos="flip-up"
            data-aos-duration="4000"
          >
            <div className="testimonialHeader">
              <div className="nameContainer">
                <h4>{coOrdinator.name}</h4>
                <p>Final Year, CSE</p>
              </div>
            </div>
            <div className="testimonialBody">
              <p className="testimonialBodyText">{coOrdinator.suggestion}</p>
            </div>
            <div className="social-icons">
              <a
                href={`mailto:${coOrdinator.socialAccounts.email}`}
                target="blank"
              >
                <MdEmail style={{ color: "white", fontSize: "30px" }} />
              </a>
              <a href={coOrdinator.socialAccounts.instagram} target="blank">
                <BsInstagram style={{ color: "white", fontSize: "25px" }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventInfoPage;
