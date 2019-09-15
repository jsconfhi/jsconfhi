import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import AlohaSVG from "../img/aloha.svg";

const IndexPage = () => (
  <Layout>
    <Header />
    <div id="content">
      <AlohaSVG />
    </div>
  </Layout>
);

export default IndexPage;
