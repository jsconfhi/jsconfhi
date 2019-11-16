import React, { useState } from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import { FiUser } from "react-icons/fi";
import Modal from 'react-modal';
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

const Speaker = styled.div`
  cursor: pointer;
`;

const SpeakerWithoutModal = styled.div`
  cursor: intial`
;

const SpeakerTitle = styled.div`
  text-align: center;
  width: 180px;
  line-height: 22px;
  padding: 10px 20px 20px;
  a {
    color: #D95B5B;
    font-weight: bold;
  }
  @media (max-width: 600px) {
    width: 100%
  }
`;

const Image = styled.img`
  border-radius: 130px;
  height: 180px;
  width: 180px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
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

const renderPlaceholder = (i) => (
  <SpeakerWithoutModal key={i}>
    <FiUser />
    <SpeakerTitle>Coming Soon!</SpeakerTitle>
  </SpeakerWithoutModal>
);

const renderSpeakerName = (speaker) => {
  const stopPropagation = (e) => {
    // Do not open modal
    e.stopPropagation();
    return false;
  };
  return (
    <SpeakerTitle>
      {speaker.name}{' '}
      <a onClick={stopPropagation} href={`https://twitter.com/${speaker.handle}`}>@{speaker.handle}</a>
    </SpeakerTitle>
  )
};

const SpeakersPage = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState();

  const clearSelection = () => setSelectedSpeaker(null);

  const renderSpeaker = (speaker, i) => {
    const setSpeaker = () => setSelectedSpeaker(speaker);

    return speaker.title ? (
      <Speaker key={i} onClick={setSpeaker}>
        <Image src={speaker.img} alt="" />
        {renderSpeakerName(speaker)}
      </Speaker>
    ) : renderPlaceholder(i);
  };

  const renderModal = () => {
    return selectedSpeaker && (
      <Modal
        isOpen={selectedSpeaker}
        style={modalStyle}
        contentLabel="Speaker Modal"
        onRequestClose={clearSelection}
      >
      <FlexContainer>
        <div>
          <Image src={selectedSpeaker.img} alt="" />
            <SpeakerTitle>
            {selectedSpeaker.name}{' '}
            <a href={`https://twitter.com/${selectedSpeaker.handle}`}>@{selectedSpeaker.handle}</a>
          </SpeakerTitle>
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
              <SpeakerWithoutModal>
                <Image src={Cassidy} />
                <SpeakerTitle>
                  Cassidy Williams{" "}
                  <a href="https://twitter.com/cassidoo">@cassidoo</a>
                </SpeakerTitle>
              </SpeakerWithoutModal>
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
