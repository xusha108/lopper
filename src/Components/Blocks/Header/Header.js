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
              <div className='header-block-contact'>(01) 666 - 693 - 456</div>
              <BurgerMenu />
                                    
            </div> 

            <div className='header-content'>
              <h3 className='title'>What we do?</h3>
              <h1 className='main-title'>We grow <span>great business</span></h1>

              <div className='header-content-subheader'>
                <div className='header-content-subheader-about'> Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.</div>
                <div className='header-content-subheader-arrow'></div>
              </div>
              <div className='header-content-scroll'><span>Scroll to see more</span></div>
            </div> 
          </div>        
      </header>
    );
  }
}

export default Header;