import Hero from "../components/Hero";
import React from "react";
import Layout from "../components/layout";
import Speakers from "../components/Speakers";

const SpeakersPage = () => (
  <Layout>
    <Hero navTitle="Speakers">
      <Speakers />
    </Hero>
  </Layout>
);

export default SpeakersPage;
