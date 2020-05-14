import React, { Component } from 'react';
import Menu from './Menu';
import Logo from '../../../assets/img/Logo.png';
import BurgerMenu from './BurgerMenu';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>        
          <div className='wrapper'> 
            <div className='header-block'>        
              <Link to='/'><img className='logo' src={Logo} alt='#' /></Link>        
              <Menu />        
              <div className='header-contact'>(01) 666 - 693 - 456</div>
              <BurgerMenu />
                                    
            </div> 

            <div className='header-content'>
              <h3 className='title'>What we do?</h3>
              <h1>We grow <span>great business</span></h1>

              <div className='subheader'>
                <div className='subheader-about'> Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.</div>
                <div className='subheader-arrow'></div>
              </div>
              <div className='header-scroll'>Scroll to see more</div>
            </div> 
          </div>        
      </header>
    );
  }
}

export default Header;