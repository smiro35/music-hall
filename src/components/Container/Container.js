import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CenteredGrid from '../Grid/Grid.js'

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{marginTop:"-4rem",marginRight:"-7rem"}}>
      
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        <CenteredGrid/>
        </Typography>
        
      </Container>
    </React.Fragment>
  );
}


