import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ajay poly </span>
            from <span className="purple"> Kerala India</span>
            {/* <br />
            I am currently employed as a software developer at Juspay.
            <br /> */}
            I have completed BTech in Electronics and communication and
            Engineering from APJ Technical University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning New Skills
            </li>
            <li className="about-activity">
              <ImPointRight />
              Volunteering
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is the sum of small efforts repeated day in and day out!"{" "}
          </p>
          <footer className="blockquote-footer">Ajay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
