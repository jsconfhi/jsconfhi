import Layout from "../components/layout";
import AttendStyle from "../components/attend-style";
import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import afterParty from "../img/after-party.png";
import { FaTwitter } from "react-icons/fa";

const Scholarship = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    document.body.appendChild(script);
  });

  return (
    <Layout>
      <AttendStyle />
        <Header />
        <div className="content">
          <div className="grid">
            <div className="grid-full">
              <main>
                <div className="info">
                  <h1>Opportunity Scholarships</h1>
                  <div class="description grid">
                    <div class="grid-half-first">
                      <p>
                        Diversity and an inclusive environment are two of JSConf
                        Hawai'i's core values, because we believe a broader
                        variety of people enriches the conference through a
                        broader variety of perspectives.
                      </p>
                      <p>
                        However, we recognize that it can be difficult for
                        people traditionally underrepresented in tech to set
                        aside the resources for a conference in Hawai'i. We
                        don't want to lose those perspectives, so we offer an
                        Opportunity Scholarship for members of those groups who
                        might not be able to attend otherwise.
                      </p>
                      <p>
                        The scholarship includes some or all of the following:
                      </p>
                      <ul>
                        <li>Discounted or free JSConfHI ticket</li>
                        <li>Fully covered accomodations (up to 4 nights)</li>
                        <li>Airfare up to $800</li>
                      </ul>
                      <p>
                        <a
                          className="button-secondary button-center"
                          href="https://docs.google.com/forms/d/e/1FAIpQLSfifk0on5yj014741vEP2lDWX6DF9ADc6PFZ8nPftfhwba9IQ/viewform?usp=sf_link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apply Now
                        </a>
                      </p>
                      <p>Applications close at 11:59 15 October 2019</p>
                    </div>
                    <div className="grid-half-second">
                      <img
                        width="100%"
                        src={afterParty}
                        alt="Group of smiling JSConf Hawai'i 2019 attendees"
                      />
                    </div>
                  </div>
                </div>
                <div className="info">
                  <h2 className="title">What Are Scholarship Alums Saying?</h2>
                  <div className="grid-full">
                    <div className="grid-first-half">
                      <blockquote className="twitter-tweet">
                        <p lang="en" dir="ltr">
                          Friends, this is how I had the amazing experience of
                          mashing JavaScript and Hawai’i earlier this year.{" "}
                          <span role="img" aria-label="Scream">
                            😱
                          </span>
                          Very grateful for this scholarship.
                          <br />
                          <br />
                          APPLY!{" "}
                          <a href="https://t.co/nLJXv7dMQu">
                            https://t.co/nLJXv7dMQu
                          </a>
                        </p>
                        &mdash; whitney.js (@nonprofWHIT){" "}
                        <a href="https://twitter.com/nonprofWHIT/status/1172283987777196032?ref_src=twsrc%5Etfw">
                          September 12, 2019
                        </a>
                      </blockquote>{" "}
                      <blockquote className="twitter-tweet">
                        <p lang="en" dir="ltr">
                          Thanks to this scholarship, I was able to: 1) learn
                          new things and 2) meet amazing people. APPLY!!!!{" "}
                          <a href="https://t.co/1qX1oJVyiJ">
                            https://t.co/1qX1oJVyiJ
                          </a>{" "}
                          <a href="https://t.co/JnanMxytnb">
                            pic.twitter.com/JnanMxytnb
                          </a>
                        </p>
                        &mdash; Chelsey (@TechChelsey){" "}
                        <a href="https://twitter.com/TechChelsey/status/1173293423308214274?ref_src=twsrc%5Etfw">
                          September 15, 2019
                        </a>
                      </blockquote>{" "}
                    </div>
                  </div>
                  <h2 className="title">Frequently Asked Questions</h2>
                  <div className="description grid">
                    <div className="grid-full-about">
                      <h3>Who is Eligible for an Opportunity Scholarship?</h3>
                      <p>
                        The JSConf Hawaii Opportunity Scholarships are intended
                        to increase the diversity of perspectives at the
                        conference. Our primary method is to subsidize members
                        of communities that are traditionally underrepresented
                        in tech, and who wouldn't be able to attend without
                        financial assistance.
                      </p>
                      <p>
                        Underrepresented groups include (but are not limited
                        to):
                      </p>
                      <ul>
                        <li>Hawai'i Residents</li>
                        <li>LGBTQIA+</li>
                        <li>Women</li>
                        <li>Persons of Color</li>
                        <li>Persons with Disabilities</li>
                      </ul>
                      <p>
                        The group identification portion of the application is a
                        text field. If you are a part of an underrepresented
                        group we have not identified, please feel free to apply
                        and list it!
                      </p>
                      <h3>How Much Work is the Application Process?</h3>
                      <p>
                        We have streamlined the application process compared to
                        JSConfHI 2019. This year are only asking for demographic
                        data, what you need, and two fields asking what you hope
                        to get out of the conference, and how you are currently
                        involved in the tech community. We recommend 200-500
                        words for the two question sections so we can learn
                        about you and how to best meet your needs!
                      </p>
                      <h3>When Will I Find Out If I Got the Scholarship?</h3>
                      <p>
                        The JSConfHI team is aiming to announce scholarship
                        recepients in mid-November. We have a policy of
                        informing both those who received the scholarship and
                        those who didn't, so no one is left wondering.
                      </p>
                      <h3>
                        What if I already bought a ticket? What if I really,
                        really want to come?
                      </h3>
                      <p>
                        Opportunity Scholarships are not guaranteed. We will
                        give as much as we can, but it's likely we'll have more
                        requests than we can fulfill.
                      </p>
                      <p>
                        The only guaranteed way to attend JSConfHI 2020 is to{" "}
                        <a
                          href="https://ti.to/jsconf-hawaii/2020/en"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          buy a ticket
                        </a>
                        . However, if you are selected for a scholarship, you
                        will be reimbursed for the expenses you would have had
                        covered as a scholarship recepient.
                      </p>
                      <p>
                        <a
                          className="buy-button button-primary"
                          href="https://ti.to/jsconf-hawaii/2020/en"
                        >
                          Buy tickets
                        </a>
                      </p>
                      <h3>
                        I Don't Need a Scholarship, but Would Like to Help!
                      </h3>
                      <p>
                        There are four main ways to help JSConfHI with our
                        Opportunity Scholarship mission:
                      </p>
                      <ul>
                        <li>
                          Consider{" "}
                          <a
                            href="https://ti.to/jsconf-hawaii/2020/en"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            buying a ticket
                          </a>{" "}
                          at the "Opportunity Scholarship Sponsor" level
                        </li>
                        <li>
                          Add a Opportunity Scholarship Donation to your{" "}
                          <a
                            href="https://ti.to/jsconf-hawaii/2020/en"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ticket purchase
                          </a>{" "}
                        </li>
                        <li>
                          Consider asking your company to{" "}
                          <a
                            href="https://www.jsconfhi.com/sponsors/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            sponsor JSConf Hawai'i
                          </a>
                        </li>
                        <li>
                          Spread the word about Opportunity Scholarships to
                          those who could use it!
                        </li>
                      </ul>
                      <br />
                      <p>
                        <a
                          href="https://twitter.com/intent/tweet?text=Friends%2C+opportunity+scholarships+are+open+for+%40JSConfHI%21+They%27re+offering+a+free+ticket%2C+flight%2C+and+hotel+stay.+It%27s+a+quick+and+easy+application+process+so+please+sign+up+if+you%27re+eligible%21&url=https%3A%2F%2Fwww.jsconfhi.com%2Fscholarships%2F&related=JSConfHI"
                          class="button-primary button-tweet"
                        >
                          <FaTwitter /> Share the Scholarship
                        </a>{" "}
                      </p>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        <Footer />
    </Layout>
  );
};

export default Scholarship;
