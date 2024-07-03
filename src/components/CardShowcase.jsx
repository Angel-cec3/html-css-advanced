/* Sample 1 */

import React, { Fragment } from "react";
import {Card} from 'react-bootstrap';
import homepage from "../assets/homepage.jpg"
import showcase2 from "../assets/showcase2.jpg"
import showcase3 from "../assets/showcase3.jpg"
import showcase4 from "../assets/showcase4.jpg"
import "../styles/CardShowcase.css";

const CardShowcase = () => {

    const cardInfo = [
        { id:"1", image: homepage, title: "Powerful Code", text: "Lorem ipsum dolor sit amet"},
        { id: "2", image: showcase2, title: "Awesome Portfolio", text: "Lorem ipsum dolor sit amet"},
        { id: "3", image: showcase3, title: "SEO Optimized", text: "Lorem ipsum dolor sit amet"},
        { id: "4", image: showcase4, title: "SEO Optimized", text: "Lorem ipsum dolor sit amet"}

      ];
    
    const renderCard = (card,index) => {

    return (
    
    <Fragment>
          <div key={index} className='filling'>            
            <Card className=" card-1 square border-0 rounded-0"> 
              <Card.Img variant='top' src={card.image}/>

              <Card.Body>
                
                <Card.Title>
                    {card.title}
                </Card.Title>
                <Card.Text>
                  <div style={{color: "grey"}}>
                    {card.text}
                </div>
                </Card.Text>
              </Card.Body>
            </Card>
        
      </div>
    </Fragment>
    
  );
};

return <div className="grid"> {cardInfo.map(renderCard)} </div>;
}


export default CardShowcase;


// sample card - not included in project

/* This is a sample implementation of reusable card components in two ways */

/* Sample 2*/ 

// import React, { Fragment } from "react";
// import "../styles/Card-whatwedo.css";
// import homepage from "../assets/homepage.jpg"
// import showcase2 "../assets/showcase2.jpg"
// import showcase3 "../assets/showcase3.jpg"
// import showcase4 "../assets/showcase4.jpg"




// const Card_whatwedo = () => {
    // const cardInfo = [
    //     { id:"1", icon: homepage, title: "Great", text: "this is relative"},
    //     { id: "2", icon: showcase2, title: "break", text: "this is relative"},
    //     { id: "3", icon: showcase3, title: "Great", text: "this is relative"},
    //     { id: "4", icon: showcase4, title: "Great", text: "this is relative"}

    //   ];

//       const renderCard = (card,index) => {

//         return(
//             <Fragment>
//             <div key={card.id} className="card-wwd">
//                 <div><img src={card.icon} alt="card"/></div>
//                 <div className="title"> {card.title}</div>
//                 <p className="description"> 
//                     {card.text}
//                 </p>
                    
//             </div>
            
//             </Fragment>
//         );

//       };

//       return <div className="grid"> {cardInfo.map(renderCard)} </div>;

// };

// export default Card_whatwedo;


