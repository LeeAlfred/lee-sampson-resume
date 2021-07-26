import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'
import Accordian from 'react-bootstrap/Accordion';







function Skills(props) {
    return(
        <div className="skill-section">
<Container>
<Accordian>
<Accordian.Item eventKey='0'>
    <Accordian.Header>{props.skill}</Accordian.Header>
       
        <Accordian.Body>{props.level}</Accordian.Body>
       
</Accordian.Item>
</Accordian>
</Container>
</div>
    )
}

export default Skills