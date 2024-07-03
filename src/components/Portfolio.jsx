//portfolio page with carousel

import React from "react";
import '../styles/Portfolio.css'


import Carousel from 'react-bootstrap/Carousel';
//import home_img from '../assets/homepage.jpg';
import portfolio from '../assets/portfolio.jpeg';
import {ImQuotesLeft} from "react-icons/im";

const Portfolio =() => {
return(
  <div id="Portfolio">
  <div className="my-ca">
  <Carousel className="container">
      <Carousel.Item interval={1000}>
      <div className="d-block w-100">
        <div className="blue-quote" >
          <ImQuotesLeft/>

        </div>
        <div className="grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

        </div>

        <div className="portfolio-img">
          <img src={portfolio}  alt="portfolio dp"></img>
        </div>

          <h3>David Spencer</h3>
          <a href="www.spencer.com">www.spencer.com</a>
        
      </div>
       
      </Carousel.Item>

      <Carousel.Item interval={1000}>
      <div className="d-block w-100">
        <div className="blue-quote" >
          <ImQuotesLeft/>

        </div>
        <div className="grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

        </div>

        <div className="portfolio-img">
          <img src={portfolio} alt="portfolio dp"></img>
        </div>

          <h3>David Spencer</h3>
          <a href="www.spencer.com">www.spencer.com</a>
        
      </div>
    
        
      </Carousel.Item>

      <Carousel.Item>
      <div className="d-block w-100">
        <div className="blue-quote" >
          <ImQuotesLeft/>

        </div>
        <div className="grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

        </div>

        <div className="portfolio-img">
          <img src={portfolio}  alt="portfolio dp"></img>
        </div>

          <h3>David Spencer</h3>
          <a href="www.spencer.com">www.spencer.com</a>
        
      </div>
    
      </Carousel.Item>

    </Carousel>
  
  </div>
    
  </div>
);
}

export default Portfolio;