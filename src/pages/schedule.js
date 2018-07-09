import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import theme from '../theme'

const Container = styled.div`
  max-width: ${theme.containerWidth};
  margin: 0 auto;
`

const DayHeading = styled.h2`
  color: black;
  font-size: 1.2em;
`
const Table = styled.table`
  width: 600px;
  margin-bottom: 3em;
`

const TableHeading = styled.thead`
  font-weight: bold;
`

const Row = styled.tr`
  &:nth-child(odd) {
    background: #eee;
  }
`

const Cell = styled.td`
  border: 1px solid #ccc;
  padding: 0.5em;
`

const Schedule = () => (
  <Layout>
    <Container>
      <h1>Schedule</h1>
      <DayHeading>Day 1</DayHeading>
      <Table>
        <TableHeading>
          <Cell>Time</Cell>
          <Cell>Schedule</Cell>
        </TableHeading>
        <Row>
          <Cell>8:00am</Cell>
          <Cell>Check-in and breakfast</Cell>
        </Row>
        <Row>
          <Cell>9:00am</Cell>
          <Cell>Keynote</Cell>
        </Row>
        <Row>
          <Cell>10:00am</Cell>
          <Cell>TBD</Cell>
        </Row>
        <Row>
          <Cell>11:00am</Cell>
          <Cell>TBD</Cell>
        </Row>
        <Row>
          <Cell>12:30pm</Cell>
          <Cell>Lunch</Cell>
        </Row>
        <Row>
          <Cell>2:00pm</Cell>
          <Cell>TBD</Cell>
        </Row>
        <Row>
          <Cell>3:00pm</Cell>
          <Cell>TBD</Cell>
        </Row>
        <Row>
          <Cell>4:00pm</Cell>
          <Cell>TBD</Cell>
        </Row>
      </Table>
      <DayHeading>Day 2</DayHeading>
      <Table>
        <TableHeading>
          <Cell>Time</Cell>
          <Cell>Schedule</Cell>
        </TableHeading>
        <Row>
          <Cell>8:00am</Cell>
          <Cell>Breakfast</Cell>
        </Row>
        <Row>
          <Cell>9:00am</Cell>
          <Cell>TBD</Cell>
        </Row>
        <Row>
          <Cell>10:00am</Cell>
          <Cell>TBD</Cell>
        </Row>
        <Row>
          <Cell>11:00am</Cell>
          <Cell>TBD</Cell>
        </Row>
        <Row>
          <Cell>12:30pm</Cell>
          <Cell>Lunch</Cell>
        </Row>
        <Row>
          <Cell>2:00pm</Cell>
          <Cell>TBD</Cell>
        </Row>
        <Row>
          <Cell>3:00pm</Cell>
          <Cell>TBD</Cell>
        </Row>
        <Row>
          <Cell>4:00pm</Cell>
          <Cell>TBD</Cell>
        </Row>
      </Table>
    </Container>
  </Layout>
)

export default Schedule
