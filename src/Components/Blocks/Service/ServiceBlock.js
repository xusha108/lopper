import React, { Component } from 'react';
import {services} from '../../../constant/service.js';

class ServiceBlock extends Component {
  render() {
    const {limit} = this.props;    
    
    return (
      <div className='service-block'>
        {services.slice(0, limit).map( (item, index) => {
          return(
          <div className='service-item' key={index}>
            <img src={item.img} alt='#' />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>        
        )})}      
      </div>
    );
  }
}

export default ServiceBlock;