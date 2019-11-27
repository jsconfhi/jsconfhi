import React, { useState } from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  CloseButton,
  Content,
  FlexContainer,
  Link,
  modalStyle,
  SectionContent,
  SectionHeading,
  Title
} from "../components/styled";
import Modal from "react-modal";
import Person from "../components/person";
import speakers from "../data/speakers/data";
import styled from "styled-components";
import { FiX } from "react-icons/fi";
import { day0, day1, day2, day3 } from "../data/schedule/data";

const SpeakerName = styled.div`
  color: #d23636;
`;

const Schedule = styled.table`
  width: 100%;
  margin-bottom: 3em;
  line-height: 1.5em;

  thead {
    font-weight: bold;
    text-align: left;
  }

  td {
    padding: 0.5em 1em;
    border: 1px solid #eee;
  }
`;

const SpeakerRow = styled.tr`
  cursor: pointer;
  a {
    text-decoration: none;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  margin-right: 1em;
  float: left;
`;

Modal.setAppElement("#___gatsby");

const SpeakersPage = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState();

  const renderRow = (
    { time, speakerId = null, description = null, highlight = false },
    i
  ) => {
    if (description) {
      return (
        <tr className={highlight ? "highlight" : ""} key={i}>
          <td>{time}</td>
          <td>{description}</td>
        </tr>
      );
    } else {
      const speaker = speakers.filter(s => s.id === speakerId)[0];
      return (
        <SpeakerRow onClick={() => setSelectedSpeaker(speaker)} key={i}>
          <td>{time}</td>
          <td>
            <Avatar src={speaker.img} alt="" />
            <SpeakerName>{speaker.name}</SpeakerName>
            <p>{speaker.title}</p>
          </td>
        </SpeakerRow>
      );
    }
  };
  const renderModal = () => {
    return (
      selectedSpeaker && (
        <Modal
          isOpen={!!selectedSpeaker}
          style={modalStyle}
          contentLabel="Speaker Modal"
          onRequestClose={() => setSelectedSpeaker(null)}
        >
          <CloseButton onClick={() => setSelectedSpeaker(null)}>
            <FiX />
          </CloseButton>
          <FlexContainer>
            <Person person={selectedSpeaker} />
            <div style={{ padding: "1em" }}>
              <Title>{selectedSpeaker.title}</Title>
              <p>{selectedSpeaker.description}</p>
            </div>
          </FlexContainer>
          <FlexContainer>
            <a
              className="buy-button button-primary"
              href="https://ti.to/jsconf-hawaii/2020/en"
            >
              Buy tickets
            </a>
          </FlexContainer>
        </Modal>
      )
    );
  };

  return (
    <Layout>
      <Header />
      {renderModal()}
      <Content>
        <div className="content">
          <div className="grid">
            <SectionHeading>
              <h1>Schedule</h1>
            </SectionHeading>
            <SectionHeading>
              <h2>
                Tuesday <br />
                Feb 4
              </h2>
            </SectionHeading>
            <SectionContent>
              <Schedule>
                <thead>
                  <tr>
                    <td>Time</td>
                    <td>Details</td>
                  </tr>
                </thead>
                <tbody>{day0.map(renderRow)}</tbody>
              </Schedule>
            </SectionContent>
            <SectionHeading>
              <h2>
                Wednesday
                <br />
                Feb 5
              </h2>
            </SectionHeading>
            <SectionContent>
              <Schedule>
                <thead>
                  <tr>
                    <td>Time</td>
                    <td>Details</td>
                  </tr>
                </thead>
                <tbody>{day1.map(renderRow)}</tbody>
              </Schedule>
            </SectionContent>
            <SectionHeading>
              <h2>
                Thursday
                <br />
                Feb 6
              </h2>
            </SectionHeading>
            <SectionContent>
              <p>
                Each ticket includes one "Gap Day" activity. Sign up{" "}
                <Link href="foobar ">here</Link>! <br />
                <i>
                  (Selections are modifiable until Jan 25th -- 10 days prior to
                  the event)
                </i>
              </p>
              <Schedule>
                <thead>
                  <tr>
                    <td>Time</td>
                    <td>Details</td>
                  </tr>
                </thead>
                <tbody>{day2.map(renderRow)}</tbody>
              </Schedule>
            </SectionContent>
            <SectionHeading>
              <h2>
                Friday
                <br /> Feb 7
              </h2>
            </SectionHeading>
            <SectionContent>
              <Schedule>
                <thead>
                  <tr>
                    <td>Time</td>
                    <td>Details</td>
                  </tr>
                </thead>
                <tbody>{day3.map(renderRow)}</tbody>
              </Schedule>
            </SectionContent>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default SpeakersPage;
