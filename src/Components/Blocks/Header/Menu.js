import React, { Component } from 'react';
//import {Link} from 'react-router-dom';

class Menu extends Component {
  state = {    
      menu: [
      'Home',
      'Service',
      'Work',
      'About',      
      ]  
  }
  render() {
    return (
      <div className='header-links'>        
        <div className='menu header-menu'>
          {this.state.menu.map((item, index) =>
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