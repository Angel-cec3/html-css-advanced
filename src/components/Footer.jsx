//footer of page

import React from "react";
import { TiSocialFacebook, TiSocialTwitter, TiSocialDribbbleCircular } from "react-icons/ti";
import {FaPinterest, FaGooglePlusG} from "react-icons/fa"

import footer_img from '../assets/footer_img.jpg'
import '../styles/Footer.css'

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="col-1">
                        <h2>we are code</h2>

                        <ul className="list">
                        <li className="footer-grey">hello@creon.com <p> +236-3225544</p></li>
                        <li><h5>We Are Social</h5></li>
                        <li><div className="icons" >
                         <span className="footer-icons"><a href="www.facebook.com"><TiSocialFacebook/></a></span>
                         <span className="footer-icons"><a href="www.twitter.com"><TiSocialTwitter/></a></span>
                         <span className="footer-icons"><a href="www.dribble.com"><TiSocialDribbbleCircular/></a></span>
                         <span className="footer-icons"><a href="www.pinterest.com"><FaPinterest/></a></span>
                         <span className="footer-icons"><a href="www.google.com"><FaGooglePlusG/></a></span>
                         
                        </div></li>
            
                        </ul>
                        
                    </div>

                    <div className="col-1">
                    <h5>Recent posts</h5>

                        <ul className="list ">
                        <li >
                            Lorem ipsum doler init <p className="footer-grey">June 29, 2018</p>
                        </li>
                        <li >
                            Lorem ipsum doler init <p className="footer-grey">June 29, 2018</p>
                        </li>
                        <li >
                            Lorem ipsum doler init <p className="footer-grey">June 29, 2018</p>
                        </li>
                        </ul>
                        </div>
            
                    

                    <div className="col-1">
                        <h5>Instagram</h5>
                        <div className="images-insta">
                            <div><img src={footer_img} alt="footer "></img></div>
                            <div><img src={footer_img} alt="footer "></img></div>
                            <div><img src={footer_img} alt="footer "></img></div>
                        {/* </div>

                        <div className="images-insta"> */}
                            <div><img src={footer_img} alt="footer "></img></div>
                            <div><img src={footer_img} alt="footer "></img></div>
                            <div><img src={footer_img} alt="footer "></img></div>
                        </div>
            
                    </div>

                    <div className="col-1">
                        <ul className="list">
                            <li><h5>Newsletter</h5></li>
                            <li className="footer-grey">Donec nec justo felis factillisis fermentum. Aliqua, porttitior mauris sit amet orci.</li>
                            <li>
                            <div style={{display:"flex"}}>
                                <div><input type='email' placeholder="email"></input> </div> 
                            <div className="button-go"><button type='submit' variant='primary' size="sm" >GO</button></div>  
                            </div> 
                            </li>         
                            
                        </ul>   
                        
                    </div>

                </div>
                
            </div>               
        </>

    );
}

export default Footer;