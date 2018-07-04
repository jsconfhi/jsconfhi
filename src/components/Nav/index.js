import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from "prop-types"
import logo from '../../img/logo.png'
import theme from '../../theme'

const List = styled.ul`
  display: flex;
  align-items: center;
`


const NavLink = styled(Link)`
  color: ${theme.colors.textYellow};
  font-size: ${theme.fontSizes.large};
  font-weight: bold;
  margin: 0 ${theme.spaces.medium};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const PrimaryNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 4;
`

const Logo = styled.img`
  height: 60px;
  width: 60px;
`

const TicketLink = styled(Link)`
  background-color: ${theme.colors.textYellow};
  color: ${theme.colors.background};
  font-weight: bold;
  padding: ${theme.spaces.medium};
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid ${theme.colors.background};
  }
`

const NavRoot = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Nav = ({ withBorder }) => (
  <NavRoot style={withBorder ? { borderBottom: `1px solid ${theme.colors.textWhite}` } : null}>
    <List>
      <NavLink style={{ margin: 0, marginRight: '1em' }} to="/">
        <Logo src={logo} alt="home" />
      </NavLink>
      <PrimaryNavContainer>
        <NavLink to="/attend/">Attend</NavLink>
        <NavLink to="/call-for-speakers/">Speakers</NavLink>
        <NavLink to="/sponsors/">Sponsors</NavLink>
        <NavLink to="/organizers/">About</NavLink>
      </PrimaryNavContainer>
    </List>
    <TicketLink to="/tickets/">Buy Tickets</TicketLink>
  </NavRoot>
)

Nav.propTypes = {
  navTitle: PropTypes.string
};

export default Nav
