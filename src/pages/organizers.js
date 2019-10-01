import Layout from "../components/layout";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
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

  .avatar {
    width: 200px;
    border-radius: 50%;
    margin-bottom: 1em;
  }

  .organizer {
    width: 220px;
    padding: 0 1em 1em 0;
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
              <div className="organizer">
                <img className="avatar" src={avatarCharlie} alt="Charlie" />
                <p className="name">Charlie Croom</p>
                <p className="bio">
                  Web Eng @Twitter. Lucky to work with an incredible team to try
                  and create the web's best PWA. Photography, aviation, gaming,
                  and comedy on the side!
                </p>
                <p className="twitter-handle">
                  <a href="https://www.twitter.com/CharlieCroom">
                    @CharlieCroom
                  </a>
                </p>
                <p className="email">charlie@jsconfhi.com</p>
              </div>
              <div className="organizer">
                <img className="avatar" src={avatarJade} alt="Jade" />
                <p className="name">Jade Loyzaga</p>
                <p className="bio">
                  Aussie living in San Francisco. Wifey of @csmcgrath. Software
                  engineer @twitter 👩‍💻
                </p>
                <p className="twitter-handle">
                  <a href="https://www.twitter.com/jadeloyzaga">@jadeloyzaga</a>
                </p>
                <p className="email">jade@jsconfhi.com</p>
              </div>
              <div className="organizer">
                <img className="avatar" src={avatarKelly} alt="Kelly" />
                <p className="name">Kelly King</p>
                <p className="bio">
                  Web developer @twitter. Co-organizer of @wafflejs, founded
                  @wscsf
                </p>
                <p className="twitter-handle">
                  <a href="https://www.twitter.com/kng">@kng</a>
                </p>
                <p className="email">kelly@jsconfhi.com</p>
              </div>
              <div className="organizer">
                <img className="avatar" src={avatarJon} alt="Jon" />
                <p className="name">Jon Kuperman</p>
                <p className="bio">
                  JavaScript @Adobe; previously @brave and @twitter.
                </p>
                <p className="twitter-handle">
                  <a href="https://www.twitter.com/jkup">@jkup</a>
                </p>
                <p className="email">jon@jsconfhi.com</p>
              </div>
              <div className="organizer">
                <img className="avatar" src={avatarTracy} alt="Tracy" />
                <p className="name">Tracy Hinds</p>
                <p className="bio">
                  OSS diplomat | @nodejs + JS | Community behavior specialist |
                  Director Fighting tiny revolutions. Inciting confidence one
                  convo at a time. @SamsungNEXT
                </p>
                <p className="twitter-handle">
                  <a href="https://www.twitter.com/hackygolucky">
                    @hackygolucky
                  </a>
                </p>
                <p className="email">tracy@jsconfhi.com</p>
              </div>
              <div className="organizer">
                <img className="avatar" src={avatarJason} alt="Jason" />
                <p className="name">Jason Sewell</p>
                <p className="bio">
                  Life long learner, doer of things. Current doings:
                  #javascript, #cybersecurity, #devsecops, #aws, #python.
                  Co-founder of @sudokrew and @devleaguehawaii.
                </p>
                <p className="twitter-handle">
                  <a href="https://www.twitter.com/sewell_jason">
                    @sewell_jason
                  </a>
                </p>
                <p className="email">jason@jsconfhi.com</p>
              </div>
              <div className="organizer">
                <img className="avatar" src={avatarEd} alt="Ed" />
                <p className="name">Ed White</p>
                <p className="bio">
                  Internet spelunker. Veteran complex systems analyst. 👨‍🎓 CS &&
                  Biz. ❤️ @DallasNagata.Organizer @JSConfHI.Tweets about tech,
                  Hawaii, and nerd stuff. 🇲🇽🇺🇸
                </p>
                <p className="twitter-handle">
                  <a href="https://www.twitter.com/SpyHI">@SpyHI</a>
                </p>
                <p className="email">ed@jsconfhi.com</p>
              </div>
              <div className="organizer">
                <img className="avatar" src={avatarJenn} alt="Jenn" />
                <p className="name">Jenn Ah</p>
                <p className="bio">
                  Full-Stack Engineer - Flatfile @flatfilers | Wife.Mother |
                  @hoolanapua Volunteer
                </p>
                <p className="twitter-handle">
                  <a href="https://www.twitter.com/jennn_ah">@jennn_ah</a>
                </p>
                <p className="email">jenn@jsconfhi.com</p>
              </div>
              <div className="organizer">
                <img className="avatar" src={avatarRomina} alt="Romina" />
                <p className="name">Romina Escano</p>
                <p className="bio">
                  Graphic Designer. Intern @NMGNetwork. You can find me
                  currently gluing my eyes to my computer screen 24/7.
                </p>
                <p className="twitter-handle">
                  <a href="https://www.twitter.com/ramenyaah">@ramenyaah</a>
                </p>
                <p className="email">romina@jsconfhi.com</p>
              </div>
              <div className="organizer">
                <img className="avatar" src={avatarMyles} alt="Myles" />
                <p className="name">Myles Borins</p>
                <p className="bio">
                  Artist, musician, developer, and maker / @nodejs TSC Director
                  / developer advocate for @googlecloud / Opinions are
                  potentially wrong, but definitely my own.
                </p>
                <p className="twitter-handle">
                  <a href="https://www.twitter.com/MylesBorins">@MylesBorins</a>
                </p>
                <p className="email">myles@jsconfhi.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  </>
);

export default Organizers;
