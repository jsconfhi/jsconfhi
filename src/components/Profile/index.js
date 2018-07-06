import React from 'react'
import Nav from '../Nav'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const profileImageSize = 60
const textOffset = profileImageSize + 20

const ProfileWrapper = styled.div`
  background-color: white;
  color: ${theme.colors.text};
  float: left;
  position: relative;
  display: inline-block;
`
const Image = styled.img`
  border-radius: 50%;
  height: ${profileImageSize}px;
  width: ${profileImageSize}px;
  position: absolute;
  top: ${theme.spaces.small};
  left: ${theme.spaces.small};
`

const TextContainer = styled.div`
  padding-left: ${textOffset}px;
  padding-top: ${theme.spaces.small};
  padding-right: ${theme.spaces.small};
  padding-bottom: ${theme.spaces.small};
`

const NameContainer = styled.div`
  background-color: ${theme.colors.textYellow};
  padding-left: ${textOffset}px;
  padding-top: ${theme.spaces.small};
  padding-bottom: ${theme.spaces.small};
  font-size: 1.2em;
  font-weight: bold;
`

const SocialLink = styled.a`
  text-decoration: none;
`

const Profile = ({ name, description, email, image, twitter }) => (
  <ProfileWrapper>
    <NameContainer>
      <Image alt="" src={image} />
      {name}
    </NameContainer>
    <TextContainer>
      <p>{description}</p>
      <p>
        <FontAwesomeIcon icon={faTwitter} />{' '}
        <SocialLink href={`https://twitter.com/${twitter}`} target="_blank">
          @{twitter}
        </SocialLink>
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />{' '}
        <SocialLink href={`mailto:${email}`} target="_blank">
          {email}
        </SocialLink>
      </p>
    </TextContainer>
  </ProfileWrapper>
)
Profile.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.any,
}
export default Profile
