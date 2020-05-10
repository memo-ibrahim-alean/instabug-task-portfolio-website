import React from 'react';
import './App.css';
import HomaPage from './pages/home-page/home-page';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Switch>
      <Route path='/' component={HomaPage} />
    </Switch>
  </div>
);

export default App;
