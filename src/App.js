import React from 'react';
import Header from './Components/Blocks/Header/Header.js';
import Footer from './Components/Blocks/Footer/Footer.js';
import ServiceBlock from './Components/Blocks/Service/Service.js';
import Benefits from './Components/Blocks/Benefits/Benefits.js';
import Clients from './Components/Blocks/Clients/Clients.js';
import Achivments from './Components/Blocks/Achivments/Achivments.js';
import Review from './Components/Blocks/Review/Review.js';
<<<<<<< HEAD
=======

import './assets/styles/App.scss';
>>>>>>> c63b3eb337c65a36ac7f53b129d1687479c80f69
import Subscribe from './Components/Blocks/Subscribe/Subscribe';
import About from './Components/Pages/About';
import Service from './Components/Pages/Service';
import Work from './Components/Pages/Work';
import './assets/styles/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Header />
          <ServiceBlock />
          <Benefits />
          <Clients />
          <Achivments />
          <Review />
          <Subscribe />
          <Footer />
        </Route>
        <Route path='/about' component = {About} />
        <Route path='/service' component = {Service} />
        <Route path='/work' component = {Work} />
      </Switch>
    </Router>
  );
}
export default App;


