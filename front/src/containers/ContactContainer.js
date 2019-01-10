import React, { Component } from 'react';
import ContactLinks from '../components/Contact/ContactLinks';
import ContactForm from '../components/Contact/ContactForm';

class ContactContainer extends Component {
  render() {
    return (
      <div>
        <ContactLinks />
        <ContactForm />
      </div>
    );
  }
}

export default ContactContainer;