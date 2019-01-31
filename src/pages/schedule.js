import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import styled from "styled-components";
import theme from "../theme";

const Container = styled.div`
  max-width: ${theme.containerWidth};
  margin: 0 auto;
  font-size: 1.1em;
`;

const DayHeading = styled.h2`
  color: #fff;
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 10px;
`;
const Table = styled.table`
  width: 600px;
  margin-bottom: 3em;
  @media (max-width: 620px) {
    width: auto;
  }
`;

const TableHeading = styled.thead`
  background: #eee;
  font-weight: bold;
`;

const Row = styled.tr`
  background: #eee;
`;

const RowSpecial = styled.tr`
  background: #f2dc1a;
`;

const Cell = styled.td`
  border: 1px solid #ccc;
  padding: 1em;
`;

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5em;
`;
const Speaker = styled.span`
  font-style: italic;
`;

const Location = styled.div`
  font-style: italic;
`;

const Info = styled.div`
  padding-top: 1em;
`;

const Schedule = () => (
  <Layout>
    <Hero navTitle="Schedule">
      <Container>
        <DayHeading>Wednesday, February 6th</DayHeading>
        <Table>
          <TableHeading>
            <Cell>Time</Cell>
            <Cell>Schedule</Cell>
          </TableHeading>
          <Row>
            <Cell>~11:00am - ~5:30pm</Cell>
            <Cell>
              <Title>Arrivals</Title>
              <Location>
                HNL Airport - Domestic terminal 2 - Near baggage claim 26 +
                Starbucks
              </Location>
              <Info>
                Look for JSConf volunteers in shirts and our banner. Grab your
                bags and come to the rally point, we'll help organize carpools
                for rides to the hotel!
              </Info>
            </Cell>
          </Row>
          <Row>
            <Cell>1:00pm - 6:00pm</Cell>
            <Cell>
              <Title>Check-in</Title>
              <Location>Beach across from the Marriott</Location>
              <Info>
                Come grab your badge and swag, meet and play games with other
                attendees, and relax in the sun.
              </Info>
            </Cell>
          </Row>
          <Row>
            <Cell>6:00pm - 9:00pm</Cell>
            <Cell>
              <Title>Dinner Roulette</Title>
              <Location>Various</Location>
              <Info>
                We’ve picked some amazing places to dine and reserved a few
                tables for JSConf folks and it’s another great chance to meet
                new folks or enjoy the amazing restaurant scene in Waikiki with
                your group. Sign up will be available at the Conference check
                in. Space is limited.
              </Info>
            </Cell>
          </Row>
          <Row>
            <Cell>9:00pm - 10:00pm</Cell>
            <Cell>
              <Title>Check-in</Title>
              <Location>Marriott - Honolulu or Kou room</Location>
              <Info>For those on later flights, come grab your badge!</Info>
            </Cell>
          </Row>
          <Row>
            <Cell>9:00pm - Late</Cell>
            <Cell>
              <Title>Social Hour</Title>
              <Location>Marriott - lobby / hotel bar</Location>
              <Info>
                Grab a drink, meet your fellow attendees, and relax after a long
                day of travel!
              </Info>
            </Cell>
          </Row>
        </Table>
        <DayHeading>Thursday, February 7th</DayHeading>
        <Table>
          <TableHeading>
            <Cell>Time</Cell>
            <Cell>Schedule</Cell>
          </TableHeading>
          <RowSpecial>
            <Cell>7:30am - 8:00am</Cell>
            <Cell>
              <Title>Check-in and breakfast</Title>{" "}
              <Location>Kona Moku Ballroom Lanai</Location>
            </Cell>
          </RowSpecial>
          <Row>
            <Cell>8:15am</Cell>
            <Cell>
              <Title>Conference Welcome and Intro</Title>
              <Speaker>by Organizers and Hosts</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>8:30am</Cell>
            <Cell>
              <Title>HI and AI</Title>
              <Speaker>by Kyle Oba</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>9:00am</Cell>
            <Cell>
              <Title>
                How to cheat at life, with JavaScript, computer vision, and
                augmented reality
              </Title>
              <Speaker>by Visnu Pitiyanuvath</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>9:30am</Cell>
            <Cell>
              <Title>Offline p2p mapping</Title>
              <Speaker>by James Halliday</Speaker>
            </Cell>
          </Row>
          <RowSpecial>
            <Cell>10:00am</Cell>
            <Cell>Break</Cell>
          </RowSpecial>
          <Row>
            <Cell>10:30am</Cell>
            <Cell>
              <Title>The Immersive Web in 2019</Title>
              <Speaker>Andrés Cuervo</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>11:00am</Cell>
            <Cell>
              <Title>
                The browser as a modular, networked video synthesizer
              </Title>
              <Speaker>by Olivia Jack</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>11:30am</Cell>
            <Cell>
              <Title>Collaborative remote design working sessions</Title>
              <Speaker>by Anna Watt</Speaker>
            </Cell>
          </Row>
          <RowSpecial>
            <Cell>12:00pm</Cell>
            <Cell>Lunch</Cell>
          </RowSpecial>
          <Row>
            <Cell>1:15pm</Cell>
            <Cell>
              <Title>
                Back to the future of JS II: Beyond what we can foresee
              </Title>
              <Speaker>by Willian Martins</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>1:45pm</Cell>
            <Cell>
              <Title>I Can Babel Macros (and So Can You!)</Title>
              <Speaker>by Shawn (swyx) Wang</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>2:15pm</Cell>
            <Cell>
              <Title>Adopting TypeScript at Scale</Title>
              <Speaker>by Brie Bunge</Speaker>
            </Cell>
          </Row>
          <RowSpecial>
            <Cell>2:45pm</Cell>
            <Cell>Break</Cell>
          </RowSpecial>
          <Row>
            <Cell>3:15pm</Cell>
            <Cell>
              <Title>A Cartoon Quest: New Adventures for WebAssembly</Title>
              <Speaker>by Lin Clark and Till Schneidereit</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>3:45pm</Cell>
            <Cell>
              <Title>Bubble Up your Node.js I/O</Title>
              <Speaker>by Matteo Collina</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>4:15pm</Cell>
            <Cell>
              <Title>Embedding V8 in the real world</Title>
              <Speaker>by Stanimira Vlaeva</Speaker>
            </Cell>
          </Row>
          <RowSpecial>
            <Cell>5:30pm - 9pm</Cell>
            <Cell>
              <Title>Afterparty</Title>
              <Location>Honolulu Zoo (2 blocks away)</Location>
              <Info>
                A JS Community celebration featuring critters, sno-cones, and a
                luau themed dinner. This is an alcohol-free event, and family +
                friends are welcome with purchase of additional ticket.
              </Info>
            </Cell>
          </RowSpecial>
          <RowSpecial>
            <Cell>9pm - Late</Cell>
            <Cell>
              <Title>Nightcaps and socializing</Title>
            </Cell>
          </RowSpecial>
        </Table>
        <DayHeading>Friday, February 8th</DayHeading>
        <Table>
          <TableHeading>
            <Cell>Time</Cell>
            <Cell>Schedule</Cell>
          </TableHeading>
          <RowSpecial>
            <Cell>7:30am - 8:00am</Cell>
            <Cell>
              <Title>Breakfast</Title>{" "}
              <Location>Kona Moku Ballroom Lanai</Location>
            </Cell>
          </RowSpecial>
          <Row>
            <Cell>8:15am</Cell>
            <Cell>
              <Title>
                How to Make Your Website Not Ugly: Basic UX for Programmers
              </Title>
              <Speaker>by Hilary Stohs-Krause</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>8:45am</Cell>
            <Cell>
              <Title>
                Witchy Algorithms: Writing Code to Calculate the Phases of the
                Moon
              </Title>
              <Speaker>by Amy Wibowo</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>9:15am</Cell>
            <Cell>
              <Title>
                The Teenage Mutant Ninja Turtle Guide to Color Theory
              </Title>
              <Speaker>by Louisa Barrett</Speaker>
            </Cell>
          </Row>
          <RowSpecial>
            <Cell>9:45am</Cell>
            <Cell>Break</Cell>
          </RowSpecial>
          <Row>
            <Cell>10:15am</Cell>
            <Cell>
              <Title>JavaScript is AsynchroWAT?</Title>
              <Speaker>by Crystal Martin</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>10:45am</Cell>
            <Cell>
              <Title>What Tamagotchis can teach you about ES6 generators</Title>
              <Speaker>by Jenn Creighton</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>11:15am</Cell>
            <Cell>
              <Title>
                Hitting performance goals for the biggest Mobile JS App at
                Facebook
              </Title>
              <Speaker>by Konstantin Raev</Speaker>
            </Cell>
          </Row>
          <RowSpecial>
            <Cell>11:45am</Cell>
            <Cell>Lunch</Cell>
          </RowSpecial>
          <Row>
            <Cell>12:30pm</Cell>
            <Cell>
              <Title>LIVE Podcast Panel discussion hosted by JS Party</Title>
              <Speaker>Kevin Ball of JS Party + Friends</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>1:15pm</Cell>
            <Cell>
              <Title>The Art of Code Comments</Title>
              <Speaker>by Sarah Drasner</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>1:45pm</Cell>
            <Cell>
              <Title>
                Navigating Unconscious Bias: a tool-based approach to
                reprogramming our biases
              </Title>
              <Speaker>by Emily Kearney</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>2:15pm</Cell>
            <Cell>
              <Title>How to Fail at Accessibility</Title>
              <Speaker>by Trish Ang</Speaker>
            </Cell>
          </Row>
          <RowSpecial>
            <Cell>2:45pm</Cell>
            <Cell>Break</Cell>
          </RowSpecial>
          <Row>
            <Cell>3:15pm</Cell>
            <Cell>
              <Title>Where did all my servers go?</Title>
              <Speaker>by Garth Henson</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>3:45pm</Cell>
            <Cell>
              <Title>GraphQL, the Domain Way</Title>
              <Speaker>by Thais Correia</Speaker>
            </Cell>
          </Row>
          <Row>
            <Cell>4:15pm</Cell>
            <Cell>
              <Title>
                Building up the Electron Project: Team and Community Engineering
              </Title>
              <Speaker>by Jessica Lord</Speaker>
            </Cell>
          </Row>
          <RowSpecial>
            <Cell>Evening</Cell>
            <Cell>Activities TBA</Cell>
          </RowSpecial>
        </Table>
      </Container>
    </Hero>
  </Layout>
);

export default Schedule;
