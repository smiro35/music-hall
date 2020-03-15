import React from 'react';
import {Card, ListGroup} from 'react-bootstrap'

function MyCard(props){
return(

  <Card style={{ width: '12.5rem', flex: 1  }}>
<Card.Img variant="top" src={props.image}/>
 <Card.Body>

 {props.children}
 </Card.Body>


<ListGroup className="list-group-flush">
  {props.num}
  </ListGroup>
  <Card.Footer>
    <small className="text-muted">{props.timestp}</small>
  </Card.Footer>
</Card> 




 )
}
export default MyCard;


