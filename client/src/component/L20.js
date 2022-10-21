import React from 'react'
import RequestBrochure from './RequestBrochure';


const L20 = () => {
    return (
        <>
            <section className="section-four-bg d-lg-block d-md-block d-sm-none d-none">
                <div className="col-12 mt-20 section-four-overlay wow fadeIn align-self-center">
                    <div className="container">
                        <div className="row pt-30 pb-30">
                            <div
                                className="col-lg-8 align-self-center wow fadeIn"
                                data-wow-delay="0.1s"
                            >
                                <p className="text-justify"></p>
                                <ul className="mont-reg fs-16">
                                    <li>
                                        L shaped 3 bedroom layout which allows maximum light &amp;
                                        ventilation
                                    </li>
                                    <li>Spacious Living Dining area</li>
                                    <li>Open kitchen with breakfast counter</li>
                                    <li>Deck with double height terrace garden</li>
                                    <li>Home office</li>
                                    <li>Maid’s toilet</li>
                                </ul>
                                <p />
                                <div className="text-center">
                                    <RequestBrochure />
                                </div>


                            </div>
                            <div className="col-lg-4 text-right wow fadeIn" data-wow-delay="0.2s">
                                <h4 className="mont-reg fs-xs-20 fs-sm-20 text-center mb-10">
                                    <b>L20</b>
                                </h4>
                                <div className="specification-bg text-center">
                                    <p className="pText">Reference Saleable Area : 2430 sq.ft.</p>
                                    <p className="pText">Built-up Area : 1944 sq.ft.</p>
                                    <p className="pText">Carpet Area : 1506 sq.ft.</p>
                                    <p className="pText">Terrace Garden : 163 sq.ft.</p>
                                    <p className="pText">Type : 3 Bedroom</p>
                                    <p className="pText">Price : Starting at 3.06Cr + GST @5% </p>
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
                                    <div className="col-12 section-four-bg" />
                                    <div
                                        className="section-one-padding wow fadeIn"
                                        data-wow-delay="0.2s"
                                    >
                                        <h3 className="mont-black fs-xs-20 fs-sm-20 text-center mb-10">
                                            L20
                                        </h3>
                                        <div className="specification-bg text-center">
                                            <p className="pText">Reference Saleable Area : 2430 sq.ft.</p>
                                            <p className="pText">Built-up Area : 1944 sq.ft.</p>
                                            <p className="pText">Carpet Area : 1506 sq.ft.</p>
                                            <p className="pText">Terrace Garden : 163 sq.ft.</p>
                                            <p className="pText">Type : 3 Bedroom</p>
                                            <p className="pText">Price : Starting at 3.06Cr + GST @5% </p>
                                        </div>
                                        <p className="mt-20 mont-reg fs-18 fs-xs-14 fs-sm-14 text-justify"></p>
                                        <ul className="mont-reg fs-16">
                                            <li>
                                                L shaped 3 bedroom layout which allows maximum light &amp;
                                                ventilation
                                            </li>
                                            <li>Spacious Living Dining area</li>
                                            <li>Open kitchen with breakfast counter</li>
                                            <li>Deck with double height terrace garden</li>
                                            <li>Home office</li>
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

export default L20
