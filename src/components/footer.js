import React from "react";
import styled from "styled-components";
import Form from "../components/form";
import {
  FaInstagram,
  FaTwitterSquare,
  FaFacebookSquare,
  FaEnvelope,
  FaUsers,
  FaPhone,
} from "react-icons/fa";

const FooterText = styled.div`
  color: white;
`;
const FooterWrapper = styled.div`
  display: flex;
  list-style-type: none;
  padding-bottom: 25px;
  p {
    padding: 10px 0;
  }
  li {
    line-height: 1.5em;
  }
`;

const Footer = () => {
  return (
    <footer className="footer content">
      <div className="grid">
        <div className="grid-full">
          <nav className="nav-bottom">
            <ul className="nav-left">
              <li>
                <a href="/code-of-conduct">Code of conduct</a>
              </li>
              <li>
                <a href="https://slack.jsconfhi.com/">Slack</a>
              </li>
              <li>
                <a href="/organizers">Organizers</a>
              </li>
            </ul>
            <ul className="nav-right">
              <li>
                <a
                  aria-label={"Instagram"}
                  href="https://www.instagram.com/jsconfhi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  aria-label={"Twitter"}
                  href="https://www.twitter.com/jsconfhi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                >
                  <FaTwitterSquare />
                </a>
              </li>
              <li>
                <a
                  aria-label={"Facebook"}
                  href="https://www.facebook.com/JSConfHi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                >
                  <FaFacebookSquare />
                </a>
              </li>
            </ul>
          </nav>
          <FooterWrapper className="grid">
            <FooterText className="grid-half-first">
              <h3>Anonymous report</h3>
              <Form />
            </FooterText>
            <FooterText className="grid-half-second">
              <h3>Personal report</h3>
              <p>
                You can file a personal report using one of the below methods:
              </p>
              <li>
                <FaEnvelope />{" "}
                <a href="mailto:report@jsconfhi.com">report@jsconfhi.com</a>
              </li>
              <li>
                <FaUsers /> Report to a STAFF member
              </li>
              <li>
                <FaPhone /> Text + 1 (334) 292-4040 to anonymously report
              </li>
            </FooterText>
          </FooterWrapper>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
