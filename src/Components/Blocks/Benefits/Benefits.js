import React, { Component } from 'react';
import Btn from '../../../assets/img/Button.png';
import ImgFirst from '../../../assets/img/benefitImg1.png';
import ImgSecond from '../../../assets/img/benefitImg2.png';

class Benefits extends Component {
  render() {
    return (
      <div className='benefits'>
        <div className='benefits-about'>
          <h2 className='title'>Benefits</h2>
          <h3 className='subtitle'>Shaping the future</h3>
          <p>
            <strong>
              Eget nunc scelerisque viverra mauris in aliquam.
              Dignissim sodales ut eu sem integer vitae. Libero nunc consequat interdum varius.
            </strong>
          </p>
          <p>Magna sit amet purus gravida. Sit amet porttitor eget dolor morbi non.</p>
          <p>Lectus vestibulum mattis ullamcorper velit sed ullamcorper.</p>
          <p>Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Dui faucibus in ornare quam viverra.</p>
          <p>Posuere ac ut consequat semper viverra.</p>
          
          <img src={Btn} alt='#'/>
      </div>

      <div className='benefits-img'>
        <img src={ImgFirst} alt='#' className='benefits-imgFirst'/>
        <img src={ImgSecond} alt='#' className='benefits-imgSecond'/>
      </div>        
    </div>
    );
  }
}

export default Benefits;