import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './Components/Pages/About';
import Service from './Components/Pages/Service';
import Work from './Components/Pages/Work';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>       
        <Route path='/' exact component = {App} />
        <Route path='/about' component = {About} />
        <Route path='/service' component = {Service} />
        <Route path='/work' component = {Work} /> 
       </Switch>
    </Router>,
     document.getElementById('root')
);

