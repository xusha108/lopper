import React, { Component } from 'react';

import ImgFeature from '../../../assets/img/about-feature.png';
import '../../../assets/styles/Features.scss';

class Features extends Component {
  render() {
    return (
      <div className='features'>
        <div className='features-title'>     
        <h2 className='title'>What we do</h2>
        <h3 className='subtitle'>What we do</h3>
      </div> 
        
        <div className='features-blocks'>
          <div className='first-block'>
            <div className='first-block-item subtitle'>We build great business</div>
            <div className='first-block-item subtitle'>We build great business</div>
            <div className='first-block-item subtitle'>We build great business</div>
          </div>

          <div className='second-block'>
            <div className='second-block-item-1 about'>Id consectetur purus ut faucibus pulvinar elementum integer enim. A arcu cursus vitae congue mauris rhoncus aenean.</div>
            <div className='second-block-item-2 about'>Enim neque volutpat ac tincidunt vitae. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel.</div>
            <div className='second-block-item-3 about'>Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Eleifend donec pretium vulputate sapien nec sagittis.</div>
          </div>

          <div className='third-block'>
            <img src={ImgFeature} alt='#' />  
          </div> 

        </div>               
      </div>
    );
  }
}

export default Features;