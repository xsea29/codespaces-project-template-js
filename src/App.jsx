/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import UpcomingProjects from "./Components/UpcomingProjects";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Sagar Kumar",
  title: "Frontend Developer",
  email: "kumarsagar2977@gmail.com",
  gitHub: "github.com/xsea29",
  instagram: "@xsea_k",
  linkedIn: "skumar29",
  medium: "",
  twitter: "@JustSagarK",
  youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="main">
      <Header scrollToSection={scrollToSection} />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <UpcomingProjects />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
