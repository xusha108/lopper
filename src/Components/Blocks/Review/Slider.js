import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Slider extends Component {
    render() {
        return (
            <>  
             <p>{this.props.phrase}</p>                 
              <div><span>{this.props.name}</span> - {this.props.company}</div>
          </>
        )
    }
}

Slider.propTypes = {
    phrase: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string,
  };