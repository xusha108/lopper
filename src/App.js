import React from 'react';
import Header from './Components/Blocks/Header/Header';
import Service from './Components/Blocks/Service/Service.js';
import Benefits from './Components/Blocks/Benefits/Benefits.js';
import Clients from './Components/Blocks/Clients/Clients.js';

import './assets/styles/App.css';
//import {Router} from 'react-router-dom';


const App = () => {
  return (
    <>    
      <Header />
      <Service /> 
      <Benefits /> 
      <Clients />
   </>
  );
}
export default App;


