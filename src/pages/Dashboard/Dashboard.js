
import React,{useState} from 'react';
import { Row, Col } from 'reactstrap';
import YouTubeCounter,{artist} from '../../components/Api/YouTubeCounter';
import Simplecontainer from '../../components/Container/Container.js';
import MyNavbar from "../../components/Navbar/Navbar.js";
import Api from "../../components/Api/Api"
import SearchBar from '../../components/Api/SearchBar';


function Dashboard () {

  
    
    return (
        <>
        <MyNavbar/>
        
        <Simplecontainer>

        {/* <SearchBar/> */}
        
         
        
            <Api/>
            
            
          
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
        </>
    );
           
}

export default Dashboard




