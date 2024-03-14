import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./queryform.css";
import queryAPI from "../../services/queryService";
import AOS from "aos";
import "aos/dist/aos.css";
const QueryForm = () => {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    AOS.init();
  },[])
  const { register, handleSubmit, formState } = useForm();
  const submitHandler = async (formData) => {
    setLoading(true);
    console.log(formData);
    const currUser = await queryAPI.getAccount();
    console.log(currUser);
    if (!currUser) {
      const createUser = await queryAPI.createAnomAccount();
      console.log(createUser);
    }
    const response = await queryAPI.sendQuery({ ...formData });
    if (response) {
      const del = await queryAPI.deleteSessions();
      console.log(del);
      if(del){
        window.alert("query sent successfully!!!");
        setLoading(false);
        return;
      }
    }
    window.alert("please try after some time..");
    console.log(response);
  };
  return (
    <div className="query_form_container">
      <h2 className="query_form_heading">Enter any Query</h2>
      <form className="query_form" onSubmit={handleSubmit(submitHandler)}>
        <div className="query_form_element">
          <div className="query_form_input" data-aos="fade-up" data-aos-duration="2000">
            <label htmlFor="name" className="query_form_input_label">
              Enter your name:
            </label>
            <input
              type="text"
              id="name"
              className="query_form_input_name"
              {...register("name", {
                required: { value: true, message: "Name is Required" },
              })}
            />
          </div>
          <p className="query_form_error">{formState.errors.name?.message}</p>
        </div>
        <div className="query_form_element" data-aos="fade-up" data-aos-duration="2000">
          <div className="query_form_input">
            <label htmlFor="email" className="query_form_input_label">
              Enter your email:
            </label>
            <input
              id="email"
              type="text"
              className="query_form_input_email"
              {...register("email", {
                required: { value: true, message: "Email is Required" },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          <p className="query_form_error">{formState.errors.email?.message}</p>
        </div>
        <div className="query_form_element" data-aos="flip-up" data-aos-duration="2000">
          <div className="query_form_input">
            <label htmlFor="query" className="query_form_input_label">
              Enter your Query:
            </label>
            <textarea
              id="query"
              className="query_form_input_textarea"
              {...register("query", {
                required: { value: true, message: "Please enter your Query" },
                maxLength: {
                  value: 300,
                  message: "Message should be under 5 words",
                },
              })}
            />
          </div>
          <p className="query_form_error">{formState.errors.query?.message}</p>
        </div>
        <div className="query_form_element">
          <button type="submit" className="query_form_button">
            Submit Query
          </button>
          {loading && <p className="query_form_loading">sending query...</p>}
        </div>
      </form>
    </div>
  );
};

export default QueryForm;
