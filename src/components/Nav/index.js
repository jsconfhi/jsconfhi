import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Nav = () => (
  <nav>
    <List>
      <Link to="/schedule/" style={{ color: "white", textDecoration: "none" }}>
        Schedule
      </Link>
      <Link
        to="/call-for-speakers/"
        style={{ color: "white", textDecoration: "none" }}
      >
        Speak
      </Link>
      <Link to="/sponsors/" style={{ color: "white", textDecoration: "none" }}>
        Sponsors
      </Link>
    </List>
  </nav>
);

export default Nav;
