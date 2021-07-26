import React, { useState } from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Contact (){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (<div className="contact">
<Button variant="outline-secondary" onClick={handleShow}>
        Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How To Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>The best way to get in touch and access to a printable copy of my CV is on <a href="https://www.linkedin.com/in/lee-sampson-831a6614a/" target="_blank" rel="noreferrer">my Linkedin Page</a></p>
        <p>
          I am in the process of putting together a Youtube library of short videos so people can get more of an insight in to me. Let me know if you would like to see these via <a href="https://www.linkedin.com/in/lee-sampson-831a6614a/" target="_blank" rel="noreferrer">my Linkedin Page</a>
        </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    );
}


export default Contact;