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
  background-color: ${theme.colors.background};
  background-image: url(${hawaiiImage});
  background-size: cover;
  background-position: center center;
`
const Hero = ({ children }) => <ImageContainer>{children}</ImageContainer>
export default Hero
