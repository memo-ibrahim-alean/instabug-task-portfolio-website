import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './projectDetails.css';
// import MyReadsPhoto from './myreeds.png';
// import WouldYouRather from './WouldYouRather.png';
// import monstersRolodex from './monstersRolodex.png';
import getData from '../../data/getData';

class ProjectsDetails extends Component {
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
        <h2 className='text-center mt-5 mb-5'>Projects I Built</h2>
        <Container>
          {

            projects.map(project => (
              // projects.filter(project => project.id )
              <Row key={project.id} className='marginBottom marginTop'>
                <div id={project.id}></div>
                <Col sm={4}>
                  <h3>{project.title}</h3>
                  <p className='project-paragraph'>{project.overView}</p>
                  <a href={`${project.visit}`}
                    target='_blank'
                    rel="noopener noreferrer"
                    className='mt-2  btn btn-primary'
                  >
                    Visit
                  </a>
                  <a href={`${project.github}`}
                    target='_blank'
                    rel="noopener noreferrer"
                    className='ml-2 mt-2  btn btn-outline-primary'
                  >
                    Source
                  </a>
                </Col>
                <Col sm={7}>
                  <img
                    src={project.Photo} alt={`${project.title}`}
                    className='screen-shoot img-fluid'
                  />
                </Col>
              </Row>
            ))
          }
        </Container>
      </div>
    );
  }
}

export default ProjectsDetails;