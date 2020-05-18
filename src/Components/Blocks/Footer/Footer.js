import React, { Component } from 'react';
import Menu from '../../../Components/Blocks/Header/Menu.js';
import Logo from '../../../assets/img/Logo.png';
import {services} from '../../../constant/service.js';
import {social} from '../../../constant/social.js';

export default class Footer extends Component {
  render() {
    return (
    <footer>        
      <div className='wrapper'>
        <div className='footer-block'> 
          <div  className='footer-block-logo'>
            <img className='footer-block-logo logo' src={Logo} alt='#' />
            <p className='footer-block-about about' >Eu augue ut lectus arcu bibendum at.</p>
          </div> 

          <div className='footer-block-menu'>
            <h3><span>menu</span></h3>
            <Menu />  
          </div>    

        <div className='footer-block-services'>
          <h3><span>services</span></h3>
          {services.map( (item, index) => {
            return <a href='/' className='service-item' key={index}>{item.title}</a>
          })}
        </div>        

        <div className='footer-block-contact'>
          <h3><span>contact us</span></h3>
          <p className='footer-block-contact phone'> contact@lop.com</p>
          <p className='footer-block-contact email'>856 - 693 - 456</p>
        </div>

        <div className='footer-block-social'> 
          <h3><span>follow us</span></h3>
          {social.map( (item, index) => {
            return <img src={item.img} className='footer-block-social-item' key={index} alt='#' />
          })}
        </div>         
      </div> 
      
      <div className='footer-copy'>
          <p>© 2019 Lopper by mariuszdaniel. All right reserved.</p>
      </div>
    </div>             
  </footer>
    );
  }
}

