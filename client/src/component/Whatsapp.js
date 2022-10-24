import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import { MdPhoneMissed } from 'react-icons/md';

const Whatsapp = () => {
  return (
    <div className="sticky-whatsapp d-block d-sm-block d-md-none d-lg-none"  >

      <a href="https://wa.me/+919380071695">

        <i
          className="fa fa-whatsapp"
          style={{
            fontSize: '32px',
            backgroundColor: 'rgb(37, 211, 102)',
            color: 'rgb(255, 255, 255)',
            borderRadius:' 50% 50% 50% 0%',
            width: '36px',
            height: '36px',
            padding: '2px',
            textAlign: 'center',
            marginBottom: '10px'
          }}
        />
      </a>
      <br />
      <a href="tel:+919380071695" className="btn btn-raised" style={{

        color: 'white',
        backgroundColor: 'red',
        padding: '0px',
        lineHeight: '1.2',
        width:' 34px',
        height: '34px',
        fontSize: '24px',
        marginBottom: '10px',
        borderRadius: '50%',
        
      }}>
      <MdPhoneMissed />
      
     
       
     
        {/* <div id="chat-circle" className="btn btn-raised" style={{}} /> */}
        
        {/* <div id="chat-overlay" /> */}
       
       
      </a>
    </div>
  )
}

export default Whatsapp
