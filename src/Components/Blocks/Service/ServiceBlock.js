import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ServiceBlock extends Component {
  render() {
    const {list} = this.props; 
    let htmlList= '';

      htmlList=list.map( (item, index) => {
        return(
        <div className='service-item' key={index}>
          <img src={item.img} alt='#' />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>        
      )})      
     
    return (
      <div className='service-block'>
        {htmlList}      
      </div>
    );
  }
}
export default ServiceBlock;

ServiceBlock.propTypes = {
  list: PropTypes.array,
};