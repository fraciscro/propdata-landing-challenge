import React from "react";
import Hero from "./hero";
import Dashboard from "./dashboard";
import FooterCTA from "./footer-cta";
import Bento from "./bento";
import CardSection from "./card-section";
import Footer from "./footer";

const StartPage = () => {
  return (
    <>
      <Hero />
      <Dashboard />
      <Bento />
      <CardSection />
      <FooterCTA />
      <Footer />
    </>
  );
};

export default StartPage;
