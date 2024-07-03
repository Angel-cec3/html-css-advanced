//About us page

import React from "react";
import ThreeCards from "./ThreeCards";
import  '../styles/AboutUs.css';
import smallbusiness_img from '../assets/small-business.jpg';
import { FaBlackTie } from "react-icons/fa";



const AboutUs =()=>{
    return(
        <div id="AboutUs">
        <div className="padding_of_page">
            <h2 style={{textAlign: "center", color: FaBlackTie}}>Creativity. Imagination</h2>
                
                <ThreeCards/>  {/*three cards imported as component */}
        
        </div>

        <div className="padding_page">
            <img className="smallbusiness_img" src={smallbusiness_img} alt="small business"></img>
            {/*Overlay layer creation not done css- .layer*/}
            <div className="blue">
                Designed and optimized for high conversion</div>
            
                <div className="blue-1">
            Designed and optimized for high conversion
            </div>
            </div>
            
        </div>

    );
}

export default AboutUs;