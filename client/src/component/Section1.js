import React, { useState } from "react";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";

var mobile = require("../assets/images/mobile 2.jpeg");
var banner = require("../assets/images/banner.jpeg");

const Section1 = () => {
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

  const isEmailValid = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const isPhoneValid = (phone) => {
    console.log(phone);
    const phoneno = /^\d{10}$/;
    return phone.match(phoneno);
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
    if (formData.email === '') {
      err.email = true;
    } else if (!isEmailValid(formData.email)) {
      err.validEmail = true;
    } 
    if (formData.phone === '') {
      err.phone = true;
    } else if (!isPhoneValid(formData.phone)) {
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
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <section className="slider">
        <div className="swiper-container" id="bannerSwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide d-none d-sm-none d-md-block d-lg-block">
              <img src={banner} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </section>
      <section className="slider">
        <div className="swiper-container" id="bannerSwiper-mob">
          <div className="swiper-wrapper">
            <div className="swiper-slide d-block d-sm-block d-md-none d-lg-none">
              <img src={mobile} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </section>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12  col-lg-2 col-md-2 col-sm-12 d-none d-sm-none d-md-block d-lg-block banner-text1">
              {/* <h5 class="mont-reg fs-xs-20 fs-sm-20 text-center color-white wow fadeIn" data-wow-delay="0.1s">3 & 4 Bedroom Apartments & Villas <br>starting ₹ 2.99 Cr*<br><br>Located in Whitefield</h5> */}
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12 d-none d-sm-none d-md-block d-lg-block" />
            <div
              className="col-12 col-lg-4 col-md-4 col-sm-12 text-lg-right text-md-right mt-50 mt-xs-0 mt-sm-0 padding-0 "
              style={{ zIndex: 1 }}
              id="form-mob"
            >
              <div className="form-bg">
                <div className="form-border">
                  <h6
                    id="form-scroll"
                    className="contact-form-bg text-center text-sm-center text-lg-center text-md-center form-head open-sans"
                  >
                    Get in Touch!
                  </h6>
                  <div className="form-holder">
                    <form
                      className="desktop-form padd-both-15 pb-15"
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
                          <div className="help-block with-errors">Please enter name</div>
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
                      <div
                        className="mt-10 form-group mb-0 text-left radio-text"
                        style={{ color: "#000 !important" }}
                      >
                        <input
                          type="radio"
                          name="agreeToPromotion"
                          defaultChecked=""
                          defaultValue="I agree to receive more information on this project"
                        />{" "}
                        I agree to receive more information
                      </div>
                      <div
                        className="g-recaptcha"
                        id="rcaptcha"
                        data-sitekey="6LfP9A4hAAAAAHtVl5bb1lP1Y9laT_HZRqZbXMxN"
                      />
                      <span id="captcha" style={{ color: "red" }} />
                      <div className="mt-20">
                        <button
                          type="submit"
                          className="btn btn-primary text-center chunkfive-regular text-uppercase submit-btn"
                          id="requestotp"
                        >
                          SUBMIT
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-one-bg d-lg-block d-md-block d-sm-none d-none ">
        <div className="container padding-0">
          <div className="row section-one-overlay padding-0">
            <div className="col-md-6">
              <div
                className=" pt-50 pb-50 pt-xs-20 pb-xs-20 pt-sm-20 pb-sm-20 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div
                  className="section-one-padding wow fadeIn"
                  data-wow-delay="0.2s"
                >
                  <h4 className="mont-reg fs-xs-20 fs-sm-20 mb-10 mb-xs-10 mb-sm-10">
                    <b>Exclusive, Limited-Period Offers</b>
                  </h4>

                  <h6 className="mont-reg fs-xs-20 fs-sm-20 mb-10 mb-xs-10 mb-sm-10">
                    <b>
                      {/* Inaugural discount of INR 500/-sft Valid till 16th October
                                            2022 */}
                    </b>
                  </h6>
                  <hr />
                  <h6 className="mont-reg fs-xs-20 fs-sm-20 mb-10 mb-xs-10 mb-sm-10">
                    <b>30-20-50 Payment Plan</b>
                  </h6>
                  <hr />
                  <ul>
                    <li>5% to book your home</li>
                    <li>25% within 60 days of booking</li>
                    <li>
                      20% of Completion of 20th structural slab or December 2024
                      whichever is later
                    </li>
                    <li>50% on Possession</li>
                  </ul>
                  <hr />
                  <h6 className="mont-reg fs-xs-20 fs-sm-20 mb-10 mb-xs-10 mb-sm-10">
                    <b>
                      Complimentary Upgrade from Green to Blue Specifications
                      worth up to ~INR 29L to INR 49L*
                    </b>
                  </h6>
                  <hr />
                  <h6 className="mont-reg fs-xs-20 fs-sm-20 mb-10 mb-xs-10 mb-sm-10">
                    <b>
                      Complimentary access to our Proprietary Interior Design
                      Platform E- Design
                    </b>
                  </h6>
                  <hr />
                  <h6 className="mont-reg fs-xs-20 fs-sm-20 mb-10 mb-xs-10 mb-sm-10">
                    <b>Dedicated Design Manager</b>
                  </h6>
                  <hr />
                  <h6 className="mont-reg fs-xs-20 fs-sm-20 mb-10 mb-xs-10 mb-sm-10">
                    <b>3 Year Complimentary Maintenance</b>
                  </h6>
                  <hr />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 paddin "
              style={{ backgroundColor: "rgba(135, 43, 32, 0.7)" }}
            >
              <div className="form-border1 mt-70">
                <h6
                  id="form-scroll"
                  className="contact-form-bg text-center text-sm-center text-lg-center text-md-center form-head open-sans"
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
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="Name"
                        className="form-control"
                        placeholder="Name *"
                        pattern="^[a-zA-Z\s]+$"
                        required=""
                        data-error="Please enter your name"
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="Phone"
                        id="Mobile-mob1"
                        onKeyPress="return isNumber(event)"
                        pattern="^\d{10}$"
                        className="form-control w-100"
                        placeholder="Contact No *"
                        required=""
                        data-error="Valid number please"
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="Email"
                        className="form-control"
                        placeholder="Email *"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        required=""
                        data-error="Vaild email please"
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <input
                      type="hidden"
                      id="header-form-action"
                      name="form-action"
                      defaultValue="details-up"
                    />
                    <div
                      className="mt-10 form-group mb-0 text-left radio-text"
                      style={{ color: "#000 !important" }}
                    >
                      <input
                        type="radio"
                        name="agree"
                        defaultChecked=""
                        defaultValue="I agree to receive more information on this project"
                      />{" "}
                      I agree to receive more information
                    </div>
                    <div
                      className="g-recaptcha"
                      id="rcaptcha"
                      data-sitekey="6LfP9A4hAAAAAHtVl5bb1lP1Y9laT_HZRqZbXMxN"
                    />
                    <span id="captcha" style={{ color: "red" }} />
                    <div className="mt-20">
                      <input
                        type="submit"
                        style={{
                          width: "100%",
                          border: "none",
                          cursor: "pointer",
                          backgroundColor: "#872b20 !important",
                          color: "#fff !important",
                          fontWeight: "bold",
                        }}
                        className="submit-btn btn btn-primary text-uppercase"
                      />
                    </div>
                    <input
                      type="hidden"
                      className="form-url"
                      name="SourceURL"
                      defaultValue="https://total-environment-projects.com/pursuit-of-a-radical-rhapsody/?utm_source=Google&utm_medium=Search&utm_campaign=Brand-POARR&gclid=Cj0KCQjwyt-ZBhCNARIsAKH1177v7sZ1T9CQCIy_g6MesmJXaKpbA5cFJjIow0PkXWUvEfWNKrnUMTgaAi0NEALw_wcB"
                    />
                    <input
                      type="hidden"
                      className="form-url"
                      name="Leadsource"
                      defaultValue="Google"
                    />
                    <input
                      type="hidden"
                      className="form-url"
                      name="UtmMedium"
                      defaultValue="Search"
                    />
                    <input
                      type="hidden"
                      className="form-url"
                      name="UtmCampaign"
                      defaultValue="Brand-POARR"
                    />
                    <input
                      type="hidden"
                      className="form-url"
                      name="UtmContent"
                      defaultValue="NA"
                    />
                    <input
                      type="hidden"
                      className="form-url"
                      name="utmTerm"
                      defaultValue="NA"
                    />
                    <input
                      type="hidden"
                      className="form-url"
                      name="ProjectInterested"
                      defaultValue="Total Environment Pursuit of A Radical Rhapsody"
                    />
                    <input
                      type="hidden"
                      className="form-url"
                      name="SourceType"
                      defaultValue="Digital"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-lg-none d-md-none d-sm-block d-block">
        <div className="wow fadeIn" data-wow-delay="0.1s">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className=" col-lg-6 col-12" />
                  <div className="col-lg-6 col-12">
                    <div
                      className="section-one-padding wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      <h4 className="mont-reg fs-xs-20 fs-sm-20 mb-10 mb-xs-10 mb-sm-10">
                        <b>Exclusive, Limited-Period Offers</b>
                      </h4>
                      <hr />
                      {/* <h6 className="mont-reg fs-xs-20 fs-sm-20 mb-10 mb-xs-10 mb-sm-10">
                                                <b>
                                                    Inaugural discount of INR 500/-sft Valid till 16th October
                                                    2022
                                                </b>
                                            </h6> */}
                      {/* <hr /> */}
                      <h6 className="mont-reg fs-xs-20 fs-sm-20 mb-10 mb-xs-10 mb-sm-10">
                        <b>30-20-50 Payment Plan</b>
                      </h6>
                      <ul>
                        <li>5% to book your home</li>
                        <li>25% within 60 days of booking</li>
                        <li>
                          20% of Completion of 20th structural slab or December
                          2024 whichever is later
                        </li>
                        <li>50% on Possession</li>
                      </ul>
                      <hr />
                      <h6 className="mont-reg fs-xs-20 fs-sm-20 mb-10 mb-xs-10 mb-sm-10">
                        <b>
                          Complimentary Upgrade from Green to Blue
                          Specifications worth up to ~INR 29L to INR 49L*
                        </b>
                      </h6>
                      <hr />
                      <h6 className="mont-reg fs-xs-20 fs-sm-20 mb-10 mb-xs-10 mb-sm-10">
                        <b>
                          Complimentary access to our Proprietary Interior
                          Design Platform E- Design
                        </b>
                      </h6>
                      <hr />
                      <h6 className="mont-reg fs-xs-20 fs-sm-20 mb-10 mb-xs-10 mb-sm-10">
                        <b>Dedicated Design Manager</b>
                      </h6>
                      <hr />
                      <h6 className="mont-reg fs-xs-20 fs-sm-20 mb-10 mb-xs-10 mb-sm-10">
                        <b>3 Year Complimentary Maintenance</b>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
