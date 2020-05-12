import React, { Component } from 'react';
import { Form, Button, Container, Row, Col, FormGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import './contact.css';
import emailjs from 'emailjs-com';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: 'Form Submission',
    message: '',
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    var template_params = {
      "user_email": email,
      "user_name": name,
      "subject": subject,
      "message": message
    }

    var service_id = "gmail";
    var template_id = "form";
    var user_Id = 'user_P9VbNXf2VXQXtb8oZ0YZA';
    emailjs.send(service_id, template_id, template_params, user_Id )
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
    this.resetForm()
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  render() {
    return (
      <div id='contactSection'>
        <div className='text-center'>
          <p className='text-muted'>Have a projects in mind?</p>
          <h2>Send me a message</h2>
          <Container>
            <Row>
              <Col sm={12}>
                <Form
                  onSubmit={this.handleSubmit.bind(this)}
                  className='contact-form'>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name='name'
                      size="lg"
                      type="text"
                      value={this.state.name}
                      onChange={this.handleChange.bind(this, 'name')}
                      placeholder="Enter name"
                      required />
                  </Form.Group>
                  <FormGroup controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name='email'
                      size="lg"
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange.bind(this, 'email')}
                      placeholder="Email"
                      required />
                  </FormGroup>
                  <FormGroup controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      name='message'
                      size="lg"
                      required
                      value={this.state.message}
                      onChange={this.handleChange.bind(this, 'message')}
                      as="textarea"
                      placeholder="Add Message"
                      rows="3" />
                  </FormGroup>
                  <Button
                    className='btn-lg btn-block'
                    variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col sm="12">
                <div>
                  <a href='https://github.com/mohamedibrahim1998'
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "gray" }}
                      size='3x'
                      className='mr-4'
                    />
                  </a>
                  <a href='https://www.linkedin.com/in/mohamedibrahim1998/'
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      style={{ color: "#0e76a8" }}
                      icon={faLinkedin}
                      size='3x' />
                  </a>
                </div>
                <p className='center mt-4 h5'>
                  Built with <span role="img" aria-label="Heart">❤️</span> by Mohamed Ibrahim
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Contact;

