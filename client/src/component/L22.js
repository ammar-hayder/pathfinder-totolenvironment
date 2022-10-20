import React, {useState} from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import images from '../assets/images/kit-desk.jpeg';
import RequestBrochure from './RequestBrochure';

const L22 = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <section className="section-five-bg d-lg-block d-md-block d-sm-none d-none">
                <div
                    className="col-12 mt-20 section-three-overlay wow fadeIn align-self-center"
                    data-wow-delay="0.1s"
                >
                    <div className="container">
                        <div className="row pt-30 pb-30">
                            <div className="col-lg-4">
                                <h4 className="mont-reg fs-xs-20 fs-sm-20 text-center mb-10">
                                    <b>L22</b>
                                </h4>
                                <div className="specification-bg text-center">
                                    <p className="">Reference Saleable Area : 2530 sq.ft</p>
                                    <p className="">Built-up Area : 2024 sq.ft.</p>
                                    <p className="">Carpet Area : 1607 sq.ft.</p>
                                    <p className="">Terrace garden : 223 sq.ft.</p>
                                    <p className="">Type : 3 Bedroom</p>
                                    <p className="">Price : Starting at 3.26Cr + GST @5%</p>
                                </div>
                            </div>
                            <div className="col-lg-8 align-self-center">
                                <p className="text-justify"></p>
                                <ul className="mont-reg fs-16">
                                    <li>
                                        Linear L shaped layout which allows maximum light &amp;
                                        ventilation
                                    </li>
                                    <li>Spacious Living Dining area</li>
                                    <li>Open kitchen with breakfast counter</li>
                                    <li>Deck with double height terrace garden</li>
                                    <li>Maid’s toilet</li>
                                </ul>
                                <p />
                                <div className="text-center">
                                    <RequestBrochure/>
                                    <div className="d-block d-sm-block d-md-none d-lg-none">
                                        <a
                                            data-toggle="modal"
                                            data-target="#myModal"
                                            className="scroll mont-reg"
                                        >
                                            <button
                                                style={{
                                                    width: "auto",
                                                    border: "1px solid #fff",
                                                    cursor: "pointer",
                                                    backgroundColor: "#872b20 !important",
                                                    color: "#fff !important",
                                                    fontWeight: "bold"
                                                }}
                                                type="submit"
                                                className="submit-btn btn btn-primary text-uppercase"
                                            >
                                                <strong>Request Brochure</strong>
                                            </button>
                                        </a>
                                    </div>
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
                            <div className="col-12 section-three-overlay">
                                <div className="row">
                                    <div className="col-12 section-five-bg" />
                                    <div
                                        className="section-one-padding wow fadeIn"
                                        data-wow-delay="0.2s"
                                    >
                                        <h3 className="mont-black fs-xs-20 fs-sm-20 text-center mb-10">
                                            L22
                                        </h3>
                                        <div className="specification-bg text-center">
                                            <p className="">Reference Saleable Area : 2530 sq.ft</p>
                                            <p className="">Built-up Area : 2024 sq.ft.</p>
                                            <p className="">Carpet Area : 1607 sq.ft.</p>
                                            <p className="">Terrace garden : 223 sq.ft.</p>
                                            <p className="">Type : 3 Bedroom</p>
                                            <p className="">Price : Starting at 3.26Cr + GST @5%</p>
                                        </div>
                                        <p className="mt-20 mont-reg fs-18 fs-xs-14 fs-sm-14 text-justify"></p>
                                        <p className="text-justify"></p>
                                        <ul className="mont-reg fs-16">
                                            <li>
                                                Linear L shaped layout which allows maximum light &amp;
                                                ventilation
                                            </li>
                                            <li>Spacious Living Dining area</li>
                                            <li>Open kitchen with breakfast counter</li>
                                            <li>Deck with double height terrace garden</li>
                                            <li>Maid’s toilet</li>
                                        </ul>
                                        <p />
                                        <p />
                                        <div className="text-center">
                                            <div className="d-none d-sm-none d-md-block d-lg-block ">
                                                <a
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    className="scroll mont-reg"
                                                >
                                                    <button
                                                        style={{
                                                            width: "auto",
                                                            border: "1px solid #fff",
                                                            cursor: "pointer",
                                                            backgroundColor: "#872b20 !important",
                                                            color: "#fff !important",
                                                            fontWeight: "bold"
                                                        }}
                                                        type="submit"
                                                        className="submit-btn btn btn-primary text-uppercase"
                                                    >
                                                        <strong>Request Brochure</strong>
                                                    </button>
                                                </a>
                                            </div>
                                            <div className="d-block d-sm-block d-md-none d-lg-none">
                                                <a
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    className="scroll mont-reg"
                                                >
                                                    <button
                                                        style={{
                                                            width: "auto",
                                                            border: "1px solid #fff",
                                                            cursor: "pointer",
                                                            backgroundColor: "#872b20 !important",
                                                            color: "#fff !important",
                                                            fontWeight: "bold"
                                                        }}
                                                        type="submit"
                                                        className="submit-btn btn btn-primary text-uppercase"
                                                    >
                                                        <strong>Request Brochure</strong>
                                                    </button>
                                                </a>
                                            </div>
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

export default L22
