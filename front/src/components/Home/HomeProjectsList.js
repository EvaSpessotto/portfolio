import React, { Component } from 'react';
import '../../style/projectsList.scss';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import WOW from 'wowjs';

class HomeProjectsList extends Component {
  componentDidMount() {
    new WOW.WOW({
        live: false
    }).init();
  }

  render() {

    return (
      <Container id="projects-list">
        <Row>
          {
            this.props.projects.map((project, key) => {
              const { Title, Content, Cover, id } = project;
              return(
                <Col lg="4" md="6" sm="12" className="d-flex justify-content-center" key={key}>
                  <Link to={`/project/${id}`}>
                    <img src={Cover.url} className="mb-5 img-fluid rounded-circle wow fadeInUp" alt={Title} />
                  </Link>
                </Col>
              )
            })
          }
  
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


const mapStateToProps = state => ({
  projects: state.projects.projects
});

export default connect(mapStateToProps)(HomeProjectsList);
