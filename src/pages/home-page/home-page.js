import React, { Component } from 'react'
import NavBar from '../../components/navbar/navbar';
import Header from '../../sections/header/header';
import './home-page.css';

class HomaPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
      </div>
    )
  }
}

export default HomaPage;
