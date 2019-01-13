import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../style/notFound.scss';
import Draggable from 'react-draggable';

class NotFound extends Component {
  render() {
    
    return (
      
      <Container id="not-found">
      
        <Row className="text-center" style={{marginTop: "150px"}}>
          <Col>
            <h1>404</h1>
            <h2>Désolée, la page que vous cherchez n'existe pas !</h2>
            <h4>Néanmoins vous pouvez vous amuser avec les cercles ci-dessous :)</h4>
          </Col>
        </Row>
        <Container style={{width:"50%"}}>
          <Row >
            <Col lg="4">
              <Draggable>
                <div className="circle red"></div>
              </Draggable>
            </Col>
            <Col lg="4">
              <Draggable>
              <div className="circle blue"></div>
              </Draggable>
            </Col>
            <Col lg="4">
              <div className="circle yellow"></div>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <div className="circle blue"></div>
            </Col>
            <Col lg="4">
              <div className="circle yellow"></div>
            </Col>
            <Col lg="4">
              <div className="circle red"></div>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <div className="circle yellow"></div>
            </Col >
            <Col lg="4">
              <div className="circle red"></div>
            </Col>
            <Col lg="4">
              <div className="circle blue"></div>
            </Col>
          </Row>
        </Container>
        
      </Container>
    );
  }
}

export default NotFound;