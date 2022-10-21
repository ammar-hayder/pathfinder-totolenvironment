import React from 'react'
import RequestBrochure from './RequestBrochure'

const Amenities = () => {
    return (
        <>
            <section className="section-amenities-bg d-lg-block d-md-block d-sm-none d-none">
                <div className="container">
                    <div className="row">
                        <div
                            className="section-amenities-overlay pt-50 pb-50 pt-xs-20 pb-xs-20 pt-sm-20 pb-sm-20 wow fadeIn"
                            data-wow-delay="0.1s"
                        >
                            <div className="col-12">
                                <div
                                    className="section-one-padding wow fadeIn"
                                    data-wow-delay="0.2s"
                                >
                                    <h4 className="mont-reg fs-xs-20 fs-sm-20 text-center mb-10 mb-xs-10 mb-sm-10">
                                        <b>Amenities</b>
                                    </h4>
                                    <ul className="mont-reg fs-16 mt-30">
                                        <li className="mb-10">Swimming Pool</li>
                                        <li className="mb-10">Billiards</li>
                                        <li className="mb-10">Table Tennis</li>
                                        <li className="mb-10">Heated Pool</li>
                                        <li className="mb-10">Lakeside Boardwalk</li>
                                        <li className="mb-10">Multipurpose Hall</li>
                                        <li className="mb-10">Toddlers' Pool</li>
                                        <li className="mb-10">Well-equipped Gymnasium</li>
                                        <li className="mb-10">Library</li>
                                        <li className="mb-10">Squash Courts</li>
                                    </ul>
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
                </div>
            </section>
            <section className="d-lg-none d-md-none d-sm-block d-block">
                <div className="wow fadeIn" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="section-amenities-bg col-lg-6 col-12" />
                                    <div className="col-lg-6 col-12 section-amenities-overlay">
                                        <div
                                            className="section-one-padding wow fadeIn"
                                            data-wow-delay="0.2s"
                                        >
                                            <h4 className="mont-reg fs-xs-20 fs-sm-20 text-center mb-10 mb-xs-10 mb-sm-10">
                                                <b>Amenities</b>
                                            </h4>
                                            <ul className="mont-reg fs-14">
                                                <li className="mb-10">Swimming Pool</li>
                                                <li className="mb-10">Billiards</li>
                                                <li className="mb-10">Table Tennis</li>
                                                <li className="mb-10">Heated Pool</li>
                                                <li className="mb-10">Lakeside Boardwalk</li>
                                                <li className="mb-10">Multipurpose Hall</li>
                                                <li className="mb-10">Toddlers' Pool</li>
                                                <li className="mb-10">Well-equipped Gymnasium</li>
                                                <li className="mb-10">Library</li>
                                                <li className="mb-10">Squash Courts</li>
                                            </ul>
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
                </div>
            </section>
        </>
    )
}

export default Amenities
