import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Quote extends Component {
    render() {
        return (
            <>  
             <p>{this.props.phrase}</p>                 
              <div><span>{this.props.name}</span> - {this.props.company}</div>
          </>
        )
    }
}

Quote.propTypes = {
    phrase: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string,
  };