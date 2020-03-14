import React from 'react';
import {Card, ListGroup} from 'react-bootstrap'

function MyCard(props){
return(

  <Card style={{ width: '10rem', flex: 1  }}>
<Card.Img variant="top" src={props.image}/>
<ListGroup className="list-group-flush">
  {props.children}
  </ListGroup>
  <Card.Footer>
    <small className="text-muted">{props.timestp}</small>
  </Card.Footer>
</Card> 




 )
}
export default MyCard;


