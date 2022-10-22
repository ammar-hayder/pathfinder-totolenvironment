import React from 'react'

const Whatsapp = () => {
  return (
    <div className="sticky-whatsapp d-block d-sm-block d-md-none d-lg-none">
      <a href="https://wa.me/+919380071695">
        <i
          className="fa fa-whatsapp"
          style={{
            fontSize: 32,
            backgroundColor: "#25D366",
            color: "#fff",
            padding: 5
          }}
        />
      </a>
      <br />
      <a href="tel:+919380071695" className="" style={{
            fontSize: 20,
            color: "#fff",
            backgroundColor: "#25D366",
          }}>
        
        <span class="badge badge-secondary"> <i
          className="fa fa-mobile-phone fa-3"
          
        /> Miss call</span>
      </a>
    </div>
  )
}

export default Whatsapp
