import React, { Component } from 'react';
import '../../../assets/styles/Section.scss';
import SectionBlock from '../Section/SectionBlock'; 

export default class Section extends Component {
  render() {
    return (
      <div className='section'>        
          <div className='section-title'>
            <h3 className='title'>What we do?</h3>
            <h2 className='subtitle'>What we do?</h2>
            <p className='about'>Upper prior hundred links approach reedy, was to the than and the ever somehow surprised known for every by of there until road,</p>
          </div>
          <div className='section-block'>
            <SectionBlock />             
          </div>               
      </div>
    )
  }
}