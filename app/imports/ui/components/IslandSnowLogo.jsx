import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Image } from 'react-bootstrap';

const IslandSnowLogo = () => (
  <Row>
    <Col className="col-12 d-flex justify-content-center pb-4">
      <Image src="/images/islandsnow-logo.png" />
    </Col>
  </Row>
);

export default IslandSnowLogo;
