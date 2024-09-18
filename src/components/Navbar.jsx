// Navbar.jsx
// Osman Tahir
// Student # 301075554

import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #453e3e;
  padding: 1rem 2rem;
  color: white;
`;

const Logo = styled.img`
  max-height: 50px;
  width: auto;
  border-radius: 8px; 
`;


const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
`;

const MenuItem = styled.li``;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none; 
  font-size: 1rem;

  &:hover {
    color: #c5b3b3;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Link to={'/'}><Logo src={logo} alt="Logo" /></Link>      
      <Menu>
        <MenuItem><MenuLink to="/">Home</MenuLink></MenuItem>
        <MenuItem><MenuLink to="/about">About Me</MenuLink></MenuItem>
        <MenuItem><MenuLink to="/projects">Projects</MenuLink></MenuItem>
        <MenuItem><MenuLink to="/services">Services</MenuLink></MenuItem>
        <MenuItem><MenuLink to="/contact">Contact Me</MenuLink></MenuItem>
      </Menu>
    </Nav>
  );
}

export default Navbar;
