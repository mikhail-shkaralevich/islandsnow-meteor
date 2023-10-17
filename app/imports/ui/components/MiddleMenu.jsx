import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, NavDropdown } from 'react-bootstrap';

const MiddleMenu = () => (
  <Row className="justify-content-center pt-4">
    <Col className="col-1 d-flex justify-content-center and text-center">
      <NavDropdown title={<strong>MEN</strong>}>
        <NavDropdown.ItemText>MEN!!!</NavDropdown.ItemText>
      </NavDropdown>
    </Col>
    <Col className="col-1 d-flex justify-content-center and text-center">
      <NavDropdown title={<strong>WOMEN</strong>}>
        <NavDropdown.ItemText>WOMEN!!!</NavDropdown.ItemText>
      </NavDropdown>
    </Col>
    <Col className="col-1 d-flex justify-content-center and text-center">
      <NavDropdown title={<strong>KIDS</strong>}>
        <NavDropdown.ItemText>KIDS!!!</NavDropdown.ItemText>
      </NavDropdown>
    </Col>
    <Col className="col-1 d-flex justify-content-center and text-center">
      <NavDropdown title={<strong>BRANDS</strong>}>
        <NavDropdown.ItemText>BRANDS!!!</NavDropdown.ItemText>
      </NavDropdown>
    </Col>
    <Col className="col-1 d-flex justify-content-center and text-center">
      <strong>SEARCH</strong>
    </Col>
  </Row>
);

export default MiddleMenu;
