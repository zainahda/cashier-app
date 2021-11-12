import React from 'react'
import {Navbar, Container} from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container className="d-flex justify-content-center">
      <Navbar.Brand href="#home">
      <strong>Arkana</strong> Cashier App
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent

