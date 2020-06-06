import React, { Component } from 'react';
import {section} from '../../../constant/section';

export default class SectionBlock extends Component {
  render() {
    return (
      <> 
        {section.map( (item, index) => {
          return(
          <div className={`section-block-item-${index+1}`}  key={index}>
            <div className={`item-about-${index+1}`}>
              <h2 className='title'>{item.num}</h2>
              <h3 className='about'>{item.title}</h3>
              <p className='about'>{item.about}</p>            
            </div>

            <div className={`item-img-${index+1}`}>
              <img src={item.img} alt='#' />
              <div></div>        
            </div>  
          </div>    
        )})}
      </> 
    )
  }
}