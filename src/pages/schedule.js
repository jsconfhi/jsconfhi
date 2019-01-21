import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import styled from "styled-components";
import theme from "../theme";

const Container = styled.div`
  max-width: ${theme.containerWidth};
  margin: 0 auto;
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
  padding: 0.5em;
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
            <Cell>11:00am - 6:00pm</Cell>
            <Cell>
              Arrivals
              <Location>HNL Airport - Domestic terminal 2 - Near baggage claim 26 + Starbucks</Location>
              <Info>Look for JSConf volunteers in shirts and our banner. Grab your bags and come to the rally point, we'll help organize carpools for rides to the hotel!</Info>
            </Cell>
          </Row>
          <Row>
            <Cell>1:00pm - 6:00pm</Cell>
            <Cell>
              Check-in
              <Location>Beach across from the Marriott</Location>
              <Info>Come grab your badge and swag, meet and play games with other attendees, and relax in the sun.</Info>
            </Cell>
          </Row>
          <Row>
            <Cell>6:00pm - 9:00pm</Cell>
            <Cell>
              Dinner Roulette
              <Location>Various</Location>
              <Info>We’ve picked some amazing places to dine and reserved a few tables for JSConf folks and it’s another great chance to meet new folks or enjoy the amazing restaurant scene in Waikiki with your group. Sign up will be available at the Conference check in. Space is limited.</Info>
            </Cell>
          </Row>
          <Row>
            <Cell>9:00pm - 10:00pm</Cell>
            <Cell>
              Check-in
              <Location>Marriott - Honolulu or Kou room</Location>
              <Info>For those on later flights, come grab your badge!</Info>
            </Cell>
          </Row>
          <Row>
            <Cell>9:00pm - Late</Cell>
            <Cell>
              Social Hour
              <Location>Marriott - lobby / hotel bar</Location>
              <Info>Grab a drink, meet your fellow attendees, and relax after a long day of travel!</Info>
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
            <Cell>Check-in <Location>Kona Moku Ballroom</Location></Cell>

          </RowSpecial>
          <Row>
            <Cell>8:15am</Cell>
            <Cell>HI and AI</Cell>
          </Row>
          <Row>
            <Cell>8:45am</Cell>
            <Cell>
              How to cheat at life, with JavaScript, computer vision, and
              augmented reality
            </Cell>
          </Row>
          <Row>
            <Cell>9:15am</Cell>
            <Cell>Offline p2p mapping</Cell>
          </Row>
          <RowSpecial>
            <Cell>9:45am</Cell>
            <Cell>Break</Cell>
          </RowSpecial>
          <Row>
            <Cell>10:15am</Cell>
            <Cell>The Immersive Web in 2019</Cell>
          </Row>
          <Row>
            <Cell>10:45am</Cell>
            <Cell>The browser as a modular, networked video synthesizer</Cell>
          </Row>
          <Row>
            <Cell>11:15am</Cell>
            <Cell>Collaborative remote design working sessions</Cell>
          </Row>
          <RowSpecial>
            <Cell>11:45am</Cell>
            <Cell>Lunch</Cell>
          </RowSpecial>
          <Row>
            <Cell>1:15pm</Cell>
            <Cell>Back to the future of JS II: Beyond what we can foresee</Cell>
          </Row>
          <Row>
            <Cell>1:45pm</Cell>
            <Cell>I Can Babel Macros (and So Can You!)</Cell>
          </Row>
          <Row>
            <Cell>2:15pm</Cell>
            <Cell>TBA</Cell>
          </Row>
          <RowSpecial>
            <Cell>2:45pm</Cell>
            <Cell>Break</Cell>
          </RowSpecial>
          <Row>
            <Cell>3:15pm</Cell>
            <Cell>A Cartoon Quest: New Adventures for WebAssembly</Cell>
          </Row>
          <Row>
            <Cell>3:45pm</Cell>
            <Cell>Bubble Up your Node.js I/O</Cell>
          </Row>
          <Row>
            <Cell>4:15pm</Cell>
            <Cell>Embedding V8 in the real world</Cell>
          </Row>
          <RowSpecial>
            <Cell>5:30pm - 9pm</Cell>
            <Cell>
              Afterparty
              <Location>Honolulu Zoo (2 blocks away)</Location>
              <Info>A JS Community celebration featuring critters, sno-cones, and a luau themed dinner. This is an alcohol-free event, and family + friends are welcome with purchase of additional ticket.</Info>
            </Cell>
          </RowSpecial>
          <RowSpecial>
            <Cell>9pm - Late</Cell>
            <Cell>Nightcaps and socializing</Cell>
          </RowSpecial>
        </Table>
        <DayHeading>Friday, February 8th</DayHeading>
        <Table>
          <TableHeading>
            <Cell>Time</Cell>
            <Cell>Schedule</Cell>
          </TableHeading>
          <Row>
            <Cell>8:15am</Cell>
            <Cell>
              How to Make Your Website Not Ugly: Basic UX for Programmers
            </Cell>
          </Row>
          <Row>
            <Cell>8:45am</Cell>
            <Cell>
              Witchy Algorithms: Writing Code to Calculate the Phases of the
              Moon
            </Cell>
          </Row>
          <Row>
            <Cell>9:15am</Cell>
            <Cell>The Teenage Mutant Ninja Turtle Guide to Color Theory</Cell>
          </Row>
          <RowSpecial>
            <Cell>9:45am</Cell>
            <Cell>Break</Cell>
          </RowSpecial>
          <Row>
            <Cell>10:15am</Cell>
            <Cell>JavaScript is AsynchroWAT?</Cell>
          </Row>
          <Row>
            <Cell>10:45am</Cell>
            <Cell>What Tamagotchis can teach you about ES6 generators</Cell>
          </Row>
          <Row>
            <Cell>11:15am</Cell>
            <Cell>
              Hitting performance goals for the biggest Mobile JS App at
              Facebook
            </Cell>
          </Row>
          <RowSpecial>
            <Cell>11:45am</Cell>
            <Cell>Lunch</Cell>
          </RowSpecial>
          <Row>
            <Cell>1:15pm</Cell>
            <Cell>The Art of Code Comments</Cell>
          </Row>
          <Row>
            <Cell>1:45pm</Cell>
            <Cell>
              Navigating Unconscious Bias: a tool-based approach to
              reprogramming our biases
            </Cell>
          </Row>
          <Row>
            <Cell>2:15pm</Cell>
            <Cell>How to Fail at Accessibility</Cell>
          </Row>
          <RowSpecial>
            <Cell>2:45pm</Cell>
            <Cell>Break</Cell>
          </RowSpecial>
          <Row>
            <Cell>3:15pm</Cell>
            <Cell>Where did all my servers go?</Cell>
          </Row>
          <Row>
            <Cell>3:45pm</Cell>
            <Cell>
              GraphQL, the Domain Way
            </Cell>
          </Row>
          <Row>
            <Cell>4:15pm</Cell>
            <Cell>
              Building up the Electron Project: Team and Community Engineering
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
