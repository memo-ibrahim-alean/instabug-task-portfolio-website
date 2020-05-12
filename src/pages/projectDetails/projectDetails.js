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
      project: {}
    }
  }

  componentDidMount() {
    const progjectId = this.props.match.params.id;
    getData().then(response => this.setState({
      project: response.projects[progjectId - 1]
    }))
  }

  render() {
    const { project } = this.state;
    return (
      <div id='project-deatails' >
        <Container>
          <Row className='marginBottom marginTop'>
            <Col sm={7}>
              <img
                src={project.Photo} alt={project.title}
                className='screen-shoot img-fluid'
              />
            </Col>
            
            <Col sm={4}>
              <h3>{project.title}</h3>
              <p className='project-paragraph'>{project.overView}</p>
              <a href={project.visit}
                target='_blank'
                rel="noopener noreferrer"
                className='mt-2  btn btn-primary'
              >
                Visit
              </a>
              <a href={project.github}
                target='_blank'
                rel="noopener noreferrer"
                className='ml-2 mt-2  btn btn-outline-primary'
              >
                Source
              </a>
            </Col>
            
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProjectsDetails;


