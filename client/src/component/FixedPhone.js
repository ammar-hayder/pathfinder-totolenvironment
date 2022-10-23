import React from 'react';
import Button from 'react-bootstrap/Button';

const FixedPhone = ()=>{
   return (
        <div className="sticky-phone d-none d-md-block">
            <Button><i className="fa fa-phone" aria-hidden="true" style={{ color: 'rgb(255, 255, 255)' }}></i> +91 93800 71695 </Button>
        </div>
    );
}

export default FixedPhone;