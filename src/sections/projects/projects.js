import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import getData from '../../data/getData';
import './projects';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    getData().then(response => this.setState({
      projects: response.projects
    }))
  }

  render() {
    const { projects } = this.state;
    return (
      <div>
        <h2 className='text-center mt-5 mb-5' id='projectSection'>Projects I Built</h2>
        <Container>
          <Row>
            {
              projects.map(project => (
                <Col sm={4} key={project.id}> 
                  <Card>
                    <Card.Img variant="top" src={project.Photo} className='card-img' />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>
                        {project.overView}
                      </Card.Text>
                      <Link to={"/projects-details/" + project.id}
                        className="btn btn-outline-primary">
                        More Details
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;