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
import Artist from '../Api/Artist'
import { Card, CardDeck,Button } from 'react-bootstrap';

function Gridcall() {
  const [state, setState] = useState({
    search: "",
    artist: false,
    channel_id: false
  });

  const [subscriberCount, setSubscriberCount] = useState();
  const [viewCount, setViewCount] = useState();

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

            const count = numeral(data.items[0].statistics.subscriberCount).format('0,0');
            console.log(count);


            const views = numeral(data.items[0].statistics.viewCount).format('0,0');
            console.log(views);


            setSubscriberCount(count);
            setViewCount(views)


          })



      });

    const token = "BQD7_-zlSZZlc1r4paHNbruwzCxTwiMKHOMe-bFbGgaPk65_fng1N4tB_z0kHGwKjNvrjYsAx_5oh61U__Qxrw0E6iola4TjBNFTyqakN1CR77hsm4QAasuG6K6Z3KhgI7GGsHfP8uwiQBea3p-rEqystmp2K0CHG7aOooMsPOAY_Ss1wskd30C1YrvJCt8v6S7XCWLBHSkRza-QfAsfTdo1lkEX6v0PbSRAvlyQzrG4NJpkVvtYO85q9V2oLxMxO9T7LWTLZs4bgyq1JA6oqNY1_aP1AA";
    // BQApIDgk7Jrus9B3CU59-tGO7fwnhyXMTMLsS4VA-5NPpa9Xr4z-H-AfziVL-S-leuPTojLJ5a47LgWnq_XTPi_O6TS6Cz5M8pCm8VFIpxXoCR1UlscNSefEOCNxNkZkHXILP7roEUJbnb63-2oP2BZsnFoOfbYNZeJvLWrLizfZZgNkS4s8eFr2mx8-Rq5ONRTW_xs0yS1vNUJA7akQ3gw3jNRPCueH4n_lCZT_yRVzhsHq4rz0JjYVf5Z1R135qQ5UhrwYCdtmad0H3QBdwEODT2Mn6w";
    // BQCs5t7vr5g5JHPeg06hddFIDGiFZCoR4R59WbigcoZEH6k9Q0WBJr7OvCBjUPzapmmD51ygJ090jx1C4RgrT3k5cVVtkQBOVB7G-rk_uh-aNE9y9kuY_VOMPm65SW2EEQsbdldk2zyiW9KmCi1js2KyoHd4tHwInnrv4geWmsDINBeTPqjMzQeb8S9odidarx19Jdss-xNlTnM-FeXN7AW4nro3H0NJXzDmwy64R6bkN-oymqR0DncqVjweFABzypklLrutFdya_4X_MzNsfIl-ElaBFA";
    // "BQAvTaCepqieh3zPAp-4KAznXU1kTe2yZJ8ecMLNeHus1y2NOhZAec1ZSedm4gJIh9JmcQfxbGkfQZeY0wyNZ1haZ_tHcSYWrAj1NL5s2m7T3p1bMW6StMOh0YEk9I-7rlfV4Y0S13uKFRLUp0Spw3nzeXtPfw1Lp1_nr4I0HSmC_xvaITTb-7vKt4Mt35jtge6NflERs1V8MrU-PZtbXQkZdZ1mOTHUAa0_W-dI8A8UYPig2L2Hco0M-s_5_6nFdvx__Pjwe588cyyW__JqoydYCsVtVg"
    // 'BQBCE1-fUqVPfHgGMCMZv7RJbnomGCbQPG8B9tddyGv1bDngxvhxj519ymRobMtskS-iv-vss6y-TZprt0ShSFUKggqj4LHtu6TzM0O36CNkRx70PY-3te1knb2KUBaJ60rtjHSLMOT8Z-VwizqJGjYCJcrhvJQbVjVBTU99wmns5CwZSVAKIq3FHNAT1i6lDWDsMVLzQ5beizvkVEqK_QcS9cAicV0ALIp8Bm5s720p_uqf2XvSo0LRunkX52QEBoFEKVlb7NIbvYY';


    // const YouTubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=batman&key=' + process.env.REACT_APP_YOUTUBE_API_KEY
    // console.log(YouTubeURL)
    // fetch(YouTubeURL)
    // .then(result => result.json())
    // .then(data =>{
    //     console.log(data);
    // })
    // const url = `https://api.spotify.com/v1/artists/${state.search}`;
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
              style={{
                margin: '0 auto',
                maxWidth: 800
              }}

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
             <YouTube/>
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