//contact us page

import React from "react";
import Button from 'react-bootstrap/Button';
import '../styles/CardSlider.css';

const ContactUs = () => {

    return(
        <div id="ContactUs">
        <div className="contactUs-container">
            <div>
                <h3>We offer the perfect solutions</h3>

            </div>
            <div>
                <Button className="rounded-pill" variant="primary" size="lg" >CONTACT US</Button>{' '}

            </div>
        </div>
        </div>
    )
}

export default ContactUs;