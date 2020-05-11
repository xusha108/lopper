import React, { Component } from 'react';
import AchivmentBlock from '../Achivments/AchivmentBlock.js';


class Achivments extends Component {
  render() {
    return ( 
      <div className='achivments'> 
        <div className='wrapper'>
          <div className='achivments-container'>
            <div className='achivments-about'>
              <h2 className='title'>What we do</h2>
              <h3>
                Apparently we had reached a great height in the atmosphere, 
                for the sky was a dead black, and the stars had ceased to twinkle.
              </h3>          
            </div>
            <div className='achivments-block'>
              <AchivmentBlock />
            </div>
          </div> 
        </div>       
      </div> 
    );
  }
}

export default Achivments;