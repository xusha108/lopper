import React, { Component } from 'react';

class Subscribe extends Component {
  render() {
    return (
      <div className='subscribe'>
        <div className='wrapper'>
          <h2 className='subtitle'>Subscribe to our newsletter</h2>
          <h6 className='about'>Cras pulvinar mattis nunc sed blandit.</h6>
          <input type="mail" placeholder='ENTER EMAIL'/>
          <button type="submit" className="btn"> Subscribe</button>
      </div>
    </div>
    );
  }
}

export default Subscribe;