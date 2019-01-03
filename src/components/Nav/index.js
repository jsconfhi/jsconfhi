import Button from "../Button";
import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import logo from "../../img/logo.png";
import theme from "../../theme";

// Needs to collapse based on text-size not screen width
const navWidthBreak = "620px";

const NavLink = styled(Link)`
  color: ${theme.colors.textYellow};
  font-size: ${theme.fontSizes.medium};
  font-weight: bold;
  margin: 0 ${theme.spaces.medium};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: ${theme.breakpoints.medium}) {
    margin: 0 ${theme.spaces.small};
  }
`;

const PrimaryNavContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  grid-area: menu;
  @media (max-width: ${navWidthBreak}) {
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  height: 60px;
  width: 60px;
  grid-area: logo;
  margin-right: ${theme.spaces.small};
  @media (max-width: ${navWidthBreak}) {
    height: 50px;
    width: 50px;
  }
`;

// Use Grid to move things better, fallback to flexbox
const NavRoot = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: "logo menu tickets";
  max-width: ${theme.containerWidth};
  width: 100%;
  @media (max-width: ${navWidthBreak}) {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 50px 50px;
    grid-template-areas:
      "logo 1 tickets"
      "menu menu menu";
  }
`;

const Nav = ({ withBorder }) => (
  <NavRoot
    style={
      withBorder
        ? { borderBottom: `1px solid ${theme.colors.textWhite}` }
        : null
    }
  >
    <NavLink style={{ margin: 0 }} to="/">
      <Logo src={logo} alt="home" />
    </NavLink>
    <PrimaryNavContainer>
      <NavLink to="/attend/">Attend</NavLink>
      <NavLink to="/speakers/">Speakers</NavLink>
      <NavLink to="/schedule/">Schedule</NavLink>
      <NavLink to="/sponsors/">Sponsors</NavLink>
      <NavLink to="/about/">About</NavLink>
    </PrimaryNavContainer>
    <Button isPrimary style={{ gridArea: "tickets" }} to="/attend/">
      Buy Tickets
    </Button>
  </NavRoot>
);

Nav.propTypes = {
  navTitle: PropTypes.string
};

export default Nav;
