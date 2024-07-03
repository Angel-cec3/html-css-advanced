//Grid of 6 cards made using react-bootstrap row and column

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/WhatWeDo.css';
import {FaRocket} from 'react-icons/fa';
import { GiCutDiamond } from "react-icons/gi";
import { IoBarChart } from "react-icons/io5";
import {IconContext} from "react-icons";

function CardGrid() {
  return (
    <div className="flex-grid">
        <Row>
        <Col md='4'>
          <Card className="square border border-0 transparent"> 
            <Card.Body>
              <Card.Title>
                <IconContext.Provider value={{style: {color: "rgb(7, 148, 243)", fontSize:"30px"}}}>
                  <FaRocket/> &emsp;
                </IconContext.Provider>
                Design
              </Card.Title>
              <Card.Text>
                <div className="left_align">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md='4'>
          <Card className="square border border-0 transparent">
            <Card.Body>
              <Card.Title>
                <IconContext.Provider value={{style: {color: "rgb(7, 148, 243)", fontSize:"30px"}}}>
                  <GiCutDiamond/> &emsp;
                </IconContext.Provider>
                Development
              </Card.Title>
              <Card.Text>
              <div className="left_align">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md='4'>
          <Card className="square border border-0 transparent">
            <Card.Body>
              <Card.Title>
                <IconContext.Provider value={{style: {color: "rgb(7, 148, 243)", fontSize:"30px"}}}>
                  <IoBarChart/> &emsp;
                </IconContext.Provider>
                Integration
              </Card.Title>
              <Card.Text>
                <div className="left_align">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>

        <Row >
        <Col md='4'>
          <Card className="square border border-0 transparent ">
            <Card.Body>
              <Card.Title>
                <IconContext.Provider value={{style: {color: "rgb(7, 148, 243)", fontSize:"30px"}}}>
                  <IoBarChart/> &emsp;
                </IconContext.Provider>
                Marketing Strategy
              </Card.Title>
              <Card.Text>
                <div className="left_align">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </div>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md='4'>
          <Card className="square border border-0 transparent ">
            <Card.Body>
              <Card.Title>
                <IconContext.Provider value={{style: {color: "rgb(7, 148, 243)", fontSize:"30px"}}}>
                  <IoBarChart/> &emsp;
                </IconContext.Provider>
                Collaboration
              </Card.Title>
              <Card.Text>
                <div className="left_align">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </div>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md='4'>
          <Card className="square border border-0 transparent ">
            <Card.Body>
              <Card.Title>
                <IconContext.Provider value={{style: {color: "rgb(7, 148, 243)", fontSize:"30px"}}}>
                  <IoBarChart/> &emsp;
                </IconContext.Provider>
                Social Analysis
              </Card.Title>
              <Card.Text>
                <div className="left_align">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </div>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    
      
      </Row>
    </div>
    
  );
}

export default CardGrid;