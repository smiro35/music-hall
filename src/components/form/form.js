import React from 'react';
// import SimpleContainer from '../Container/Container'
import { Form, Col, Button, Container } from "react-bootstrap";
function MyForm() {
  return (
    <Container>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Artist</Form.Label>
            <Form.Control type="email" placeholder="Enter artist name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Date of the Performance</Form.Label>
            <Form.Control type="email" placeholder="YYYY/MM/DD" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Tickets Sold</Form.Label>
            <Form.Control type="Amount#" placeholder="Tickets Sold" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label>Attendance</Form.Label>
            <Form.Control placeholder="Total Attendance" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Average Ticket Price</Form.Label>
            <Form.Control placeholder="Avg. Ticket Price" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Percent of seats sold</Form.Label>
            <Form.Control placeholder="% Sold" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Total $</Form.Label>
            <Form.Control placeholder="$$$$" />
          </Form.Group>
          
        </Form.Row>
        <Form.Group as={Col} id="formGridCheckbox">
          <Form.Label>Genre</Form.Label>
          <Form.Control placeholder="Genre" />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} id="formGridCheckbox">
            <Form.Label>Projected Success</Form.Label>
            <Form.Control placeholder="Projected Success" />
          </Form.Group>
          <Form.Group as={Col} id="formGridCheckbox">
            <Form.Label>Actual Success</Form.Label>
            <Form.Control placeholder="Actual Success" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} id="formGridCheckbox">
            <Form.Label>Predictability</Form.Label>
            <Form.Control placeholder="Predictability" />
          </Form.Group>
          <Form.Group as={Col} id="formGridCheckbox">
            <Form.Label>Marketing Budget</Form.Label>
            <Form.Control placeholder="Marketing Budget" />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
    </Container>
  )
};
export default MyForm;