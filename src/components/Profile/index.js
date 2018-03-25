
import React from 'react'
import Nav from '../Nav'
import Link from 'gatsby-link'
import styled from 'styled-components';
import PropTypes from "prop-types";
import hawaiiImage from '../../img/ocean.jpg'

const ProfileWrapper = styled.div`
  float: left;
  display: inline-block;
  margin: 0 40px 40px 0;
`;
const Image = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  float: left;
  margin: 0 20px;
`;

const TextContainer = styled.div`
`;

const Name = styled.h2`
  font-size: 2em;
  font-weight: bold;
`;

const Description = styled.h3`
  font-weight: 300;
  margin-top: 0.5em;
`;

const Profile = ({ name, description, image }) => (
  <ProfileWrapper>
    <Image src={image} />
    <TextContainer>
      <Name> {name}</Name>
      <Description>{description}</Description>
    </TextContainer>
  </ProfileWrapper>
)
Profile.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.any
};
export default Profile
