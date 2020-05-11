import React, { Component } from 'react'
import './home-page.css';
import Header from '../../sections/header/header';
import Projects from '../../sections/projects/projects';
import About from '../../sections/about/about';
import Contact from '../../sections/contact/contact';

class HomaPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Projects />
        <About />
        <Contact />
      </div>
    )
  }
}

export default HomaPage;
