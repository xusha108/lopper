import React from 'react';

import AboutPage from './Components/Pages/AboutPage';
import HomePage from './Components/Pages/HomePage';
import ServicePage from './Components/Pages/ServicePage';
import WorkPage from './Components/Pages/WorkPage';
import './assets/styles/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component = {HomePage}></Route>       
        <Route path='/home' component = {HomePage} />
        <Route path='/about' component = {AboutPage} />
        <Route path='/service' component = {ServicePage} />
        <Route path='/work' component = {WorkPage} />
      </Switch>
    </Router>
  );
}
export default App;


