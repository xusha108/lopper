import React, { Component } from 'react';
import {services} from '../../../constant/service.js';

class ServiceBlock extends Component {
  render() {
    return (
      <div className='service-block'>
        {services.map( (item, index) => {
          return <div className='service-item' key={index}>
            <img src={item.img} alt='#' />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
        })}      
      </div>
    );
  }
}

export default ServiceBlock;