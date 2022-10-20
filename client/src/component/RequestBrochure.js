import React, { useState } from 'react';
import images from '../assets/images/kit-desk.jpeg';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReCAPTCHA from "react-google-recaptcha";
import Image from 'react-bootstrap/Image';

const RequestBrochure = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onChange = () => { }
    return (
        <>
            <div className="text-center">
                <button onClick={handleShow}
                    type="submit"
                    className=" btn btn-primary small-submit-btn small-submit-btn:hover text-uppercase"
                >
                    <strong>Request Brochure</strong>
                </button>
            </div>
            <Modal show={show} onHide={handleClose} dialogClassName="modal-main">
                <Modal.Header >
                    <button type="button" className="close " onClick={handleClose}>
                        ×
                    </button>
                </Modal.Header>
                <Modal.Body>

                    <div className="modal-body">
                        <div className="row align-self-center">
                            <div className="col-12 col-md-6 padding-5 d-lg-none d-md-none d-sm-block d-block">
                                <Image roundedCircle={true} src={images} />
                            </div>
                            <div
                                className="col-12  col-md-6 padding-10 align-self-center"
                                id="form"
                            >
                                <div className="align-self-center">
                                    <h3
                                        className="text-center"
                                        style={{ color: "rgb(105, 197, 233)" }}
                                    >
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
                                                    defaultValue="pop-up"
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
                                                <ReCAPTCHA
                                                    sitekey="Your client site key"
                                                    onChange={onChange}
                                                />
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
                            <div className="col-12 col-md-6 padding-5 d-lg-block d-md-block d-sm-none d-none">
                                <Image rounded={true} src={images} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default RequestBrochure
