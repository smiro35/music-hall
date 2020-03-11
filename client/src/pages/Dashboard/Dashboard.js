import React, { useState, useContext } from 'react';
import { AuthContext } from '../../AuthContext'
import { Row, Col } from 'reactstrap';
// import YouTube, { artist } from '../../components/Api/YouTube';
import container from '../../components/Container/Container';
import numeral from 'numeral';
import axios from 'axios';
import SearchBar from '../../components/Search/SearchBar';
import MyNavbar from '../../components/Navbar/Navbar';
// import Spotify from '../../components/Api/Spotify';
// import Artist from '../../components/Api/Artist';
import { Card, CardDeck, Button, Container, Table, Image, Figure, ListGroup } from 'react-bootstrap';
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

import API from '../../utils/API';
let apiData = '';
function Dashboard(props) {
    const [state, setState] = useState({
        search: "",
        value: "",
        artist: false,
        channel_id: false,
    });
    const [data, setData] = useState([]);

    const { isAuth, logout } = useContext(AuthContext);
    console.log("dashboard user: ", isAuth)




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
                [name]: value
            }
        )
    }
    let newData = '';
    function handleSubmit(event) {
        event.preventDefault();
        console.log("submitted");
        let url = `http://localhost:3001/api/dashboard/${state.search}`
        axios.get(url)
            .then(response => {
                //   const newData = data.data
                // console.log("this is rout",newData.push(data.data));
                console.log(state.search)
                let newVal = response.data
                
                newData = response.data.bandsintown.obj.followers[19];
                newData['artist'] = state.search;
                newData['bandsintown'] = newData['value']
                delete newData.value
                delete newData.channel_id
                delete newData.interpolation
                const spotifyPopularity = response.data.spotify.obj.popularity.reverse()[0]
                spotifyPopularity['spotify_timestp'] = spotifyPopularity['timestp']
                spotifyPopularity['spotify_popularity'] = spotifyPopularity['value']
                const deezer = response.data.deezer.obj.fans[20].value;
                console.log("this is the deezer data", response.data.deezer.obj.fans[20])
                delete spotifyPopularity.timestp
                delete spotifyPopularity.value
                console.log(response.data.spotify.obj.popularity)
                console.log(spotifyPopularity)
                apiData = {...newData, ...spotifyPopularity};
                console.log(apiData);

                setState({
                    ...state,
                    value:url
                })
                console.log("this is our new state", state);
            })


            
            
    };
    // Pass apiData to API util
    function handlePostArtist(event) {
        console.log(apiData)
        API.postMusicAPI(apiData)
    }
    return (
        <>
            <MyNavbar>
                <SearchBar
                    name="search"
                    value={state.value}
                    search={state.search}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit} />
            
            {/* <Button variant="primary"
                variant="outline-primary"
                onClick={handlePostArtist}
            >Add Artist
            </Button> */}
            </MyNavbar>
           
   
            <Container>
                {/* Below is a row for iamge and cards */}
  <Row style={{backgroundColor:"#462560"}}>
    {/* collumn for image and artist's name */}
    <Col sm={2}>
    <Figure>
  <Figure.Image
    roundedCircle
    width={171}
    height={180}
    alt="171x180"
    src="https://img.discogs.com/A2Q9WfQl3Tb4WSfJ2uAyIs8IHT0=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-2184482-1579346862-8600.jpeg.jpg"
  />
  <Figure.Caption>
  <ListGroup variant="flush">
  <ListGroup.Item>Name:
       Ed Sheeran </ListGroup.Item>
  <ListGroup.Item> CPP RANK:
       5 </ListGroup.Item>
  
</ListGroup>
  </Figure.Caption>
</Figure>
<Button variant="primary"
                variant="outline-primary"
                onClick={handlePostArtist}>
    Add Artist
</Button>

 {/* below is a column for cards with info from APIs */}
</Col>
    <Col md={10}>

    <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>





    </Col>
  </Row>

  {/* below is a row for the table created dynamically. */}
  <Row>
    <Col md>

    <Table fluid striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Date</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    
    
  </tbody>
</Table>



    </Col>
    
  </Row>
</Container>



     
        </>
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


       {/* <SearchBar
                name="search"
                value={state.value}
                search={state.search}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit} /> */}
          
            {/* <Button className='m-1' onClick={e => {
                console.log(props.history)
                e.preventDefault();
                props.history.push('/table')
            }}>Table</Button> */}


            {/* <Button className='m-1' onClick={e => {
                console.log(props.history)
                e.preventDefault();
                props.history.push('/MyData')
            }}>Data Entry</Button> */}
            {/* <Row>
                <Col>
                </Col>
                <Col></Col>
                <Col>Spotify</Col>
                <Col>Itunes</Col>
            </Row> */}