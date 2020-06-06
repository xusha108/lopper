import React, { Component } from 'react';
import AchievementsBlock from '../Achievements/AchievementsBlock';


class Achievements extends Component {
  render() {
    return ( 
      <div className='achievements'> 
        <div className='wrapper'>
          <div className='achievements-container'>
            <div className='achievements-about'>
              <h2 className='title'>What we do</h2>
              <h3>
                Apparently we had reached a great height in the atmosphere, 
                for the sky was a dead black, and the stars had ceased to twinkle.
              </h3>          
            </div>
            <div className='achievements-block'>
              <AchievementsBlock />
            </div>
          </div> 
        </div>       
      </div> 
    );
  }
}

export default Achievements;