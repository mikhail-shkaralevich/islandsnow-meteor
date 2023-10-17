import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

const FooterMenu = () => (
  <footer>
    <Container>
      <Row className="py-3">
        <Col>
          Navigation
          <hr />
          <div>About Us</div>
          <div>Employment</div>
          <div>Videos</div>
        </Col>
        <Col>
          MAIN MENU
          <hr />
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </Col>
        <Col>
          CONNECT
          <hr />
          <div>Sign up for the latest updates</div>
          <input type="text" placeholder="Enter Email Address" />
          <div className="btn btn-dark">Join</div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;
