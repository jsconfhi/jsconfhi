import Hero from '../components/Hero'
import React from 'react'
import Link from 'gatsby-link'
import Profile from '../components/Profile'
import styled from 'styled-components'
import kellyAvatar from '../img/kng.jpg'
import jonAvatar from '../img/jkup.jpeg'
import jadeAvatar from '../img/jade.jpg'
import charlieAvatar from '../img/charlie.jpeg'
import tracyAvatar from '../img/tracy.jpg'
import mylesAvatar from '../img/myles.jpg'
import julesAvatar from '../img/jules.jpg'
import patrickAvatar from '../img/patrick.jpg'
import jasonAvatar from '../img/jason.jpg'
import jamieAvatar from '../img/jamie.png'
import theme from '../theme'

const H2 = styled.h2`
  font-size: ${theme.fontSizes.large};
  font-weight: bold;
  text-align: center;
  color: ${theme.colors.textYellow};
  margin: ${theme.spaces.xLarge} 0 ${theme.spaces.large};
  text-transform: uppercase;
`

const Profiles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${theme.spaces.large};
`

const Organizers = () => (
  <div>
    <Hero navTitle="About">
      <H2>Organizers</H2>
      <Profiles>
        <Profile
          description="Web Eng @Twitter. Lucky to work with an incredible team to try and create the web's best PWA. Photography, aviation, gaming, and comedy on the side!"
          name="Charlie Croom"
          twitter="CharlieCroom"
          email="charlie@jsconfhi.com"
          image={charlieAvatar}
        />
        <Profile
          description="Aussie living in San Francisco. Wifey of @csmcgrath. Software engineer @twitter 👩‍💻"
          name="Jade Loyzaga"
          twitter="jadeloyzaga"
          email="jade@jsconfhi.com"
          image={jadeAvatar}
        />
        <Profile
          description="UX/UI Designer currently working in Honolulu with DevLeague. Previously with Microsoft/Xbox and Avalara."
          name="Jamie Frady"
          email="jamie@jsconfhi.com"
          twitter="UxHalliday"
          image={jamieAvatar}
        />
        <Profile
          description="Life long learner, doer of things. Current doings: #javascript, #cybersecurity, #devsecops, #aws, #python. Co-founder of @sudokrew and @devleaguehawaii."
          name="Jason Sewell"
          email="jason@jsconfhi.com"
          twitter="sewell_jason"
          image={jasonAvatar}
        />
        <Profile
          description="JavaScript @Adobe; previously @brave and @twitter."
          email="jon@jsconfhi.com"
          name="Jon Kuperman"
          twitter="jkup"
          image={jonAvatar}
        />
        <Profile
          description="Web developer @twitter. Co-organizer of @wafflejs, founded @wscsf"
          email="kelly@jsconfhi.com"
          name="Kelly King"
          twitter="kng"
          image={kellyAvatar}
        />
        <Profile
          description="Artist, musician, developer, and maker / @nodejs TSC Director / developer advocate for @googlecloud / Opinions are potentially wrong, but definitely my own."
          name="Myles Borins"
          twitter="MylesBorins"
          email="myles@jsconfhi.com"
          image={mylesAvatar}
        />
        <Profile
          description="OSS diplomat | @nodejs + JS | Community behavior specialist | Director Fighting tiny revolutions. Inciting confidence one convo at a time. @SamsungNEXT"
          name="Tracy Hinds"
          twitter="hackygolucky"
          email="tracy@jsconfhi.com"
          image={tracyAvatar}
        />
      </Profiles>
    </Hero>
  </div>
)

export default Organizers
