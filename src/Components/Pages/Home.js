import React, { Component } from 'react';

import Achivments from '../Blocks/Achivments/Achivments';
import Review from '../Blocks/Review/Review';
import Subscribe from '../Blocks/Subscribe/Subscribe';
import Footer from '../Blocks/Footer/Footer';
import Clients from '../Blocks/Clients/Clients';
import Header from '../Blocks/Header/Header';
import Service from '../Blocks/Service/Service';
import Benefits from '../Blocks/Benefits/Benefits';

class Home extends Component {
  render() {
    return (
      <div className='homepage'> 
           <div className='homepage-header'>
             <Header />           
          </div>   

          <div className='homepage-features'>
            <Service />
          </div>

          <div className='homepage-features'>
            <Benefits />
          </div>

          <div className='homepage-clients'>
            <Clients  title={<h3>Our clients</h3>}  />
          </div>

          <div className='homepage-achivments'> 
            <Achivments />                     
          </div>              

          <div className='homepage-features'>
            <Review source={require('../../assets/img/EllipseBig.png')} />
          </div>

          <div className='homepage-subcribe'>
            <Subscribe />             
          </div>

          <div className='homepage-footer'>
            <Footer />             
          </div>     
    </div>     
    );
  }
}

export default Home;