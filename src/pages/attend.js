import Button from '../components/Button'
import InfoBlock, {
  InfoBlockH2,
  InfoBlockH3,
} from '../components/LargeInfoBlock'
import Hero from '../components/Hero'
import HeroContentLabel from '../components/Hero/contentLabel'
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import theme from '../theme'

const AccomodationsBlock = styled.div`
  background-color: ${theme.colors.background};
  color: ${theme.colors.textYellow};
  padding: ${theme.spaces.large};
`

const AccomodationsBlockLabel = styled.h1`
  color: ${theme.colors.textWhite};
  font-size: ${theme.fontSizes.large};
  margin-bottom: ${theme.spaces.large};
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`

const AccomodationsContainer = styled.div`
  display: flex;
`

const GMap = styled.iframe`
  border: 0;
  flex: 1;
  margin-left: ${theme.spaces.large};
`

const Sponsors = () => (
  <div>
    <Hero navTitle="Attend">
      <HeroContentLabel>Tickets</HeroContentLabel>
    </Hero>


    <AccomodationsBlock>
      <AccomodationsBlockLabel>Accomodations</AccomodationsBlockLabel>
      <AccomodationsContainer>
        <div style={{ flex: 1 }}>
          <h2>Waikiki Beach Marriott Resort</h2>
          <ul>
            <li>$212+tax per night</li>
            <li>Rate available 3 days before or after stay</li>
            <li>Wifi, spa discounts, and free surf lessons included!</li>
          </ul>
          <p>Note: The mandatory resort fee is reduced from $37+tax per room per night to $15+tax for attendees. However, the booking website will automatically state that the resort fee is $37, you can disregard the message.</p>
          <Button>Reserve Now</Button>
        </div>
        <GMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8165.245471646006!2d-157.8284631816718!3d21.27458201138188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c007270cf4e263b%3A0x17efa11682def01b!2sWaikiki+Beach+Marriott+Resort+%26+Spa!5e0!3m2!1sen!2sus!4v1530977110820" width="600" height="450" frameBorder="0" allowFullScreen />
      </AccomodationsContainer>

    </AccomodationsBlock>
    <InfoBlock id="coc" title="About the Venue">
      <InfoBlockH2>Getting there</InfoBlockH2>
      <p>Hawaii is a chain of islands, so there's really only one way to get there!</p>
      <InfoBlockH3>Honolulu International Airport</InfoBlockH3>
      <p>Hawaii's primary airport is located on the west side of Honolulu, and about a 20-30 minute drive to Waikiki where the venue is located. With dozens of airlines and direct flight destinations, around 20 million people pass through the airport annually.
      You should be able to find a flight from almost any hub airport in the US, and several in Asia.</p>

      <p>If you can't ride-share with some other attendees on your flight, there's also public transit available from the airport to the door of the hotel. The 19, 20, or 42 bus lines all will get the job done, and run roughly every 15 minutes.</p>

      <p> A multitude of rental car companies are also available at the airport, as well as both Enterprise and Dollar having offices in the conference hotel.</p>


      <InfoBlockH3>Parking</InfoBlockH3>
      <p>For day-time only attendees, parkings is:</p>
      <ul>
        <li>$10/day for self park</li>
        <li>$15/day for valet</li>
      </ul>

      <p>For attendees staying in the hotel overnight, parkings is:</p>
      <ul>
        <li>$40/night for self park</li>
        <li>$45/night for valet</li>
      </ul>

      <InfoBlockH2>Getting around</InfoBlockH2>
      <p>The entire conference will take place in or around the hotel and meeting room venue. The beach is just across the street from our hotel. Our evening party may be a short walk away in Waikiki, but if it's further than that we'll provide shuttles. So plan to not need any transportation if you are staying with us at the Mariott!</p>
      <p>As there's so much to see around Hawaii, it's worth noting that if you choose to arrive early or stay later, there's two rental car companies available on-premises, so you can easily grab a car after or return yours before the conference.</p>
      <p>HNL Airport also has frequent flights and connections to other islands that might be of interest, including Maui which is extremely popular with visitors.</p>
    </InfoBlock>
  </div>
)

export default Sponsors
