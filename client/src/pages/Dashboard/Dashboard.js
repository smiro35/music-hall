import React, { useState } from 'react';

import Simplecontainer from '../../components/Container/Container.js';
import numeral from 'numeral';
import axios from 'axios';
import SearchBar from '../../components/Search/SearchBar';
import MyNavbar from '../../components/Navbar/Navbar';
import Artist from '../../components/Search/Artist';
import { AuthProvider, AuthContext } from "../../AuthContext"
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
import API from '../../utils/API';



function Dashboard(props) {
  const [state, setState] = useState({
    search: "",
    mValue: 0,
 
  });

  const [data, setData] = useState([]);

  let newData = {};

  let spotify_val = 0



  // const [subscriberCount, setSubscriberCount] = useState();
  // const [viewCount, setViewCount] = useState();

  // let count = "";








  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log("this value", value)
    console.log("state", state);

    setState(
      {
        ...state,
        [name]: value,
        

      }
    )
  }

  
  function handleSubmit(event) {
    event.preventDefault();

    console.log("submitted");
    let url = `http://localhost:3001/api/dashboard/${state.search}`
    axios.get(url)
      .then(response => {

        newData=response.data

        let mValue =0;



        // const spotify = response.data.spotify.obj.followers[0]
        // const bandsintown = response.data.bandsintown.obj.followers[0]


        // console.log("this is rout",newData.push(data.data));
        // console.log(state.search)
        // newData = response.data.bandsintown.obj.followers[19];
        // newData['artist']=state.search;        
        // newData['bandsintown']=newData['value']
        // delete newData.value 
        // delete newData.channel_id
        // delete newData.interpolation
        // ;
        // console.log("this is spot", spotify)
        // console.log("this is bands", bandsintown)
        console.log("this is newdata", newData);

         spotify_val = newData.spotify.obj.followers[0].value;
        




        // let Myval = state.value

        //   const newData = data.data
        // console.log("this is rout",newData.push(data.data));
        // const newData = response.data.bandsintown.obj.followers[19];
        // console.log("this is newData", newData);
        // setData([
        //     ...data,
        //     newData
        // ])
        console.log("spotify_val: ", spotify_val)


        setState({
          ...state,
          [mValue]: spotify_val


        })
        console.log("my new state", state);
        
      })


  }
  function handlePostArtist(event) {
    API.postMusicAPI(newData)
  }

  return (
  <>

      <MyNavbar>
        <SearchBar
          name="search"
          myvalue="mValue"
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
        <li style={{textDecorationColor:"white"}}>
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
     
      
     variant="primary"
                variant="outline-primary"
                onClick={handlePostArtist}
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
    <Card.Img variant="top" src="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-png-transparent-light.png" />
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

 

      {/* /* /* /* <GridComponent style={{ margin: '5%' }} dataSource={data}
                allowPaging={true}
                height={268}
                // pageSettings={pageOptions}
                pageSize={true}
                allowFiltering={true}
                allowGroupin={true} */   }



      <div style={{ marginTop: '10px', marignLeft: '20px', backgroundColor: 'white' }}>

        <Table responsive triped bordered hover variant="dark">
          <thead>
            <tr>
              <th>DATE</th>
              <th>SPOTIFY</th>
              <th>YOUTUBE</th>
              <th>BANDS IN TOWN</th>
              <th>DEEZER</th>
              <th>FACEBOOK</th>
              <th>SOUND CLOUD</th>
              <th>ITUNES</th>
              <th>APPLE MUSIC</th>
              <th>AMAZON</th>
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
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              
            </tr>

          </tbody>
        </Table>
      </div>
    </Container>


  

   </Container >

  </>

);


}
export default Dashboard;


/* /* <tr>
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
</tr> */


/*




 */









                /* <GridComponent style={{margin:'5%'}} dataSource={data}
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


    // <Button className='m-1' onClick={e => {
    //             e.preventDefault();
    //             props.history.push('/table')
    //         }}>Table</Button>

    //         <Button variant="primary"
    //             variant="outline-primary"
    //             onClick={handlePostArtist}
    //         >Add Artist
    //   </Button>


























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

// 