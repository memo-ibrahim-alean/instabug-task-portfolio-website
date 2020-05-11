import React, { Component } from 'react'
import './home-page.css';
import NavBar from '../../components/navbar/navbar';
import Header from '../../sections/header/header';
import Projects from '../../sections/projects/projects';
import About from '../../sections/about/about';
import Contact from '../../sections/contact/contact';

class HomaPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <Projects />
        <About />
        <Contact />
      </div>
    )
  }
}

export default HomaPage;
