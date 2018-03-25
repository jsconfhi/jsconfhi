import React from 'react'
import Link from 'gatsby-link'
import Profile from '../components/Profile'
import styled from "styled-components";
import kellyAvatar from '../img/kng.jpg';
import jonAvatar from '../img/jkup.jpeg';

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 1em;
  margin-top: 1em;
  color: #038091;
`;

const Organizers = () => (
  <Container>
    <H1>Organizers</H1>
    <Profile name="Kelly King" description="Some descriptive text" image={kellyAvatar}/>
    <Profile name="Jon Kuperman" description="Some descriptive text" image={jonAvatar} />
  </Container>
)

export default Organizers
