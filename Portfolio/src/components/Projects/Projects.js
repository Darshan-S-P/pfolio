import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Solana Token Creator"
              description="Now u can crator solana Without code"
              ghLink="https://github.com/Darshan-S-P/Sols"
              demoLink="https://darshans-solana-token.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="license plate recognition"
              description="Using harscascade and pytesseract to recognize the license plate"
              ghLink="https://github.com/Darshan-S-P/plate"
              demoLink="http://darshansp.pythonanywhere.com/"              
            />
          </Col>

  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
