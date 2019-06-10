import Button from "../components/Button";
import InfoBlock, {
  InfoBlockH2,
  InfoBlockH3
} from "../components/LargeInfoBlock";
import Hero from "../components/Hero";
import HeroContentLabel from "../components/Hero/contentLabel";
import Layout from "../components/layout";
import React from "react";
import styled from "styled-components";
import theme from "../theme";

const AccomodationsContainer = styled.div`
  background-color: ${theme.colors.background};
  display: flex;
  justify-content: space-around;
`;

const AccomodationsBlock = styled.div`
  color: ${theme.colors.textYellow};
  width: ${theme.containerWidth};
  max-width: 100%;
  margin: ${theme.spaces.large};
`;

const AccomodationsBlockLabel = styled.h1`
  color: ${theme.colors.textWhite};
  font-size: ${theme.fontSizes.large};
  margin-bottom: ${theme.spaces.large};
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;

const AccomodationsContentContainer = styled.div`
  align-items: flex-start;
  display: flex;
  @media (max-width: ${theme.breakpoints.medium}) {
    align-items: center;
    flex-direction: column;
  }
`;
const TicketContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${theme.spaces.large};
  padding: 0 ${theme.spaces.medium};
`;

const Ticket = styled.div`
  align-items: center;
  background-color: white;
  color: ${theme.colors.textGray};
  display: flex;
  flex-direction: row;
  padding: ${theme.spaces.small};
  height: 70px;
  & + & {
    border-top: 1px dashed ${theme.colors.textYellow};
  }
`;

const TicketMini = styled.div`
  background-color: white;
  color: ${theme.colors.textGray};
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${theme.spaces.medium};
  margin: ${theme.spaces.medium};
`;

const TicketName = styled.div`
  color: ${theme.colors.background};
  flex: 1;
  font-size: ${theme.fontSizes.large};
  @media (max-width: ${theme.breakpoints.small}) {
    font-size: ${theme.fontSizes.medium};
  }
`;

const TicketCost = styled.div`
  margin-right: ${theme.spaces.medium};
  font-size: ${theme.fontSizes.large};
  @media (max-width: ${theme.breakpoints.small}) {
    font-size: ${theme.fontSizes.medium};
  }
`;

const ComingSoonOrPurchase = styled.div`
  font-size: ${theme.fontSizes.small};
  font-weight: bold;
  text-align: center;
  width: 110px;
`;

const Attend = () => (
  <Layout>
    <Hero navTitle="Attend">
      <HeroContentLabel>Tickets</HeroContentLabel>
      <TicketContainer>
        <Ticket>
          <TicketName>Early Bird</TicketName>
          <TicketCost>TBA</TicketCost>
          <ComingSoonOrPurchase>Coming soon</ComingSoonOrPurchase>
        </Ticket>
        <Ticket>
          <TicketName>Kamaʻaina</TicketName>
          <TicketCost>TBA</TicketCost>
          <ComingSoonOrPurchase>Coming soon</ComingSoonOrPurchase>
        </Ticket>
        <Ticket>
          <TicketName>Bulk 4-Pack</TicketName>
          <TicketCost>TBA</TicketCost>
          <ComingSoonOrPurchase>Coming soon</ComingSoonOrPurchase>
        </Ticket>
        <Ticket>
          <TicketName>Regular</TicketName>
          <TicketCost>TBA</TicketCost>
          <ComingSoonOrPurchase>Coming soon</ComingSoonOrPurchase>
        </Ticket>
        <Ticket>
          <TicketName>Diversity Supporter</TicketName>
          <TicketCost>TBA</TicketCost>
          <ComingSoonOrPurchase>Coming soon</ComingSoonOrPurchase>
        </Ticket>
      </TicketContainer>
    </Hero>

    <AccomodationsContainer>
      <AccomodationsBlock>
        <AccomodationsBlockLabel>Scholarships</AccomodationsBlockLabel>
        <AccomodationsContentContainer>
          <div style={{ flex: 1, flexBasis: 0 }}>
            <p>
              We deeply believe in creating an inclusive and diverse conference
              and want to make sure that everyone is able to participate.
            </p>
            <p>
              We're now accepting applications from diverse groups to attend for
              free, and for some, with hotel and/or airfare included.
            </p>
            <p>
              We also want to make sure that local students and others residents
              are able to attend. We have two options, a reduced price
              "Kama’aina" ticket, or scholarships available via our diversity
              applications.
            </p>
          </div>
          <TicketMini>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TicketName>Diversity</TicketName>
              <TicketCost>$0</TicketCost>
            </div>
            <p>Airfare and hotel costs may be covered based on need as well!</p>
            <Button color="dark" style={{ margin: 0 }}>
              Coming soon
            </Button>
          </TicketMini>
        </AccomodationsContentContainer>
      </AccomodationsBlock>
    </AccomodationsContainer>
    <InfoBlock title="About the Conference">
      <InfoBlockH2>What is it?</InfoBlockH2>
      <p>
        JSConf Hawaiʻi is the newest in the family of JSConf events. For our
        inaugural year, we're planning to bring about 300 people together for a
        two-day single track conference. Our goal is that by the time you leave,
        you'll have seen some new ideas, learned some more JavaScript, and made
        new friends to keep in touch with.
      </p>

      <InfoBlockH2>Being at the conference</InfoBlockH2>
      <p>
        The small, single-track nature of the conference means that it's easy to
        figure out what to do! We'll have lots of time to meet your fellow
        attendees and share ideas outside of the sessions.
      </p>

      <InfoBlockH3>Schedule</InfoBlockH3>
      <p>
        We won't have an exact schedule ready until after we've finalized our
        speaker lineup. But for travel planning purposes, a high level overview
        is included.
      </p>
      <p>
        On Wednesday night, we'll have check-in and badge pickup in the
        late-evening along with a casual meetup for you to meet your fellow
        attendees as they arrive.
      </p>
      <p>
        Don't forget to get some rest as each day will start around 8:00am. We
        plan on finishing around 5pm, with a few short breaks in the morning and
        afternoon, along with a longer hour-long break for lunch in the middle;
        plenty of time to hop in the ocean if you are so inclined.
      </p>
      <p>
        Thursday evening, post-dinner, we'll have a party for all attendees. We
        haven't finalized plans yet, so more info closer to the date. We know
        many of you may be travelling with a companion, and we'll let you know
        closer to the date if this event will be open to them as well.
      </p>

      <InfoBlockH3>Amenities</InfoBlockH3>
      <p>
        You can read more about the resort further on, but the location is
        fairly central to the tourist area of Honolulu, meaning there's a beach
        across the street, and a Hard Rock Cafe just a few blocks away. Anyone
        travelling with you will have tons of options available to them nearby
        from surf lessons, to shopping, to spas.
      </p>
      <p>
        If you are staying at the venue using our discounted rates, you room
        will be just an elevator ride away should you need to step out and take
        a break. In addition, we'll have the theater area sectioned off from our
        "lounge" area, so if you need snacks, coffee, or just want to meet up
        with a friend, we'll have space for that
      </p>
      <p>
        There's still a lot of specifics to figure out, but live captioning of
        the sessions will be available. And on request, we'll have childcare
        available either on-site or nearby for children.
      </p>
    </InfoBlock>
    <InfoBlock title="About the Venue">
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
        {" "}
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
);

export default Attend;
