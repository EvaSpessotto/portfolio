import React, { Component } from 'react';
import '../../style/homePres.scss';
import { Container, Row, Col } from 'reactstrap';

const HomePres = () => {
  return (
    <Container id="home-pres">
      <Row>
        <Col lg="8">
          <h1 id="home-message">Bonjour, je suis Eva ; développeuse web junior & graphiste</h1>
          <div className="line mt-3"></div>

          <Container className="animated-squares">
            <Row>
              <Col>
                <div className="black"></div>
              </Col>
              <Col>
                <div className="blue"></div>
              </Col>
              <Col>
                <div className="yellow"></div>
              </Col>
              <Col>
                <div className="red"></div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePres;