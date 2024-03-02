import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Styled components for Navbar
const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.h1`
  margin: 0;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
`;

const MenuItem = styled.li`
  margin-left: 20px;
`;

const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Container>
        <Logo>Event Ticketing</Logo>
        <Menu>
          {/* Use Link instead of anchor tags */}
          <MenuItem><MenuLink to="/event-list">Home</MenuLink></MenuItem>
         
          <MenuItem><MenuLink to="/about">About</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/contact">Contact</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/">Login</MenuLink></MenuItem>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;
