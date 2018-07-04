import React from 'react'
import Nav from '../Nav'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ProfileWrapper = styled.div`
  float: left;
  display: inline-block;
  margin: 0 40px 40px 0;
`
const Image = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  float: left;
  margin: 20px 20px 20px 0;
`

const TextContainer = styled.div`
  text-align: center;
`

const Name = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`

const Description = styled.div`
  font-weight: 300;
  margin-top: 0.5em;
`

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
  image: PropTypes.any,
}
export default Profile
