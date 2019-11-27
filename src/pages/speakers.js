import React, { useState } from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  CloseButton,
  Content,
  FlexContainer,
  SectionContent,
  SectionHeading,
  Title
} from "../components/styled";
import Modal from "react-modal";
import Person from "../components/person";
import speakers from "../data/speakers/data";
import styled from "styled-components";
import { FiX } from "react-icons/fi";

/* Emcee Images */
import Cassidy from "../img/cassidy.png";

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

const addLineBreak = text =>
  text.split("\n").map((paragraph, i) => <p key={i}>{paragraph}</p>);

const SpeakersPage = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState();

  const renderSpeaker = (speaker, i) => {
    return speaker.title ? (
      <Person
        key={i}
        person={speaker}
        onClick={() => setSelectedSpeaker(speaker)}
      />
    ) : (
      <Person key={i} person={{ name: "Coming Soon!" }} />
    );
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
              <Title>About {selectedSpeaker.name}</Title>
              <p>{selectedSpeaker.bio}</p>
            </div>
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
              <h2>Emcees</h2>
            </SectionHeading>
            <SectionContent>
              <Person
                person={{
                  name: "Cassidy Williams",
                  img: Cassidy,
                  handle: "cassidoo"
                }}
              />
            </SectionContent>
          </div>
        </div>
        <div className="content">
          <div className="grid">
            <SectionHeading>
              <h2>Meet the Speakers</h2>
            </SectionHeading>
            <SectionContent>{speakers.map(renderSpeaker)}</SectionContent>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default SpeakersPage;
