import React from 'react'
import Nav from '../Nav'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import hawaiiImage from '../../img/header.jpg'
import theme from '../../theme'

const ImageContainer = styled.div`
  min-height: 280px;
  width: 100%;
  padding: ${theme.spaces.medium} ${theme.spaces.large};
  background-color: ${theme.colors.background};
  background-image: url(${hawaiiImage});
  background-size: cover;
  background-position: center center;
`

const PageTitle = styled.h2`
  color: ${theme.colors.text};
  margin-top: ${theme.spaces.small};
  font-size: ${theme.fontSizes.jumbo};
  font-weight: bold;
  text-transform: uppercase;
`

const Hero = ({ children, navTitle }) => <ImageContainer>
  <Nav withBorder={!!navTitle} />
  {navTitle ? <PageTitle>{navTitle}</PageTitle>  : null}
  {children}
</ImageContainer>
export default Hero
