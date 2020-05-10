import React from 'react';
import './header.css';
import { Container, Row, Col } from 'react-bootstrap';
import './header.css';
import avatarImg from './avatar.png';
import { Button } from 'react-bootstrap';

const Header = () => (
  <Container id='header'>
    <Row className='header-row'>
      <Col sm={3}>
        <img src={avatarImg} alt="avatar" />
      </Col>
      <Col sm={8} className='right-header'>
        <p>Hi. I'm</p>
        <h1>Mohamed Ibrahim.</h1>
        <h3>I'm a Front end developer who loves to build websites.</h3>
        <Button className='mt-2 mb-2' variant="outline-primary">See Projects</Button>{' '}
      </Col>
      
    </Row>
  </Container>
)

export default Header;
