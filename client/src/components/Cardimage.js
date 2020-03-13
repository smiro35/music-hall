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
 <ListGroup.Item>Name:{props.artist_name}</ListGroup.Item>
        <ListGroup.Item>Genre: {props.genre}</ListGroup.Item>
        <ListGroup.Item>CM Rank: {props.rank}</ListGroup.Item>

      </ListGroup>
    </Figure.Caption>
    <Button variant="primary" size="lg" block onClick={props.handlePostArtist}>
      Add to database
</Button>
  </Figure>




 )



}

export default MyFigure;