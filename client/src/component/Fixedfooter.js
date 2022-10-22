import React from 'react'
import RequestBrochure from './RequestBrochure'

const Fixedfooter = () => {
  return (
    <div className="fixed-footer-btns d-block d-sm-block d-md-none d-lg-none">
      <a href="tel:+919380071695" className="">
        Call Now
      </a>
      <RequestBrochure theme="mobile" />
    </div>
  )
}

export default Fixedfooter
