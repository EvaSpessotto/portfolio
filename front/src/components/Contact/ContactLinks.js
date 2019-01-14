import React from 'react';
import '../../style/contact.scss';
import { Container, Row, Col } from 'reactstrap';
import socialLinks from '../../data/socialLinks';

const ContactLinks = () => {
  return (
    <Container id="contact-links">
      <Row >
        <Col lg="6" className="offset-lg-3">
          <h2>Retrouvez-moi sur les réseaux...</h2>
          <div className="line"></div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="offset-lg-3">
          {
            socialLinks.map((socialLink, key) => {
              const { link, icon } = socialLink;
              return(
               <a href={link} target="_blank" rel="noopener noreferrer">
                <i className={`${icon} ${socialLink.class} fa-3x mr-3`} key={key}></i>
              </a>
              )
            })
          }
        </Col>
      </Row>
      
    </Container>
  );
}

export default ContactLinks;