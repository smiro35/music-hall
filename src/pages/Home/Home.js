import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = (props) => {
  return (
    <div style={{paddingTop:"10px"}}>
      <Jumbotron style={{backgroundColor:"#462560", height:"50rem", paddingTop:"10rem"}}> 
        <h1 style={{color:"white"}} className="display-3">Music Hall Logo here!</h1>
        <p className="lead">We have great concerts.</p>
        {/* <hr className="my-2" /> */}
        <p>Ask your neighbours about us. .</p>
        <p className="lead">
          <Button style={{backgroundColor:"#9063cd"}}>Dashboard</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;


{/* <Jumbotron style={{backgroundColor:"#9063cd", height:"50rem", paddingTop:"10rem"}}> */}

// #6f42c1

