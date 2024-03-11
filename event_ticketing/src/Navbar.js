import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'; 

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
  position: relative; /* Required for absolute positioning */
`;

const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%; /* Position below the MenuItem */
  right: 0;
  background-color: #333;
  padding: 10px;
  display: ${props => props.isOpen ? 'block' : 'none'}; /* Conditionally render based on isOpen state */
`;

const LogoutButton = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown menu visibility
  
  // Logout function to clear user information from local storage
  const logout = () => {
    localStorage.removeItem('user');
    navigate("/login"); // Redirect to login page after logout
  }

  // Toggle dropdown menu visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  // Get user information from local storage
  let user = null;
  const userData = localStorage.getItem("user");
  if (userData) {
    try {
      user = JSON.parse(userData);
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }

  return (
    <Nav>
      <Container>
        <Logo>Event Ticketing</Logo>
        <Menu>
          {user ? (
            <MenuItem>
              <span onClick={toggleDropdown}>Hello, {user.name}</span>
              <DropdownMenu isOpen={isOpen}>
                <LogoutButton onClick={logout}>Logout</LogoutButton>
              </DropdownMenu>
            </MenuItem>
          ) : (
            <MenuItem><MenuLink to="/login">Login</MenuLink></MenuItem>
          )}
          <MenuItem><MenuLink to="/event-list">Home</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/about">About</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/contact">Contact</MenuLink></MenuItem>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;
