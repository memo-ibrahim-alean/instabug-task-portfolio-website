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
      <div>
        <h2 className='text-center mt-5 mb-5'>Projects I Built</h2>
        <Container>
          {project.overView}
        </Container>
      </div>
    );
  }
}

export default ProjectsDetails;


