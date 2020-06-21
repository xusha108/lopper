import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Circle extends Component {
  render() {
      
    return (
      <div className="container">
        <div className="container-photo">
          <img
            src={this.props.photo.img}
            alt={this.props.name}
           
          />
        </div>

        <div className="container-info">
          <h3>{this.props.name}</h3>
          <span>{this.props.profession}</span>
          <p className="about">{this.props.about}</p>
          <p>{this.props.email}</p>
          <img src={this.props.icon} alt={this.props.name} />
        </div>
      </div>
    );
  }
}
Circle.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  about: PropTypes.string,
  email: PropTypes.string,
  profession: PropTypes.string,
};

// let {
//     top
// } = this.props;
// console.log('top', top)
// return <div style={{color: '#fff', position: 'relative', top: top + 'px'} }>
//     <img src={this.props.elem.img} />
// </div>
