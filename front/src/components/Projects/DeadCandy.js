import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../style/project.scss";
import { Parallax } from "react-parallax";

const Project = ({ Title, Resume, Banner }) => {
  return (
    <div id="project">
      <Container className="m-0 header" fluid>
        <Row>
          <Col className="p-0 text-center">
            <Parallax bgImage={Banner && Banner.url} bgImageAlt="the cat" strength={500}>
              <div style={{ height: "600px" }} />
            </Parallax>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="presentation">
          <Col>
            <p>{Resume}</p>
          </Col>
        </Row>
        <Row className="all-devices mt-5">
          <Col>
            <img src="" className="img-fluid w-100" alt="" />
          </Col>
        </Row>
      </Container>

      <Container >
        <Row>
          <Col>
            <Container>
              <Row>
                <Col lg="4" className="mt-3">
                  <img src="" />
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <p></p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className="coloured-section" fluid>
        <Row>
          <Col lg="4" className="pt-5">
            <h2>Version mobile</h2>
            <div className="line" />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center" lg="12">
            <img src="" className="img-fluid p-5" alt="" />
          </Col>
        </Row>
      </Container>

      <Container className="project-links">
        <Row>
          <Col className="d-flex justify-content-center ">
            <h4 className="mr-3">Liens relatifs au projet: </h4>
            <a href="https://github.com">
              <i className="fab fa-github-square fa-3x mr-3" />
            </a>
            <a href="https://github.com">
              <i className="fas fa-link fa-3x" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
