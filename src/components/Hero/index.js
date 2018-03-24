import React from 'react'
import Nav from '../Nav'
import Link from 'gatsby-link'
import styled from 'styled-components';
import hawaiiImage from '../../img/hawaii3.jpg'

const ImageContainer = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
`;
const Image = styled.div`
  background-image: url(${hawaiiImage});
  background-size: cover;
  background-position: center bottom;
  height: 280px;
`;

const Heading = styled.h1`
  font-size: 3em;
  font-weight: bold;
  position: absolute;
  top: 2em;
  left: calc(50% - 200px);
`;

const Subheading = styled.h2`
  font-size: 0.5em;
  margin-top: 0.5em;
  margin-left: 80px;
`;

const Hero = () => (
  <ImageContainer>
    <Image />
    <Heading>
      JSConf Hawaii
      <Subheading>February, 2019</Subheading>
    </Heading>
    
  </ImageContainer>
)

export default Hero
