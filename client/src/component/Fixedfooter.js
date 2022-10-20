import React from 'react'

const Fixedfooter = () => {
  return (
    <div className="fixed-footer-btns d-block d-sm-block d-md-none d-lg-none">
      <a href="tel:+919945055700" className="">
        Call Now
      </a>
      <a data-toggle="modal" data-target="#myModal" className="scroll">
        Enquire
      </a>
    </div>
  )
}

export default Fixedfooter
