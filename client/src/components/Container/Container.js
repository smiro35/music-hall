import React from 'react';
import{Container,Row,Col} from "react-bootstrap"


function container(props) {
  return (
    <Container style={{mariginBottom:"100%"}}>
    {props.children}
</Container>
  );
}


export default container


