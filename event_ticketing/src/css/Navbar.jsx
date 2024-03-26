import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components for Navbar
const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 15px 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const MenuItem = styled.li`
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: #f8f8f8;
  }
`;

export { Nav, Container, Logo, Menu, MenuItem, MenuLink };