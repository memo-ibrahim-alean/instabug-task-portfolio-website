import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import './contact.css';

class Contact extends Component {
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
                    <Form.Control size="lg" type="text" placeholder="Enter name" required />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control size="lg" type="email" placeholder="Email" required />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control size="lg" as="textarea" rows="3" />
                  </Form.Group>
                  <Button className='btn-lg btn-block' variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Contact;

