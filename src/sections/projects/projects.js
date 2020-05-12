import React, { Component } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import getData from '../../data/getData';
import './projects.css';

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
                <Card key={project.id} className='mb-4 col-sm-4'>
                  <Card.Body className='text-center'>
                    <Card.Title >
                      {project.title}
                    </Card.Title>
                    <Card.Text>
                      {project.overView}
                    </Card.Text>
                    <Link
                      to={"/projects-details/" + project.id}
                      className="btn btn-outline-primary"
                    >
                      More Details
                    </Link>
                  </Card.Body>
                </Card>
              ))
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;