import React, { useState } from "react";
import styled from "styled-components";
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

const SkipLink = styled.a`
  position: absolute;
  top: -1000px;
  left: -1000px;
  height: 1px;
  width: 1px;
  text-align: left;
  overflow: hidden;

  &:active,
  &:focus,
  &:hover {
    left: 0;
    top: 0;
    width: auto;
    height: auto;
    overflow: visible;
  }
`;

const Footer = () => {
  const [state, setState] = useState(false);

  return (
    <footer className="footer content">
      <div className="grid">
        <div className="grid-full">
          <nav className="nav-bottom">
            <ul className="nav-left">
              <li>
                <a href="./code-of-conduct">Code of conduct</a>
              </li>
              <li>
                <a href="https://slack.jsconfhi.com/">Slack</a>
              </li>
              <li>
                <a href="./organizers">Organizers</a>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
