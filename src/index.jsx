import React from "react";
import { createRoot } from "react-dom/client";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Whyjoin from "./Whyjoin/Whyjoin";
import Jobcard from "./Jobcard/Jobcard";
import Webpage from "./Webpage/Webpage";
import Careerpathways from "./Careerpathways/Careerpathways";
import Training from "./Training/Training";
import Feedback from "./Feedback/Feedback";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Hero />
      <Webpage />
      <Whyjoin />
      <Careerpathways />
      <Training />
      <Feedback />
    </>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
