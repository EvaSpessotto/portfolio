import React from 'react';
import '../style/footer.scss';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <Container id="footer" className="mt-5" fluid>
      <Row className="d-flex justify-content-center">
        <Col lg="4">
          <div className="line"></div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center my-3">
          <a href="https://github.com/EvaSpessotto" target="_blank" rel="noopener noreferrer">
            <span className="github">Github</span>
          </a>
          <a href="https://www.behance.net/evaspessotto" target="_blank" rel="noopener noreferrer">
            <span className="mx-5 behance">Behance</span>
          </a>
          <a href="https://www.linkedin.com/in/eva-spessotto/" target="_blank" rel="noopener noreferrer">
            <span className="linkedin">Linkedin</span>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer;