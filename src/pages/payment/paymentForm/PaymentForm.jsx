import React from "react";
import { useParams } from "react-router-dom";
import { paymentData } from "../../../assests/paymentData";
import qr from "../../../assests/qr.jpg";
import "./paymentform.css";
const PaymentForm = () => {
  const params = useParams();
  // console.log(params.id);
  const pack = paymentData.find((item) => item.id === params.id);
  // console.log(pack);
  return (
    <section className="payment_form_container">
      <form className="paymentForm">
        <div className="payment_form_element">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="payment_input"/>
          <div className="payment_validation_error"></div>
        </div>
        <div className="payment_form_element">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="payment_input"/>
          <div className="payment_validation_error"></div>
        </div>
        <div className="payment_form_element">
          <label htmlFor="number">Mobile Number</label>
          <div className="payment_mobile_input">
            <span className="payment_number_digit">+91</span>
            <input type="number" name="number" className="payment_number_input"/>
          </div>
          <div className="payment_validation_error"></div>
        </div>
        <div className="payment_options">
          <h2>Payment Options</h2>
          <div>
            <img src={qr} alt="Qr code" className="payment_scanner" />
            <div className="payment_upi">
              <p className="payment_upi_id">gun128@ybl</p>
              <p className="payment_upi_id">example@upi</p>
              <p className="payment_upi_id">example@upi</p>
            </div>
          </div>
        </div>
        <div></div>
        <div className="payment_form_element">
          <label htmlFor="utr-number">UTR number</label>
          <input type="number" name="utr-number" />
          <div className="payment_validation_error"></div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default PaymentForm;
