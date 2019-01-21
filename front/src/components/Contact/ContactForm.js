import React from 'react';
import '../../style/contact.scss';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ContactForm = ({ onChange, handleSubmit }) => {
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
          <Form onSubmit={handleSubmit} >
            <FormGroup className="name blue mt-4">
              <Label for="name">nom</Label>
              <Input 
                type="text" 
                name="name" 
                onChange={onChange}
                className="border-top-0 border-right-0 border-left-0 rounded-0 p-0"
              />
            </FormGroup>

            <FormGroup className="red">
              <Label for="email" >email</Label>
              <Input 
                type="email" 
                name="email" 
                onChange={onChange}
                className="border-top-0 border-right-0 border-left-0 rounded-0 p-0"
              />
            </FormGroup>
     
            <FormGroup className="yellow">
              <Label for="subject" >sujet ?</Label>
              <Input 
                type="text" 
                name="subject" 
                onChange={onChange}
                className="border-top-0 border-right-0 border-left-0 rounded-0 p-0"
              />
            </FormGroup>

            <FormGroup className="blue">
              <Label for="message" >message</Label>
              <Input 
                type="textarea" 
                name="message" 
                onChange={onChange}
                rows="8"
                className="border-top-0 border-right-0 border-left-0 rounded-0 p-0"
              />
            </FormGroup>
            <button className="submit-btn mt-5" type="submit">Envoyer</button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;