import React from "react";
import LogoSVG from "../img/logo.svg";

const Header = () => (
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
              <a href="" aria-label="More" className="icon">
                <i className="fas fa-bars" />
              </a>
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
);

export default Header;
