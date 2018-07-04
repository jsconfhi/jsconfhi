import React from 'react'
import Nav from '../Nav'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import hawaiiImage from '../../img/ocean.jpg'

const ImageContainer = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
`
const Image = styled.div`
  background-image: url(${hawaiiImage});
  background-size: cover;
  background-position: center bottom;
  height: 280px;
`

const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 3.5em;
`

const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  margin: 0;
  color: black;
`

const Subtitle = styled.div`
  font-weight: 300;
  font-size: 1.5em;
  margin-top: 0.5em;
`

const Hero = ({ title, subtitle, secondarySubtitle }) => (
  <ImageContainer>
    <Image />
    <TextContainer>
      <Title> {title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {secondarySubtitle ? <Subtitle>{secondarySubtitle}</Subtitle> : null}
    </TextContainer>
  </ImageContainer>
)
Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}
export default Hero
