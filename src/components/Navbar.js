//navbar with styling using styled components

import AnchorLink from "react-anchor-link-smooth-scroll"
import React, {useState} from 'react';
//import { Link } from "react-router-dom";
import {
    NavbarContainer,
    Leftcontainer,
    Rightcontainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    NavbarLogo,
    OpenLinksButton,
    NavbarLinkExtended
} from '../styles/Navbar.style'
import '../styles/Homepage.module.css';

function Navbar() {
    //creating state of hamburger button, adding props to NavbarContainer, extendNavbar is the state that is passed as props

    const [extendNavbar, setextendNavbar] = useState(false);
    return(
        <>  
        
        <NavbarContainer extendNavbar= {extendNavbar}>
            <NavbarInnerContainer>
                <Leftcontainer>
                    <NavbarLogo>code</NavbarLogo>
                        
                </Leftcontainer>
                <Rightcontainer>
                    <NavbarLinkContainer className="nav-links">
                    {/*To add in page navigation AnchorLink is used */}
                        <AnchorLink href="#Home"> <NavbarLink to="/">HOME</NavbarLink></AnchorLink>
                        {/* <AnchorLink href="#AboutUs"> <NavbarLink to="/aboutus">ABOUT US</NavbarLink></AnchorLink> */}
                        <AnchorLink href="#WhatWeDo"> <NavbarLink to="/whatwedo">WHAT WE DO</NavbarLink></AnchorLink>
                        <AnchorLink href="#Portfolio"> <NavbarLink to="/portfolio">PORTFOLIO</NavbarLink></AnchorLink>
                        <AnchorLink href="#Blog"> <NavbarLink to="/blog">BLOG</NavbarLink></AnchorLink>
                        <AnchorLink href="#ContactUs"> <NavbarLink to="/contactus">CONTACT US</NavbarLink></AnchorLink>

                        
                        {/* <NavbarLink exact to="/">HOME</NavbarLink>
                        <NavbarLink exact to="/aboutus">ABOUT US</NavbarLink> 
                        <NavbarLink><a href='./AboutUs'>About</a> </NavbarLink> 
                        
                        <NavbarLink to="/WhatWeDo"><a href="#WhatWeDo">WHAT WE DO</a></NavbarLink>
                        <NavbarLink to="/portfolio">PORTFOLIO</NavbarLink>
                        <NavbarLink to="/blog">BLOG</NavbarLink>
                        <NavbarLink to="/contactus">CONTACT US</NavbarLink> */}

                        <OpenLinksButton 
                        onClick={() => {
                            setextendNavbar((curr) => !curr);
                        }}
                        > &#8801;</OpenLinksButton>
                


                    </NavbarLinkContainer>
                </Rightcontainer>
            </NavbarInnerContainer>
                
            { extendNavbar && (  //display links on clicking hamburger
                <NavbarExtendedContainer>                 
                    <AnchorLink href="#Home"> <NavbarLinkExtended to="/">HOME</NavbarLinkExtended></AnchorLink>
                    <AnchorLink href="#AboutUs"> <NavbarLinkExtended to="/aboutus">ABOUT US</NavbarLinkExtended></AnchorLink>
                    <AnchorLink href="#WhatWeDo"> <NavbarLinkExtended to="/whatwedo">WHAT WE DO</NavbarLinkExtended></AnchorLink>
                    <AnchorLink href="#Portfolio"> <NavbarLinkExtended to="/portfolio">PORTFOLIO</NavbarLinkExtended></AnchorLink>
                    <AnchorLink href="#Blog"> <NavbarLinkExtended to="/blog">BLOG</NavbarLinkExtended></AnchorLink>
                    <AnchorLink href="#ContactUs"> <NavbarLinkExtended to="/contactus">CONTACT US</NavbarLinkExtended></AnchorLink>

                    {/* 
                    <NavbarLink to="/"> HOME</NavbarLink>
                    <NavbarLinkExtended to="/"> ABOUT US</NavbarLinkExtended>
                    <NavbarLinkExtended to="/"> WHAT WE DO</NavbarLinkExtended>
                    <NavbarLinkExtended to="/"> PORTFOLIO</NavbarLinkExtended>
                    <NavbarLinkExtended to="/"> BLOG</NavbarLinkExtended>
                    <NavbarLinkExtended to="/"> CONTACT US</NavbarLinkExtended>
                 */}
                </NavbarExtendedContainer>

            )}
            
            
        </NavbarContainer>

        
        </>
    );
}
export default Navbar;