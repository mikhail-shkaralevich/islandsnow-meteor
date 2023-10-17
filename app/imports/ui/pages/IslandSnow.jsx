import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import IslandSnowLogo from '../components/IslandSnowLogo';
import MiddleMenu from '../components/MiddleMenu';
import FullWidthImage from '../components/FullWidthImage';

const IslandSnow = () => (
  <Container fluid>
    <IslandSnowLogo />
    <MiddleMenu />
    <FullWidthImage />
  </Container>
);

export default IslandSnow;
