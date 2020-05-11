import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
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
                <div key={project.id} className="card mb-3 text-capitalize shadow" style={{ maxWidth: '100%' }}>
                  <div className="row no-gutters">
                    <div className="col-md-2 text-center">
                      <img src={project.Photo} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="card-title"> {project.title} </h5>
                        <p className="card-text"> {project.overView} </p>
                        <Link
                          to={"/projects-details/" + project.id}
                          className="btn btn-link"
                        >
                          More Details 
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              ))
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;