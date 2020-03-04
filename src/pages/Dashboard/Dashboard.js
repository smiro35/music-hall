
import React,{useState} from 'react';
import { Row, Col } from 'reactstrap';
import YouTube,{artist} from '../../components/Api/YouTube';
import Simplecontainer from '../../components/Container/Container.js';
import MyNavbar from "../../components/Navbar/Navbar.js";
import Api from "../../components/Api/Api"
import SearchBar from '../../components/Api/SearchBar';


function Dashboard () {

  
    
    return (
        <>
         
        <MyNavbar/>
       
        
        <Simplecontainer>

       
        
         
        
            <Api/>
            
            
          
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

export default Dashboard




