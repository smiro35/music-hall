import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../Cards/Cards.js'
import JustifyContent from '../Box/Box.js';
import SearchBar from '../Search/SearchBar.js'
import MyNavbar from '../Navbar/Navbar';
import YouTubeCounter  from '../Youtube/YouTubeCounter'
import Spotify from '../Spotify/Spotify'


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

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{height:'20rem', marginTop:'-1rem', backgroundColor:"#5603ad"}}>
            <div xs={8}/>
            
            <SearchBar xs={4} />
            <JustifyContent/>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>

              <YouTubeCounter/>

            

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <Spotify/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><SimpleCard/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><SimpleCard/></Paper>
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
