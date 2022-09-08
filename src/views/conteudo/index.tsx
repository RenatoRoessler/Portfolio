import React from "react";
import { About } from "../about";
import { Contact } from "../contact";
import { Conhecimentos } from "../Conhecimentos";
import { Footer } from "../footer";
import { Header } from "../header";
import { Home } from "../home/Home";
import { SocialMedia } from "../SocialMedia";


export const Conteudo = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Conhecimentos />
      <Contact />
      <Footer />
      <SocialMedia />
    </>
  );
};
