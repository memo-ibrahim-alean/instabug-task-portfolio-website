import React from 'react';
import './header.css';
import { Container, Row, Col } from 'react-bootstrap';
import './header.css';
import avatarImg from './avatar.png';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => (
  <Container id='header'>
    <Row className='header-row'>
      <Col sm={3}>
        <img src={avatarImg} alt="avatar" className='img-fluid' />
      </Col>
      <Col sm={8} className='right-header'>
        <p>Hi. I'm</p>
        <h1>Mohamed Ibrahim.</h1>
        <h3>I'm a Front end developer who loves to build websites.</h3>
        <Link
          to="/#projectSection"
          className='mt-2 mb-5 btn btn-outline-primary'>
          See Projects
        </Link>
      </Col>

    </Row>
  </Container>
)

export default Header;
