import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../style/project.scss';
import { Parallax } from 'react-parallax';

const DeadCandy = ({ project_desc, images }) => {
  return (
    <div id="deadcandy">
      <Container className="m-0 header" fluid>
        <Row>
          <Col className="p-0 text-center">
              <Parallax
                bgImage={images && images[1].path}
                bgImageAlt="the cat"
                strength={500}
              >
                <div style={{ height: '600px' }} />
            </Parallax>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="presentation d-flex justify-content-center">
          <Col lg="8" sm="12">
            <p>{project_desc}</p>
          </Col>
        </Row>
        <Row className="all-devices mt-5">
          <Col>
            <img src={images && images[2].path} className="img-fluid w-100"  alt="" />
          </Col>
        </Row>
      </Container>

      <Container className="coloured-section p-5" fluid>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col lg="4" className="mt-3">
                  <h2>Version mobile</h2>
                  <div className="line"></div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img  src={images && images[3].path} className="img-fluid w-100 p-5 mt-5" alt="" />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className="project-links">
        <Row>
          <Col className="d-flex justify-content-center">
            <a href="https://github.com" rel="noopener noreferrer">
              <h2>
                Repo
                <i className="fab fa-github-square ml-3" />
              </h2>
            </a>
          </Col>
          <Col className="d-flex justify-content-center">
            <a href="https://github.com" rel="noopener noreferrer">
              <h2>
                Demo
                <i className="fas fa-link ml-3" />
              </h2>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DeadCandy;