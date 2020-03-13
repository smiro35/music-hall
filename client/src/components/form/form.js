import React, { useState, useEffect } from 'react';
// import SimpleContainer from '../Container/Container'
import { Form, Col, Button, Container } from "react-bootstrap";
import API from "../../utils/API.js";



function MyForm() {
  
  const [artists, setArtists] = useState([])
  console.log(artists)
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

// Load all performances within setArtists
useEffect(() => {
  loadArtists()
}, [])
 
// Load all artists and set to artists
function loadArtists() {
    API.getArtists()
        .then(res =>
            setArtists(res.data)
        )
        .catch(error => console.log(error));
}

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
    console.log(event.target.value);
    setformObject({
      ...formObject,
      // artist:formObject.artist,
      // date:formObject.date,
      // ticketsSold:formObject.ticketsSold,
      [name]:value
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
    console.log(formObject);
      if (formObject.artist && formObject.date){

        API.postPerformance({
        ArtistId: formObject.artist,
        date: formObject.date,
        total_sold: formObject.ticketsSold,
        total_money: formObject.total$,
        total_attendance: formObject.attendance,
        average_ticket_price: formObject.avgTicketPrice,
        percent_sold: formObject.percentSold,
        actual_success: formObject.actualSuccess
      })
      .then(data => console.log("This is it"+ data))
      .catch(err => console.log(err))
      };


      // .then((data) => {
      //     setformObject({
      //       ...formObject,
      //       artist:formObject.artist,
      //       date:formObject.date,
      //       ticketsSold:formObject.ticketsSold
      //     })
      //   })
        // .then(res => res.json())
        
        
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
          <Form.Control as="select" name="artist" onChange={handleInputChange} placeholder="Select an Artist">
              {artists.length ? (
                artists.map(artist => {
                    return (
                      <option value={artist.id}>{artist.artist_name}</option>
                    )
                })) : (
                <option>No Results</option>
            )} 
          </Form.Control>
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