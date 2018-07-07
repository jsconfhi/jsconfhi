import Button from '../Button'
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import logo from '../../img/logo.png'
import theme from '../../theme'

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
`

const PrimaryNavContainer = styled.div`
  display: flex;
  flex: 4;
`

const Logo = styled.img`
  height: 60px;
  width: 60px;
`

const NavRoot = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Nav = ({ withBorder }) => (
  <NavRoot
    style={
      withBorder
        ? { borderBottom: `1px solid ${theme.colors.textWhite}` }
        : null
    }
  >
    <NavLink style={{ margin: 0, marginRight: '1em' }} to="/">
      <Logo src={logo} alt="home" />
    </NavLink>
    <PrimaryNavContainer>
      <NavLink to="/attend/">Attend</NavLink>
      <NavLink to="/call-for-speakers/">Speakers</NavLink>
      <NavLink to="/sponsors/">Sponsors</NavLink>
      <NavLink to="/about/">About</NavLink>
    </PrimaryNavContainer>
    <Button isPrimary to="/attend/">
      Buy Tickets
    </Button>
  </NavRoot>
)

Nav.propTypes = {
  navTitle: PropTypes.string,
}

export default Nav
