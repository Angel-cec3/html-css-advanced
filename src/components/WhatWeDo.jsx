//what we do page

import React from "react"
import '../styles/WhatWeDo.css'
import Button from 'react-bootstrap/Button';
import CardGrid from './CardGrid'  //2 rows of 3 cards

const WhatWeDo = () => {
    return(
        <>
        <div id="WhatWeDo" className="bg">

            <h2>What We Do</h2>
            <div className="card-component">
                <CardGrid/>
            </div>
            
            <div className="button-viewAllServices">
                <Button className="rounded-pill" variant="primary" size="lg" >VIEW ALL SERVICES</Button>{' '} 
            </div>
            
        </div>
        </>
    )

}

export default WhatWeDo;