import React from 'react';
import {Card} from 'react-bootstrap'

function MyCard(props){


return(

<Card style={{width:'18rem'}}>
<Card.Img variant="top" src={props.image}/>
    
    <Card.Body>
<Card.Title>{props.title}</Card.Title>
      <Card.Text>
         {props.children}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
<small className="text-muted">Last updated:{props.timestp}</small>
    </Card.Footer>
  </Card>


)

}
export default MyCard;