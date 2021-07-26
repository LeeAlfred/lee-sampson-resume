import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'


function Surf() {
    return (
        <div className="story">
   <Container fluid>    
         <Card border="light">
  <Image
    className="bottom-cards" variant="top"
    src="https://s6.gifyu.com/images/IMG-20191112-WA0002.jpg"
    alt="Me and my son sunset surfing"
  />
  <Card.Body>
    <Card.Title>Surf</Card.Title>
    <p>
     I came to surfing late in life (in my late 20's) but fell in love with longboards and being out the back of the lineup and taking the time to recharge.
    </p>

  </Card.Body>
</Card>
</Container> 
        </div>
    )
}

export default Surf