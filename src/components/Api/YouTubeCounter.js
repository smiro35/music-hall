import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import config from '../Youtube/config.js'
import numeral from 'numeral';
// import Cards from '../Cards/Cards.js'


function YouTubeCounter  (props)  {

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
        <div>
            <Card className="YoutubeCard" body inverse color="danger">
                <CardTitle>Youtube</CardTitle>
                <CardText>
                    Subscribers
                    <br />
                    
                    subscriptioin count
                        
                    </CardText>
                <CardText>
                    Views
                    <br />
                    viewCount
                    </CardText>
                <Button color="secondary">More info</Button>
            </Card>
        </div>
    );




    //     return <Fragment>
    // {subscriberCount}

    //     </Fragment>



};

export default YouTubeCounter;