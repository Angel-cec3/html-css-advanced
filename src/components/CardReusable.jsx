import React from "react";
// import { Card } from "react-bootstrap";
import {FaRocket} from 'react-icons/fa'
import '../styles/WhatWeDo.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const CardReusable = () => {
    const cardInfo = [
        { icon: <FaRocket/>, title: "Great", text: "this is relative"},
        { icon: <FaRocket/>, title: "break", text: "this is relative"},
        { icon: <FaRocket/>, title: "Great", text: "this is relative"},
        { icon: <FaRocket/>, title: "Great", text: "this is relative"},
        { icon: <FaRocket/>, title: "Great", text: "this is relative"},
        { icon: <FaRocket/>, title: "Great", text: "this is relative"}
        



    
      ];

      const renderCard =() =>{

        // return(
        //     <>

             
        //     </>
    
        // )

      }

      return <div>
        <div className="flex">
                {cardInfo.map((card, index) => {
                    return(
                        <>

                        <Row key={index} className='mb-3'>
                            <Col md='4'>
                            <Card >
                                <Card.Body>
                                    help
                                    <Card.Title>
                                    {card.icon} {card.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {card.text}
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            </Col>

                        </Row> 
                         {/* <div key = {index} className="title"> {card.icon}{card.title}</div>
                        <p className="description"> 
                    {card.text}
                        </p>  */}

                        </>
                        

                    );

                        
                    
                        

                    

                })};

                
    
                
            </div>
            
      </div>;

    
}

export default CardReusable;