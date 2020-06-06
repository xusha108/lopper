import React from 'react';

import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import ServicePage from './Components/Pages/ServicePage';
import Work from './Components/Pages/Work';
import './assets/styles/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
         
        </Route>
        <Route path='/home' component = {Home} />
        <Route path='/about' component = {About} />
        <Route path='/service' component = {ServicePage} />
        <Route path='/work' component = {Work} />
      </Switch>
    </Router>
  );
}
export default App;


