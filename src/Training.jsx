import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';


function Training(props) {
    return(
        <div className="training">
<Container>
<Card border="light">
    <Card.Body>
    <Card.Title></Card.Title>
        <Card.Subtitle className= "mb-2 texted-muted">{props.course}</Card.Subtitle>
        <Card.Text>{props.provider}</Card.Text>  
    </Card.Body>
</Card>
</Container>
        </div>
    )
}

export default Training