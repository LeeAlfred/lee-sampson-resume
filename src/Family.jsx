import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function Family() {
    return (
        <div className="story">
   <Container fluid>    
         <Card border="light">
  <Image
   
    className="bottom-cards" variant="top"
    src="https://s6.gifyu.com/images/IMG-20171125-WA0001.jpg"
    alt="Family Camper Trip"
  />
  <Card.Body>
    <Card.Title>Family</Card.Title>
    <p>
      I am a proud father of three, our daughter is currently studying at university and our two son's at school here.
    </p>
    
    <p> My wife is South African and we moved to Cape Town in 2019 so she can care for her family here.</p>
  </Card.Body>
</Card>
</Container> 
      </div>
    )
}

export default Family