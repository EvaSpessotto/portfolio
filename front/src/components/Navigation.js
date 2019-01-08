import React from 'react';
import '../style/navbar.scss';
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from 'reactstrap';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar id="navbar" className="fixed-top">
        <NavLink tag={RouterNavLink} to="/" className="logo">Eva Spessotto</NavLink>
      <Nav>
        <NavItem>
          <NavLink tag={RouterNavLink} to="/a-propos" className="a-propos">A propos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RouterNavLink} to="/contact" className="contact">Contact</NavLink>
        </NavItem>
      </Nav>

    </Navbar>
    
  )
}

export default Navigation;