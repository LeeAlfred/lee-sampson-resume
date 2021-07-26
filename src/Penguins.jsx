import React, { useState} from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Penguins (){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (<div className="contact">
<Button className="button" variant="outline-secondary" onClick={handleShow}>
        Penguins
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leadership Penguins byLeeSampson</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Here is a link to a webesite I created for displaying my thoughts on Leadership using penguins if you are interested in getting some insight into my leadership style. <a href="http://penguins-by-lee-sampson.herokuapp.com/" target="_blank" rel="noreferrer">Penguins byLeeSampson</a></p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    );
}


export default Penguins;