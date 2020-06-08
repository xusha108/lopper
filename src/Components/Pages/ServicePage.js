import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Menu from '../Blocks/Header/Menu';
import Review from '../Blocks/Review/Review';
import Subscribe from '../Blocks/Subscribe/Subscribe';
import Footer from '../Blocks/Footer/Footer';
import BurgerMenu from '../Blocks/Header/BurgerMenu';
import Service from '../Blocks/Service/Service';
import Section from '../Blocks/Section/Section';

import Logo from '../../assets/img/Logo-about.png';

class ServicePage extends Component {
  render() {
    return (
      <div className='servicepage'>
        <div className='wrapper'> 
          <div className='aboutpage-header'>
            <Link to='/'><img className='logo' src={Logo} alt='#' /></Link>        
            <Menu />        
            <div className='aboutpage-header-contact'>(01) 666 - 693 - 456</div>
            <BurgerMenu />  
          </div>
        </div>

        <div className='aboutpage-headline'>
          <div className='wrapper'>                    
            <h1 className='main-title'>Our services</h1>
            <h3 className='about'>We build great business</h3>
          </div> 
        </div> 
       

        <div className='servicepage-intro'>
          <div className='wrapper'>
              <h2 className='title'>What we do</h2>             
              <h3 className='subtitle'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black,
                and the stars had ceased to twinkle.
              </h3>
              <div className='servicepage-intro-blocks'>
                <div className='servicepage-intro-blocks-item-1'>15+
                  <div>Nobel prizes</div>              
                </div>
                <div className='servicepage-intro-blocks-item-2'>33
                  <div>Nobel prizes</div> 
                </div>
                <div className='servicepage-intro-blocks-item-3'>12
                  <div>Nobel prizes</div> 
                </div>
              </div>              
          </div>
        </div>           
         

        <div className='servicepage-services'>
          <Service
           title="We are amazing"
           subtitle="Our services"
           about="Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Quam elementum pulvinar etiam non. Eu consequat."
          />                      
        </div> 
        
        <div className='sectionpage-services'>
          <Section />                      
        </div> 

        <div className='aboutpage-quote'>
          <Review 
            source={require('../../assets/img/EllipseBigService.png')} 
            person="Jack Smith"
            company="Some Company"  
            quote="Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique."
          />             
        </div>

        <div className='aboutpage-subcribe'>
          <Subscribe />             
        </div>

        <div className='aboutpage-footer'>
            <Footer />             
        </div> 
      
      </div>
    );
  }
}

export default ServicePage;