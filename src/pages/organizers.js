import React from 'react'
import Link from 'gatsby-link'
import Profile from '../components/Profile'
import styled from "styled-components";
import kellyAvatar from '../img/kng.jpg';
import jonAvatar from '../img/jkup.jpeg';
import jadeAvatar from '../img/jade.jpg';
import charlieAvatar from '../img/charlie.jpeg';
import tracyAvatar from '../img/tracy.jpg';
import mylesAvatar from '../img/myles.jpg';
import julesAvatar from '../img/jules.jpg';
import patrickAvatar from '../img/patrick.jpg';

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const H2 = styled.h2`
  margin: 1.5em 0;
`;

const Profiles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;

const Organizers = () => (
  <Container>
    <H2>Organizing Team</H2>
    <Profiles>
      <Profile name="Charlie Croom" description="@CharlieCroom" image={charlieAvatar} />
      <Profile name="Jade Loyzaga" description="@jadeloyzaga" image={jadeAvatar} />
      <Profile name="Jon Kuperman" description="@jkup" image={jonAvatar} />
      <Profile name="Kelly King" description="@kng" image={kellyAvatar}/>
      <Profile name="Myles Borins" description="@hackygolucky" image={mylesAvatar} />
      <Profile name="Tracy Hinds" description="@MylesBorins" image={tracyAvatar}/>
    </Profiles>
    <H2>Volunteers</H2>
    <Profiles>
      <Profile name="Jules Kremer" description="@jules_kremer" image={julesAvatar} />
      <Profile name="Patrick Traughber" description="@ptraughber" image={patrickAvatar} />
    </Profiles>
  </Container>
)

export default Organizers
