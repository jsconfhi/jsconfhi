import React from "react";
import LogoSVG from "../img/logo.svg";
import styled from "styled-components";

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

const Header = () => (
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
                <button href="" aria-label="More" className="icon">
                  <i className="fas fa-bars" />
                </button>
              </li>
            </ul>
            <ul className="nav-right">
              <li>
                <a href="/attend">Attend</a>
              </li>
              <li>
                <a href="/speakers">Speakers</a>
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
  </header>
);

export default Header;
