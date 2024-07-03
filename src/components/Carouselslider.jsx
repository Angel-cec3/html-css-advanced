//carousel slider component

import React from "react";
import Carousel from 'react-bootstrap/Carousel';
//import home_img from '../assets/homepage.jpg';
import home_img1 from '../assets/homepage1.jpg';
import styles from '../styles/Homepage.module.css';
import Button from 'react-bootstrap/Button';
//import Navbar from "./Navbar";

const Carouselslider =() => {
return(
  <>
    <Carousel className={styles.black}>
      <Carousel.Item interval={1000}>
          <img height={600}
          className="d-block w-100"
          src={home_img1}
          alt="first slide"
          />
      
          <Carousel.Caption>
            <h1 className={styles.carousel_caption} justify-content-center>We craft elegant solutions <br></br>with powerful technologies</h1>
            <div className={styles.btn}>
            <Button className="rounded-pill" variant="primary" size="lg" >Read More</Button>{' '}
            </div>
          </Carousel.Caption>
      </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img height={600}
            className="d-block w-100"
            src={home_img1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className={styles.carousel_caption}>We craft elegant solutions <br></br>with powerful technologies</h1>
            <div className={styles.btn} >
            <Button className="rounded-pill" variant="primary" size="lg">Read More</Button>{' '}
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img height={600}
            className="d-block w-100"
            src={home_img1}
            alt="Third slide"
          />
          <Carousel.Caption>
          <h1 className={styles.carousel_caption}>We craft elegant solutions <br></br>with powerful technologies</h1>
          <div className={styles.btn} >
            <Button className="rounded-pill" variant="primary" size="lg">Read More</Button>{' '}
            </div>        
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img height={600}
            className="d-block w-100"
            src={home_img1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className={styles.carousel_caption}>We craft elegant solutions <br></br>with powerful technologies</h1>
            <div className={styles.btn} >
            <Button className="rounded-pill" variant="primary" size="lg">Read More</Button>{' '}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  
  </>
);
}

export default Carouselslider;