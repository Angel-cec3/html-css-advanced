//Navbar styling using styled-components

import styled from "styled-components"
import {Link} from "react-router-dom"; //putting here so that I can style the link
// Link component is not built in HTML, to style it import here

export const NavbarContainer = styled.nav`
    width:100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};  //alter heigth of navbarcontainer to fit in the extended container i.e., displaying links within hamburger
    display: flex;
    flex-direction: column;
    //to make navbar have same background as carousel image
    background-color: transparent;
    position: absolute;
    z-index: 100;
`;

export const Leftcontainer = styled.div` //logo
    flex: 10%;
    display: flex;
    justify-content: flex-end;
    padding-right: 0;
`;

export const Rightcontainer = styled.div` //right side links
    flex: 90%;
    display: flex;
    justify-content: center;
    padding-left: 0;
    //background-color: black;

    @media (max-width: 768px) {
        flex: 12%
        
    }
`;
export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;

`;

export const NavbarLinkContainer = styled.div` //div containing all links
    display: flex;
    
`;

export const NavbarLink = styled(Link)`   //styling for each link//wrapping around (Link) because it is styling for Link component

color: #ffffff;   //give white color to navbar links
font-size: medium;
text-decoration: none !important;
margin: 20px;
padding-top: 30px;


@media (max-width: 768px) { //when screen-width is less than 768px disolay:none
        display: none;
    }
`;

export const AnchorLink = styled(Link)`
padding-top: 30px;
text-decoration: none;
`;

export const NavbarLinkExtended = styled(Link)`   //styling for each link//wrapping around (Link) because it is styling for Link component

color: white;
font-size: medium;
text-decoration: none;
margin: 20px;
`;


export const NavbarLogo = styled.div` //code logo styling
    font-size: xx-large;
    font-weight: bold;
    color: white;
    text-align: center;
    margin: 10px;

    @media (max-width: 768px) {
        flex: 20%;
    }
`;

export const OpenLinksButton = styled.button` //responsive button to contain links
    width: 70px;
    height: 50px;;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 768px) {//when screen-width is greater than 768px
        display: none;
    }
    
`; 

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;

    @media (min-width: 768px) {
        display: none;
    }

`;