import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import YouTube, { artist } from '../../components/Api/YouTube';
import Simplecontainer from '../../components/Container/Container.js';
import numeral from 'numeral';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../../components/Api/SearchBar';
import MyNavbar from '../../components/Navbar/Navbar';

import Spotify from '../../components/Api/Spotify';
import Artist from '../../components/Api/Artist';
import { Card, CardDeck, Button } from 'react-bootstrap';


function Dashboard() {
    const [state, setState] = useState({
        search: "",
        artist: false,
        channel_id: false,

    });

    const [subscriberCount, setSubscriberCount] = useState();
    const [viewCount, setViewCount] = useState();

    let count = "";






    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log(value)
        console.log("stated", state);
        
        setState(
            {  ...state,
                [name]: value
            }
        )
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("submitted");
        let url = `http://localhost:3001/api/dashboard/${state.search}`
        console.log("State here:", state.search);
        
        console.log(url);
        
       
        axios.get(url)
             .then(data => {console.log(data.data)})

    //     console.log("tried to make api call.")

    //     const api_key = "AIzaSyD8oztcAFZeVYzRDZbTg4DXBLlSUp-WuaI";
    //     const apiCall = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${state.search}&key=${api_key}&type=channel`;

    //     fetch(apiCall)
    //         .then(result => result.json())
    //         .then(data => {
    //             console.log("search data", data);
    //             const Id = data.items[0].id.channelId;
    //             console.log("channel id", Id);
    //             const newApicall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Id}&key=${api_key}`;
    //             fetch(newApicall)
    //                 .then(result => result.json())
    //                 .then(data => {
    //                     console.log(data);

    //                     count = numeral(data.items[0].statistics.subscriberCount).format('0,0');
    //                     console.log(count);


    //                     const views = numeral(data.items[0].statistics.viewCount).format('0,0');
    //                     console.log(views);


    //                     setSubscriberCount(count);
    //                     setViewCount(views)


    //                 })



    //         });


    
    // const token = "BQD7_-zlSZZlc1r4paHNbruwzCxTwiMKHOMe-bFbGgaPk65_fng1N4tB_z0kHGwKjNvrjYsAx_5oh61U__Qxrw0E6iola4TjBNFTyqakN1CR77hsm4QAasuG6K6Z3KhgI7GGsHfP8uwiQBea3p-rEqystmp2K0CHG7aOooMsPOAY_Ss1wskd30C1YrvJCt8v6S7XCWLBHSkRza-QfAsfTdo1lkEX6v0PbSRAvlyQzrG4NJpkVvtYO85q9V2oLxMxO9T7LWTLZs4bgyq1JA6oqNY1_aP1AA";

    // const url = `https://api.spotify.com/v1/search?q=${state.search}&type=artist`
    // axios.get(url, {
    //     headers: {
    //         'Authorization': `Bearer ${token}`
    //     }
    // })
    //     .then((response) => {
    //         setState({
    //             ...state,
    //             artist: response.data.artists.items[0]
    //         },
    //             () => console.log(state.artist))
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     })


    };

    return(
      <>

        <MyNavbar>
            <SearchBar 
            name="search"
            search={state.search}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}/> 
       
         </MyNavbar>
        




        <Simplecontainer>





            {/* <Api/> */}



            <Row>
                <Col>

                </Col>
                <Col></Col>
                <Col>Spotify</Col>
                <Col>Itunes</Col>

            </Row>





        </Simplecontainer>
      </>
    );
}
export default Dashboard;


































































// function Dashboard () {



//     return (
//         <>

//         <MyNavbar>   
//             <SearchBar/>
//         </MyNavbar>


//         <Simplecontainer>





//             <Api/>



//                 <Row>
//                     <Col>

//                     </Col>
//                     <Col></Col>
//                     <Col>Spotify</Col>
//                     <Col>Itunes</Col>

//                 </Row>





//         </Simplecontainer>
//         </>
//     );

// }
