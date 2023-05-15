import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbars() {
  return (
    <div>
         <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">      <h2>Restaurant Self-Onboarding</h2></Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
