import React, { useState } from 'react';
// import { Row, Col } from 'reactstrap';
import Simplecontainer from '../../components/Container/Container.js';
import numeral from 'numeral';
import axios from 'axios';
import SearchBar from '../../components/Search/SearchBar';
import MyNavbar from '../../components/Navbar/Navbar';
import Artist from '../../components/Search/Artist';
import{AuthProvider,AuthContext} from "../../AuthContext"
import { Card, CardDeck, Button, Container, Row, Col, Image, CardGroup, Table } from 'react-bootstrap';
import {
    GridComponent,
    ColumnDirective,
    ColumnsDirective,
    Page,
    PageSettingsModel,
    Inject,
    Filter,
    Group
} from '@syncfusion/ej2-react-grids';

import './Table.css';


function Dashboard() {
    const [state, setState] = useState({
        search: "",
        value: "",
        artist: false,
        channel_id: false,
    });

    const [data, setData] = useState([]);



    // const [subscriberCount, setSubscriberCount] = useState();
    // const [viewCount, setViewCount] = useState();

    // let count = "";








    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log("this value", value)
        console.log("stated", state);
        console.log("this is new value", state.value);
        

        setState(
            {
                ...state,
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
            .then(response => {
                //   const newData = data.data
                // console.log("this is rout",newData.push(data.data));
                const newData = response.data.bandsintown.obj.followers[19];
                console.log("this is newData", newData)

                setData([
                    ...data,
                    newData
                ])


                setState({
                    ...state,
                    [state.value]:newData.value

                })
                console.log("new state", state);



            })




    };

    return (

        
    
     <>
            <MyNavbar>
                <SearchBar
                    name="search"
                    value={state.value}
                    search={state.search}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit} />

            </MyNavbar>
            <Container fluid >

            <Container fluid style={{backgroundColor:'#462560'}} className="myCards">



            
  <Row className="justify-content-md-center">
    <Col xs md="2" style={{backgroundColor:'#462560'}}>
    <Image variant="top" src="https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99" style={{width:'80%'}} fluid roundedCircle/>
    
    <ul>
        <li>
            NAME: Ed Sheeran
        </li>
        <li>
            CPP RANK: 5
        </li>
        <li>
            Genre: 

        </li>


     </ul>

     <Button
     
      
    //   onClick={addArtist}
     >Add</Button>
    </Col> 
    <Col md="10">
    <CardGroup  md='12' style={{width:'100%'}}>
  <Card >
    <Card.Img variant="top" src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-32.png" />
    <Card.Body>
      <Card.Title>Spotify</Card.Title>
      <Card.Text>
        <h4>#</h4>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">timestp</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.freepnglogos.com/uploads/youtube-logo-png/youtube-transparent-youtube-play-button-png-download-clip-art-11.png" />
    <Card.Body>
      <Card.Title>Subscribers</Card.Title>
      <Card.Text>
        <h4>#</h4>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">timestp</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://circlekj.files.wordpress.com/2019/08/bandsintown-logo.jpg?w=980&h=720&crop=1" />
    <Card.Body>
      <Card.Title>BandinTown</Card.Title>
      <Card.Text>
      <h4>#</h4>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">timestp</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://pluspng.com/img-png/deezer-png--187.png" />
    <Card.Body>
      <Card.Title>Followers</Card.Title>
      <Card.Text>
       <h4>#</h4>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">timestp</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://clipartart.com/images/facebook-clipart-icon-transparent-4.png" />
    <Card.Body>
      <Card.Title>Followers</Card.Title>
      <Card.Text>
        <h4>#</h4>
        {' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">timestp</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="data:image/jpeg;base64,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" />
    <Card.Body>
      <Card.Title>Followers</Card.Title>
      <Card.Text>
        <h4>#</h4>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">timestp</small>
    </Card.Footer>
  </Card>
</CardGroup>
         </Col>
     <Col xs md="8"> 

  


    </Col>
  </Row>
  <Row >
     
    
     
     


     </Row>
     
    <Col md="6">
    
    
    
    <Col xs lg="2">
    
    </Col>
  </Col>




  

  <div style={{marginTop:'10px', marignLeft:'20px',backgroundColor:'white'}}>
   
  <Table responsive  triped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    {/* <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr> */}
  </tbody>
</Table>
</div>
</Container>


  

  </Container>

</>

/* 
                

                











                {/* <GridComponent style={{margin:'5%'}} dataSource={data}
        allowPaging={true}
        height={268}
        // pageSettings={pageOptions}
        pageSize={true}
        allowFiltering={true}
        allowGroupin={true}
    
    >
      <ColumnsDirective>
         <ColumnDirective field='value' headerText='ID' textAlign='Center' width='100' />
         <ColumnDirective field='timestp' headerText='Date' textAlign='Center'  width='100' />
         <ColumnDirective field='performance' headerText='Rating' textAlign='Center' format='c2' width='100' />
         </ColumnsDirective >
      <Inject services ={[Page,Filter, Group]}/>

    
    </GridComponent> */









            





       
    
            );

        
        }
        export default Dashboard;











        // import React from "react";
// import {
//   GridComponent,
//   ColumnDirective, 
//   ColumnsDirective,
//   Page,
//   PageSettingsModel,
//   Inject,
//   Filter,
//   Group
// } from '@syncfusion/ej2-react-grids';
// import data from './dataSource.json';
// import './Table.css';

// // css code url("https://cdn.syncfusion.com/ej2/material.css")

// // the Json object keys are rendered as the header, and the values as rows. 
// export default class MyGrid extends React.Component {

//   pageOptions:PageSettingsModel={

//     pageSize:8, pageSizes:true
//   };


//   render(){

//     return<GridComponent dataSource={data}
//         allowPaging={true}
//         height={268}
//         pageSettings={this.pageOptions}
//         pageSize={true}
//         allowFiltering={true}
//         allowGroupin={true}

//     >
//       <ColumnsDirective>
//          <ColumnDirective field='ID' headerText='ID' textAlign='Right' width='100' />
//          <ColumnDirective field='Customer' headerText='Customer' width='150' />
//          <ColumnDirective field='Performance' headerText='Performance' />
//          <ColumnDirective field='Date' headerText='Date' textAlign='Right' format='c2' width='100' />


//       </ColumnsDirective >
//       <Inject services ={[Page,Filter, Group]}/>


//     </GridComponent>

//   }


// }


































































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
