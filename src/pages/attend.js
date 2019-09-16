import Layout from "../components/layout";
import React from "react";
import Header from "../components/header";
import "../styles/attend.css";
import aloRoomImage from "../img/alo-room.jpg";

const Attend = () => (
  <Layout>
    <div className="content">
      <div className="grid">
        <div className="grid-full">
          <Header />
          <div className="info">
            <h1>Venue + Hotel Accommodations</h1>
            <p>
              The{" "}
              <a
                href="https://www.alohilaniresort.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alohilani Resort
              </a>{" "}
              is located on the southern end of Waikiki and will be our home for
              both the daily sessions and primary accomodations. It features 2
              restaurants, 2 outdoor pools, an oceanarium, and a fitness center!
            </p>
            <p>
              Attendees for the conference will recieve a special room rate,
              however, we have limited availability and you MUST use the link
              below to book and receive the special rate.
            </p>
            <ul>
              <li>$235 + tax (~25%) per night</li>
              <li>Discounted $15/night Resort Fee (normally $45)</li>
              <li>Includes a partial Ocean View room upgrade</li>
              <li>Rate available 3 days before and after event</li>
            </ul>
            <p>
              <a
                className="button-secondary"
                href="https://bit.ly/2K0Hi8q"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserve hotel
              </a>
            </p>
          </div>
          <div className="grid-half-second">
            <img
              width="100%"
              src={aloRoomImage}
              alt="Alohilani guest room with view of diamondhead"
            />
          </div>
          <div className="info">
            <h2 className="title">Program</h2>
            <div className="description grid">
              <div className="grid-full-about">
                <h4>What is it?</h4>
                <p>
                  JSConf Hawaiʻi is the newest in the family of JSConf events.
                  For our second year, we're planning to bring about 400 people
                  together for a three-day single track conference. Our goal is
                  that by the time you leave, you'll have seen some new ideas,
                  learned some more JavaScript, and made new friends to keep in
                  touch with.
                </p>
                <h4>Being at the conference</h4>
                <p>
                  The small, single-track nature of the conference means that
                  it's easy to figure out what to do! We'll have lots of time to
                  meet your fellow attendees and share ideas outside of the
                  sessions.
                </p>
                <h4>Schedule</h4>
                <p>
                  We won't have an exact schedule ready until after we've
                  finalized our speaker lineup. But for travel planning
                  purposes, a high level overview is included.
                </p>
                <p>
                  On Tuesday night, we'll have check-in and badge pickup in the
                  late-evening along with a casual meetup for you to meet your
                  fellow attendees as they arrive.
                </p>
                <p>
                  Don't forget to get some rest as each day will start around
                  9:00am. We plan on finishing around 5pm, with a few short
                  breaks in the morning and afternoon, along with a longer
                  hour-long break for lunch in the middle; plenty of time to hop
                  in the ocean if you are so inclined.
                </p>
                <p>
                  Wednesday evening, post-dinner, we'll have a party for all
                  attendees. We haven't finalized plans yet, so more info closer
                  to the date. We know many of you may be travelling with a
                  companion, and we are happy to announce the event will be open
                  to them as well.
                </p>
                <p>
                  Thursday is a "Gap day!" You'll have a choice to stay at the
                  resort for some continued learning opportunities, or venture
                  outside to join some group activities like snorkeling or
                  hiking. We are still finalizing the Gap day options, but
                  you'll have a chance to vote for your preferred activity when
                  you buy your ticket! We'll announce the final activities as
                  the conferences draws nearer.
                </p>
                <h4>Amenities</h4>
                <p>
                  You can read more about the resort further on, but the
                  location is fairly central to the tourist area of Honolulu,
                  meaning there's a beach across the street, and a Hard Rock
                  Cafe just a few blocks away. Anyone travelling with you will
                  have tons of options available to them nearby from surf
                  lessons, to shopping, to spas.
                </p>
                <p>
                  If you are staying at the venue using our discounted rates,
                  you room will be just an elevator ride away should you need to
                  step out and take a break. In addition, we'll have the theater
                  area sectioned off from our "lounge" area, so if you need
                  snacks, coffee, or just want to meet up with a friend, we'll
                  have space for that.
                </p>
                <p>
                  There's still a lot of specifics to figure out, but live
                  captioning of the sessions will be available. And on request,
                  we'll have childcare available either on-site or nearby for
                  children.
                </p>
              </div>
            </div>
          </div>
          <div className="info">
            <h2 className="title">Tickets</h2>
            <div className="description grid">
              <div className="grid-full-about">
                <tito-widget event="jsconf-hawaii/2020" />
              </div>
            </div>
            <div className="info">
              <h2 className="title">Scholarships</h2>
              <div className="description grid">
                <div className="grid-full-about">
                  <p>
                    We deeply believe in creating an inclusive and diverse
                    conference and want to make sure that everyone is able to
                    participate.
                  </p>
                  <p>
                    We will begin accepting applications in September from
                    diverse groups to attend for free, and for some, with hotel
                    and/or airfare included.
                  </p>
                  <p>
                    We also want to make sure that local students and others
                    residents are able to attend. We have two options, a reduced
                    price "Kama’aina" ticket, or scholarships available via our
                    diversity applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="info">
              <h2 className="title">Getting there</h2>
              <div className="description grid">
                <div className="grid-half-first">
                  <p>
                    Hawaiʻi is a chain of islands, so there's really only one
                    way to get there!
                  </p>
                  <h4>Honolulu International Airport</h4>
                  <p>
                    Hawaiʻi's primary airport is located on the west side of
                    Honolulu, and about a 20-30 minute drive to Waikiki where
                    the venue is located. With dozens of airlines and direct
                    flight destinations around 20 million people pass through
                    the airport annually. You should be able to find a flight
                    from almost any hub airport in the US, and several in Asia.
                  </p>
                  <p>
                    If you can't ride-share with some other attendees on your
                    flight, there's also public transit available from the
                    airport to the door of the hotel. The 19, 20, or 42 bus
                    lines all will get the job done, and run roughly every 15
                    minutes.
                  </p>
                  <p>
                    A multitude of rental car companies are also available at
                    the airport, as well as both Enterprise and Dollar having
                    offices in the conference hotel.
                  </p>
                  <h4>Parking</h4>
                  <p>
                    For attendees staying in the hotel overnight, parkings is:
                  </p>
                  <ul>
                    <li>$10/night for self park</li>
                    <li>$42/night for valet</li>
                  </ul>
                  <p>
                    For day-time only attendees, we have reserved a limited
                    number of free day-time parking passes. Please email us at
                    attend@jsconfhi.com to request a parking pass.
                  </p>
                  <h4>Getting around</h4>
                  <p>
                    The entire conference will take place in or around the hotel
                    and meeting room venue. The beach is just across the street
                    from our hotel. Our evening party may be a short walk away
                    in Waikiki, but if it's further than that we'll provide
                    shuttles. So plan to not need any transportation if you are
                    staying with us at the Alohilani
                  </p>
                  <p>
                    As there's so much to see around Hawaiʻi, it's worth noting
                    that if you choose to arrive early or stay later, there's
                    two rental car companies available on-premises, so you can
                    easily grab a car after or return yours before the
                    conference.
                  </p>
                  <p>
                    HNL Airport also has frequent flights and connections to
                    other islands that might be of interest, including Maui
                    which is extremely popular with visitors.
                  </p>
                </div>
                <div className="grid-half-second">
                  <iframe
                    title="Map"
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.91822328672!2d-157.8255601489821!3d21.274704384641925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79540ef8fb534149%3A0xc06f292ad796880!2s%E2%80%98Alohilani+Resort+Waikiki+Beach!5e0!3m2!1sen!2sus!4v1565879743525!5m2!1sen!2sus"
                    width="500"
                    height="400"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Attend;
