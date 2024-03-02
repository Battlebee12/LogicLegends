// src/Navbar.js
import React from 'react';
import styled from 'styled-components';

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

const MenuLink = styled.a`
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
          <MenuItem><MenuLink href="#">Home</MenuLink></MenuItem>
          <MenuItem><MenuLink href="#">Events</MenuLink></MenuItem>
          <MenuItem><MenuLink href="#">About</MenuLink></MenuItem>
          <MenuItem><MenuLink href="#">Contact</MenuLink></MenuItem>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;
