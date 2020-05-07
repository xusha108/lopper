import React, { Component } from 'react';
import {menu} from '../../../constant/menu.js';
//import {Link} from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className='header-links'>        
        <div className='menu header-menu'>
          {menu.map((item, index) =>
            <a href='/' key={index} className='menu-item'>
              {item}               
            </a>
          )}
        </div>          
      </div>      
    );
  }
}

export default Menu;