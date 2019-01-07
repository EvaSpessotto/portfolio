import React, { Component } from 'react';
import '../../style/HomePres.scss';
import { Container, Row, Col } from 'reactstrap';

const HomePres = () => {
  return (
    <Container id="home-pres" style={{background: 'red'}}>
      <Row>
        <Col>
          <h1 id="home-message">Bonjour, bienvenue sur mon Portfolio</h1>
        </Col>
      </Row>
      
    </Container>
  )
}

export default HomePres;