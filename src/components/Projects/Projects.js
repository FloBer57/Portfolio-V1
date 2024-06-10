import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import baldflix from "../../Assets/Projects/baldflix.png";
import quackers from "../../Assets/Projects/quackers.png";
import yunohost from "../../Assets/Projects/yunohost.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baldflix}
              isBlog={false}
              title="Baldflix"
              description="Premier projet, initié par la volonté de faire un site s'inspirant de Netflix en Html, Css, Php."
              ghLink="https://github.com/FloBer57/baldflix"
              demoLink="https://baldflix.florentbernar.fr/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quackers}
              isBlog={false}
              title="Quackers"
              description="Projet fil rouge de mon titre Concepteur Developpeur D'application, application de chat Pro en c# et React. La création de compte ce fait par l'administrateur."
              ghLink="https://quackers.florentbernar.fr"
              demoLink="https://quackers.florentbernar.fr/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yunohost}
              isBlog={false}
              title="Quackers"
              description="Utilisation d'un système d'auto hébergement afin de faciliter le déploiement."
              demoLink="https://florentbernar.fr/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
