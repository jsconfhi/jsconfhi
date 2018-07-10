import React from 'react'
import Nav from '../Nav'
import styled from 'styled-components'
import hawaiiImage from '../../img/header.jpg'
import theme from '../../theme'

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${theme.colors.background};
  background-image: url(${hawaiiImage});
  background-size: cover;
  background-position: center center;
  flex-grow: 1;
`

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  width: 100%;
  max-width: ${theme.containerWidth};
  margin: ${theme.spaces.medium} ${theme.spaces.large};
`

const PageTitle = styled.h2`
  align-self: flex-start;
  color: ${theme.colors.textWhite};
  margin-top: ${theme.spaces.small};
  font-size: ${theme.fontSizes.jumbo};
  font-weight: bold;
  text-transform: uppercase;
  @media (max-width: ${theme.breakpoints.small}) {
    font-size: ${theme.fontSizes.medium};
  }
`

const Hero = ({ children, navTitle }) => (
  <ImageContainer>
    <Container>
      <Nav withBorder={!!navTitle} />
      {navTitle ? <PageTitle>{navTitle}</PageTitle> : null}
      {children}
    </Container>
  </ImageContainer>
)
export default Hero
