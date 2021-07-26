import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function Developer () { 
    return (<div className='story'>
<Container fluid>   
<h5> Web Development</h5>
<p>
The move to South Africa inspired me to take the time to study Web Development remotely. It combines my love of building, creating and learning. 
</p>
<p>
The dream is to turn this into a career.    
</p>
<Row>

<Col>

  <Card border="light">
    <Card.Img

        
        variant="top"
        className="websites"
        src="https://s6.gifyu.com/images/lee-sampson-web-dev-site.jpg" />
    <Card.Body>
      <Card.Title>Lee Sampson Web Dev Projects</Card.Title>
      <Card.Text>
      A basic Website built with React to display my Web Dev Projects. It will continue to grow as my skillset does
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">If you are interested you can vist this website <a href="https://leesampson-project.netlify.app/" target="_blank" rel="noreferrer">here.</a> </small>
    </Card.Footer>
  </Card>
</Col>
<Col>
  <Card border="light">
    <Card.Img variant="top" className="websites" src="https://s6.gifyu.com/images/penguins-byLeeSampson-site.jpg" />
    <Card.Body>
      <Card.Title>Penguins byLeeSampson</Card.Title>
      <Card.Text>
      A website I built using React for displaying my posts from Linkedin illustrating my thoughts on Leadership using penguins.


      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">If you are interested you can vist this website <a href="http://penguins-by-lee-sampson.herokuapp.com/" target="_blank" rel="noreferrer">here.</a> </small>
    </Card.Footer>
  </Card>
</Col>
<Col>
  <Card border="light">
    <Card.Img variant="top" className="websites" src="https://s6.gifyu.com/images/wandering-light-photography-site.jpg" />
    <Card.Body>
      <Card.Title>wandering-light-photography</Card.Title>
      <Card.Text>
      Built using React for hosting my wife's photography. This is an ongoing project as I learn more about optimising content.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">If you are interested you can vist this website <a href="http://wandering-light-photography.herokuapp.com/" target="_blank" rel="noreferrer">here.</a> </small>
    </Card.Footer>
  </Card>
</Col>
</Row>
</Container> 
      </div>
    );

}

export default Developer