import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Navbar, Form,Button,FormControl } from 'react-bootstrap';
import SearchBar from '../Api/SearchBar'

function MyNavbar(props){
 

  return (
    <div>

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Music Hall Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/Table">Table</Nav.Link>
      <Nav.Link href="/MyData">Data-Entry</Nav.Link>
      <Button className='m-1' onClick={e => {
                e.preventDefault();
                props.history.push('/table')
            }}>Table</Button>
   </Nav>
  <div>{props.children}</div>
  </Navbar.Collapse>
</Navbar>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      {/* <Nav style={{marginLeft:"7rem"}}>
        <NavItem>
          <NavLink href="/" active>Home</NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink href="/Dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Table">Table</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="MyData">Data-Entry</NavLink>
        </NavItem>
        <SearchBar/>
      </Nav> */}
    </div>
  );
}


export default MyNavbar





















// import { Nav, NavItem, NavLink } from 'reactstrap';

// const Sidenav = (props) => {
//   return (
//     <div>
//       <p>List Based</p>
//       <Nav vertical>
//         <NavItem>
//           <NavLink href="#">Link</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#">Link</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#">Another Link</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink disabled href="#">Disabled Link</NavLink>
//         </NavItem>
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
  