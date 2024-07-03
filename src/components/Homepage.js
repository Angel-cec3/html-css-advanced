//main home page with navbar and carousel slider imported as components

import React from "react";
import Navbar  from "./Navbar";
//import styles from '../styles/Homepage.module.css';
import Carouselslider from "./Carouselslider";
 const Homepage = () => {
    return(
    <div id="#Home">
        
        {/* <div className={styles.home_main}>
        <Navbar/>
        <Carouselslider/>
        
        </div>  */}

        <Navbar/>
        <Carouselslider/>
    
    </div>
    );
}
        
        
 export default Homepage;