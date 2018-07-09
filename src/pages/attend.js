import Button from '../components/Button'
import InfoBlock, {
  InfoBlockH2,
  InfoBlockH3,
} from '../components/LargeInfoBlock'
import Hero from '../components/Hero'
import HeroContentLabel from '../components/Hero/contentLabel'
import Layout from '../components/layout'
import React from 'react'
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
  @media (max-width: ${theme.breakpoints.small}) {
    flex-direction: column;
  }
`

const GMap = styled.iframe`
  border: 0;
  flex: 1;
  margin-left: ${theme.spaces.large};
  @media (max-width: ${theme.breakpoints.small}) {
    margin-left: 0;
    max-width: 100%;
  }
`

const H2 = styled.h2`
  font-size: ${theme.fontSizes.large};
  font-weight: bold;
`

const TicketContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${theme.spaces.large};
`

const Ticket = styled.div`
  align-items: flex-start;
  background-color: white;
  color: ${theme.colors.textGray};
  display: flex;
  flex-direction: column;
  justifyContent:
  font-size: 1rem;
  padding: ${theme.spaces.medium};
`

const TicketName = styled.h3`
  color: ${theme.colors.background};
  font-size: ${theme.fontSizes.large};
`

const TicketCost = styled.div`
  font-size: ${theme.fontSizes.large};
`

const Sponsors = () => (
  <Layout>
    <Hero navTitle="Attend">
      <HeroContentLabel>Tickets</HeroContentLabel>
      <TicketContainer>
        <Ticket>
          <TicketName>Scholarship</TicketName>
          <TicketCost>$0</TicketCost>
          <p>
            We deeply believe in creating an inclusive and diverse conference
            and want to make sure that everyone is able to participate.
          </p>
          <p style={{ flexGrow: 1 }}>
            We're now accepting applications from diverse groups to attend for
            free, and for some, with hotel and/or airfare included.
          </p>
          <Button
            color="dark"
            href="https://docs.google.com/forms/d/1_R7x-UDpC-vi62D43nWfOKJQoIxwilKqdBNvJo5h3QM/edit"
          >
            Apply
          </Button>
        </Ticket>
        <Ticket>
          <TicketName>Hawaiʻi Scholarship</TicketName>
          <TicketCost>$200</TicketCost>
          <p style={{ flexGrow: 1 }}>
            We also want to make sure that local students and other low-income
            groups are able to attend. We have a very limited number of tickets
            available at a discounted rate for those not on the mainland. If you
            are financially able, please purchase a full price ticket instead to
            help ensure those who need discounts are able to receive them!
          </p>
          <Button
            color="dark"
            href="https://docs.google.com/forms/d/1_R7x-UDpC-vi62D43nWfOKJQoIxwilKqdBNvJo5h3QM/edit"
          >
            Apply
          </Button>
        </Ticket>
        <Ticket>
          <TicketName>Early Bird</TicketName>
          <TicketCost>$450</TicketCost>
          <p style={{ flexGrow: 1 }}>
            For being an early adopter, and one of the first to buy a ticket for
            JSConf: Hawaiʻi, you'll recieve a discounted ticket. Once these
            tickets are gone, so is the great rate!
          </p>
          <Button color="dark" href="https://ti.to/jsconf-hawaii/2019">
            Buy Now!
          </Button>
        </Ticket>
        <Ticket>
          <TicketName>Bulk 4-Pack</TicketName>
          <TicketCost>$500</TicketCost>
          <p style={{ flexGrow: 1 }}>
            Interested in bringing you whole team or a bunch of friends from
            your OSS Project? Bulk pricing is for you. If you buy 4 tickets,
            you'll receive a 20% discount!
          </p>
          <TicketCost>Not yet available</TicketCost>
        </Ticket>
        <Ticket>
          <TicketName>Regular Price</TicketName>
          <TicketCost>$600</TicketCost>
          <p style={{ flexGrow: 1 }}>
            Just your run of the mill vanilla ticket!
          </p>
          <TicketCost>Not yet available</TicketCost>
        </Ticket>
        <Ticket>
          <TicketName>Diversity Supporter</TicketName>
          <TicketCost>$900+</TicketCost>
          <p>
            We strongly believe in diversity and hope you do too; JSConf:Hawaiʻi
            is built on it!
          </p>
          <p style={{ flexGrow: 1 }}>
            Buying this ticket and making a diversity contribution will help us
            bring an even more diverse group of attendees and provide even more
            travel assistance to them. There's no cap on how much you can
            donate, and we'll periodically release more of these.
          </p>
          <Button color="dark" href="https://ti.to/jsconf-hawaii/2019">
            Buy Now!
          </Button>
        </Ticket>
      </TicketContainer>
    </Hero>

    <AccomodationsBlock>
      <AccomodationsBlockLabel>
        Venue + Hotel Accomodations
      </AccomodationsBlockLabel>
      <AccomodationsContainer>
        <div style={{ flex: 1 }}>
          <H2>Waikiki Beach Marriott Resort</H2>
          <p>
            The Marriott Resort is located on the southern end of Waikiki and
            will be both our home for both the daily sessions as well as primary
            accomodations. It features 5 restaurants, 2 outdoor pools and a spa!
            Attendees for the conference will recieve a special room rate,
            however, we have limited availability and you MUST use the link
            below to book and receive the special rate for the upgraded Ocean
            View room.
          </p>
          <ul style={{ color: 'white' }}>
            <li>$209 + tax (~25%) per night</li>
            <li>Discounted $15/night Resort Fee</li>
            <li>Includes an Ocean View Room upgrade</li>
            <li>$299 for a triple, or $389 for a quad</li>
            <li>Rate available 3 days before and after event</li>
            <li>
              Wifi, daily fitness classes, spa discounts, and free intro
              snorkel/scuba lessons included!
            </li>
          </ul>
          <p>
            Note: The mandatory resort fee is dicounted to $15/night for
            attendees. However, the booking website will automatically state
            that the resort fee is $37, you can disregard the message.
          </p>
          <Button href="https://book.passkey.com/e/49726942">
            Reserve Hotel Now
          </Button>
        </div>
        <GMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8165.245471646006!2d-157.8284631816718!3d21.27458201138188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c007270cf4e263b%3A0x17efa11682def01b!2sWaikiki+Beach+Marriott+Resort+%26+Spa!5e0!3m2!1sen!2sus!4v1530977110820"
          width="600"
          height="450"
          frameBorder="0"
          allowFullScreen
        />
      </AccomodationsContainer>
    </AccomodationsBlock>
    <InfoBlock id="coc" title="About the Venue">
      <InfoBlockH2>Getting there</InfoBlockH2>
      <p>
        Hawaiʻi is a chain of islands, so there's really only one way to get
        there!
      </p>
      <InfoBlockH3>Honolulu International Airport</InfoBlockH3>
      <p>
        Hawaiʻi's primary airport is located on the west side of Honolulu, and
        about a 20-30 minute drive to Waikiki where the venue is located. With
        dozens of airlines and direct flight destinations, around 20 million
        people pass through the airport annually. You should be able to find a
        flight from almost any hub airport in the US, and several in Asia.
      </p>

      <p>
        If you can't ride-share with some other attendees on your flight,
        there's also public transit available from the airport to the door of
        the hotel. The 19, 20, or 42 bus lines all will get the job done, and
        run roughly every 15 minutes.
      </p>

      <p>
        {' '}
        A multitude of rental car companies are also available at the airport,
        as well as both Enterprise and Dollar having offices in the conference
        hotel.
      </p>

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
      <br />
      <InfoBlockH2>Getting around</InfoBlockH2>
      <p>
        The entire conference will take place in or around the hotel and meeting
        room venue. The beach is just across the street from our hotel. Our
        evening party may be a short walk away in Waikiki, but if it's further
        than that we'll provide shuttles. So plan to not need any transportation
        if you are staying with us at the Mariott!
      </p>
      <p>
        As there's so much to see around Hawaiʻi, it's worth noting that if you
        choose to arrive early or stay later, there's two rental car companies
        available on-premises, so you can easily grab a car after or return
        yours before the conference.
      </p>
      <p>
        HNL Airport also has frequent flights and connections to other islands
        that might be of interest, including Maui which is extremely popular
        with visitors.
      </p>
    </InfoBlock>
  </Layout>
)

export default Sponsors
