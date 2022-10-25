import React, { useState } from "react";
import axios from "axios";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  * as utils from '../utils/index.js';
import ReCAPTCHA from "react-google-recaptcha";


const ContactUs = () => {
    const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  

  const [error, setError] = useState({
    fullName: false,
    phone: false,
    validPhone: false,
    email: false,
    validEmail: false,
  });
  const [agreeToPromotion, setAgreeToPromotion] = useState(false);

  

  

  const handleChange = (e) => {
    switch (e.target.name) {
      case "fullName":
        setFullName(e.target.value);

        break;
      case "email":
        setEmail(e.target.value);

        break;
      case "phone":
        setPhone(e.target.value);
        break;
      default:
        setError({ ...error });
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    // const action = 'https://script.google.com/macros/s/AKfycbwUTn_6kDKNifjdho_K7lDqo7SrH6NRxOZQjzA1Nt8ATT4GerAlnPV96CtSsKHWN_C4/exec';
    // let formData = new FormData();
    // formData.append('Name', 'ammar')
    // const config = {
    //     headers: { 'content-type': 'multipart/form-data' }
    // }

    const formData = {
      fullName: fullName,
      email: email,
      phone: phone,
      agree: agreeToPromotion,
    };
    console.log(formData);
    let err = {
      fullName: false,
      phone: false,
      validPhone: false,
      email: false,
      validEmail: false,
    };
    
    if (formData.fullName === "") {
      err.fullName = true;
    }
    console.log(err)
    if (formData.email === '') {
      err.email = true;
    } else if (!utils.isEmailValid(formData.email)) {
      err.validEmail = true;
    } 
    if (formData.phone === '') {
      err.phone = true;
    } else if (!utils.isPhoneValid(formData.phone)) {
      err.validPhone = true;
    }
    console.log(err);
    setError({ ...err });
    if (
      !err.fullName &&
      !err.email &&
      !err.phone &&
      !err.validEmail &&
      !err.validPhone
    ) {
      axios
        .post("/contact-us", formData)
        .then((response) => {
          console.log(response);
          setFullName('');
          setEmail('')
          setPhone('')
          toast.success('🦄 Form Submited Successfully!', {
            toastId:'RequestBrochure',
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
    return (
        <section
            className="contact-section"

        >
            <div className="container">
                <div className="row" style={{ paddingBottom: 30 }}>
                    <div className="col-md-12">
                        <h4 className="mont-reg fs-30 text-white fs-xs-20 fs-sm-20 text-center m mb-xs-10 mb-sm-10 mt-30">
                            <b>Contact Us</b>
                        </h4>
                    </div>
                    <div className="col-md-1 d-lg-block d-md-block d-sm-none d-none" />
                    <div className="col-md-4 col-12">
                        <div className="form-border1 mt-70">
                            <h6
                                id="form-scroll"
                                className="contact-form-bg text-white text-center text-sm-center fs-18  text-lg-center text-md-center form-head open-sans"
                            >
                                Get in Touch!
                            </h6>
                            <div className="form-holder">
                                <form
                                    className="desktop-form padd-both-15 pb-15"
                                    action="contact.php"
                                    method="post"
                                    id="actual-form"
                                    data-toggle="validator"
                                    onSubmit={submitData}
                                >
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="fullName"
                                            className="form-control"
                                            placeholder="Name *"
                                            onChange={handleChange}
                                            value={fullName}
                                        />
                                        {error.fullName && (
                                        <div className="help-block with-errors err-col">Please enter name</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="phone"
                                            // pattern="^\d{10}$"
                                            className="form-control w-100"
                                            placeholder="Contact No *"
                                            required=""
                                            onChange={handleChange}
                                            value={phone}
                                        />
                                        {error.phone && (
                                            <div className="help-block with-errors err-col">
                                            Please enter your phone number
                                            </div>
                                        )}
                                        {error.validPhone && (
                                            <div className="help-block with-errors err-col">
                                            Please enter valid phone number
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email *"
                                            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                            onChange={handleChange}
                                            value={email}
                                        />
                                        {error.email && (
                                        <div className="help-block with-errors err-col">
                                            Please enter your email
                                        </div>
                                        )}
                                        {error.validEmail && (
                                        <div className="help-block with-errors err-col">
                                            Please enter your valid email
                                        </div>
                                        )}
                                    </div>
                                    <input
                                        type="hidden"
                                        id="header-form-action"
                                        name="form-action"
                                        defaultValue="bottomotp-up"
                                    />
                                    <div
                                        className="mt-10 form-group mb-0 text-left radio-text err-col"
                                        // style={{ color: "#000 !important" }}
                                    >
                                        <input
                                            type="radio"
                                            name="agree"
                                            defaultChecked=""
                                            defaultValue="I agree to receive more information on this project"
                                        />{" "}
                                        I agree to receive more information
                                    </div>
                                    <ReCAPTCHA
                                    sitekey="6LeEELAiAAAAAI0q8_XWd0Qa3borS6jvKizvVSAA"
                                    />
                                   
                                    <span id="captcha" style={{ color: "red" }} />
                                    <div className="mt-20">
                                        <input
                                            type="submit"
                                            className="submit-btn btn btn-primary text-uppercase btn-submit"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 d-lg-block d-md-block d-sm-none d-none" />
                    <div className="col-md-6 col-12 align-self-center">
                        <div
                            className=" pt-50 pb-50 pt-xs-20 pb-xs-20 pt-sm-20 pb-sm-20 wow fadeIn "
                            data-wow-delay="0.1s"
                        >
                            <div
                                className="section-one-padding wow fadeIn align-self-center"
                                data-wow-delay="0.2s"
                            >
                                <a href="https://wa.me/+919380071695">
                                    <h4 className="mont-reg fs-xs-20 fs-sm-20 text-white mb-10 mb-xs-10 mb-sm-10">
                                        <b>
                                            <i className="fa fa-whatsapp" /> &nbsp; +91 93800 71695
                                        </b>
                                    </h4>
                                </a>
                                <hr />
                                <a href="tel:+919380071695">
                                    <h4 className="mont-reg fs-xs-20 fs-sm-20 text-white mb-10 mb-xs-10 mb-sm-10">
                                        <b>
                                            <i className="fa fa-phone" style={{ border: "none" }} /> +91
                                            93800 71695
                                        </b>
                                    </h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default ContactUs
