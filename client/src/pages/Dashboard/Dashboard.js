import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import { Row, Col } from 'reactstrap';
import numeral from 'numeral';
import axios from 'axios';
import SearchBar from '../../components/Search/SearchBar';
import MyNavbar from '../../components/Navbar/Navbar';
import { Card, CardDeck, Button, Container, Table, Image, Figure, ListGroupItem, ListGroup,CardGroup } from 'react-bootstrap';
import MyCard from '../../components/Card';
import TopCard from '../../components/Cardimage';
import ApiTable from '../../components/APiTable';
import Logo from '../../music_hall.jpg'



import API from '../../utils/API';
let apiData = '';
let newVal="";

function Dashboard(props) {
  const [state, setState] = useState({
    search: "",
    value: "",
  });
  const [data, setData] = useState(null);
  const [tableData, setTabledata] = useState()
  const { isAuth, logout } = useContext(AuthContext);
  console.log("dashboard user: ", isAuth)

 
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
        newVal = response.data
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
    
    
    console.log("this is apiData", apiData)
    API.postMusicAPI(apiData)
    
    setTabledata(
      newVal
    )
    
    
  }

  useEffect((e) => { console.log("this is our new tabledata", tableData) }, [tableData])

  
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

      {!data ?   <>
        <container> <img
          src="https://www.nhpr.org/sites/nhpr/files/styles/x_large/public/201909/Telluride.jpg"
          width="100%"
          height="50%"
          // margin="20%"
          
          alt=" "></img> 
          
          </container> 

          </>
        
        
        
        
        :
 <>

<Container fluid  style={{backgroundColor:"#462560", marginBlock:"2rem"}} >  
          
          
          
          
          
          <Row>
            <Col>
            
        
           <TopCard handlePostArtist={handlePostArtist}>

           </TopCard>
            
            
            
            
            
            </Col>
       

           {Object.keys(data).map((Api_name) => {
          let time = ""
          let text = ""
          let image = ""
          switch (Api_name) {
            case "bandsintown":
              image="https://darkskychoir.com/wp-content/uploads/2019/04/bandsintown.png"
              time = data[Api_name].obj.followers[19].timestp
          text = <h4>bands-followers:{data[Api_name].obj.followers[18].value}</h4>
              break;
            case "instagram":
              image="https://pluspng.com/img-png/instagram-png-instagram-png-icon-1024.png"
              time = data[Api_name].obj.followers[0].timestp
              text = <h4>insta-Followers: {data[Api_name].obj.followers[0].value}</h4>
              break;
              
              case "spotify":
                image="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
              time = data[Api_name].obj.followers[0].timestp
              text = <div><h4> spot-followers: {data[Api_name].obj.followers[0].value}</h4><h4>popularity:{data[Api_name].obj.popularity[5].value}</h4><h4>listeners:{data[Api_name].obj.listeners[19].value}</h4></div>
              break;
              case "youtube":
                image="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png"
               
                text = <div><h4>{data[Api_name].obj.subscribers[0].value}</h4><h4>Views:{data[Api_name].obj.views[0].value}</h4></div>
              break;
              case "deezer":
                image="https://i.pinimg.com/originals/11/23/82/112382d6b0e0e47461fb55f03e597e9d.png"
              time = data[Api_name].obj.fans[19].timestp
              // text = <h4>Followers: {data[Api_name].obj.fans[19].value}</h4>
              text=<><ListGroupItem> Deeze Followers: {data[Api_name].obj.fans[19].value}</ListGroupItem><ListGroupItem> {data[Api_name].obj.fans[19].value}</ListGroupItem></>
              break;
            default:
              break;
          }
          return (
           

            
          
            
            <CardGroup >
            
           
           <MyCard title={Api_name} timestp={time} image={image}>
              {text}
            </MyCard>


            </CardGroup>

            

            
          
          
          
        
        
            
           
            
          
          















           
          
          

          )
        })}
          
          
      
          </Row>
        
           
        
</Container>

{!tableData ?    
          
          <Container fluid>    
          <Row>
          
          <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Date</th>
              <th>BandsinTown</th>
              <th>Instagram</th>
              <th>Spotify</th>
              <th>Youtube</th>
              <th>Deezerrr</th>
            </tr>
          </thead>
          
          </Table>
          </Row>
          </Container>


          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          : 

          <Container fluid>    
          <Row>
          
          <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Date</th>
              <th>BandsinTown</th>
              <th>Instagram</th>
              <th>Spotify</th>
              <th>Youtube</th>
              <th>Deezer</th>
            </tr>
          </thead>
          <tbody>


<tr>
          
          {Object.keys(tableData).map((Api_name) => {
          let time = ""
          let text = ""
          let image = ""
          switch (Api_name) {
            case "bandsintown":
              image="https://darkskychoir.com/wp-content/uploads/2019/04/bandsintown.png"
              time = tableData[Api_name].obj.followers[19].timestp
          text = <h4>bands-followers:{tableData[Api_name].obj.followers[18].value}</h4>
              break;
            case "instagram":
              image="https://pluspng.com/img-png/instagram-png-instagram-png-icon-1024.png"
              time = tableData[Api_name].obj.followers[0].timestp
              text = <h4>insta-Followers: {tableData[Api_name].obj.followers[0].value}</h4>
              break;
              
              case "spotify":
                image="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
              time = tableData[Api_name].obj.followers[0].timestp
              text = <div><h4> spot-followers: {tableData[Api_name].obj.followers[0].value}</h4><h4>popularity:{tableData[Api_name].obj.popularity[5].value}</h4><h4>listeners:{data[Api_name].obj.listeners[19].value}</h4></div>
              break;
              case "youtube":
                image="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png"
               
                text = <div><h4>{tableData[Api_name].obj.subscribers[0].value}</h4><h4>Views:{tableData[Api_name].obj.views[0].value}</h4></div>
              break;
              case "deezer":
                image="https://i.pinimg.com/originals/11/23/82/112382d6b0e0e47461fb55f03e597e9d.png"
              time = tableData[Api_name].obj.fans[19].timestp
              // text = <h4>Followers: {data[Api_name].obj.fans[19].value}</h4>
              text=<><ListGroupItem> Deezer Followers: {tableData[Api_name].obj.fans[19].value}</ListGroupItem><ListGroupItem> {tableData[Api_name].obj.fans[19].value}</ListGroupItem></>
              break;
            default:
              break;
          }
          return (
           <>
              <td>{text}</td>
              {/* <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td> */}
           </>
          )
        })}

</tr>
           
           </tbody>
        </Table>
        
          </Row>

         
       

    </Container>

      }

    
  </>       
}
</>
     );
}
export default Dashboard;




{/* <container> <img
          src="https://www.nhpr.org/sites/nhpr/files/styles/x_large/public/201909/Telluride.jpg"
          width="100%"
          height="50%"
          // margin="20%"
          
          alt=" "></img> </container>  */}







 /* <Container fluid style={{backgroundColor:"#462560"}} width="100%" height="100%">
        
          <Col sm={4}>
        
          <MyFigure 
          image={data.id.obj.image_url}
          rank={data.id.obj.cm_artist_rank}
          genre={data.id.obj.tags[0].name}
          artist_name={data.id.obj.name}
          >
              {/* genre ={data.id.obj.tag[0].name} */
              

            /* </MyFigure> */
        /* /* we use the Object.key to get our data as an array of api keys(names) */ 
      /* //  </Col> */
      //  <Col md={8}>
      //  <Container fluid> */}