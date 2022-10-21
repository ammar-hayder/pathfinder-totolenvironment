import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
var mobile = require('../assets/images/mobile 2.jpeg');
var banner = require('../assets/images/banner.jpeg');

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

const Section1 = () => {
    const { name, setName } = useState('')
    const submitData = () => {



        postData('https://example.com/answer', { name: 'ammar' })
            .then((data) => {
                console.log('successfull', data); // JSON data parsed by `data.json()` call
            });
    }
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
                                            action="https://formspree.io/f/mbjbknrz"
                                            target="_self"
                                            method="POST"
                                            className="desktop-form padd-both-15 pb-15"
                                            id="actual-form"
                                            data-toggle="validator"
                                            onSubmit={submitData}
                                        >
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Name *"
                                                    pattern="^[a-zA-Z\s]+$"
                                                    required=""
                                                    data-error="Please enter your name"
                                                    onChange={(e) => setName(e.target.value)}
                                                    value={name}
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="contact"
                                                    pattern="^\d{10}$"
                                                    onKeyPress="return isNumber(event)"
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
                                                name="mobile"
                                                defaultValue="mobile-form"
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
                                                <button
                                                    type="submit"

                                                    className="btn btn-primary text-center chunkfive-regular text-uppercase submit-btn"
                                                    id="requestotp"
                                                >
                                                    SUBMIT
                                                </button>
                                                {/* <input type="submit" style="width:100%;border:none;cursor:pointer;background-color: #872b20 !important;color: #fff !important;font-weight: bold;" class="submit-btn btn btn-primary text-uppercase"> */}
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
                                            <input
                                                type="hidden"
                                                name="IpAddress"
                                                defaultValue="103.240.76.11"
                                            />
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
                                    <hr />
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
                                            Complimentary Upgrade from Green to Blue Specifications worth
                                            up to ~INR 29L to INR 49L*
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
                                                    fontWeight: "bold"
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Section1