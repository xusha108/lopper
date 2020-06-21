import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ServiceBlock from '../../Blocks/Service/ServiceBlock';
import QuoteImg from '../../../assets/img/PhotoService.png';
import {services} from '../../../constant/service.js';


export default class Service extends Component {
  render() {
    return (
      <div className='service'>
        <div className='wrapper'>
          <div className='service-title'>
            <h3 className='title'>{this.props.title}</h3>
            <h2 className='subtitle'>{this.props.subtitle}</h2>
            <p className='about'>{this.props.about}</p>
            
          </div>

          <ServiceBlock list= {services} />

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

Service.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
};