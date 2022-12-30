import React, { useEffect } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GettingStarted from "./components/GettingStarted";
import Hero from "./components/Hero";
import Management from "./components/Management";
import Navbar from "./components/Navbar";
import Testimony from "./components/Testimony";
import Trustee from "./components/Trustee";
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const Layout = () => {

  useEffect(() => {
    addResponseMessage('We hope you are having a great day!');
    addResponseMessage("Let's know how we can help you!");
  }, []);

  const handleNewUserMessage = (message) => {
    console.log(message)
  }

  const handleTogle = (status) => {
    console.log(status)
  }
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
      <Widget
      handleToggle={handleTogle}
        handleNewUserMessage={handleNewUserMessage}
        title="Hi there 👋"
          subtitle="How can we help?"
          titleAvatar="https://downloads.intercomcdn.com/i/o/295036/1d8cc465dc6706b4871d3a84/b0de2bbc4760cb231fee887335534526.png"
          profileAvatar="https://static.intercomassets.com/avatars/5204613/square_128/Tinu_headshot-1633445968.jpg"
      />
    </>
  );
};

export default Layout;
