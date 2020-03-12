import React from "react";
import { Form, Col, Button, Container } from "react-bootstrap";

export function ArtistOptionsData({ children }) {
  console.log(children);
    return (
        
        // <Form.Group controlId="exampleForm.ControlSelect1">
        // <Form.Label>Example select</Form.Label>
        <Form.Control as="select">
            {children}
        </Form.Control>
      // </Form.Group>
      
    );
  }
  
  export function OptionItem({ children }) {
    return <option>{children}</option>;
  }
  
  export default ArtistOptionsData;
