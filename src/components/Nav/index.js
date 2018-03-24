import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import logo from '../../img/logo.png'

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  flex: 1;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const Nav = () => (
  <nav>
    <List>
      <NavLink style={{ flex: 1 }} to="/"><Logo src={logo} alt="home" /></NavLink>
      <div style={{ display: 'flex', justifyContent: 'space-between', flex: 4 }}>
        <NavLink to="/schedule/">Schedule</NavLink>
        <NavLink to="/call-for-speakers/">Speak</NavLink>
        <NavLink to="/sponsors/">Sponsors</NavLink>
      </div>
    </List>
  </nav>
);

export default Nav;
