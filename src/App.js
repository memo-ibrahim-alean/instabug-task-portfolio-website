import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './App.css';
import HomaPage from './pages/home-page/home-page';
import NavBar from './components/navbar/navbar';
import ProjectsDetails from './pages/projectDetails/projectDetails';
import { Switch, Route } from 'react-router-dom';


function App() {
  const [dark, setDark] = useState(intitialMode());
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(dark));
  }, [dark])
  function intitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }
  const handelChange = () => {
    setDark(!dark)
  };
  return (
    <div className={dark ? "dark-mode" : "light-mode"}>
      <NavBar />
      <Form className='dark-theme-form'>
        <span className="moon" role="img" aria-label="moon">🌙</span>
        <Form.Check
          onChange={handelChange}
          type="switch"
          id="custom-switch"
          label=""
          checked={dark}
        />
        <span className="sun" role="img" aria-label="sun">🌞</span>
      </Form>
      <Switch>
        <Route exact path='/' component={HomaPage} />
        <Route path="/projects-details/:id"
          component={ProjectsDetails} />
      </Switch>
    </div>
  )
}

export default App;

