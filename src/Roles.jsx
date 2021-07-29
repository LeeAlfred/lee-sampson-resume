import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from 'react-bootstrap/Accordion';


function Roles(props) {
    return(
        
     <div className= 'roles'>
<Container>

        <h5>{props.role}</h5>
        <h6>{props.employer}</h6>
        <Accordion>
       
        <Accordion.Item eventKey='0'>
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>{props.description}</Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey='1'>
        <Accordion.Header>Skills</Accordion.Header>
        <Accordion.Body>{props.keywords}</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='2'>
        <Accordion.Header>Achievements</Accordion.Header>
        <Accordion.Body>{props.description}</Accordion.Body>
        </Accordion.Item>
        </Accordion>


 
</Container>
      </div>
    )
}

export default Roles