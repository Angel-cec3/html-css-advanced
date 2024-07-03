//three cards layout in second page

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/AboutUs.css';
import {FaRocket} from 'react-icons/fa';
import { GiCutDiamond } from "react-icons/gi";
import { IoBarChart } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import {IconContext} from "react-icons";

function ThreeCards() {
  return (
    <div className="flex">
        <Row xs={1} md={3}>
        <Col className="three">
        <span >
          <Card className="three-card square border border-0"> 
            <Card.Body>
              <Card.Title>
                <IconContext.Provider value={{style: {color: "rgb(0, 123, 255)"}}}>
                  <FaRocket/>
                </IconContext.Provider>
                <div style={{marginLeft:"1vw"}}>Powerful Code</div>
                
              </Card.Title>
              <Card.Text>
                <div className="left_align">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>

                <div>
                  <p><TiTick/>Lorem ipsum dolor sit amet</p>
                  <p><TiTick/>Lorem ipsum dolor sit amet</p>
                  <p><TiTick/>Lorem ipsum dolor sit amet</p>
                  <p><TiTick/>Lorem ipsum dolor sit amet</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          </span>
        </Col>

        <Col>
          <Card className="three-card square border border-0">
            <Card.Body>
              <Card.Title>
                <IconContext.Provider value={{style: {color: "rgb(0, 123, 255)"}}}>
                  <GiCutDiamond/>
                </IconContext.Provider>
                <div style={{marginLeft:"1vw"}}>Awesome Portfolio</div>

              </Card.Title>
              <Card.Text>
              <div className="left_align">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>

                <div>
                  <p><TiTick/>Lorem ipsum dolor sit amet</p>
                  <p><TiTick/>Lorem ipsum dolor sit amet</p>
                  <p><TiTick/>Lorem ipsum dolor sit amet</p>
                  <p><TiTick/>Lorem ipsum dolor sit amet</p>
                </div>
              
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="three-card square border border-0">
            <Card.Body>
              <Card.Title>
                <IconContext.Provider value={{style: {color: "rgb(0, 123, 255)"}}}>
                  <IoBarChart/> 
                </IconContext.Provider>
                <div style={{marginLeft:"1vw"}}>SEO Optimized</div>
                
              </Card.Title>
              <Card.Text>
                <div className="left_align">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </div>

                  <div>
                    <p><TiTick/>Lorem ipsum dolor sit amet</p>
                    <p><TiTick/>Lorem ipsum dolor sit amet</p>
                    <p><TiTick/>Lorem ipsum dolor sit amet</p>
                    <p><TiTick/>Lorem ipsum dolor sit amet</p>
                  </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
    </div>
    
  );
}

export default ThreeCards;