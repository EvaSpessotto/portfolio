import React, { Component } from 'react';
import '../../style/projectsList.scss';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import WOW from "wow.js/dist/wow.js";

class HomeProjectsList extends Component {

  componentDidMount() {
    new WOW().init();
  }

  render() {
    return (
      <Container id="projects-list">
        <Row>
          <Col lg="4" md="6" sm="12" className="d-flex justify-content-center wow fadeInUp">
            <Link to="/project">
                <img src="https://via.placeholder.com/300" className="mb-5 img-fluid rounded-circle wow fadeInUp" alt="" />
            </Link>
          </Col>
          <Col lg="4" md="6" sm="12" className="d-flex justify-content-center">
            <Link to="/project">
                <img src="https://via.placeholder.com/300" className="mb-5 img-fluid rounded-circle wow fadeInUp" alt="" />
            </Link>
          </Col>
          <Col lg="4" md="6" sm="12" className="d-flex justify-content-center wow fadeInUp">
            <Link to="/project">
                <img src="https://via.placeholder.com/300" className="mb-5 img-fluid rounded-circle wow fadeInUp " alt="" />
            </Link>
          </Col>
          <Col lg="4" md="6" sm="12" className="d-flex justify-content-center wow fadeInUp">
            <Link to="/project">
                <img src="https://via.placeholder.com/300" className="mb-5 img-fluid rounded-circle" alt="" />
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default HomeProjectsList; 