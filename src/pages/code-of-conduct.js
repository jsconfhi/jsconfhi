import Layout from "../components/layout";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const CodeOfConduct = () => (
  <Layout>
    <Header />
    <main>
      <section className="content">
        <div className="grid">
          <div className="grid-full">
            <h1>Code of Conduct</h1>
            <div className="code-of-conduct">
              <h2>Purpose</h2>
              <p>
                JSConf Hawaii is dedicated to providing a harassment-free
                conference experience for everyone, regardless of gender, gender
                identity and expression, sexual orientation, disability,
                physical appearance, body size, race, age, religion or lack
                thereof. We do not tolerate harassment of conference
                participants in any form. Sexual language and imagery is not
                appropriate for any conference venue, including talks.
                Conference participants violating these rules may be sanctioned
                or expelled from the conference without a refund at the
                discretion of the conference organisers.
              </p>

              <h2>Anti-Harassment</h2>
              <span>
                Harassment includes, but is not limited to:
                <ul>
                  <li>
                    Verbal comments that reinforce social structures of
                    domination related to gender, gender identity and
                    expression, sexual orientation, disability, physical
                    appearance, body size, race, age, religion
                  </li>
                  <li>Sexual images in public spaces</li>
                  <li>Deliberate intimidation, stalking, or following</li>
                  <li>Harassing photography or recording</li>
                  <li>Sustained disruption of talks or other events</li>
                  <li>Inappropriate physical contact</li>
                  <li>Invasion of personal space</li>
                  <li>Unwelcome sexual attention</li>
                  <li>
                    Advocating for, or encouraging, any of the above behaviour
                  </li>
                </ul>
              </span>

              <h2>Enforcement</h2>
              <p>
                Participants asked to stop any harassing behavior are expected
                to comply immediately.
              </p>

              <p>
                If a participant engages in harassing behaviour, event
                organisers retain the right to take any actions to keep the
                event a welcoming environment for all participants. This
                includes warning the offender or expulsion from the conference
                with no refund.
              </p>

              <p>
                Event organisers may take action to address anything designed
                to, or with the clear impact of, disrupting the event or making
                the environment hostile for any participants. We expect
                participants to follow these rules at all event venues and
                event-related social activities. We think people should follow
                these rules outside event activities too!
              </p>

              <h2>Reporting</h2>
              <p>
                If someone makes you or anyone else feel unsafe or unwelcome,
                please report it as soon as possible. Conference staff can be
                identified by t-shirts. Harassment and other Code of Conduct
                violations reduce the value of our event for everyone. We want
                you to be happy at our event. People like you make our event a
                better place. You can make a report either personally or
                anonymously.
              </p>

              <h3>Anonymous report</h3>
              <p>
                Closer to the event, we will have an anonymous form available
                here. We can’t follow up an anonymous report with you directly,
                but we will fully investigate it and take whatever action is
                necessary to prevent a recurrence.
              </p>

              <h3>Personal report</h3>
              <p>You can make a personal report by:</p>
              <ul>
                <li>
                  Contacting a staff member, identified by STAFF badges,
                  buttons, or shirts.
                </li>
                <li>
                  Emailing us:{" "}
                  <a href="mailto:report@jsconfhi.com">report@jsconfhi.com</a>.
                </li>
                <li>
                  Calling us: We’ll publish a phone number that is staffed
                  during main conference hours.
                </li>
              </ul>
              <p>
                When taking a personal report, our staff will ensure you are
                safe and cannot be overheard. They may involve other event staff
                to ensure your report is managed properly. Once safe, we’ll ask
                you to tell us about what happened. This can be upsetting, but
                we’ll handle it as respectfully as possible, and you can bring
                someone to support you. You won’t be asked to confront anyone
                and we won’t tell anyone who you are.
              </p>

              <p>
                Our team will be happy to help you contact hotel/venue security,
                local law enforcement, local support services, provide escorts,
                or otherwise assist you to feel safe for the duration of the
                event. We value your attendance.
              </p>

              <h2>Photo policy</h2>
              <p>
                We will have colored lanyards for attendees to indicate their
                comfort level with being photographed:
              </p>
              <ul>
                <li>Black: ask beforehand</li>
                <li>Green: fine to photograph</li>
                <li>Red: do not photograph</li>
              </ul>
              <p>
                In case of any doubt, please ask before taking photographs of
                attendees, speakers or staff.
              </p>

              <h2>Inclusive language</h2>
              <p>
                In our commitment to a harassment-free and inclusive environment
                we strongly believe it’s important to pay attention to harmful
                language patterns.
              </p>

              <h3>Ableism</h3>
              <p>
                Words like “crazy”, “dumb”, “insane” or “lame” are examples of
                ableist language, devaluating people who have physical or mental
                disabilities. Its appearance often stems not from any
                intentional desire to offend, but from our innate sense of what
                it means to be normal. These words can be avoided by using more
                fitting, clearer descriptions of what we want to communicate.
              </p>

              <p>
                To find out more about ableism and replacement terms please read{" "}
                <a
                  href="https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this guide
                </a>
                .
              </p>

              <h3>Sexism</h3>
              <p>
                Using gendered terms like “dude” or “guys” to address a
                mixed-gendered group of people contributes to furthering
                exclusion of underrepresented individuals. We strongly advise
                avoiding gendered pronouns as well as gendered terms.
              </p>

              <p>
                For more information please familiarise yourself with{" "}
                <a
                  href="http://geekfeminism.wikia.com/wiki/Nonsexist_language"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Geek Feminism wiki guide
                </a>
                .
              </p>

              <h2>Attribution</h2>
              <p>
                This Code of Conduct was based on{" "}
                <a href="https://2018.jsconf.eu/">JS Conf EU</a>,{" "}
                <a href="http://jsconfau.com">CSSConf / JSConf AU</a>,{" "}
                <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">
                  The Geek Feminism wiki
                </a>
                , the work of{" "}
                <a href="https://frameshiftconsulting.com/code-of-conduct-training/">
                  Valerie Aurora
                </a>{" "}
                and{" "}
                <a href="http://confcodeofconduct.com/">
                  Conference Code of Conduct
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  </Layout>
);

export default CodeOfConduct;
