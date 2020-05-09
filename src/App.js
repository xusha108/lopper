import React from 'react';
import Header from './Components/Blocks/Header/Header.js';
import Footer from './Components/Blocks/Footer/Footer.js';
import Service from './Components/Blocks/Service/Service.js';
import Benefits from './Components/Blocks/Benefits/Benefits.js';
import Clients from './Components/Blocks/Clients/Clients.js';
import Achivments from './Components/Blocks/Achivments/Achivments.js';
import Review from './Components/Blocks/Review/Review.js';

import './assets/styles/App.css';
import Subscribe from './Components/Blocks/Subscribe/Subscribe';



const App = () => {
  return (
    <>    
      <Header />
      <Service /> 
      <Benefits /> 
      <Clients />
      <Achivments />
      <Review />
      <Subscribe />
      <Footer />
   </>
  );
}
export default App;


