import React, { Component } from 'react';
import ContactLinks from '../components/Contact/ContactLinks';
import ContactForm from '../components/Contact/ContactForm';
import { FadeDownDiv } from '../data/styledComponents';
import { connect } from 'react-redux';
import { formChangeField, formSubmit } from '../actions'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/toast.scss';


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
    .then(() => {
      toast("Message envoyé !", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        draggable: true
      });
    })
    .catch(() => {toast.error("Erreur lors de l'envoi de votre message :(", {
        position: toast.POSITION.TOP_CENTER
      })
    });
    const { formSubmit } = this.props;
    formSubmit()
  }

  render() {
    return (
      <div>
        <FadeDownDiv>
          <ContactLinks />
        </FadeDownDiv>

        <FadeDownDiv>
          <ContactForm onChange={this.onChange} handleSubmit={this.handleSubmit} form={this.props.form} />
          <ToastContainer hideProgressBar className="text-center back-toast" />
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
  formSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);