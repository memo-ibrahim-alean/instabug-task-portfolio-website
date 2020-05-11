import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MyReadsPhoto from './myreeds.png';
import { HashLink as Link } from 'react-router-hash-link';
import WouldYouRather from './WouldYouRather.png';
import monstersRolodex from './monstersRolodex.png';
import './projects';

class Projects extends Component {
  render() {
    return (
      <div>
        <h2 className='text-center mt-5 mb-5' id='projectSection'>Projects I Built</h2>
        <Container>
          <Row>
            <Col sm={4}>
              <Card>
                <Card.Img variant="top" src={MyReadsPhoto} className='card-img' />
                <Card.Body>
                  <Card.Title>My Reads project</Card.Title>
                  <Card.Text>
                    a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.
                  </Card.Text>
                  <Link to='/projects-details/#MyReads'
                    className="btn btn-outline-primary">
                    More Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <Card.Img variant="top" src={WouldYouRather} className='card-img'/>
                <Card.Body>
                  <Card.Title>WouldYouRather</Card.Title>
                  <Card.Text>
                    a fully responsive and mobile-ready polling game that presents the user with a series of questions.
                  </Card.Text>
                  <Link to='/projects-details/#WouldyouRather'
                    className="btn btn-outline-primary">
                    More Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <Card.Img variant="top" src={monstersRolodex}
                  className='card-img'
                />
                <Card.Body style={{ paddingBottom: "18%" }}>
                  <Card.Title>Monsters Rolodex</Card.Title>
                  <Card.Text>
                    Simple Filtering React App
                  </Card.Text>
                  <Link to='/projects-details/#MonstersRolodex'
                    className="btn btn-outline-primary">
                    More Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;