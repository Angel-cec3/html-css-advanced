import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatWeDo from './components/WhatWeDo';
import FourCards from './components/Showcase';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import CardSlider from './components/CardSlider';
import ContactUs from './components/ContactUs';
//import Card_whatwedo from './components/CardWhatwedo';

function App() {
  return (
    
    
      <Router>
      
      <Homepage/>
      <AboutUs/>
      <WhatWeDo/>
      <FourCards/>
      <Portfolio/>
      <CardSlider/>
      <ContactUs/>
      {/* <Card_whatwedo/> */} 
      <Footer/>

      {/* <Routes>
        
        <Route exact path="/" element={Homepage}/>  

        <Route path="/aboutus" element={AboutUs}/>
        <Route path='/whatwedo' element={WhatWeDo}/>  
      
        <Route path='/portfolio' element={Portfolio}/> 
        <Route path='/blog' element={CardSlider}/> 
        <Route path='/contactus' element={ContactUs}/>

      </Routes>
       */}
    </Router>
    
    
    
  );
}

export default App;
