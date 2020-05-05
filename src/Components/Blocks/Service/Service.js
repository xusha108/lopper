import React, { Component } from 'react';
import ServiceBlock from './ServiceBlock.js';
import QuoteImg from '../../../assets/img/PhotoService.png';
import '../../../assets/styles/Service.css';

export default class Service extends Component {
  render() {
    return (
      <div className='service'>
        <div className='service-title'>
          <h3>What we can do?</h3>
          <h2>Our services</h2>
        </div>

        <ServiceBlock />

        <blockquote className='service-quote'>
          <p>
            “Apparently we had reached a great height in the atmosphere, 
            for the sky was a dead black, and the stars had ceased to twinkle.”
          </p>
          <img src={QuoteImg} alt='#'></img>
          <cite><span>Andrew Slomka</span> - Some Company</cite>
        </blockquote>
        
      </div>
    );
  }
}

