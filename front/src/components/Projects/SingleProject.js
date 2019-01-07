import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

const SingleProject = () => {
  return (
    <div>
      <Container className="m-0 " fluid>
        <Row>
          <Col>
            <img  src="https://picsum.photos/1800/600" className="img-fluid w-100" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SingleProject;