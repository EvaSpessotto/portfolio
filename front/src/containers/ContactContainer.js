import React, { Component } from 'react';
import ContactLinks from '../components/Contact/ContactLinks';
import ContactForm from '../components/Contact/ContactForm';
import { FadeDownDiv } from '../data/styledComponents';
import { connect } from 'react-redux';
import { formChangeField } from '../actions'
import axios from 'axios';


class ContactContainer extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.props.formChangeField(name, value)
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.props.form
    console.log(this.props.form)
    const form = await axios.post('/api/form', {
      name, email, subject, message
    })
  }

  render() {
    return (
      <div>
        <FadeDownDiv>
          <ContactLinks />
        </FadeDownDiv>

        <FadeDownDiv>
          <ContactForm onChange={this.onChange} handleSubmit={this.handleSubmit} />
        </FadeDownDiv>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  form: state.form
})

const mapDispatchToProps = {
  formChangeField,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);