import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../style/project.scss';

const Project = () => {
  return (
    <div id="project">
      <Container className="m-0" fluid>
        <Row>
          <Col className="p-0">
            <img  src="https://via.placeholder.com/1600x600" className="img-fluid w-100" alt="" />
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row>
          <Col>
            <h1>Mon titre de projet</h1>
            <p>Incididunt Lorem ipsum esse irure incididunt tempor est culpa veniam non magna. Velit anim esse nostrud dolor voluptate amet nostrud nulla. Irure nulla sunt amet amet esse dolor. Ad ullamco exercitation in qui ipsum aliquip cillum amet qui velit eiusmod do pariatur dolore. Esse mollit elit est tempor veniam enim anim deserunt. Velit consequat anim cillum deserunt cillum aliqua consequat deserunt labore laborum qui. Sint id aliquip enim anim voluptate amet sunt adipisicing consequat nostrud id.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="https://via.placeholder.com/800x500" className="img-fluid w-100"  alt="" />
          </Col>
        </Row>
      </Container>

      <Container className="coloured-section my-5" fluid>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col lg="4" className="pt-5">
                  <h2>Night-mode</h2>
                  <div className="line"></div>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <img  src="https://via.placeholder.com/800x400" className="img-fluid p-5" alt="" />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row>
          <Col lg="4">
            <h2>Explore</h2>
            <div className="line"></div>
          </Col>
        </Row>
        <Row >
          <Col className="d-flex justify-content-center">
            <img  src="https://via.placeholder.com/800x1000" className="img-fluid p-5" alt="" />
          </Col>
        </Row>
      </Container>

       <Container className="coloured-section my-5" fluid>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col lg="4" className="pt-5">
                  <h2>Profile</h2>
                  <div className="line"></div>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <img  src="https://via.placeholder.com/800x400" className="img-fluid p-5" alt="" />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className="my-5 project-links">
        <Row>
          <Col className="d-flex justify-content-center ">
            <h4 className="mr-3">Liens relatifs au projet: </h4>
            <a href=""><i className="fab fa-github-square fa-2x mr-3"></i></a>
            <a href=""><i className="fas fa-link fa-2x"></i></a>
          </Col>
        </Row>
      </Container>

      
    </div>
  )
}

export default Project;