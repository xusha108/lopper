import React, { Component } from 'react';
import Menu from './Menu';
import Logo from '../../../assets/img/Logo.png';
import BurMenu from '../../../assets/img/Menu.png';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>        
          <div className='header-block'>           
            <Link to='/about'><img className='logo header-logo' src={Logo} alt='#' /></Link>        
            <Menu />        
            <div className='header-contact'>(01) 666 - 693 - 456</div>
            <img className='header-burger' src={BurMenu} alt='#' />                      
          </div> 

          <div className='header-content'>
            <h3 className='title'>What we do?</h3>
            <h1>We grow <span>great business</span></h1>

            <div className='subheader'>
              <p>Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.</p>
            </div>
            <div className='header-scroll'>
              <p>Scroll to see more</p>
            </div>
          </div>       
      </header>
    );
  }
}

export default Header;