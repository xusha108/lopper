import React, { Component } from 'react';

class Subscribe extends Component {
  render() {
    return (
      <div className='subscribe'>
        <div className='wrapper'>
          <h2 className='subscribe-subtitle subtitle'>Subscribe to our newsletter</h2>
          <h6 className='subscribe-about about'>Cras pulvinar mattis nunc sed blandit.</h6>
          <input type="mail" placeholder='ENTER EMAIL'/>
          <button type="submit" className="subscribe-btn"><span>Subscribe</span></button>
      </div>
    </div>
    );
  }
}

export default Subscribe;