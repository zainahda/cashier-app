import React from 'react'
import {Navbar, Container} from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      Arkana Cashier App
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent

