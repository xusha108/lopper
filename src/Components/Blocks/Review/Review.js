import React, { Component } from 'react';
import {users} from '../../../constant/review.js';
import EllipseImg from '../../../assets/img/EllipseBig.png';
import ArrowLeft from '../../../assets/img/Arrow Left.png';
import ArrowRight from '../../../assets/img/Arrow Right.png';

class Review extends Component {
  render() {
    return (
      <div className='review-container'>
        <img src={EllipseImg} alt='#' className='review-imgBig' />
        {users.map( (item, index) =>
         <div className={`review-img-${index}`} key={index}>
           <img src={item.img} alt='#' />
          </div>
        )}
        <div className='review-slider-btn'>
        <img src={ArrowLeft} alt='#' className='review-arrowLeft' />
        <img src={ArrowRight} alt='#' className='review-arrowRight' />
        </div>    

        <blockquote className='review-quote'>
          <p>
            "Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique."
          </p>          
          <cite><span>Kerry Johnes</span> - Some Company</cite>
        </blockquote>        
      </div>
    );
  }
}

export default Review;