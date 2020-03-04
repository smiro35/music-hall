import React, { useState } from 'react';
import numeral from 'numeral';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../Cards/Cards.js'
import JustifyContent from '../Box/Box.js';
import SearchBar from '../Api/SearchBar';
import MyNavbar from '../Navbar/Navbar';
import YouTube from '../Api/YouTube'
import Spotify from '../Api/Spotify';
import Artist from '../Api/Artist';
import { Card, CardDeck,Button } from 'react-bootstrap';


function Gridcall() {
  const [state, setState] = useState({
    search: "",
    artist: false,
    channel_id: false,
    
  });

  const [subscriberCount, setSubscriberCount] = useState();
  const [viewCount, setViewCount] = useState();

  let count =""
  





  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(value)
    setState(
      {
        [name]: value
      }
    )
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("tried to make api call.")

    const api_key = "AIzaSyD8oztcAFZeVYzRDZbTg4DXBLlSUp-WuaI";
    const apiCall = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${state.search}&key=${api_key}&type=channel`;

    fetch(apiCall)
      .then(result => result.json())
      .then(data => {
        console.log("search data", data);
        const Id = data.items[0].id.channelId;
        console.log("channel id", Id);
        const newApicall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Id}&key=${api_key}`;
        fetch(newApicall)
          .then(result => result.json())
          .then(data => {
            console.log(data);

             count = numeral(data.items[0].statistics.subscriberCount).format('0,0');
            console.log(count);


            const views = numeral(data.items[0].statistics.viewCount).format('0,0');
            console.log(views);


            setSubscriberCount(count);
            setViewCount(views)


          })



      });

      

    const token = "BQD7_-zlSZZlc1r4paHNbruwzCxTwiMKHOMe-bFbGgaPk65_fng1N4tB_z0kHGwKjNvrjYsAx_5oh61U__Qxrw0E6iola4TjBNFTyqakN1CR77hsm4QAasuG6K6Z3KhgI7GGsHfP8uwiQBea3p-rEqystmp2K0CHG7aOooMsPOAY_Ss1wskd30C1YrvJCt8v6S7XCWLBHSkRza-QfAsfTdo1lkEX6v0PbSRAvlyQzrG4NJpkVvtYO85q9V2oLxMxO9T7LWTLZs4bgyq1JA6oqNY1_aP1AA";
    
    const url = `https://api.spotify.com/v1/search?q=${state.search}&type=artist`
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => {
        setState({
          ...state,
          artist: response.data.artists.items[0]
        },
          () => console.log(state.artist))
      })
      .catch((err) => {
        console.error(err);
      })
  }




  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

  }));


  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Grid container spacing={3}>
     
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{ height: '20rem', marginTop: '-1rem', backgroundColor: "#5603ad" }}>
            <div xs={8} />

      
        


            <SearchBar
              name="search"
              search={state.search}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              

              xs={4} />
            <Artist
              artist={state.artist} />

            <CardDeck>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
  Artist Image
    </Card.Text>
   
  </Card.Body>
</Card>
             <YouTube
             count={subscriberCount}/>
              <Spotify/>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                   Another API here
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>


          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>

           



          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
        
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><SimpleCard /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><SimpleCard /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>footer</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>footer</Paper>
        </Grid>
      </Grid>
    </div>
  );


}

export default Gridcall;