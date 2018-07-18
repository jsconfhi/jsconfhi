import Button from "../components/Button";
import InfoBlock, {
  InfoBlockH2,
  InfoBlockH3
} from "../components/LargeInfoBlock";
import Columns, { Column } from "../components/Columns";
import Hero from "../components/Hero";
import HeroContentLabel from "../components/Hero/contentLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Layout from "../components/layout";
import Profile from "../components/Profile";
import styled from "styled-components";
import kellyAvatar from "../img/kng.jpg";
import jonAvatar from "../img/jkup.jpeg";
import jadeAvatar from "../img/jade.jpg";
import charlieAvatar from "../img/charlie.jpeg";
import tracyAvatar from "../img/tracy.jpg";
import mylesAvatar from "../img/myles.jpg";
import julesAvatar from "../img/jules.jpg";
import patrickAvatar from "../img/patrick.jpg";
import jasonAvatar from "../img/jason.jpg";
import jamieAvatar from "../img/jamie.png";
import theme from "../theme";

const Profiles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${theme.spaces.large};
`;
const H3 = styled.h3`
  font-weight: bold;
  text-align: center;
`;
const Centered = styled.div`
  text-align: center;
`;

const ReportOptions = styled.ul`
  display: inline-block;
  margin: 0 auto;
  text-align: left;
`;

const Li = styled.li`
  list-style-type: none;
`;

const FAIcon = styled(FontAwesomeIcon)`
  width: 1.3em !important;
`;

const Organizers = () => (
  <Layout>
    <Hero navTitle="About">
      <HeroContentLabel id="organizers">Organizers</HeroContentLabel>
      <Profiles>
        <Profile
          description="Web Eng @Twitter. Lucky to work with an incredible team to try and create the web's best PWA. Photography, aviation, gaming, and comedy on the side!"
          name="Charlie Croom"
          twitter="CharlieCroom"
          email="charlie@jsconfhi.com"
          image={charlieAvatar}
        />
        <Profile
          description="Aussie living in San Francisco. Wifey of @csmcgrath. Software engineer @twitter 👩‍💻"
          name="Jade Loyzaga"
          twitter="jadeloyzaga"
          email="jade@jsconfhi.com"
          image={jadeAvatar}
        />
        <Profile
          description="UX/UI Designer currently working in Honolulu with DevLeague. Previously with Microsoft/Xbox and Avalara."
          name="Jamie Frady"
          email="jamie@jsconfhi.com"
          twitter="UxHalliday"
          image={jamieAvatar}
        />
        <Profile
          description="Life long learner, doer of things. Current doings: #javascript, #cybersecurity, #devsecops, #aws, #python. Co-founder of @sudokrew and @devleaguehawaii."
          name="Jason Sewell"
          email="jason@jsconfhi.com"
          twitter="sewell_jason"
          image={jasonAvatar}
        />
        <Profile
          description="JavaScript @Adobe; previously @brave and @twitter."
          email="jon@jsconfhi.com"
          name="Jon Kuperman"
          twitter="jkup"
          image={jonAvatar}
        />
        <Profile
          description="Web developer @twitter. Co-organizer of @wafflejs, founded @wscsf"
          email="kelly@jsconfhi.com"
          name="Kelly King"
          twitter="kng"
          image={kellyAvatar}
        />
        <Profile
          description="Artist, musician, developer, and maker / @nodejs TSC Director / developer advocate for @googlecloud / Opinions are potentially wrong, but definitely my own."
          name="Myles Borins"
          twitter="MylesBorins"
          email="myles@jsconfhi.com"
          image={mylesAvatar}
        />
        <Profile
          description="OSS diplomat | @nodejs + JS | Community behavior specialist | Director Fighting tiny revolutions. Inciting confidence one convo at a time. @SamsungNEXT"
          name="Tracy Hinds"
          twitter="hackygolucky"
          email="tracy@jsconfhi.com"
          image={tracyAvatar}
        />
      </Profiles>
    </Hero>
    <Columns title="Values">
      <Column>
        <H3>Community</H3>
        <p>
          We hope to create an environment that encourages new connections and
          invigorates old ones, where individuals can come together to discuss
          JavaScript as a technology and grow it as a community.
        </p>
      </Column>
      <Column>
        <H3>Diversity</H3>
        <p>
          Our mission is to provide a space that is welcoming and inclusive of
          all identities and backgrounds, to support under-represented
          communities, and bring together all the supporters of the JavaScript
          community.
        </p>
      </Column>
      <Column>
        <H3>Fun</H3>
        <p>
          We don’t take ourselves too seriously. We believe a fun and authentic
          atmosphere is the most reflective of our community and our passion. It
          is our hope that our lively and honest nature shines through.
        </p>
      </Column>
    </Columns>
    <InfoBlock id="coc" title="Code of Conduct">
      <InfoBlockH2>Purpose</InfoBlockH2>
      <p>
        JSConf Hawaiʻi is dedicated to providing a harassment-free conference
        experience for everyone, regardless of gender, gender identity and
        expression, sexual orientation, disability, physical appearance, body
        size, race, age, religion or lack thereof. We do not tolerate harassment
        of conference participants in any form. Sexual language and imagery is
        not appropriate for any conference venue, including talks. Conference
        participants violating these rules may be sanctioned or expelled from
        the conference without a refund at the discretion of the conference
        organisers.
      </p>

      <InfoBlockH2>Anti-Harassment</InfoBlockH2>
      <p>
        Harassment includes, but is not limited to:
        <ul>
          <li>
            Verbal comments that reinforce social structures of domination
            related to gender, gender identity and expression, sexual
            orientation, disability, physical appearance, body size, race, age,
            religion
          </li>
          <li>Sexual images in public spaces</li>
          <li>Deliberate intimidation, stalking, or following</li>
          <li>Harassing photography or recording</li>
          <li>Sustained disruption of talks or other events</li>
          <li>Inappropriate physical contact</li>
          <li>Invasion of personal space</li>
          <li>Unwelcome sexual attention</li>
          <li>Advocating for, or encouraging, any of the above behaviour</li>
        </ul>
      </p>

      <InfoBlockH2>Enforcement</InfoBlockH2>
      <p>
        Participants asked to stop any harassing behavior are expected to comply
        immediately.
      </p>

      <p>
        If a participant engages in harassing behaviour, event organisers retain
        the right to take any actions to keep the event a welcoming environment
        for all participants. This includes warning the offender or expulsion
        from the conference with no refund.
      </p>

      <p>
        Event organisers may take action to address anything designed to, or
        with the clear impact of, disrupting the event or making the environment
        hostile for any participants. We expect participants to follow these
        rules at all event venues and event-related social activities. We think
        people should follow these rules outside event activities too!
      </p>

      <InfoBlockH2>Reporting</InfoBlockH2>
      <p>
        If someone makes you or anyone else feel unsafe or unwelcome, please
        report it as soon as possible. Conference staff can be identified by
        t-shirts. Harassment and other Code of Conduct violations reduce the
        value of our event for everyone. We want you to be happy at our event.
        People like you make our event a better place. You can make a report
        either personally or anonymously.
      </p>

      <InfoBlockH3>Anonymous report</InfoBlockH3>
      <p>
        Closer to the event, we will have an anonymous form available here. We
        can’t follow up an anonymous report with you directly, but we will fully
        investigate it and take whatever action is necessary to prevent a
        recurrence.
      </p>

      <InfoBlockH3>Personal report</InfoBlockH3>
      <p>You can make a personal report by:</p>
      <ul>
        <li>
          Contacting a staff member, identified by STAFF badges, buttons, or
          shirts.
        </li>
        <li>
          Emailing us:{" "}
          <a href="mailto:report@jsconfhi.com">report@jsconfhi.com</a>.
        </li>
        <li>
          Calling us: We’ll publish a phone number that is staffed during main
          conference hours.
        </li>
      </ul>
      <p>
        When taking a personal report, our staff will ensure you are safe and
        cannot be overheard. They may involve other event staff to ensure your
        report is managed properly. Once safe, we’ll ask you to tell us about
        what happened. This can be upsetting, but we’ll handle it as
        respectfully as possible, and you can bring someone to support you. You
        won’t be asked to confront anyone and we won’t tell anyone who you are.
      </p>

      <p>
        Our team will be happy to help you contact hotel/venue security, local
        law enforcement, local support services, provide escorts, or otherwise
        assist you to feel safe for the duration of the event. We value your
        attendance.
      </p>

      <InfoBlockH2>Photo policy</InfoBlockH2>
      <p>
        We will have colored lanyards for attendees to indicate their comfort
        level with being photographed:
      </p>
      <ul>
        <li>Black: ask beforehand</li>
        <li>Green: fine to photograph</li>
        <li>Red: do not photograph</li>
      </ul>
      <p>
        In case of any doubt, please ask before taking photographs of attendees,
        speakers or staff.
      </p>

      <InfoBlockH2>Inclusive language</InfoBlockH2>
      <p>
        In our commitment to a harassment-free and inclusive environment we
        strongly believe it’s important to pay attention to harmful language
        patterns.
      </p>

      <InfoBlockH3>Ableism</InfoBlockH3>
      <p>
        Words like “crazy”, “dumb”, “insane” or “lame” are examples of ableist
        language, devaluating people who have physical or mental disabilities.
        Its appearance often stems not from any intentional desire to offend,
        but from our innate sense of what it means to be normal. These words can
        be avoided by using more fitting, clearer descriptions of what we want
        to communicate.
      </p>

      <p>
        To find out more about ableism and replacement terms please read{" "}
        <a
          href="https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          this guide
        </a>.
      </p>

      <InfoBlockH3>Sexism</InfoBlockH3>
      <p>
        Using gendered terms like “dude” or “guys” to address a mixed-gendered
        group of people contributes to furthering exclusion of underrepresented
        individuals. We strongly advise avoiding gendered pronouns as well as
        gendered terms.
      </p>

      <p>
        For more information please familiarise yourself with{" "}
        <a
          href="http://geekfeminism.wikia.com/wiki/Nonsexist_language"
          target="_blank"
          rel="noopener noreferrer"
        >
          Geek Feminism wiki guide
        </a>.
      </p>

      <InfoBlockH2>Attribution</InfoBlockH2>
      <p>
        This Code of Conduct was based on{" "}
        <a href="https://2018.jsconf.eu/">JS Conf EU</a>,{" "}
        <a href="http://jsconfau.com">CSSConf / JSConf AU</a>,{" "}
        <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">
          The Geek Feminism wiki
        </a>, the work of{" "}
        <a href="https://frameshiftconsulting.com/code-of-conduct-training/">
          Valerie Aurora
        </a>{" "}
        and{" "}
        <a href="http://confcodeofconduct.com/">Conference Code of Conduct</a>.
      </p>
    </InfoBlock>
    <Centered>
      <Columns
        backgroundColor={theme.colors.gray}
        color={theme.colors.text}
        title="Need to file a report?"
      >
        <Column>
          <H3>Anonymous report</H3>
          {/*<p>Use this form to file a code of conduct violation anonymously</p>*/}
          <Button color="dark">Coming soon</Button>
        </Column>
        <Column>
          <H3>Personal report</H3>
          <p>You can file a personal report using one of the below methods:</p>
          <ReportOptions>
            <Li>
              <FAIcon icon={faEnvelope} />{" "}
              <a href="mailto:report@jsconfhi.com">report@jsconfhi.com</a>
            </Li>
            <Li>
              <FAIcon icon={faUsers} /> Report to a STAFF member
            </Li>
            <Li>
              <FAIcon icon={faPhone} /> To be announced
            </Li>
          </ReportOptions>
        </Column>
      </Columns>
    </Centered>
  </Layout>
);

export default Organizers;
