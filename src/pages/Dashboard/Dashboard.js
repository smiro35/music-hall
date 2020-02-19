
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ArtistSearch from '../../components/Search/ArtistSearch';
import YouTubeCounter from '../../components/Youtube/YouTubeCounter';
import Cards from '../../components/Cards/Cards.js';
// import Search from './components/Search/Search.js';


const Dashboard= (props) => {
    return (
        <>
            <ArtistSearch/>
            {/* <Container className="themed-container">SearchBox</Container> */}

            <Container className="themed-container" fluid="md">
                <Row>
                    <Col>SearchBox</Col>
                </Row>
                <Row>
                    <Col>
                     <YouTubeCounter/>
                    </Col>
                    <Col>TwitterCard</Col>
                    <Col>InstagramCard</Col>

                </Row>

            </Container>

            <Container className="themed-container" fluid={true}>Graph Here.</Container>
            
        </>
    );
}

export default Dashboard;


{/* <Container className="themed-container" fluid="sm">.container-sm</Container>
<Container className="themed-container" fluid="md">.container-md</Container>
<Container className="themed-container" fluid="lg">.container-lg</Container>
<Container className="themed-container" fluid="xl">.container-xl</Container> */}