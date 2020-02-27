import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CenteredGrid from '../Grid/Grid.js'

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{marginTop:"1rem",marginRight:"3rem", width:"100vw"}}>
       
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        <CenteredGrid/>
        </Typography>
        
      </Container>
    </React.Fragment>
  );
}


