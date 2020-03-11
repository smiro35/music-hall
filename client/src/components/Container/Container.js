import React from 'react';
import{Container,Row,Col} from "react-bootstrap"


function container() {
  return (
    <Container>
  <Row>
    <Col sm={4}>sm=4</Col>
    <Col md={8}>md=8</Col>
  </Row>
  <Row>
    <Col md>md=true</Col>
    
  </Row>
</Container>
  );
}


export default container


