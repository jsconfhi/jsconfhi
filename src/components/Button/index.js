import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'

const style = `
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  margin: ${theme.spaces.medium} 0;
  padding: ${theme.spaces.medium};
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  user-select: none;
  border: 1px solid transparent;
  &:hover {
    outline: 1px solid ${theme.colors.background};
  }
`

const Button = styled(Link)([style])
const ExternalButton = styled.a([style])

const ButtonComponent = ({
  children,
  href,
  to,
  isPrimary,
  color,
  style = {},
}) => {
  const Component = to ? Button : ExternalButton

  const styleColor = isPrimary
    ? theme.colors.background
    : color === 'dark'
      ? theme.colors.background
      : theme.colors.textYellow
  const styleBorderColor = isPrimary
    ? 'transparent'
    : color === 'dark'
      ? theme.colors.background
      : theme.colors.textYellow
  const styleBgColor = isPrimary ? theme.colors.textYellow : 'transparent'
  const props = {
    color,
    isPrimary,
    href,
    target: href ? '_blank' : undefined,
    to,
  }
  return (
    <Component
      {...props}
      style={{
        color: styleColor,
        backgroundColor: styleBgColor,
        borderColor: styleBorderColor,
        ...style,
      }}
    >
      {children}
    </Component>
  )
}

ButtonComponent.propTypes = {
  isPrimary: PropTypes.bool,
  color: PropTypes.oneOf(['dark', 'light']),
}

export default ButtonComponent
