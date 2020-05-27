import React, { Component } from 'react';
import ServiceBlock from './ServiceBlock.js';
import QuoteImg from '../../../assets/img/PhotoService.png';


export default class Service extends Component {
  render() {
    return (
      <div className='service'>
        <div className='wrapper'>
          <div className='service-title'>
            <h3 className='title'>What we can do?</h3>
            <h2 className='subtitle'>Our services</h2>
          </div>

          <ServiceBlock limit={6} />

          <div className='service-quote quote'>
            <p>
              “Apparently we had reached a great height in the atmosphere, 
              for the sky was a dead black, and the stars had ceased to twinkle.”
            </p>
            <img src={QuoteImg} alt='#'/>
            <div><span>Andrew Slomka</span> - Some Company</div>
          </div>
        </div>
      </div>
    );
  }
}

