import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Carousel from './Carousel';

import ProductItem from './Categories/ProductItem';

const Banner = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Carousel />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
