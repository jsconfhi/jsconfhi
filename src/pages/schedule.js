import React, { useState } from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Modal from "react-modal";
import Person from "../components/person";
import speakers from "../data/speakers/data";
import styled from "styled-components";
import { FiX } from "react-icons/fi";
import { day0, day1, day2, day3 } from "../data/schedule/data";

const SectionHeading = styled.div`
  grid-column: 2 / span 4;
  color: #1a7173;
  @media (max-width: 600px) {
    grid-column: 1 / span 13;
    justify-self: center;
    text-align: center;
  }
`;

const SectionContent = styled.div`
  grid-column 6/span 8;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 600px) {
    grid-column: 1/span 13;
    justify-self: center;
  }
`;

const Gallery = styled.div`
  margin: 0 auto;
  padding: 0 25px;
`;

const SpeakerName = styled.div`
  color: #d23636;
  text-decoration: none;
  :focus,
  :active,
  :hover {
    text-decoration: underline;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: top;
    align-items: center;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  cursor: pointer;
  padding: 0.5em;
  background: linear-gradient(45deg, white, white);
  border: transparent;
`;

const Title = styled.h2`
  margin-right: 0.5em;
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

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    maxWidth: "80%",
    maxHeight: "80%"
  }
};

Modal.setAppElement("#___gatsby");

const SpeakersPage = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState();
  const [isBio, setIsBio] = useState();

  const clearModal = () => {
    setSelectedSpeaker(null);
    setIsBio(false);
  };

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
            <a onClick={() => setSelectedSpeaker(speaker)}>
              <Avatar src={speaker.img} alt="" onClick={() => setIsBio(true)} />
              <SpeakerName onClick={() => setIsBio(true)}>
                {speaker.name}
              </SpeakerName>
              <p>{speaker.title}</p>
            </a>
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
          onRequestClose={clearModal}
        >
          <CloseButton onClick={clearModal}>
            <FiX />
          </CloseButton>
          <FlexContainer>
            <Person person={selectedSpeaker} />
            {isBio ? (
              <div>{selectedSpeaker.bio}</div>
            ) : (
              <div>
                <Title>{selectedSpeaker.title}</Title>
                <p>{selectedSpeaker.description}</p>
              </div>
            )}
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
      <Gallery>
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
                <a href="">here</a>! <br />
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
      </Gallery>
      <Footer />
    </Layout>
  );
};

export default SpeakersPage;
