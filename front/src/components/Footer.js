import React from 'react';
import '../style/footer.scss';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <Container id="footer" className="mt-5" fluid>
      <Row>
        <Col className="text-center mb-3 mt-4">
          <a href=""><i className="fab fa-github-square fa-2x"></i></a>
          <a href=""><i className="fab fa-behance-square fa-2x mx-5"></i></a>
          <a href=""><i className="fab fa-linkedin fa-2x"></i></a>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer;