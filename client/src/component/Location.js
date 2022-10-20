import React from 'react'
import RequestBrochure from './RequestBrochure'

const Location = () => {
    return (
        <section className="">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="white-bg col-lg-5 col-md-5 pt-20 pb-20 d-lg-none d-md-none d-sm-block d-block">
                            <h4 className="mont-reg fs-xs-20 fs-sm-20 text-center mb-30 mb-xs-10 mb-sm-10">
                                <b>Location</b>
                            </h4>
                            <p className="mont-reg fs-14">
                                The Perfect Neighborhood To Call Home
                                <br />
                                <br />
                                Enjoy the convenience of urban living with well-developed social
                                infrastructure like schools, hospitals, hotels, retail, dining
                                and entertainment in close proximity to the project.
                            </p>
                            <ul className="mont-reg fs-14">
                                <li className="mb-10">Manipal Hospital - 1.0 Km</li>
                                <li className="mb-10">Cloud Nine Hospital - 1.5 Kms</li>
                                <li className="mb-10">Ryan International School - 5.2 Kms </li>
                                <li className="mb-10">Inorbit Mall - 2.9 Kms </li>
                                <li className="mb-10">Forum Mall - 1.0 Kms</li>
                                <li className="mb-10">Windmills Craftworks - 4.8 Kms</li>
                                {/* <li class="mb-10">EuroSchool Whitefield- 2.1km</li>
                        <li class="mb-10">Harvest International School - 2km</li>
                        <li class="mb-10">Royal Meenakshi Mall - 11.6km</li>
                        <li class="mb-10">Barbeque Nation - 3.1km</li> */}
                            </ul>
                            <div className="text-center">
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
                        <div className="col-lg-7 col-md-7" style={{ padding: 0 }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.968026567172!2d77.7185848!3d12.9883462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbcc74f1ce5de81ad!2sPursuit%20Of%20A%20Radical%20Rhapsody!5e0!3m2!1sen!2sin!4v1651123821551!5m2!1sen!2sin"
                                width="100%"
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="white-bg col-lg-5 col-md-5 pt-20 pb-20 d-lg-block d-md-block d-sm-none d-none">
                            <h4 className="mont-reg fs-xs-20 fs-sm-20 text-center mb-30 mb-xs-10 mb-sm-10">
                                <b>Location</b>
                            </h4>
                            <p className="mont-reg fs-16">
                                The Perfect Neighborhood To Call Home
                                <br />
                                <br />
                                Enjoy the convenience of urban living with well-developed social
                                infrastructure like schools, hospitals, hotels, retail, dining
                                and entertainment in close proximity to the project.
                            </p>
                            <ul className="mont-reg fs-16">
                                <li className="mb-10">Manipal Hospital - 1.0 Km</li>
                                <li className="mb-10">Cloud Nine Hospital - 1.5 Kms</li>
                                <li className="mb-10">Ryan International School - 5.2 Kms </li>
                                <li className="mb-10">Inorbit Mall - 2.9 Kms </li>
                                <li className="mb-10">Forum Mall - 1.0 Kms</li>
                                <li className="mb-10">Windmills Craftworks - 4.8 Kms</li>
                            </ul>
                            <div className="text-center">
                            <RequestBrochure/>
                                {/* <div className="d-none d-sm-none d-md-block d-lg-block ">
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
                                            className="small-submit-btn btn btn-primary text-uppercase"
                                        >
                                            <strong>Request Brochure</strong>
                                        </button>
                                    </a>
                                </div> */}
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
    </section>
    )
}

export default Location
