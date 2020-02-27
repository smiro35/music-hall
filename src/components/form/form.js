import React from 'react';
// import SimpleContainer from '../Container/Container'
import{Form,Col,Button, Container} from "react-bootstrap";


function MyForm(){


    return(



 
<Container>
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Artist</Form.Label>
      <Form.Control type="email" placeholder="Enter artistname" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Tickest sold</Form.Label>
      <Form.Control type="Amount#" placeholder="amount#" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Last date</Form.Label>
    <Form.Control placeholder="MM/DD/YYYY" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Appearances</Form.Label>
    <Form.Control placeholder="Amount#" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>More stuff</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>More stuff</Form.Label>
     
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>More stuff</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>


)
};

export default MyForm;