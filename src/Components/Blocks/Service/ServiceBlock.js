import React, { Component } from 'react';


class ServiceBlock extends Component {
  state = {
    services: [
      {
        img: require('../../../assets/img/serviceIcon.png'),
        title: 'Webdesign',
        description: 'Tincidunt lobortis feugiat vivamus at augue eget.Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.', 
      },
      {
        img: require('../../../assets/img/serviceIcon.png'),
        title: 'Webdev',
        description: 'Tincidunt lobortis feugiat vivamus at augue eget.Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.', 
      },
      {
        img: require('../../../assets/img/serviceIcon.png'),
        title: 'Marketing',
        description: 'Tincidunt lobortis feugiat vivamus at augue eget.Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.', 
      },
      {
        img: require('../../../assets/img/serviceIcon.png'),
        title: 'Webdesign',
        description: 'Tincidunt lobortis feugiat vivamus at augue eget.Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.', 
      },
      {
        img: require('../../../assets/img/serviceIcon.png'),
        title: 'Webdev',
        description: 'Tincidunt lobortis feugiat vivamus at augue eget.Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.', 
      },
      {
        img: require('../../../assets/img/serviceIcon.png'),
        title: 'Marketing',
        description: 'Tincidunt lobortis feugiat vivamus at augue eget.Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.', 
      }
    ]
  }
  render() {
    return (
      <div className='service-block'>
        {this.state.services.map( (item, index) => {
          return <div className='service-item' key={index}>
            <img src={item.img} alt='#' />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
        })}      
      </div>
    );
  }
}

export default ServiceBlock;