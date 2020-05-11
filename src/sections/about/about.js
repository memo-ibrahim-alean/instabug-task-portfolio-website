import React from 'react';
import './about.css';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImg from './about.png';

const About = () => (
  <div id="aboutSection">
    <h2 className='text-center mb-5'>About Me</h2>
    <Container>
      <Row>
        <Col sm={6}>
          <p className='about-paragraph'>
            I am a very self-motivated person, always seeking challenges to tackle. I am constantly urged to try new technologies and excel at the ones I already know. I'd love to combine my passion for learning with my front-end development skills to continue building websites and web applications
            Strong familiarity with (at minimum) the following:
          </p>
          <ol>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ol>
        </Col>
        <Col sm={6}>
          <img
            className='about-img img-fluid'
            src={AboutImg}
            alt="mohamed ibrahim" />
        </Col>
      </Row>
    </Container>
  </div>
)


export default About;
