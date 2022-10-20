import React from 'react'
var dcslogo = require('../assets/images/dcslogo.png')
const Header = () => {
  return (
    <header id="masthead" className="site-header">
                <div className="container">
                    <div className="row align-self-center">
                        <div className="site-branding col-lg-9 col-md-9 col-sm-6 col-6 mt-xs-0 mt-sm-0 text-md-left text-lg-left text-center text-sm-center">
                            <div className="d-none d-sm-none d-md-block d-lg-block">
                                {/* <img src="./images/logo.png" className="" style={{maxWidth:"100%"}} alt="logo" /> */}
                            </div>
                            <div className="d-block d-sm-block d-md-none d-lg-none">
                                {/* <img src="./images/logo.png" className="" style={{maxWidth:"100%",float: "left", width: "50%"}} alt="logo" /> */}
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-3 col-sm-6 col-6 text-color text-md-right text-lg-right text-left text-sm-left align-self-center"
                            style={{ paddingRight: 0 }}
                        >
                            <div className="d-none d-sm-none d-md-block d-lg-block">
                                <img
                                    src={dcslogo}
                                    className=""
                                    style={{ maxWidth: "100%" }}
                                    alt="logo"
                                />
                            </div>
                            <div className="d-block d-sm-block d-md-none d-lg-none">
                                <img
                                    src={dcslogo}
                                    className=""
                                    style={{
                                        marginTop: "28%",
                                        maxWidth: "100%",
                                        float: "right",
                                        width: 40,
                                        height: 40,
                                        marginRight: 20
                                    }}
                                    alt="logo"
                                />
                            </div>
                            <div className="d-none d-sm-none d-md-block d-lg-block">
                                <i
                                    style={{ color: "#fff" }}
                                    className="fa fa-phone"
                                    aria-hidden="true"
                                />{" "}
                                <span style={{ color: "#fff" }}> +91 99450 55700</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
  )
}

export default Header
