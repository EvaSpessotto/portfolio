import React from 'react';
import '../../style/homePres.scss';
import { Container, Row, Col } from 'reactstrap';

const HomePres = () => {
  return (
    <Container id="home-pres">
      <Row>
        <Col lg="8" sm="8" xs="12">
          <h1 id="home-message">Bonjour, je suis Eva ; développeuse web junior & graphiste</h1>
          <div className="line mt-3"></div>
          <Container className="animated-squares">
            <Row>
              <Col lg="3" xs="3" className="m-0" >
                <div className="black m-0"></div>
              </Col>
              <Col lg="3" xs="3" className="m-0" >
                <div className="blue m-0"></div>
              </Col>
              <Col lg="3" xs="3" className="m-0" >
                <div className="yellow"></div>
              </Col>
              <Col lg="3" xs="3" className="m-0" >
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