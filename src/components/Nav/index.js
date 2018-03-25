import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import logo from '../../img/logo.png'

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinkContainer = styled.div`
  flex: 1;
`
const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: #00bcd4;
  }
`;

const PrimaryNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 4;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Nav = () => (
  <nav>
    <List>
      <NavLinkContainer>
        <NavLink style={{ flex: 1 }} to="/"><Logo src={logo} alt="home" /></NavLink>
      </NavLinkContainer>
      <PrimaryNavContainer>
        <NavLinkContainer><NavLink to="/call-for-speakers/">Speak</NavLink></NavLinkContainer>
        <NavLinkContainer><NavLink to="/schedule/">Schedule</NavLink></NavLinkContainer>
        <NavLinkContainer><NavLink to="/sponsors/">Sponsors</NavLink></NavLinkContainer>
      </PrimaryNavContainer>
    </List>
  </nav>
);

export default Nav;
