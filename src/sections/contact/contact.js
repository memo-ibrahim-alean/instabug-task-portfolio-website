import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import './contact.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }
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
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name='name'
                      size="lg"
                      type="text"
                      placeholder="Enter name"
                      required />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name='email'
                      size="lg"
                      type="email"
                      placeholder="Email"
                      required />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      name='message'
                      size="lg"
                      as="textarea"
                      rows="3" />
                  </Form.Group>
                  <Button  className='btn-lg btn-block' variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col sm="12">
                <div>
                  <FontAwesomeIcon
                    icon={faGithubAlt}
                    style={{ color: "#333" }}
                    size='3x'
                    className='mr-4'
                  />
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

