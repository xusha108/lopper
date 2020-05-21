import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Menu from '../Blocks/Header/Menu';
import Achivments from '../Blocks/Achivments/Achivments';
import Review from '../Blocks/Review/Review';
import Subscribe from '../Blocks/Subscribe/Subscribe';
import Footer from '../Blocks/Footer/Footer';
import BurgerMenu from '../Blocks/Header/BurgerMenu';
import Features from '../Blocks/Features/Features';
import Clients from '../Blocks/Clients/Clients';

import Logo from '../../assets/img/Logo-about.png';

class About extends Component {
  render() {
    return (
      <div className='aboutpage'> 

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
              <h1 className='main-title'>About us</h1>
              <h3 className='about'>We build great business</h3>
          </div> 
          </div> 

          <div className='aboutpage-intro'>
            <div className='wrapper'>
              <h2 className='title'>What we do</h2>             
              <h3 className='subtitle'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black,
                and the stars had ceased to twinkle.
              </h3>
              <div className='aboutpage-intro-blocks'>              
                <div className='aboutpage-intro-blocks-item'>
                  <h3>Our objectives</h3>
                  <p>Amet consectetur adipiscing elit pellentesque habitant morbi. Fermentum et sollicitudin ac orci 
                    phasellus. Dolor sit amet consectetur adipiscing elit duis. Euismod quis viverra nibh cras pulvinar 
                    mattis nunc sed blandit.
                  </p>                
                </div>

                <div className='aboutpage-intro-blocks-item'>
                  <h3>Our story</h3>
                  <p>Etiam dignissim diam quis enim lobortis. Egestas sed sed risus pretium quam vulputate dignissim.
                    Eleifend quam adipiscing vitae proin sagittis. Pharetra pharetra massa massa ultricies. Elementum 
                    eu facilisis sed odio morbi. Morbi tincidunt augue interdum velit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='aboutpage-features'>
            <Features />
          </div>

          <div className='aboutpage-clients'>
            <Clients />
          </div>

          <div className='aboutpage-achivments'> 
            <Achivments />            
          </div>

          <div className='aboutpage-quote'>
            <Review />             
          </div>

          <div className='aboutpage-subcribe'>
            <Subscribe />             
          </div>

          <div className='aboutpage-footer'>
            <Footer />             
          </div>
      {/* </div> */}
    </div>
     
    );
  }
}

export default About;