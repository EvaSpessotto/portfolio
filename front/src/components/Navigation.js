import React from 'react';
import '../style/navbar.scss';
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from 'reactstrap';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar id="navbar">
      <NavbarBrand>
        <NavLink tag={RouterNavLink} to="/">Eva Spessotto</NavLink>
      </NavbarBrand>
      <Nav >
        <NavItem>
          <NavLink>A propos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Contact</NavLink>
        </NavItem>
      </Nav>

    </Navbar>
    
  )
}

export default Navigation;