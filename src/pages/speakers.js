import React, { useState } from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import {
  CloseButton,
  Content,
  FlexContainer,
  modalStyle,
  SectionContent,
  SectionHeading,
  Title
} from '../components/styled';
import Modal from 'react-modal';
import Person from '../components/person';
import speakersRaw from '../data/speakers/data';
import styled from 'styled-components';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';
import addLineBreaks from '../util/addLineBreaks';

/* Emcee Images */
import Cassidy from '../img/cassidy.png';
import Jenna from '../img/jenna.jpeg';
const speakers = speakersRaw.filter(speaker => !!speaker.description);

const ModalButton = styled.button`
  font-size: 22px;
  cursor: pointer;
  color: #667;
  background: linear-gradient(45deg, transparent, transparent);
  border-color: transparent;
`;

const RightAligned = styled.div`
  font-size: 24px;
  position: absolute;
  top: 50%;
  right: 8px;
`;

const LeftAligned = styled.div`
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 8px;
`;

const Description = styled.p`
  word-break: break-word;
`;

Modal.setAppElement('#___gatsby');

const SpeakersPage = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState();

  const renderSpeaker = (speaker, i) => {
    return speaker.title ? (
      <Person key={i} person={speaker} onClick={() => setSelectedSpeaker(speaker)} />
    ) : (
      <Person key={i} person={{ name: 'Coming Soon!' }} />
    );
  };

  const renderModal = () => {
    const index = selectedSpeaker ? speakers.findIndex(speaker => speaker.id === selectedSpeaker.id) : -1;
    return (
      selectedSpeaker && (
        <Modal
          isOpen={!!selectedSpeaker}
          style={{
            content: {
              ...modalStyle.content,
              padding: '1em 2.5em'
            }
          }}
          contentLabel="Speaker Modal"
          onRequestClose={() => setSelectedSpeaker(null)}
        >
          <CloseButton onClick={() => setSelectedSpeaker(null)}>
            <FiX />
          </CloseButton>
          <FlexContainer>
            <Person person={selectedSpeaker} />
            <div style={{ padding: '1em' }}>
              <Title>About {selectedSpeaker.name}</Title>
              <Description>{addLineBreaks(selectedSpeaker.bio)}</Description>
            </div>
          </FlexContainer>
          {index > 0 && (
            <LeftAligned>
              <ModalButton onClick={() => setSelectedSpeaker(speakers[index - 1])}>
                <FiArrowLeft />
              </ModalButton>
            </LeftAligned>
          )}
          {speakers.length - 1 > index && (
            <RightAligned>
              <ModalButton onClick={() => setSelectedSpeaker(speakers[index + 1])}>
                <FiArrowRight />
              </ModalButton>
            </RightAligned>
          )}
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
                  name: 'Cassidy Williams',
                  img: Cassidy,
                  handle: 'cassidoo'
                }}
              />
              <Person
                person={{
                  name: 'Jenna Quindica',
                  img: Jenna,
                  handle: 'JennaQuindica'
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
