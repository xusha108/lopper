import React, { Component } from 'react';
import Menu from '../Header/Menu';
import BurMenu from '../../../assets/img/Menu.png';
import DelMenu from '../../../assets/img/delete.png';


export default class BurgerMenu extends Component {

  state = {
    isActive: false
  };


  menuToggle = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  render() {
    let toggleClass = (this.state.isActive) ? 'burger-drawer active' : 'burger-drawer'

    return ( 
    <>
      <img
       className='header-burger'
       src={BurMenu}
       alt='#'
       onClick={() => this.menuToggle()}
      />

      <div className={toggleClass}>
        <img
          src={DelMenu}
          className='delete-img'
          alt='#'
          onClick={() => this.menuToggle()}
        />

        <Menu />
      </div>
    </> 
    )
  }
}