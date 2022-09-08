import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { StyledFooterCopyright, StylesFooter, StylesFooterSocials, StylesUL } from "./styles";

export const Footer = () => {
  return (
    <StylesFooter>
      <a href="#" className="StylesFooter__logo">
        Renato Roessler
      </a>
      <StylesUL>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </StylesUL>

      <StylesFooterSocials>
        <a href="https://www.linkedin.com/in/renato-roessler-9b0b786b/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/RenatoRoessler">
          <FaGithub />
        </a>  
      </StylesFooterSocials>
      <StyledFooterCopyright>
        <small>&copy; Renato. all rights reserved.</small>
      </StyledFooterCopyright>
    </StylesFooter>
  );
};
