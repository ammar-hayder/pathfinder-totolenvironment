import React from 'react'
import RequestBrochure from './RequestBrochure'

const D35 = () => {
    return (
        <>
            <section className="section-seven-bg d-lg-block d-md-block d-sm-none d-none">
                <div
                    className="col-12 mt-20 section-three-overlay wow fadeIn align-self-center"
                    data-wow-delay="0.1s"
                >
                    <div className="container">
                        <div className="row pt-30 pb-30">
                            <div className="col-lg-4">
                                <h4 className="mont-reg fs-xs-20 fs-sm-20 text-center mb-10">
                                    <b>D35</b>
                                </h4>
                                <div className="specification-bg text-center">
                                    <p className="pText">Reference Saleable Area : 4596 sq.ft.</p>
                                    <p className="pText">Built-up Area : 3676 sq.ft.</p>
                                    <p className="pText">Carpet Area : 2660 sq.ft.</p>
                                    <p className="pText">Terrace Garden : 510 sq.ft.</p>
                                    <p className="pText">Type : 3 Bedroom Duplex</p>
                                    <p className="pText">Price : Starting 6.09Cr + GST @5% </p>
                                </div>
                            </div>
                            <div className="col-lg-8 align-self-center">
                                <p className="mt-20 mont-reg"></p>
                                <ul className="fs-16 text-justify">
                                    <li>
                                        L shaped layout which allows maximum light &amp; ventilation
                                    </li>
                                    <li>Spacious Living Dining area</li>
                                    <li>Open kitchen with breakfast counter</li>
                                    <li>Deck with double height terrace garden</li>
                                    <li>Home office space</li>
                                    <li>Maid’s toilet</li>
                                </ul>
                                <p />
                                <div className="text-center">
                                    <RequestBrochure />
                                    <div className="d-block d-sm-block d-md-none d-lg-none">
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
                                    <div className="col-12 section-seven-bg" />
                                    <div
                                        className="section-one-padding wow fadeIn"
                                        data-wow-delay="0.2s"
                                    >
                                        <h3 className="mont-black fs-xs-20 fs-sm-20 text-center mb-10">
                                            D35
                                        </h3>
                                        <div className="specification-bg text-center">
                                            <p className="pText">Reference Saleable Area : 4596 sq.ft.</p>
                                            <p className="pText">Built-up Area : 3676 sq.ft.</p>
                                            <p className="pText">Carpet Area : 2660 sq.ft.</p>
                                            <p className="pText">Terrace Garden : 510 sq.ft.</p>
                                            <p className="pText">Type : 3 Bedroom Duplex</p>
                                            <p className="pText">Price : Starting 6.09Cr + GST @5% </p>
                                        </div>
                                        <p className="mt-20 mont-reg f"></p>
                                        <ul className="fs-18 fs-xs-14 fs-sm-14 text-justify">
                                            <li>
                                                L shaped layout which allows maximum light &amp; ventilation
                                            </li>
                                            <li>Spacious Living Dining area</li>
                                            <li>Open kitchen with breakfast counter</li>
                                            <li>Deck with double height terrace garden</li>
                                            <li>Home office space</li>
                                            <li>Maid’s toilet</li>
                                        </ul>
                                        <p />
                                        <div className="text-center">
                                            <div className="d-none d-sm-none d-md-block d-lg-block ">
                                                <RequestBrochure />
                                            </div>
                                            <div className="d-block d-sm-block d-md-none d-lg-none">
                                                <RequestBrochure />
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

export default D35
