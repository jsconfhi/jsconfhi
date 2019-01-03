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
  background: #f2dc1a;
  &:nth-child(odd) {
    background: #eee;
  }
`;

const Cell = styled.td`
  border: 1px solid #ccc;
  padding: 0.5em;
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
            <Cell>1:00pm - 6:00pm</Cell>
            <Cell>Check-in at the beach across from the Marriott</Cell>
          </Row>
          <Row>
            <Cell>6:00pm on</Cell>
            <Cell>Dinner Roulette</Cell>
          </Row>
        </Table>
        <DayHeading>Thursday, February 7th</DayHeading>
        <Table>
          <TableHeading>
            <Cell>Time</Cell>
            <Cell>Schedule</Cell>
          </TableHeading>
          <Row>
            <Cell>7:30am</Cell>
            <Cell>Check-in and breakfast</Cell>
          </Row>
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
          <Row>
            <Cell>9:45pm</Cell>
            <Cell>Snack</Cell>
          </Row>
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
          <Row>
            <Cell>11:45am</Cell>
            <Cell>Lunch</Cell>
          </Row>
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
          <Row>
            <Cell>2:45pm</Cell>
            <Cell>Snack</Cell>
          </Row>
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
        </Table>
        <DayHeading>Friday, February 8th</DayHeading>
        <Table>
          <TableHeading>
            <Cell>Time</Cell>
            <Cell>Schedule</Cell>
          </TableHeading>
          <Row>
            <Cell>7:30am</Cell>
            <Cell>Check-in and breakfast</Cell>
          </Row>
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
          <Row>
            <Cell>9:45pm</Cell>
            <Cell>Snack</Cell>
          </Row>
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
          <Row>
            <Cell>11:45am</Cell>
            <Cell>Lunch</Cell>
          </Row>
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
          <Row>
            <Cell>2:45pm</Cell>
            <Cell>Snack</Cell>
          </Row>
          <Row>
            <Cell>3:15pm</Cell>
            <Cell>Where did all my servers go?</Cell>
          </Row>
          <Row>
            <Cell>3:45pm</Cell>
            <Cell>
              Designing GraphQL Schemas: Forget your data, focus on your domain
            </Cell>
          </Row>
          <Row>
            <Cell>4:15pm</Cell>
            <Cell>
              Building up the Electron Project: Team and Community Engineering
            </Cell>
          </Row>
        </Table>
      </Container>
    </Hero>
  </Layout>
);

export default Schedule;
