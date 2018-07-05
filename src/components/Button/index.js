import React from 'react'
import Nav from '../Nav'
import Link from 'gatsby-link'
import styled from 'styled-components'
import theme from '../../theme'

const Button = styled(Link)`
  background-color: ${props => props.isPrimary ? theme.colors.textYellow : 'transparent'};
  color: ${props => props.isPrimary ? theme.colors.background : theme.colors.textYellow};
  display: inline-block;
  font-weight: bold;
  margin: ${theme.spaces.medium} 0;
  padding: ${theme.spaces.medium};
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid ${props => props.isPrimary ? 'transparent' : theme.colors.textYellow};
  &:hover {
  }
`

const ButtonComponent = ({ children, href, isPrimary }) => (
  <Button href={href} isPrimary={isPrimary}>
    {children}
  </Button>
)

export default ButtonComponent
