import React from 'react';
import{Figure, ListGroup, Button} from 'react-bootstrap';

function MyFigure(props){


 return(

    <Figure>
    <Figure.Image
      
      width={171}
      height={180}
      alt="171x180"
      src={props.image}
    />
    <Figure.Caption>
      <ListGroup horizontal>
 <ListGroup.Item>Name:{props.children}</ListGroup.Item>
        <ListGroup.Item>Genre: {props.children}</ListGroup.Item>
        <ListGroup.Item>CM Rank: {props.children}</ListGroup.Item>

      </ListGroup>
    </Figure.Caption>
    <Button variant="primary" size="sm" onClick={props.handlePostArtist}>
      Add to database
</Button>
  </Figure>




 )



}

export default MyFigure;