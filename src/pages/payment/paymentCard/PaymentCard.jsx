import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import "./paymentCars.css";
// import { useNavigate } from "react-router-dom";
const PaymentCard = ({ plan }) => {
  // console.log(plan);
  // const navigate = useNavigate();
  return (
    <div className="payment_card_container">
      <h2 className="payment_card_head">{plan.name}</h2>
      <div className="payment_card_img_box">
        <img
          src={plan.img}
          alt="membership"
          className="payment_card_img"
        />
      </div>
      <h3 className="payment_card_inclusion_head">The inclusions for this plan are:</h3>
      <ul className="payment_card_inclusions">
        {plan.inclusions.map((ele, index) => (
          <li key={index} className="payment_card_item">
            {ele}
          </li>
        ))}
        {plan.price ? <li className="payment_card_item">
          starts from{" "}
          <span className="payment-card_price">
            <MdCurrencyRupee />
            {plan.price}
          </span>
        </li> : null}
        <button className="payment_button">
          <a href={plan.url} target="_blank" rel="noopener noreferrer">
            Register
          </a>
        </button>
      </ul>
    </div>
  );
};

export default PaymentCard;
