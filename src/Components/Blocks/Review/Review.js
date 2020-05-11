import React, { Component } from 'react';
import {users} from '../../../constant/review.js';
import EllipseImg from '../../../assets/img/EllipseBig.png';
import ArrowLeft from '../../../assets/img/ArrowLeft.png';
import ArrowRight from '../../../assets/img/ArrowRight.png';

class Review extends Component {
  state = {
    users,
    selectedItem: users[0].id
  }
  render() {
    return (
      <div className='review'>
        <div className='wrapper'>
          <div className='review-imgBig'><img src={EllipseImg} alt='#'  /></div>

          <div className='review-items'>
            {users.map( (item, index) =>
            <div className={`review-img-${index+1}`} key={index}>
              <img src={item.img} alt='#' />
              </div>
          )}
          </div>

          <div className='review-slider-btn'>
            <img src={ArrowLeft} alt='#' className='review-arrowLeft' />
            <img src={ArrowRight} alt='#' className='review-arrowRight' />
          </div>    

          <div className='review-quote quote'>
            <p>
              "Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique."
            </p>          
            <div><span>Kerry Johnes</span> - Some Company</div>
          </div>        
        </div>
      </div>
    );
  }
}

export default Review;
