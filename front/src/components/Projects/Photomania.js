import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../style/project.scss';
import { Parallax } from 'react-parallax';

const Project = ({ title, project_desc, images }) => {
	{
		console.log(images)
	}
	console.log(images && images[1].path)
  return (
    <div id="project">
      <Container className="m-0 header" fluid>
        <Row>
          <Col className="p-0 text-center">
              <Parallax
                bgImage={images && images[1].path}
                bgImageAlt="the cat"
                strength={500}
              >
                <div style={{ height: '600px' }} />
                {/* <h1 id="title" className="mb-5">{title}</h1> */}
            </Parallax>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="presentation">
          <Col>
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
                  <h2>Articles</h2>
                  <div className="line"></div>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <img src={images && images[4].path} className="img-fluid p-5 mt-5" alt="" />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className="multi-pages">
        <Row>
          <Col lg="4">
            <h2>Galerie</h2>
            <div className="line"></div>
          </Col>
        </Row>
        <Row >
          <Col className="d-flex justify-content-center" lg="12">
            <img src={images && images[3].path} className="img-fluid p-5" alt="" />
          </Col>
        </Row>
      </Container>

      <Container className="project-links">
        <Row>
          <Col className="d-flex justify-content-center ">
            <h4 className="mr-3">Liens relatifs au projet: </h4>
            <a href="https://github.com"><i className="fab fa-github-square fa-3x mr-3"></i></a>
            <a href="https://github.com"><i className="fas fa-link fa-3x"></i></a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Project;