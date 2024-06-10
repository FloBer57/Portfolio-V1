import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Qui <span className="purple"> suis-je? </span>
            </h1>
            <p className="home-about-body">
              Actuellement Stagiaire à Metz Numeric School et en stage à Veolia
              Cedilor
              <br />
              <br /> Je passe un titre de Concepteur Développeur D'application
              <br />
              <br />
              Puis je serais 2 ans en alternance à Veolia Cedilor pour passer le
              titre de Mastère Management Ingénierie Infofrmatique &nbsp;
              <i></i>
              <br />
              <br />
              Passionné par le développement web et les systèmes réseau, j'ai
              acquis un
              <strong> Raspberry Pi 5</strong> pour m'entrainer au déploiement.
              Je travaille également avec React.js ce qui démontre mon
              engagement envers le développement frontend et backend utilisant
              des outils à la pointe de la technologie pour créer des
              expériences utilisateur interactives et performantes.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Trouvez moi sur : </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FloBer57"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
