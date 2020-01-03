import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import AlohaSVG from '../img/aloha.svg';
import FlipFlops from '../img/flipflops.svg';
import TowelRed from '../img/towel-red.svg';
import TowelGreen from '../img/towel-green.svg';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url = 'https://twitter.us18.list-manage.com/subscribe/post?u=c9c542019e2372811b2b8cd10&amp;id=affde4125d';

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />;

const IndexPage = () => (
  <Layout>
    <Header />
    <main>
      <header className="hero section">
        <AlohaSVG className="aloha" />
      </header>
      <div className="main-content">
        <div className="about section section-top" id="about">
          <div className="grid">
            <div className="heading grid-half-first">
              <h1>JSConf Hawaiʻi</h1>
              <p className="subheading">Alohilani Resort ‒ February 5-7</p>
            </div>
            <div className="description grid-half-second">
              <p>
                Join us for our second annual JavaScript conference, coming February 2020 at the{' '}
                <a href="https://www.alohilaniresort.com">Alohilani Resort</a>
                !
                <br />
                <br />
                Listen to our panel of amazing speakers, meet new people, and enjoy the activities Hawaiʻi has to offer!
              </p>
            </div>
          </div>
          <a className="buy-button-mobile button-primary" href="https://ti.to/jsconf-hawaii/2020/en">
            Buy tickets
          </a>
        </div>
        <div className="speakers" id="speakers">
          <div className="section">
            <div className="grid">
              <div className="grid-two-thirds">
                <div className="heading">
                  <h2>Schedule of events</h2>
                </div>
                <div className="description">
                  <p>
                    This 3-day conference features two days of talks from 22 speakers, an after-party at the Honolulu
                    Aquarium, and a gap day for social and cultural activities!
                  </p>
                  <p>
                    Starting the night before the conference, you'll have a chance to check in early, meet other
                    attendees, and (optionally) play dinner roulette to be assigned a dinner reservation with 4-8 random
                    attendees.
                  </p>
                  <p>Check out our full schedule for more details!</p>
                  <p>
                    <a href="./schedule" className="button-secondary">
                      Schedule
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <TowelGreen className="towel towel-green" alt="Green towel" />
          <TowelRed className="towel towel-red" alt="Red towel" />
        </div>
        <div className="newsletter section">
          <div className="grid">
            <div className="grid-full">
              <div className="heading">
                <h3>Want the latest news on JSConf Hawaiʻi?</h3>
              </div>
              <div className="description">
                <SimpleForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="coc">
        <FlipFlops className="flipflops" alt="Flip Flops" />
        <div className="section">
          <div className="grid">
            <div className="heading grid-half-first">
              <h2>Code of conduct</h2>
            </div>
            <div className="description grid-half-second">
              <p>
                At JSConf Hawaiʻi, we want to provide a safe, friendly environment for all our attendees. To ensure
                this, we have a few rules that all organizers, vendors, and attendees must follow.
              </p>
              <p>
                <a href="./code-of-conduct" className="button-secondary coc-link">
                  Read the rules
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  </Layout>
);

export default IndexPage;
