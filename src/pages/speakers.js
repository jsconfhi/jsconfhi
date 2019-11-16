import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import { FiUser } from "react-icons/fi";
import styled from "styled-components";

/* Speaker Images */
import Cassidy from "../img/cassidy.png";
import Jenna from "../img/JennaZeigen.jpeg";
import Dinesh from "../img/dinesh.jpeg";
import Angie from "../img/angie.jpeg";

const Main = styled.main`
  text-align: center;
`;

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
  text-align: center;
  width: 180px;
`;

const SpeakerTitle = styled.div`
  text-align: center;
  width: 180px;
  line-height: 22px;
  padding: 10px 20px 20px;
  a {
    color: #D95B5B;
    font-weight: bold;
  }
`;

const Image = styled.img`
  border-radius: 130px;
  height: 180px;
  width: 180px;
`;

const Gallery = styled.div`
  margin: 0 auto;
  padding: 0 25px;

  svg {
    font-size: 180px;
    background: white;
    padding: 30px 40px 0 40px;
    border-radius: 50px;
  }
`;


const SpeakersPage = () => {
  return (
    <Layout>
      <Header />
      <Gallery>
        <div class="content">
          <div className="grid">
            <SectionHeading>
              <h2>Emcees</h2>
            </SectionHeading>
            <SectionContent>
              <Speaker>
                <Image src={Cassidy} />
                <SpeakerTitle>
                  Cassidy Williams{" "}
                  <a href="https://twitter.com/cassidoo">@cassidoo</a>
                </SpeakerTitle>
              </Speaker>
            </SectionContent>
          </div>
          </div>
          <div class="content">
          <div className="grid">
            <SectionHeading>
              <h2>Meet the Speakers</h2>
            </SectionHeading>
            <SectionContent>
              <Speaker>
                <Image src={Jenna} />
                <SpeakerTitle>
                  Jenna Zeigen{" "}
                  <a href="https://twitter.com/zeigenvector">@zeigenvector</a>
                </SpeakerTitle>
              </Speaker>
              <Speaker>
                <Image src={Dinesh} />
                <SpeakerTitle>
                  Dinesh Pandiyan{" "}
                  <a href="https://twitter.com/flexdinesh">@flexdinesh</a>
                </SpeakerTitle>
              </Speaker>
              <Speaker>
                <Image src={Angie} />
                <SpeakerTitle>
                  Angie Jones{" "}
                  <a href="https://twitter.com/techgirl1908">@techgirl1908</a>
                </SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
              <Speaker>
                <FiUser />
                <SpeakerTitle>Coming Soon!</SpeakerTitle>
              </Speaker>
            </SectionContent>
          </div>
        </div>
      </Gallery>
      <Footer />
    </Layout>
);
}

export default SpeakersPage;
