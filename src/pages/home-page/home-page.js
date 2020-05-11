import React, { Component } from 'react'
import './home-page.css';
import NavBar from '../../components/navbar/navbar';
import Header from '../../sections/header/header';
import Projects from '../../sections/projects/projects';

class HomaPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <Projects />
      </div>
    )
  }
}

export default HomaPage;
