import Layout from "../components/layout";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Person from "../components/person";
import { createGlobalStyle } from "styled-components";

// Organizer Images
import avatarCharlie from "../img/charlie.jpg";
import avatarJade from "../img/jade.jpg";
import avatarKelly from "../img/kng.jpg";
import avatarJon from "../img/jkup.jpg";
import avatarTracy from "../img/tracy.jpg";
import avatarJason from "../img/jason.jpg";
import avatarEd from "../img/ed.jpg";
import avatarJenn from "../img/jenn.png";
import avatarRomina from "../img/romina.jpg";
import avatarMyles from "../img/myles.jpg";

const GlobalStyles = createGlobalStyle`
  .name {
    font-weight: bold;
    font-size: 1.1em;
    color: #d95b5b;
    font-family: Arial Black, Geneva, Verdana, sans-serif;
  }

  p {
    margin-bottom: 0.5em;
  }

  h1 {
    color: #1a7173;
    text-transform: uppercase;
  }

  .grid {
    grid-template-columns: 1rem repeat(14, minmax(1rem, 3.75rem)) 1rem;
  }

  .grid-third-1 {
    grid-column-start: 2;
    grid-column-end: 6;
    justify-self: end;
  }

  .grid-third-2-3 {
    padding-left: 1em;
    grid-column-start: 6;
    grid-column-end: 16;
    justify-self: end;
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 950px) {
    .grid-third-1,
    .grid-third-2-3 {
      justify-self: flex-start;
      grid-column: 2 / span 14;
    }
  }
`;

const Organizers = () => (
  <>
    <GlobalStyles />
    <Layout>
      <main>
        <Header />
        <section className="content">
          <div className="grid">
            <div className="grid-third-1">
              <h1>Meet the Organizers</h1>
            </div>
            <div className="grid-third-2-3">
              <Person person={{name: 'Charlie Croom', handle: 'charliecroom', img: avatarCharlie, email: 'charlie@jsconfhi.com' }} />
              <Person person={{name: 'Jade Loyzaga', handle: 'jadeloyzaga', img: avatarJade, email: 'jade@jsconfhi.com' }} />
              <Person person={{name: 'Kelly King', handle: 'kng', img: avatarKelly, email: 'kelly@jsconfhi.com' }} />
              <Person person={{name: 'Jon Kuperman', handle: 'jkup', img: avatarJon, email: 'jon@jsconfhi.com' }} />
              <Person person={{name: 'Tracy Hinds', handle: 'hackygolucky', img: avatarTracy, email: 'tracyn@jsconfhi.com' }} />
              <Person person={{name: 'Jason Sewell', handle: 'sewell_jason', img: avatarJason, email: 'jason@jsconfhi.com' }} />
              <Person person={{name: 'Ed White', handle: 'SpyHI', img: avatarEd, email: 'ed@jsconfhi.com' }} />
              <Person person={{name: 'Jenn Ah', handle: 'jennn_ah', img: avatarJenn, email: 'jenn@jsconfhi.com' }} />
              <Person person={{name: 'Romina Escano', handle: 'ramenyaah', img: avatarRomina, email: 'romina@jsconfhi.com' }} />
              <Person person={{name: 'Myles Borins', handle: 'MylesBorins', img: avatarMyles, email: 'myles@jsconfhi.com' }} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  </>
);

export default Organizers;
