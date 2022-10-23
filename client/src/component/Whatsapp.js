import React from 'react'

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
            padding: '4px',
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
      <a href="tel:+919380071695" className="" >



        <div id="chat-circle" className="btn btn-raised" style={{}} />
        <div id="chat-overlay" />
        <p className='font'>Miss Call</p>

      </a>
    </div>
  )
}

export default Whatsapp
