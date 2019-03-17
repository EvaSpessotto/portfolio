import React from 'react';
import '../style/footer.scss';
import { Container, Row, Col } from 'reactstrap';
import socialLinks from '../data/socialLinks';

const Footer = () => {
  return (
    <Container id="footer" fluid>
      <Row className="d-flex justify-content-center">
        <Col lg="4">
          <div className="line"></div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center my-3">
          {
            socialLinks.map((link, key) => {
              return(
              <a href={link.link} key={key} target="_blank" rel="noopener noreferrer">
                <span className={`${link.class} mx-3`}>{link.name}</span>
              </a>
              )
            })
          }
        </Col>
      </Row>
			<Row >
				<Col className="text-center">
					<p className="small-text">{`Tous droits réservés © ${new Date().getFullYear()}`} | Fait avec <i className="fas fa-heart" /> par Eva Spessotto</p>
				</Col>
			</Row>
    </Container>
  )
}

export default Footer;