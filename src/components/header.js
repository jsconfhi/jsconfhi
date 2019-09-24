import React, { useState } from "react";
import LogoSVG from "../img/logo.svg";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

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

const Header = () => {
  const [state, setState] = useState(false);

  return (
    <header>
      <SkipLink href="#content">Skip to content</SkipLink>
      <div className="content">
        <div className="grid">
          <div className="grid-full">
            <nav className="nav-top">
              <ul className="nav-left">
                <li>
                  <a className="home" href="/">
                    <LogoSVG className="logo" />
                    <div className="home-text">JSConf Hawaiʻi</div>
                  </a>
                </li>
                <li className="nav-hamburger">
                  <button
                    aria-label="More"
                    className="hamburger-icon icon"
                    onClick={() => (state ? setState(false) : setState(true))}
                  >
                    <FaBars />
                  </button>
                </li>
              </ul>
              <ul className="nav-right">
                <li>
                  <a href="/attend">Attend</a>
                </li>
                <li>
                  <a href="/scholarships">Scholarships</a>
                </li>
                <li>
                  <a href="/sponsors">Sponsors</a>
                </li>
                <li>
                  <a
                    className="buy-button button-primary"
                    href="https://ti.to/jsconf-hawaii/2020/en"
                  >
                    Buy tickets
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {state && (
        <div className="nav-expandable">
          <ul className="nav-right-expandable">
            <li>
              <a href="/attend">Attend</a>
            </li>
            <li>
              <a href="/scholarships">Scholarships</a>
            </li>
            <li>
              <a href="/sponsors">Sponsors</a>
            </li>
            <li>
              <a
                className="buy-button button-primary"
                href="https://ti.to/jsconf-hawaii/2020/en"
              >
                Buy tickets
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
