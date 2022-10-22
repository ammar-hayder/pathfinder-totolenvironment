import React from 'react'

const ContactUs = () => {
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
                                            className="form-control w-100"
                                            pattern="^\d{10}$"
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
                                        defaultValue="bottomotp-up"
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
