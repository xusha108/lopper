import React, { Component } from 'react';
import {achievements} from '../../../constant/achievements';

class AchievementsBlock extends Component {
    render() {
      return (
        <>
          {achievements.map( (item, index) => {
            return <div className='achievements-item' key={index}>
              <h2 className='title'>{item.id}</h2>
              <h3>{item.title}</h3>
              <p>{item.about}</p>
            </div>
          })}
       </>
      );
    }
  }  

export default AchievementsBlock;