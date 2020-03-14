import React from 'react';
import{Figure, ListGroup, Button, Card, ListGroupItem} from 'react-bootstrap';

function TopCard(props){

  // function handleThem(e){
  //   props.handlePostArtist(); 
  //   props.tableDisplay();
  // }


 return(

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  width={171}
      height={180}
      alt="Artist's image"
      src={props.image} />
  <Card.Body>
    <Card.Title>Name: {props.artist_name}</Card.Title>
    </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Genre: {props.genre}</ListGroupItem>
    <ListGroupItem>CM RANK: {props.rank}</ListGroupItem>
    
  </ListGroup>
  <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  
  <Button variant="primary" size="sm" onClick={props.handlePostArtist}>
      Add to database
</Button>
  
    
</Card>

   




 )



}

export default TopCard;



