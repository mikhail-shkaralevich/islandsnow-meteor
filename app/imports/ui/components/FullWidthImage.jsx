import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Image } from 'react-bootstrap';

const FullWidthImage = () => (
  <Row>
    <Col className="px-0">
      <Image src="/images/main.png" />
    </Col>
  </Row>
);

export default FullWidthImage;
