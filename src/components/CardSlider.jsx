//Cards slider - inserted cards in carousel

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import '../styles/CardSlider.css';


function UncontrolledExample() {
  return (
    <>
    <div id="Blog" className='background'>
    <Carousel>
        {/*1st slider */}
      <Carousel.Item>
        <div className='cards-wrapper'>

            <Card style={{ width: '25rem' }}>
            <Card.Body>
                <div className='grey-heading'>by admin, June 29, 2018</div>
                <Card.Title>Integer vitae libero ac risus egestas placerat.</Card.Title>
                <Card.Text>
                  <div className='grey-body'>Phasellus posuere enim non vulputate suscipit. Nam vitae leo eget massa lacinia semper. Pellentesque eu pellentesque erat, ut convallis elit. Suspendisse varius vehicula purus sed ullamcorper. Nam orci dolor, iaculis eu ante eget, pellentesque lacinia turpis.</div> 
                  <div className='continue-reading'><a href="/">continue reading</a></div>
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '25rem' }} className="d-none d-md-block">
            <Card.Body>
                <div className='grey-heading'>by admin, June 29, 2018</div>
                <Card.Title>Cras ornare tristique</Card.Title>
                <Card.Text>
                  <div className='grey-body'>Phasellus posuere enim non vulputate suscipit. Nam vitae leo eget massa lacinia semper. Pellentesque eu pellentesque erat, ut convallis elit. Suspendisse varius vehicula purus sed ullamcorper. Nam orci dolor, iaculis eu ante eget, pellentesque lacinia turpis.</div> 
                  <div className='continue-reading'><a href="/">continue reading</a></div>
                </Card.Text>
            </Card.Body>
            </Card>
            
            <Card style={{ width: '25rem' }} className="d-none d-md-block">
            <Card.Body>
                <div className='grey-heading'>by admin, June 29, 2018</div>
                <Card.Title>Vivamus vestibulum nula nec ante.</Card.Title>
                <Card.Text>
                  <div className='grey-body'>Phasellus posuere enim non vulputate suscipit. Nam vitae leo eget massa lacinia semper. Pellentesque eu pellentesque erat, ut convallis elit. Suspendisse varius vehicula purus sed ullamcorper. Nam orci dolor, iaculis eu ante eget, pellentesque lacinia turpis.</div> 
                  <div className='continue-reading'><a href="/">continue reading</a></div>
                </Card.Text>
            </Card.Body>
            </Card>
            
        </div>
        
        
      </Carousel.Item>

      {/*2nd slider */}      
      <Carousel.Item>
        <div className='cards-wrapper'>

            <Card style={{ width: '25rem' }}>
            <Card.Body>
                <div className='grey-heading'>by admin, June 29, 2018</div>
                <Card.Title>At vero eos et accusamus et iusto.</Card.Title>
                <Card.Text>
                  <div className='grey-body'>Phasellus posuere enim non vulputate suscipit. Nam vitae leo eget massa lacinia semper. Pellentesque eu pellentesque erat, ut convallis elit. Suspendisse varius vehicula purus sed ullamcorper. Nam orci dolor, iaculis eu ante eget, pellentesque lacinia turpis.</div> 
                  <div className='continue-reading'><a href="/">continue reading</a></div>
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '25rem' }} className="d-none d-md-block">
            <Card.Body>
                <div className='grey-heading'>by admin, June 29, 2018</div>
                <Card.Title>Et harum quidem rerum facilis est et expedita distinctio. </Card.Title>
                <Card.Text>
                  <div className='grey-body'>Phasellus posuere enim non vulputate suscipit. Nam vitae leo eget massa lacinia semper. Pellentesque eu pellentesque erat, ut convallis elit. Suspendisse varius vehicula purus sed ullamcorper. Nam orci dolor, iaculis eu ante eget, pellentesque lacinia turpis.</div> 
                  <div className='continue-reading'><a href="/">continue reading</a></div>
                </Card.Text>
            </Card.Body>
            </Card>
            
            <Card style={{ width: '25rem' }} className="d-none d-md-block">
            <Card.Body>
                <div className='grey-heading'>by admin, June 29, 2018</div>
                <Card.Title>Itaque earum rerum hic tenetur a sapiente delectus.</Card.Title>
                <Card.Text>
                  <div className='grey-body'>Phasellus posuere enim non vulputate suscipit. Nam vitae leo eget massa lacinia semper. Pellentesque eu pellentesque erat, ut convallis elit. Suspendisse varius vehicula purus sed ullamcorper. Nam orci dolor, iaculis eu ante eget, pellentesque lacinia turpis.</div> 
                  <div className='continue-reading'><a href="/">continue reading</a></div>
                </Card.Text>
            </Card.Body>
            </Card>
            
        </div>
        
        
      </Carousel.Item>
  
    </Carousel>
    </div>
    
    </>
    
  );
}

export default UncontrolledExample;
