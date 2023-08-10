import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// change header color


function Header({handlePageChange}) {
  return (
<>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand 
        href="#home"
        onClick={() => handlePageChange("Home")}>Enchanted Express</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link 
            href="#gallery" 
            onClick={() => handlePageChange("Gallery")}>Photo Gallery</Nav.Link>

            <Nav.Link href="#contact" 
            onClick={() => handlePageChange("Contact")}>Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 

</>    
  );
}

export default Header;