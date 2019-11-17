import React, { useState } from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Modal from 'react-modal';
import Person from '../components/person';
import speakers from '../data/speakers/data'
import styled from "styled-components";
import { FiX } from "react-icons/fi";

/* Emcee Images */
import Cassidy from "../img/cassidy.png";

const SectionHeading = styled.div`
  grid-column: 2/span 4;
  color: #1A7173;
  @media (max-width: 600px) {
    grid-column: 1/span 13;
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


const modalStyle = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    maxWidth: '80%',
    maxHeight: '80%'
  }
};

Modal.setAppElement('#___gatsby')

const SpeakersPage = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState();

  const renderSpeaker = (speaker, i) => {
    return speaker.title ? (
      <Person key={i} person={speaker} onClick={() => setSelectedSpeaker(speaker)} />
    ) : <Person key={i} person={{ name: 'Coming Soon!' }} />;
  };

  const renderModal = () => {
    return selectedSpeaker && (
      <Modal
        isOpen={!!selectedSpeaker}
        style={modalStyle}
        contentLabel="Speaker Modal"
        onRequestClose={() => setSelectedSpeaker(null)}
      >
      <CloseButton onClick={() => setSelectedSpeaker(null)}><FiX /></CloseButton>
      <FlexContainer>
        <Person person={selectedSpeaker} />
        <div>
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
  };

  return (
    <Layout>
      <Header />
      { renderModal() }
      <Gallery>
        <div className="content">
          <div className="grid">
            <SectionHeading>
              <h2>Emcees</h2>
            </SectionHeading>
            <SectionContent>
              <Person person={{ name: 'Casside Williams', img: Cassidy, handle: 'cassidoo'}} />
            </SectionContent>
          </div>
          </div>
          <div className="content">
          <div className="grid">
            <SectionHeading>
              <h2>Meet the Speakers</h2>
            </SectionHeading>
            <SectionContent>
              {speakers.map(renderSpeaker)}
            </SectionContent>
          </div>
        </div>
      </Gallery>
      <Footer />
    </Layout>
);
}

export default SpeakersPage;
