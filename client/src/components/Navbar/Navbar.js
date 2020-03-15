import React, { useState, useContext } from 'react';
import { Nav, Navbar, Form,Button,FormControl, Dropdown } from 'react-bootstrap';
import SearchBar from '../Search/SearchBar';
import { AuthProvider, AuthContext } from '../../AuthContext.js'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Logo from '../../music_hall.jpg'
import Login from "../../pages/Home/LoginForm";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MyData from "../../pages/Data/Data";
import TablePage from "../../pages/TablePage/TablePage.js";
import{LinkContainer} from 'react-router-bootstrap'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';





function MyNavbar(props){

  const { logout } = useContext(AuthContext);
  const [secret, setSecret] = useState("");

  return (


    <Navbar bg="light"  sticky="top" text expand="lg" >
     <LinkContainer to="/Login">
    <Navbar.Brand >
    <img
          src={Logo}
          width="161.25"
          height="75"
          className="d-inline-block align-top"
          alt=" "></img>
  
    </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto"  >
        {/* <LinkContainer to="/">
      <Nav.Link >Home</Nav.Link>
      </LinkContainer> */}
      <LinkContainer to="/Dashboard">
      <Nav.Link >Dashboard</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/table">
      <Nav.Link>Table</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/MyData">
      <Nav.Link >Data-Entry</Nav.Link>
      </LinkContainer>
      </Nav>
      <span>
      {props.children}
      </span>

      <br/>
      
      <Dropdown>
  <Dropdown.Toggle style={{paddingLeft:"5px",borderRadius:"20%", width:"100%", height:"100%", backgroundColor:"#000", opacity:"1"}} id="dropdown-basic">
    <AccountCircleIcon/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={() => {
              logout();
              setSecret("");
            }}>SignOut</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
      

     
      
    </Navbar.Collapse>
  </Navbar> 













     
 
  );
}


export default MyNavbar














//     <Navbar bg="light" expand="lg">
// //   <Navbar.Brand to="#home">

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
//       <Nav.Link to="#home">Home</Nav.Link>
//       <Nav.Link to="#link"Item</Nav.Link>
      
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
//           <NavLink to="#"Item</NavLink>
//         >
//        >
//           <NavLink to="#"Item</NavLink>
//         >
//        >
//           <NavLink to="#">AnotherItem</NavLink>
//         >
//        >
//           <NavLink disabled to="#">DisabledItem</NavLink>
//         >
//       </Nav>
     
//     </div>
//   );
// }

// export default Sidenav;





//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   Item className="navbar-brand" to="#">Navbar<Item>
  //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  //     <span className="navbar-toggler-icon"></span>
  //   </button>
  //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  //     <div className="navbar-nav">
  //       Item className="nav-item nav-link active" to="/">Home <span className="sr-only"></span><Item>
  //       Item className="nav-item nav-link" to="Dashboard">Dashboard<Item>
   
  //       <button className="nav-link active" to="#">VIEW TABLE </button>
  //      </div>
  //   </div>
  // </nav>
  