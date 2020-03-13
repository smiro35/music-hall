import React, { useState, useContext } from 'react';
import { Nav, Navbar, Form,Button,FormControl } from 'react-bootstrap';
import SearchBar from '../Search/SearchBar';
import { AuthProvider, AuthContext } from '../../AuthContext.js'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Logo from '../../music_hall.jpg'
import Home from "../../pages/Home/Home";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MyData from "../../pages/Data/Data";
import TablePage from "../../pages/TablePage/TablePage.js";


function MyNavbar(props){

  return (


    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/home">
    <img
          src={Logo}
          width="161.25"
          height="75"
          className="d-inline-block align-top"
          alt=" "></img>
  
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/TablePage ">Table</Nav.Link>
      <Nav.Link href="/MyData">Data-Entry</Nav.Link>
      </Nav>
      <div>{props.children}</div>
    </Navbar.Collapse>
  </Navbar> 













     
 
  );
}


export default MyNavbar














//     <Navbar bg="light" expand="lg">
// //   <Navbar.Brand href="#home">

// //   <img
//         src={Logo}
//         width="161.25"
//         height="75"
//         className="d-inline-block align-top"
//         alt=" "></img>

//   </Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link>
      
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>








// import { Nav, NavLink } from 'reactstrap';

// const Sidenav = (props) => {
//   return (
//     <div>
//       <p>List Based</p>
//       <Nav vertical>
//        >
//           <NavLink href="#">Link</NavLink>
//         >
//        >
//           <NavLink href="#">Link</NavLink>
//         >
//        >
//           <NavLink href="#">Another Link</NavLink>
//         >
//        >
//           <NavLink disabled href="#">Disabled Link</NavLink>
//         >
//       </Nav>
     
//     </div>
//   );
// }

// export default Sidenav;





//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <Link className="navbar-brand" to="#">Navbar</Link>
  //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  //     <span className="navbar-toggler-icon"></span>
  //   </button>
  //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  //     <div className="navbar-nav">
  //       <Link className="nav-item nav-link active" to="/">Home <span className="sr-only"></span></Link>
  //       <Link className="nav-item nav-link" to="Dashboard">Dashboard</Link>
   
  //       <button className="nav-link active" to="#">VIEW TABLE </button>
  //      </div>
  //   </div>
  // </nav>
  