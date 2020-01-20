import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

import googleImage from "../img/google_logo.png";
import muxImage from "../img/mux_logo.png";
import mozillaImage from "../img/mozilla_logo.png";
import azureImage from "../img/azure_logo.png";
import ampImage from "../img/amp_logo.png";

const LogoWrapper = styled.a`
  display: inline-block;
  width: 330px;
  height: 120px;
  text-align: center;
  margin: 0 25px 25px 0;
`;

const Sponsors = () => (
  <Layout>
    <main className="page-sponsors">
      <Header />
      <section className="content">
        <div className="grid">
          <div className="grid-full">
            <h1>Our Sponsors</h1>

            <h2>Gold</h2>

            <LogoWrapper target="_blank" href="https://mux.com/">
              <img src={muxImage} alt="Mux Logo" />
            </LogoWrapper>
            <LogoWrapper target="_blank" href="https://www.google.com/">
              <img
                style={{ marginTop: "24px" }}
                src={googleImage}
                alt="Google Logo"
              />
            </LogoWrapper>

            <h2>Diversity</h2>

            <LogoWrapper target="_blank" href="https://amp.dev/">
              <img src={ampImage} alt="Google AMP Logo" />
            </LogoWrapper>
            <LogoWrapper
              target="_blank"
              href="https://azure.microsoft.com/en-us/"
            >
              <img src={azureImage} alt="Microsoft Azure Logo" />
            </LogoWrapper>

            <h2>Caption</h2>

            <LogoWrapper target="_blank" href="https://www.mozilla.org/">
              <img
                style={{ marginTop: "17px" }}
                src={mozillaImage}
                alt="Mozilla Logo"
              />
            </LogoWrapper>

            <h2>Sponsor JSConf Hawaiʻi</h2>
            <div className="sponsor">
              <p>Become a partner of JSConf Hawaiʻi!</p>

              <p>
                With over 400 developers from around the world attending, and
                hundreds more following along at home, sponsoring the conference
                is one of the best ways to connect with JavaScript developers.
              </p>

              <p>
                There are a variety of sponsorship packages available for small
                and large companies alike! From setting up a developer lounge
                on-site, to hosting a meal, to reaching our eager Twitter
                audience, to being recognized as one of our "Diversity Sponsors"
                who help bring attendees to the conference, there's a huge range
                of benefits to take advantage of, and not all of them require
                you to attend in-person.
              </p>

              <p>
                <a
                  className="button-primary"
                  href="/JS-Conf-Hawaii-2020-Sponsorship-Info.pdf"
                >
                  Download Prospectus
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  </Layout>
);

export default Sponsors;
