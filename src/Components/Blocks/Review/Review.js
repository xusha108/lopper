import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {users} from '../../../constant/review.js';
import ArrowLeft from '../../../assets/img/ArrowLeft.png';
import ArrowRight from '../../../assets/img/ArrowRight.png';

class Review extends Component {
   render() {
    return (
      <div className='review'>
        <div className='wrapper'>
          <div className='review-imgBig'><img src={this.props.source} alt='#'  /></div>

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
            <p>{this.props.quote}</p>        
         
            <div><span>{this.props.person}</span> - {this.props.company}</div>
          </div>        
        </div>
      </div>
    );
  }
}

export default Review;

Review.propTypes = {
  source: PropTypes.string,
  person: PropTypes.string,
  company: PropTypes.string,
  quote: PropTypes.string,
};
