import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Contact from "./Contact";
import Penguins from "./Penguins";


function Menu() {

return (
    <div>
<Navbar fixed= "top" bg="light" expand="lg">
<Navbar.Brand href="#home">
  Lee Sampson Resume
</Navbar.Brand> 
 <Navbar.Toggle />
 <Navbar.Collapse>
  <Navbar.Text>   
    <Contact />
  </Navbar.Text>
  <Navbar.Text>
      <Penguins />
  </Navbar.Text>
 </Navbar.Collapse>
</Navbar>
    </div>
)

}

export default Menu