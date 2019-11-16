import React, { useState } from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Modal from 'react-modal';
import Speaker from '../components/speaker';
import speakers from '../data/speakers/data'
import styled from "styled-components";

/* Emcee Images */
import Cassidy from "../img/cassidy.png";

const SectionHeading = styled.div`
  grid-column: 2/span 4;
  color: #1A7173;
`;

const SectionContent = styled.div`
  grid-column 6/span 8;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


const Gallery = styled.div`
  margin: 0 auto;
  padding: 0 25px;

  svg {
    font-size: 180px;
    background: white;
    padding: 30px 40px 0 40px;
    border-radius: 50px;
    cursor: initial;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const modalStyle = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '800px'
  }
};

Modal.setAppElement('#___gatsby')

const SpeakersPage = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState();

  const renderSpeaker = (speaker, i) => {
    return speaker.title ? (
      <Speaker key={i} speaker={speaker} onClick={() => setSelectedSpeaker(speaker)} />
    ) : <Speaker key={i} speaker={{ name: 'Coming Soon!' }} />;
  };

  const renderModal = () => {
    return selectedSpeaker && (
      <Modal
        isOpen={!!selectedSpeaker}
        style={modalStyle}
        contentLabel="Speaker Modal"
        onRequestClose={() => setSelectedSpeaker(null)}
      >
      <FlexContainer>
        <div>
          <Speaker speaker={selectedSpeaker} />
        </div>
        <div>
          <h2>{selectedSpeaker.title}</h2>
          <p>{selectedSpeaker.description}</p>
        </div>
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
              <Speaker speaker={{ name: 'Casside Williams', img: Cassidy, handle: 'cassidoo'}} />
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
