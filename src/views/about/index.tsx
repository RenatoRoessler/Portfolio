import { FaAward, FaReact } from "react-icons/fa";
import {
  AboutCards,
  AboutCardsArticle,
  AboutContainer,
  AboutMe,
  AboutMeImage,
  StyledButtonLetsTalk,
  StyledText,
} from "./styles";
import { VscFolderLibrary } from "react-icons/vsc";
import { Title } from "../../components/Title";

export const About = () => {
  return (
    <section id="about">
      {/* <h2>Sobre Mim</h2> */}
      {/* <Title texto1="01. " texto2="Sobre" /> */}
      <AboutContainer>
        <AboutMe>
          <AboutMeImage>
            <img src="./assets/geral/eu2.jpg" alt="About Image" />
          </AboutMeImage>
        </AboutMe>
        <div>
          
          <AboutCards>
            <AboutCardsArticle>
              <FaAward fontSize={24} />
              <h5>Experiência</h5>
              <small>7+ anos software developer</small>
            </AboutCardsArticle>
            <AboutCardsArticle>
              <FaReact fontSize={24} />
              <h5>Experiência</h5>
              <small>2+ anos Frontend</small>
            </AboutCardsArticle>
            <AboutCardsArticle>
              <VscFolderLibrary />
              <h5>Projetos</h5>
              <small>50+ Projetos Completos</small>
            </AboutCardsArticle>
          </AboutCards>
          <StyledText>Eu sou software developer com mais de 8 anos de experiência, já trabalhei em projetos para clínicas médicas, cartórios, sistema de gestão de processos e produtos e outros, organizado, apaixonado por aprender.</StyledText>
          <StyledButtonLetsTalk href="#contact" className="btn btn-primary">Vamos conversar</StyledButtonLetsTalk>
        </div>
      </AboutContainer>
     
    </section>
  );
};
