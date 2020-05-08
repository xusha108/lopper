import React, { Component } from 'react';
import {achivment} from '../../../constant/achivment.js';

class AchivmentBlock extends Component {
  render() {
    return (
      <>
        {achivment.map( (item, index) => {
          return <div className='achivment-item' key={index}>
            <h2 className='title'>{item.id}</h2>
            <h3>{item.title}</h3>
            <p>{item.about}</p>
          </div>
        })}
     </>
    );
  }
}

export default AchivmentBlock;