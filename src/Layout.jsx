import React from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GettingStarted from "./components/GettingStarted";
import Hero from "./components/Hero";
import Management from "./components/Management";
import Navbar from "./components/Navbar";
import Testimony from "./components/Testimony";
import Trustee from "./components/Trustee";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Trustee />
      <Features />
      <Management />
      <Testimony />
      <GettingStarted />
      <Footer />
    </>
  );
};

export default Layout;
