import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import { FiUser } from "react-icons/fi";
import styled from "styled-components";

/* Speaker Images */
import Cassidy from "../img/cassidy.png";

const Main = styled.main`
  text-align: center;
`;

const Speaker = styled.div`
  text-align: center;
  width: 250px;
  display: inline-block;
`;

const SpeakerTitle = styled.div`
  font-size: 22px;
  text-align: center;
  width: 250px;
  line-height: 35px;
  padding: 20px;
  margin: 0 25px;
`;

const Image = styled.img`
  border-radius: 130px;
  height: 250px;
  width: 250px;
`;

const Modal = styled.div`
  margin: 0 auto;
  padding: 0 25px;

  svg {
    font-size: 250px;
    background: white;
    margin: 25px 25px 0 25px;
    padding: 20px 20px 0 20px;
    border-radius: 65px;
  }
`;

const SpeakersPage = () => (
  <Layout>
    <Header />
    <Main>
      <Modal>
        <h1>Our Emcees</h1>
        <Speaker>
          <Image src={Cassidy} />
          <SpeakerTitle>
            Cassidy Williams{" "}
            <a href="https://twitter.com/cassidoo">@cassidoo</a>
          </SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <h2>Our Speakers</h2>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
        <Speaker>
          <FiUser />
          <SpeakerTitle>Coming Soon</SpeakerTitle>
        </Speaker>
      </Modal>
    </Main>
    <Footer />
  </Layout>
);

export default SpeakersPage;
