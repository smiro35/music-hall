
import React from 'react';
import { Row, Col } from 'reactstrap';
import ArtistSearch from '../../components/Search/ArtistSearch';
import YouTubeCounter from '../../components/Youtube/YouTubeCounter';
// import Cards from '../../components/Cards/Cards.js';
// import Search from './components/Search/Search.js';

import Simplecontainer from '../../components/Container/Container.js';
import MyNavbar from "../../components/Navbar/Navbar.js";


const Dashboard= (props) => {
    return (
        <Simplecontainer>
            <MyNavbar/>
            <ArtistSearch/>
           {/* <Row>
                    <Col>SearchBox</Col>
                </Row> */}
                <Row>
                    <Col>
                     <YouTubeCounter
                     />
                    </Col>
                    <Col></Col>
                    <Col>Spotify</Col>
                    <Col>Itunes</Col>

                </Row>

            


            
        </Simplecontainer>
    );
}

export default Dashboard;


