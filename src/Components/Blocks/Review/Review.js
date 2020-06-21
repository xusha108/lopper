import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {users} from '../../../constant/review.js';
import ArrowLeft from '../../../assets/img/ArrowLeft.png';
import ArrowRight from '../../../assets/img/ArrowRight.png';
import Slider from './Quote';

class Review extends Component {
 
  state = {
    currentImageIndex: 0,
  }

  changeSliderIndex= (move) => { 
   
   const newState ={...this.state}

    if(move){
      newState.currentImageIndex++
    }else{
      newState.currentImageIndex--
    }
    
    if(newState.currentImageIndex >= users.length){
      newState.currentImageIndex=0
    }

    if(newState.currentImageIndex < 0){
      newState.currentImageIndex=users.length-1
    }
     this.setState(newState)
    }

  checkExistIndex = (index) => {
   return typeof users[index] !== 'undefined';    
 }

   render() {   
    const {currentImageIndex}=this.state;    

    return (
      <div className='review'>
        <div className='wrapper'>
          <div className='review-imgBig'><img src={users[currentImageIndex].img} alt='#'  /></div>

          <div className='review-items'>
            {users.map( (item, index) =>
            <div className={`review-img-${index+1}`} key={index}>
              <img
               src={item.img} alt='#'
               className={currentImageIndex === index ? 'activeSlider' : ''} 
              />
              
              </div>
          )}
          </div>

          <div className='review-slider-btn'>
            <img
              src={ArrowLeft}
              alt='#'
              className='review-arrowLeft'
              onClick={() => this.changeSliderIndex(false)}              
            />

            <img
             src={ArrowRight}
             alt='#'
             className='review-arrowRight'
             onClick={() => this.changeSliderIndex(true)}
            />

          </div>    

          <div className='review-quote quote'>  
            <Slider
              phrase={users[currentImageIndex].phrase}
              name={users[currentImageIndex].name}
              company={users[currentImageIndex].company}            
            />         
          </div>        
        </div>
      </div>
    );
  }
}

export default Review;

Review.propTypes = {
  source: PropTypes.string
};
