import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import baldflix from "../../Assets/Projects/baldflix.png";
import quackers from "../../Assets/Projects/quackers.png";
import yunohost from "../../Assets/Projects/yunohost.png";
import hermes from "../../Assets/Projects/hermes.png";
import bellissimo from "../../Assets/Projects/bellissimo.png";
import yuku from "../../Assets/Projects/yuku.png";
import justinedoe from "../../Assets/Projects/justinedoe.png";
import strapi from "../../Assets/Projects/strapi.png"
import tometjerry from "../../Assets/Projects/tometjerry.png"
import express from "../../Assets/Projects/expressNodeJs.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes derniers <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici une selections de mes derniers gros projets.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={baldflix}
              isBlog={false}
              title="Baldflix"
              description="Premier projet, initié par la volonté de faire un site s'inspirant de Netflix en Html, Css, Php."
              ghLink="https://github.com/FloBer57/baldflix"
              demoLink="https://baldflix.florentbernar.fr/"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={quackers}
              isBlog={false}
              title="Quackers"
              description="Projet fil rouge de mon titre Concepteur Developpeur D'application, application de chat Pro en c# et React. La création de compte ce fait par l'administrateur."
              ghLink="https://quackers.florentbernar.fr"
              demoLink="https://quackers.florentbernar.fr/"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={yunohost}
              isBlog={false}
              title="Yunohost"
              description="Utilisation d'un système d'auto hébergement afin de faciliter le déploiement."
              demoLink="https://florentbernar.fr/"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={bellissimo}
              isBlog={false}
              title="Restaurant Bellissimo"
              description="Création d'un restaurant fictif Bellissimo en React avec TailWind"
              demoLink="https://bellissimo.anatix.fr"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={hermes}
              isBlog={false}
              title="Gym Hermes"
              description="Site d'un entraineur personnalisé fait en React avec nextJs"
              demoLink="https://hermes.anatix.fr"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={justinedoe}
              isBlog={false}
              title="Photographe Justine Doe"
              description="Front d'un site pour un photographe en React / VITE "
              demoLink="https://justinedoe.anatix.fr"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={strapi}
              isBlog={false}
              title="Strapi"
              description="Backend de justinedoe.anatix.fr utilisant Strapi"
              demoLink="https://strapi.florentbernar.fr"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={tometjerry}
              isBlog={false}
              title="Mariage de Tom et Jerry"
              description="Site d'un mariage fictif entre tom et jerry en SaSS"
              demoLink="https://tometjerry.anatix.fr"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={yuku}
              isBlog={false}
              title="Yuku / Fuku "
              description="Site d'un restaurant japonais fait en React"
              demoLink="https://yuku.anatix.fr"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={express}
              isBlog={false}
              title="Express et NodeJs"
              description="Utilisation de NodeJS ainsi que ExpressJS pour faire fonctionner un serveur de template de Mail"
              demoLink="https://express.florentbernar.fr"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
