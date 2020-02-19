import React, {useState, useEffect, Fragment} from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import config from './config.js'
import numeral from 'numeral';
// import Cards from '../Cards/Cards.js'


const YouTubeCounter = ()=>{

    const [subscriberCount, setSubscriberCount] = useState()
    const [viewCount, setViewCount] = useState()

    useEffect(()=>{


        const {api_key, channel_id} = config;
        const apiCall =`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}&key=${api_key}`
        fetch(apiCall)
        .then(result => result.json())
        .then(data =>{
            console.log(data);

            const count = numeral(data.items[0].statistics.subscriberCount).format('0,0');

            const views = numeral(data.items[0].statistics.viewCount).format('0,0');
            
            setSubscriberCount(count);
            setViewCount(views)
        })

        

    
    
    },[]);

    return (
        <div>
            <Card className="YoutubeCard"  body inverse color="danger">
                <CardTitle><h1>Youtube</h1></CardTitle>
                <CardText>
                    <h3>Subscribers:</h3>
                    <br/>
                    <h4>{subscriberCount}</h4></CardText>
                    <CardText>
                    <h3>Views:</h3>
                    <br/>
                    <h4>{viewCount}</h4></CardText>
                <Button color="secondary">More info</Button>
            </Card>
        </div>
    );




//     return <Fragment>
// {subscriberCount}

//     </Fragment>


    
};

export default YouTubeCounter;