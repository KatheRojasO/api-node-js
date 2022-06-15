import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';

export const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className='nav_bar'>
        <Container>
          <Navbar.Brand href="#home">Inventario IUDigital de Antioquia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./inventory">Devices</Nav.Link>
            <Nav.Link href="./users">Users</Nav.Link>
            <Nav.Link href="./devices">Inventory</Nav.Link>
            <Nav.Link href="./brand">Brands</Nav.Link>
            <Nav.Link href="./status">Status</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
