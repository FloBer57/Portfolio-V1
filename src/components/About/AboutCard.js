import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à vous, je suis <span className="purple">Bernar Florent </span>
            de <span className="purple"> Metz, France.</span>
            <br />
            Je suis actuellement Stagiaire à Metz Numéric School et en Stage chez Véolia Cedilor.
            <br />
            J'ai avant tout cela était fonctionnaire, et j'ai fait une reconvertion professionnel dans un milieu qui me plaisait depuis petit.
            <br />
            <br />
            A part cela, voici mes hobbits : 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Les Jeux Vidéos
            </li>
            <li className="about-activity">
              <ImPointRight /> Découvrir des projets GitHub ( comme Pokérogue )
            </li>
            <li className="about-activity">
              <ImPointRight /> Collection de Cartes
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
