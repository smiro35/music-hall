import React, { useState, useContext, useEffect } from 'react';
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
import { Card, CardDeck, Button, Container, Table, Image, Figure, ListGroup,CardGroup } from 'react-bootstrap';
import MyCard from '../../components/Card';
import MyFigure from '../../components/Cardimage';
import ApiTable from '../../components/APiTable';



import API from '../../utils/API';
let apiData = '';

function Dashboard(props) {
  const [state, setState] = useState({
    search: "",
    value: "",
  });
  const [data, setData] = useState(null);
  const [tableData, setTabledata] = useState()
  const { isAuth, logout } = useContext(AuthContext);
  console.log("dashboard user: ", isAuth)

  // we need to create route to search the database for the artist
  // make a query to API using the search term
  // save the results to tableData
  // then render the table conditionally, (if there is data-render table, if  no data (null, undefined) then dont render whats in data)
  // if there is no artist: backened needs to 


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
    // console.log("submitted");
    let url = `http://localhost:3001/api/dashboard/${state.search}`
    axios.get(url)
      .then(response => {
        //   const newData = data.data
        // console.log("this is rout",newData.push(data.data));
        // console.log(state.search)
        let newVal = response.data
        console.log("new value:", newVal);

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
        apiData = { ...newData, ...spotifyPopularity };
        console.log(apiData);

        setData(
          newVal
        )

      })

  };
  useEffect((e) => { console.log("this is our new data", data) }, [data])

  function tableDisplay(event){
    console.log("table data:", data);
    
  }
 
 
 
  // Pass apiData to API util
  function handlePostArtist(event) {
    console.log("click before");
    
    console.log(apiData)
    API.postMusicAPI(apiData)
    tableDisplay();
    console.log("clicked after");
    
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
        </MyNavbar>

      {!data ? <container> <img
          src="https://www.nhpr.org/sites/nhpr/files/styles/x_large/public/201909/Telluride.jpg"
          width="100%"
          height="50%"
          // margin="20%"
          
          alt=" "></img> </container> :
 <>
        <Container fluid style={{backgroundColor:"#462560"}} width="100%" height="100%">
        <Row>
          <Col sm={4}>
        
          <MyFigure 
          image={data.id.obj.image_url}
          rank={data.id.obj.cm_artist_rank}
          genre={data.id.obj.tags[0].name}
          artist_name={data.id.obj.name}
          >
              {/* genre ={data.id.obj.tag[0].name} */}
              

            </MyFigure>
        {/* we use the Object.key to get our data as an array of api keys(names) */}
       </Col>
       <Col md={8}>
       <Container fluid>
        <Row> {Object.keys(data).map((Api_name) => {
          let time = ""
          let text = ""
          let image = ""
          switch (Api_name) {
            case "bandsintown":
              time = data[Api_name].obj.followers[19].timestp
          text = <h4>followers:{data[Api_name].obj.followers[18].value}</h4>
              break;
            case "instagram":
              time = data[Api_name].obj.followers[0].timestp
              text = <h4>Followers: {data[Api_name].obj.followers[0].value}</h4>
              break;
              // case "soundcloud":
              // // time = data[Api_name].obj.followers[19].timestp
              // text = <h4>waiting...</h4>
              // break;
              case "spotify":
              time = data[Api_name].obj.followers[0].timestp
              text = <div><h4>followers: {data[Api_name].obj.followers[0].value}</h4><h4>popularity:{data[Api_name].obj.popularity[5].value}</h4><h4>listeners:{data[Api_name].obj.listeners[19].value}</h4></div>
              break;
              case "youtube":
               
                text = <div><h4>{data[Api_name].obj.subscribers[0].value}</h4><h4>Views:{data[Api_name].obj.views[0].value}</h4></div>
              break;
              case "deezer":
              time = data[Api_name].obj.fans[19].timestp
              text = <h4>Followers: {data[Api_name].obj.fans[19].value}</h4>
              break;
            default:
              break;
          }
          return (
           
           
          
          <Col sm={4}>
            <CardGroup vertical>
            <MyCard title={Api_name} timestp={time} image={image}>
              {text}
            </MyCard>
          </CardGroup>
          </Col>

          )
        })}
          </Row>
          </Container>
       </Col>

        
        
        </Row>
        </Container>        
        <Container>
          <ApiTable/>
        </Container>
  <Row>
    
  </Row>
  </>       
}
</>
     );
}
export default Dashboard;
