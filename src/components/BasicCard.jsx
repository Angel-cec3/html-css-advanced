//Just sample card- not included in main project

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {FaRocket} from 'react-icons/fa'
import '../styles/WhatWeDo.css';


 
function BasicCard() {

  const cardInfo = [
    { icon: <FaRocket/>, title: "Great", text: "this is relative"},
    { icon: <FaRocket/>, title: "break", text: "this is relative"},
    { icon: <FaRocket/>, title: "Great", text: "this is relative"},
    { icon: <FaRocket/>, title: "Great", text: "this is relative"}


  ];

  const renderCard = (card, index) => {
    return(
      <Container>
      <Row  md={4}>
        <Card className='card' style={{ width: '18rem', display: 'inline-flex', justtifyContent: 'space-around' }}>
        <Card.Body>
        <Card.Title>
          {card.icon}
          {card.title}
        </Card.Title>
        <Card.Text>
          {card.text}
        </Card.Text>
      </Card.Body>
      </Card>
      </Row>
      </Container>
      
      


      
    )
  }

  return <div> {cardInfo.map(renderCard)}</div>;
}

export default BasicCard;