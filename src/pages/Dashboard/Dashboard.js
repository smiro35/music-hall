import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import YouTube, { artist } from '../../components/Api/YouTube';
import Simplecontainer from '../../components/Container/Container.js';
import numeral from 'numeral';
import axios from 'axios';
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

    // const [subscriberCount, setSubscriberCount] = useState();
    // const [viewCount, setViewCount] = useState();

    // let count = "";






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
