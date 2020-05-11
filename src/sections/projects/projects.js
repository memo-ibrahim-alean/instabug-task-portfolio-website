import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyReadsPhoto from './myreeds.png';
import WouldYouRather from './WouldYouRather.png';
import monstersRolodex from './monstersRolodex.png';
import './projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Would you Rather ?',
          overView: 'a fully responsive and mobile-ready polling game that presents the user with a series of questions.',
          Photo: WouldYouRather,
          github: 'https://github.com/mohamedibrahim1998/reactnd-would-you-rather',
          visit: 'https://reactnd-project-would-you-rather.netlify.app/',
          id: 1
        },
        {
          title: 'My Reads project',
          overView: 'a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.',
          Photo: MyReadsPhoto,
          github: 'https://github.com/mohamedibrahim1998/reactnd_myreeds',
          visit: 'https://react-nanodgree-my-reads-app.netlify.app/',
          id: 2
        },
        {
          title: 'Monsters Rolodex',
          overView: 'Simple Filtering React App',
          Photo: monstersRolodex,
          github: 'https://github.com/mohamedibrahim1998/monsters-rolodex',
          visit: 'https://mohamedibrahim1998.github.io/monsters-rolodex/',
          id: 3
        }
      ]
    }
  }
  render() {
    const { projects } = this.state;
    return (
      <div>
        <h2 className='text-center mt-5 mb-5' id='projectSection'>Projects I Built</h2>
        <Container>
          {
            projects.map(project => (
              <Row key={project.id} className='marginBottom marginTop'>
                <Col sm={7}>
                  <img
                    src={project.Photo} alt={`${project.title}`}
                    className='screen-shoot img-fluid'
                  />
                </Col>
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
              </Row>
            ))
          }
        </Container>
      </div>
    );
  }
}

export default Projects;