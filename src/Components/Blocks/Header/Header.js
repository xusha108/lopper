import React, { Component } from 'react';
import '../../../assets/styles/Header.css';
import Logo from '../../../assets/img/Logo.png';
import Menu from './Menu';

class Header extends Component {
  render() {
    return (
      <header>        
          <div className='header-block'>
            <a href='/'>
              <img className='logo header-logo' src={Logo} alt='#' />
            </a>

            <Menu />
            <p>burger</p>
            
          </div>        
      </header>
    );
  }
}

export default Header;