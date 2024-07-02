/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import PropTypes from "prop-types";

const Header = ({ scrollToSection }) => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home" onClick={(e) => scrollToSection(e, "home")}>Home</a>
      <a href="#about" onClick={(e) => scrollToSection(e, "about")}>About</a>
      <a href="#portfolio" onClick={(e) => scrollToSection(e, "portfolio")}>Portfolio</a>
      <a href="#upcoming-projects" onClick={(e) => scrollToSection(e, "upcoming-projects")}>Upcoming Projects</a>
      <a href="#footer" onClick={(e) => scrollToSection(e, "footer")}>Contact</a>
    </div>
  );
};

Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default Header;
