import React from 'react'
import RequestBrochure from './RequestBrochure'

const R25 = () => {
    return (
        <>
            <section className="section-six-bg d-lg-block d-md-block d-sm-none d-none">
                <div className="col-12 mt-20 section-four-overlay wow fadeIn align-self-center">
                    <div className="container">
                        <div className="row pt-30 pb-30">
                            <div
                                className="col-lg-8 align-self-center wow fadeIn"
                                data-wow-delay="0.1s"
                            >
                                <p className="mt-20 mont-reg text-justify"></p>
                                <ul className="fs-16">
                                    <li>
                                        Linear large 3 bedroom layout which allows maximum light &amp;
                                        ventilation
                                    </li>
                                    <li>
                                        Spacious Living Dining area with additional family living room
                                    </li>
                                    <li>Open kitchen with breakfast counter</li>
                                    <li>Deck with double height terrace garden</li>
                                    <li>Maid’s room and toilet</li>
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
                                                type="submit"
                                                className="btn btn-primary text-uppercase small-submit-btn"
                                            >
                                                <strong>Request Brochure</strong>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.2s">
                                <h4 className="mont-reg fs-xs-20 fs-sm-20 text-center mb-10">
                                    <b>R25</b>
                                </h4>
                                <div className="specification-bg text-center">
                                    <p className="">Reference Saleable Area : 3434 sq.ft</p>
                                    <p className="">Built-up Area : 2747 sq.ft.</p>
                                    <p className="">Carpet Area : 2136 sq.ft.</p>
                                    <p className="">Terrace Garden : 384 sq.ft.</p>
                                    <p className="">Type : 3 Bedroom + family room</p>
                                    <p className="">Price : Starting 4.05Cr + GST @5%</p>
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
                            <div className="col-12 section-four-overlay">
                                <div className="row">
                                    <div className="col-12 section-six-bg" />
                                    <div
                                        className="section-one-padding wow fadeIn"
                                        data-wow-delay="0.2s"
                                    >
                                        <h3 className="mont-black fs-xs-20 fs-sm-20 text-center mb-10">
                                            R25
                                        </h3>
                                        <div className="specification-bg text-center">
                                            <p className="">Reference Saleable Area : 3434 sq.ft</p>
                                            <p className="">Built-up Area : 2747 sq.ft.</p>
                                            <p className="">Carpet Area : 2136 sq.ft.</p>
                                            <p className="">Terrace Garden : 384 sq.ft.</p>
                                            <p className="">Type : 3 Bedroom + family room</p>
                                            <p className="">Price : Starting 4.05Cr + GST @5%</p>
                                        </div>
                                        <p className="mt-20 mont-reg text-justify"></p>
                                        <ul className="fs-18 fs-xs-14 fs-sm-14">
                                            <li>
                                                Linear large 3 bedroom layout which allows maximum light
                                                &amp; ventilation
                                            </li>
                                            <li>
                                                Spacious Living Dining area with additional family living
                                                room
                                            </li>
                                            <li>Open kitchen with breakfast counter</li>
                                            <li>Deck with double height terrace garden</li>
                                            <li>Maid’s room and toilet</li>
                                        </ul>
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

export default R25
