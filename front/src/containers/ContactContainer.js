import React, { Component } from 'react';
import ContactLinks from '../components/Contact/ContactLinks';
import ContactForm from '../components/Contact/ContactForm';
import { FadeDownDiv } from '../data/styledComponents';
import { connect } from 'react-redux';
import { formChangeField } from '../actions'


class ContactContainer extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.props.formChangeField(name, value)
  }

  render() {
    return (
      <div>
        <FadeDownDiv>
          <ContactLinks />
        </FadeDownDiv>

        <FadeDownDiv>
          <ContactForm onChange={this.onChange} />
        </FadeDownDiv>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  form: state.newMessage
})

const mapDispatchToProps = {
  formChangeField,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);