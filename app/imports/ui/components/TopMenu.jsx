import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Facebook, Twitter, Pinterest, Instagram, HouseFill, Search, PersonFill,
  Cart } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto">
        <Nav.Link className="text-dark px-1"><Facebook /></Nav.Link>
        <Nav.Link className="text-dark px-1"><Twitter /></Nav.Link>
        <Nav.Link className="text-dark px-1"><Pinterest /></Nav.Link>
        <Nav.Link className="text-dark px-1"><Instagram /></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link className="text-dark px-1"><HouseFill /> </Nav.Link>
        <Nav.Link className="text-dark px-1"><Search /> </Nav.Link>
        <Nav.Link className="text-dark ps-1 pe-0"><PersonFill /> </Nav.Link>
        <NavDropdown title={<Cart />}>
          <NavDropdown.Item />
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

export default TopMenu;
