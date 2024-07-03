//four cards with images page - using reusable cards

import CardShowcase from './CardShowcase';

import '../styles/FourCards.css';

function FourCards() {

  return (
    
    <>
      <div className='align-center'>
        <h2>Showcase</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      </div>
      
      <CardShowcase/>
    </>
    
  );
}

export default FourCards;



//four card - standard implementation

// import Card_Whatwedo from './Card_whatwedo';
// import { Container, Card, Col, Row, CardGroup} from 'react-bootstrap';
// import homepage from "../assets/homepage.jpg"
// import showcase2 from "../assets/showcase2.jpg"
// import showcase3 from "../assets/showcase3.jpg"
// import showcase4 from "../assets/showcase4.jpg"

// import '../styles/FourCards.css';

// function FourCards() {
//   return (
    
//     <>
//       <div className='align-center'>
//         <h2>Showcase</h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

//       </div>
      
//       {/* <div className='display-flex'> */}
//         <div className='p-1 filling'>

//           <CardGroup>
//             {/* <Row xs={1} md={4} > */}
            
//             <Card className=" card-1 square border border-0"> 
//               <Card.Img variant='top' src={homepage}/>

//               <Card.Body>
                
//                 <Card.Title>

//                   Powerful Code
//                 </Card.Title>
//                 <Card.Text>
//                   <div style={{color: "grey"}}>
//                     Lorem ipsum dolor sit amet.
//                   </div>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
          

          
//             <Card className=" card-1 square border border-0">
//               <Card.Img variant='top' src={showcase2}/>

//               <Card.Body>
//                 <Card.Title>
                  
//                   Awesome Portfolio

//                 </Card.Title>
//                 <Card.Text>
//                   <div style={{color: "grey"}}>
//                     Lorem ipsum dolor sit amet
//                   </div>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
          
//             <Card className=" card-1 square border border-0">
//               <Card.Img variant='top' src={showcase3}/>
//               <Card.Body>
//                 <Card.Title>
//                   SEO Optimized
//                 </Card.Title>
//                 <Card.Text>
//                   <div style={{color: "grey"}}>
//                     Lorem ipsum dolor sit amet. 
//                   </div>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
          
//             {/* card borders */}
//               <Card className=" card-1 square border border-0">
//                 <Card.Img variant='top' src={showcase4}/>

//                 <Card.Body>
//                   <Card.Title>
//                     SEO Optimized
//                   </Card.Title>
//                   <Card.Text>
//                     <div style={{color: "grey"}}>
//                       Lorem ipsum dolor sit amet. 
//                     </div>
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
        
//         </CardGroup>
//       </div>

//       {/* </div> */}
//     </>
    
//   );
// }

// export default FourCards;