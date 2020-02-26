import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Sidenav = (props) => {
  return (
    <div>
      <p>List Based</p>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
     
    </div>
  );
}

export default Sidenav;