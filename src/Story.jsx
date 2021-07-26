import React from "react";
import { Card } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function Story() {
    return (
        <div className="story">
   <Container fluid>    
  <Card border="light">
  
  <Card.Body>
  <Image className="profile-img"        variant="top" src="https://s6.gifyu.com/images/sqaureProfImg.th.png"
    alt="Lee Sampson profile"/>
    <Card.Title> My Story</Card.Title>
    <Card.Text>
    <p>
    Life experience has helped make me a genuinely nice person who understands that getting to know people is the key to success.
    </p>
    <p>
    Over the past 20 years I have had leadership roles in Hospitality, Service, Finance and IT.   
    </p>
    <p>
    This wealth of experience allows me to bring successful skills, practices and knowledge from those sectors with me. It also demonstrates my comfort to continually learn, adapt and work with a diverse cross-section of society.
    </p>
    <p>
    At work I am most passionate about fostering 'a culture of teamwork', where the customer experience and staff engagement are a team's measure of success.
    </p>
    <p>
    I excel because people can tell I genuinely care.   
    </p>
    </Card.Text>
  </Card.Body>
</Card>
</Container> 
        </div>
    )
}

export default Story