import React, { useEffect } from "react";
import "./terms.css";
const Terms = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  },[])
  return (
    <div className="terms_container">
      <h2 className="tems_head">Terms and Conditions</h2>
      <div className="terms_content">
        <p className="terms_info">
          1.Attendance at any of the Activities requires mandatory registration
          for the Event
        </p>
        <p className="terms_info">
          2.Payments, regardless of the mode, are non-refundable
        </p>
        <p className="terms_info">
          3.The decision of the organizers is ultimate and will not be subject to
          dispute under any circumstances.
        </p>
        <p className="terms_info">
          4.Neither the Organizers nor the management hold responsibility for the
          personal belongings of participants.
        </p>
        <p className="terms_info">
          5.Any participant or team found engaging in malpractice will be promptly
          disqualified from the activity and may additionally face
          deregistration from the event if deemed necessary.
        </p>
        <p className="terms_info">
          6.Candidates must remain available at the venue for the registered
          activity as announced prior to the event schedule.
        </p>
        <p className="terms_info">
          7.The candidate is required to bring the original ID proof used during
          event registration and have it available throughout the entire
          duration of the event.
        </p>
      </div>
    </div>
  );
};

export default Terms;
