import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import YouTubeCounter from '../Youtube/YouTubeCounter'


const Cards = (props) => {
    return (
        <div>
            <Card body inverse color="danger">
                <CardTitle><h1></h1></CardTitle>
                <CardText></CardText>
                <Button color="secondary">Button</Button>
            </Card>
        </div>
    );
};

export default Cards;