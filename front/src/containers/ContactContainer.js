import React, { Component } from 'react';
import ContactLinks from '../components/Contact/ContactLinks';
import ContactForm from '../components/Contact/ContactForm';
import { FadeDownDiv } from '../data/styledComponents';


class ContactContainer extends Component {
  render() {
    return (
      <div>
        <FadeDownDiv>
          <ContactLinks />
        </FadeDownDiv>

        <FadeDownDiv>
          <ContactForm />
        </FadeDownDiv>
      </div>
    );
  }
}

export default ContactContainer;