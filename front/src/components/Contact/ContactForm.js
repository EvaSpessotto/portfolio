import React from 'react';
import '../../style/contact.scss';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ContactForm = () => {
  return (
    <Container id="contact-form">
      <Row>
        <Col lg="6" className="offset-lg-3">
          <h2>...ou laissez-moi un message !</h2>
          <div className="line"></div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg="6"  className="offset-lg-3">
          <Form>
            <FormGroup className="name blue mt-4">
              <Label for="name">nom</Label>
              <Input 
                type="text" 
                name="name" 
                className="border-top-0 border-right-0 border-left-0 rounded-0 p-0"
              />
            </FormGroup>

            <FormGroup className="red">
              <Label for="email" >email</Label>
              <Input 
                type="email" 
                name="email" 
                className="border-top-0 border-right-0 border-left-0 rounded-0 p-0"
              />
            </FormGroup>
     
            <FormGroup className="yellow">
              <Label for="subject" >sujet ?</Label>
              <Input 
                type="text" 
                name="subject" 
                className="border-top-0 border-right-0 border-left-0 rounded-0 p-0"
              />
            </FormGroup>

            <FormGroup className="blue">
              <Label for="message" >message</Label>
              <Input 
                type="textarea" 
                name="message" 
                rows="8"
                className="border-top-0 border-right-0 border-left-0 rounded-0 p-0"
              />
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row className="mt-5">
          <Col className="d-flex justify-content-center">
            <button className="submit-btn">Envoyer</button>
          </Col>
        </Row>
    </Container>
  );
}

export default ContactForm;