import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

const Sponsors = () => (
  <Layout>
    <main className="page-sponsors">
      <Header />
      <section className="content">
        <div className="grid">
          <div className="grid-full">
            <h1>Sponsor JSConf Hawaiʻi</h1>
            <div className="sponsor">
              <p>Become a partner of JSConf Hawaiʻi!</p>

              <p>
                With over 400 developers from around the world attending, and
                hundreds more following along at home, sponsoring the conference
                is one of the best ways to connect with JavaScript developers.
              </p>

              <p>
                There are a variety of sponsorship packages available for small
                and large companies alike! From setting up a developer lounge
                on-site, to hosting a meal, to reaching our eager Twitter
                audience, to being recognized as one of our "Diversity Sponsors"
                who help bring attendees to the conference, there's a huge range
                of benefits to take advantage of, and not all of them require
                you to attend in-person.
              </p>

              <p>
                <a
                  className="button-primary"
                  href="/JS-Conf-Hawaii-2020-Sponsorship-Info.pdf"
                >
                  Download Prospectus
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  </Layout>
);

export default Sponsors;
