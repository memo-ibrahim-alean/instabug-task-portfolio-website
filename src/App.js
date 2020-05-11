import React from 'react';
import './App.css';
import HomaPage from './pages/home-page/home-page';
import NavBar from './components/navbar/navbar';
import ProjectsDetails from './pages/projectDetails/projectDetails';
import { Switch, Route } from 'react-router-dom';


const App = () => (
  <div className="App">
    <NavBar />
    <Switch>
      <Route exact path='/' component={HomaPage} />
      <Route path='/projects-details' component={ProjectsDetails} />
    </Switch>
  </div>
);

export default App;
