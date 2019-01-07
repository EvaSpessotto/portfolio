import React from 'react';
import '../../style/projectsList.scss';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
const HomeProjectsList = () => {
  return(
    <Container id="projects-list">
      <Row>
        <Col lg="4" md="6" sm="12" className="d-flex justify-content-center">
          <Link to="/project">
            <img src="https://picsum.photos/300/300" className="mb-5 img-fluid rounded-circle" alt="" />
          </Link>
        </Col>
        <Col lg="4" md="6" sm="12" className="d-flex justify-content-center">
          <Link to="/">
            <img src="https://picsum.photos/300/300" className="mb-5 img-fluid rounded-circle" alt="" />
          </Link>
        </Col><Col lg="4" md="6" sm="12" className="d-flex justify-content-center">
          <Link to="/">
            <img src="https://picsum.photos/300/300" className="mb-5 img-fluid rounded-circle" alt="" />
          </Link>
        </Col><Col lg="4" md="6" sm="12" className="d-flex justify-content-center">
          <Link to="/">
            <img src="https://picsum.photos/300/300" className="mb-5 img-fluid rounded-circle" alt="" />
          </Link>
        </Col><Col lg="4" md="6" sm="12" className="d-flex justify-content-center">
          <Link to="/">
            <img src="https://picsum.photos/300/300" className="mb-5 img-fluid rounded-circle" alt="" />
          </Link>
        </Col><Col lg="4" md="6" sm="12" className="d-flex justify-content-center">
          <Link to="/">
            <img src="https://picsum.photos/300/300" className="mb-5 img-fluid rounded-circle" alt="" />
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeProjectsList; 