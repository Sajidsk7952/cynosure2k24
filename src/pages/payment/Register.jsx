import React from "react";
import { paymentData } from "../../assests/paymentData";
import PaymentCard from "./paymentCard/PaymentCard";
import "./payment.css";
import payment from "../../assests/payment.png";
const Register = () => {
  return (
    <div className="register_container" style={{background: `url(${payment})`}}>
      {/* <div className="register_box">
        <img src={payment} alt="background" className="register_background" />
      </div> */}
      <div className="register_page">
        <h2 className="register_head">Checkout our plans</h2>
        <p className="register_text">choose a plan to continue</p>
        <ul className="register_plans">
          {paymentData.map((plan, index) => (
            <li key={index}>
              <PaymentCard plan={plan} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Register;
