import React from "react";
import Hero from "./hero";
import Dashboard from "./dashboard";
import FooterCTA from "./footer-cta";
import Bento from "./bento";
import Card from "./card";
import Footer from "./footer";

const StartPage = () => {
  return (
    <>
      <Hero />
      <Dashboard />
      <Bento />
      <Card />
      <FooterCTA />
      <Footer />
    </>
  );
};

export default StartPage;
