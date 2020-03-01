import React, { useState } from 'react';
// import SimpleContainer from '../Container/Container'
import { Form, Col, Button, Container } from "react-bootstrap";
import API from "../../utils/API.js";
function MyForm() {
  const [formObject, setformObject] = useState(
    {
      artist: "",
      date: "",
      ticketsSold: 0,
      attendance: 0,
      avgTicketPrice: 0,
      percentSold: 0,
      fiscalYear: 0,
      total$: 0,
      genre: "",
      projectedSuccess: "",
      actualSuccess: "",
      predictability: "",
      marketingBudget: 0
    }
  )
  // const [formObject, setFormObject] = useformObject({})
  // console.log("checking" + formObject);
  console.log(formObject);
  function handleInputChange() { handleInputChange.bind() };
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };
  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log("this the event" + event.target);
    setformObject({
      [name]: value
    });
  }
  // code to post
  // handleSubmit (event) {
  //   //alert('A list was submitted: ' + thisformObject.formvalue);
  //   event.preventDefault();
  //   fetch('your post url here', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       artist:formObject.artist,
  //       dateformObject.date,
  //       ticketsSoldformObject.ticketsSold
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err);
  // }
  function handleFormSubmit(event) {
    console.log("button was pressed")
    
    event.preventDefault();
    // if (formObject.title && formObject.author) {
    
      fetch("http://localhost:3001/api/performances", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'}
        }).then((response) => {
          setformObject({
            ...formObject,
            artist:formObject.artist,
            date:formObject.date,
            ticketsSold:formObject.ticketsSold
          })
        })
        // .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        // body: JSON.stringify({
        //   artist:formObject.artist,
        //   date:formObject.date,
        //   ticketsSold:formObject.ticketsSold
        // })
      }
      

    // }
  
      // API.saveBook({
      //   artist: formObject.artist,
      //   author: formObject.author,
      //   synopsis: formObject.synopsis
      // })
        // .then(res => loadBooks())
//         .catch (err => console.log(err));
// }
//   };
return (
  <Container>
    <Form onSubmit={handleFormSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Artist</Form.Label>
          <Form.Control type="text" name="artist" value={formObject.artist} onChange={handleInputChange} placeholder="Enter artist name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Date of the Performance</Form.Label>
          <Form.Control type="text" name="date" value={formObject.date} onChange={handleInputChange} placeholder="YYYY/MM/DD" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Tickets Sold</Form.Label>
          <Form.Control type="Amount#" name="ticketsSold" value={formObject.ticketsSold} onChange={handleInputChange} placeholder="Tickets Sold" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Attendance</Form.Label>
          <Form.Control name="attendance" value={formObject.attendance} onChange={handleInputChange} placeholder="Total Attendance" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Average Ticket Price</Form.Label>
          <Form.Control name="avgTicketPrice" value={formObject.avgTicketPrice} onChange={handleInputChange} placeholder="Avg. Ticket Price" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridformObject">
          <Form.Label>Percent of seats sold</Form.Label>
          <Form.Control name="percentSold" value={formObject.percentSold} onChange={handleInputChange} placeholder="% Sold" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Total $</Form.Label>
          <Form.Control name="total$" value={formObject.total$} onChange={handleInputChange} placeholder="$$$$" />
        </Form.Group>
      </Form.Row>
      <Form.Group as={Col} id="formGridCheckbox">
        <Form.Label>Genre</Form.Label>
        <Form.Control name="genre" value={formObject.genre} onChange={handleInputChange} placeholder="Genre" />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} id="formGridCheckbox">
          <Form.Label>Projected Success</Form.Label>
          <Form.Control name="projectedSuccess" value={formObject.projectedSuccess} onChange={handleInputChange} placeholder="Projected Success" />
        </Form.Group>
        <Form.Group as={Col} id="formGridCheckbox">
          <Form.Label>Actual Success</Form.Label>
          <Form.Control name="actualSuccess" value={formObject.actualSuccess} onChange={handleInputChange} placeholder="Actual Success" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} id="formGridCheckbox">
          <Form.Label>Predictability</Form.Label>
          <Form.Control name="predictability" value={formObject.predictability} onChange={handleInputChange} placeholder="Predictability" />
        </Form.Group>
        <Form.Group as={Col} id="formGridCheckbox">
          <Form.Label>Marketing Budget</Form.Label>
          <Form.Control name="marketingBudget" value={formObject.marketingBudget} onChange={handleInputChange} placeholder="Marketing Budget" />
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form>
  </Container>
);
  }

export default MyForm;