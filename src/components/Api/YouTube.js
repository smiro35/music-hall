import React, { useState } from 'react';
import Gridcall from '../Grid/Grid'
import { Card,CardDeck} from 'react-bootstrap';
import numeral from 'numeral';




function YouTube (props)  {

    // const [subscriberCount, setSubscriberCount] = useState()
    // const [viewCount, setViewCount] = useState()

    // useEffect(() => {


    //     const { api_key, channel_id, artist } = config;
    //     const apiCall = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${artist}&key=${api_key}`;

        

        
           


    //     fetch(apiCall)
    //         .then(result => result.json())
    //         .then(data => {
    //             console.log(data.items[0].id.channelId);
    //             const Id = data.items[0].id.channelId;
    //             const newApicall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Id}&key=${api_key}`;
    //             fetch(newApicall)
    //                 .then(result => result.json())
    //                 .then(data => {
    //                     console.log(data);

    //                     const count = numeral(data.items[0].statistics.subscriberCount).format('0,0');
    //                     console.log(count);
                        

    //                     const views = numeral(data.items[0].statistics.viewCount).format('0,0');
    //                     console.log(views);
                        

    //                     setSubscriberCount(count);
    //                     setViewCount(views)


    //                 })



    //         })





    // }, []);

    return (
      
        
        <Card bg="danger" text="white" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiB7J2E8f3nAhWBiOAKHdCdBZMQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.youtube.com%2Fabout%2Fbrand-resources%2F&psig=AOvVaw0vV4RgRkfRLSO_5ipqkcNr&ust=1583310394819661" />
        <Card.Body>
          <Card.Title>YouTube</Card.Title>
          
    <h2>Subscription:{props.count}</h2> 

           <h2>Views:</h2> 
          
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
        
    );




    //     return <Fragment>
    // {subscriberCount}

    //     </Fragment>



};

export default YouTube;