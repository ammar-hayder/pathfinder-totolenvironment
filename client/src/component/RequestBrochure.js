import React, { useState, useRef } from "react";
import images from "../assets/images/kit-desk.jpeg";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as utils from "../utils/index.js";
import ReCAPTCHA from "react-google-recaptcha";

const FormModal = ({ modalClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [recaptcha, setRecaptcha] = useState(undefined);
  const recaptchaRef = useRef();
  const [error, setError] = useState({
    fullName: false,
    phone: false,
    validPhone: false,
    email: false,
    validEmail: false,
  });
  const [agreeToPromotion, setAgreeToPromotion] = useState(false);

  const handleCaptcha = (value) => {
    setError({ ...error, recaptcha: false });
    setRecaptcha(value);
  };

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
    recaptchaRef.current.reset();
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

    if (formData.email === "") {
      err.email = true;
    } else if (!utils.isEmailValid(formData.email)) {
      err.validEmail = true;
    }
    if (formData.phone === "") {
      err.phone = true;
    } else if (!utils.isPhoneValid(formData.phone)) {
      err.validPhone = true;
    }

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
          setFullName("");
          setEmail("");
          setPhone("");
          modalClose();

          toast.success("Form Submited Successfully!", {
            toastId: "RequestBrochure",
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
    <div className="modal-body">
      <div className="row align-self-center">
        <div className="col-12 col-md-6 padding-5 d-lg-none d-md-none d-sm-block d-block">
          {/* <Image roundedCircle={true} src={images} /> */}
        </div>
        <div
          className="col-12  col-md-6 padding-10 align-self-center"
          id="form"
        >
          <div className="align-self-center">
            <h3 className="text-center" style={{ color: "rgb(105, 197, 233)" }}>
              Exclusive, <br /> Limited-Period Offers
            </h3>
            <h5 className="text-center fs-12">
              {" "}
              <b> Request More Details now</b>
            </h5>
            <div className="form-border1">
              <div className="form-holder">
                <form
                  className="desktop-form padd-both-15 pb-15"
                  action="https://script.google.com/macros/s/AKfycbwMc1QUPErEorW6_l1XtGTwriQr9lKH2eSdQ4nwggsnsab54Ihyy7u8E8ZA4ERIoPqYag/exec"
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
                      <div className="help-block with-errors">
                        Please enter name
                      </div>
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
                      <div className="help-block with-errors">
                        Please enter your phone number
                      </div>
                    )}
                    {error.validPhone && (
                      <div className="help-block with-errors">
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
                      <div className="help-block with-errors">
                        Please enter your email
                      </div>
                    )}
                    {error.validEmail && (
                      <div className="help-block with-errors">
                        Please enter your valid email
                      </div>
                    )}
                  </div>
                  {/* <input
                      type="hidden"
                      id="header-form-action"
                      name="form-action"
                      defaultValue="pop-up"
                    /> */}
                  {/* <div
                      className="mt-10 form-group mb-0 text-left radio-text"
                      style={{ color: "#000 !important" }}
                    /> */}
                  <input
                    type="radio"
                    name="agree"
                    defaultChecked=""
                    defaultValue="I agree to receive more information on this project"
                  />{" "}
                  I agree to receive more information
                  <ReCAPTCHA
                    sitekey="6LeEELAiAAAAAI0q8_XWd0Qa3borS6jvKizvVSAA"
                    onChange={handleCaptcha}
                    ref={recaptchaRef}
                  />
                  <span id="captcha" style={{ color: "red" }} />
                  <div className="mt-20">
                    <input
                      type="submit"
                      className="submit-btn btn btn-primary text-uppercase btn-submit "
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 padding-5 d-lg-block d-md-block d-sm-none d-none">
          <Image rounded={true} src={images} />
        </div>
      </div>
    </div>
  );
};

const RequestBrochure = ({ theme = "desktop" }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {theme === "mobile" ? (
        <a
          href="#"
          onClick={handleShow}
          className="scroll"
          aria-label="Enquire now"
        >
          Enquire
        </a>
      ) : (
        <div className="text-center">
          <button
            onClick={handleShow}
            type="submit"
            className=" btn small-submit-btn small-submit-btn:hover text-uppercase"
          >
            <strong>Request Brochure</strong>
          </button>
        </div>
      )}
      <div
        className={show?'modal fade show' :  'modal fade'}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{display:`${show?'block':'none'}`}}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close " onClick={handleClose}>
                ×
              </button>
            </div>
            <FormModal modalClose={handleClose} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestBrochure;
