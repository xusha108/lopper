import React, { Component } from 'react';
import {clients} from '../../../constant/clients.js';


class Clients extends Component { 
  render() {
    return (
      <div className='clients'>
        <div className='wrapper'>
          <div className='clients-title'>
            <h3 className='title'>What we do?</h3>
            <h2 className='subtitle'>What we do more than you can <br/> imagine, belive us.</h2>
          </div>

          <div className='clients-container'>
            <div className='clients-container-about'>
              <h3 className='title'>We build great business</h3>
              <p >Nisl condimentum id venenatis a. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sollicitudin tempor id eu nisl nunc.</p>
              <p > Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Massa massa ultricies mi quis hendrerit dolor magna. Egestas dui id ornare arcu odio..</p>
              <p > Massa massa ultricies mi quis hendrerit dolor magna. Egestas dui id ornare arcu odio.</p>
            </div>

            <div className='clients-container-list'>
              <h3 className='title'>Our clients</h3>
              <div className='clients-container-list-block'>
                {clients.map( (item, index) => {
                  return <div className='clients-container-list-block-item' key={index}>
                      <img src={item.img} alt='#' />
                    </div>
                })}
              </div>
            </div> 
          </div>  
        </div>
      </div>     
    );
  }
}

export default Clients;