import React from "react";
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
