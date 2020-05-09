import React, { Component } from 'react';
import {menu} from '../../../constant/menu.js';
import {Link} from 'react-router-dom';

class Menu extends Component {
  render() {
    return (            
        <div className='menu header-menu'>
          {menu.map((item, index) =>
            <Link to={`/${item === 'home' ? '' : item}`} key={index} className='menu-item'>
              {item}               
            </Link>
          )}
        </div>
    );
  }
}

export default Menu;