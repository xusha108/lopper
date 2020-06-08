import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Menu from '../Blocks/Header/Menu';
import Review from '../Blocks/Review/Review';
import Subscribe from '../Blocks/Subscribe/Subscribe';
import Footer from '../Blocks/Footer/Footer';
import BurgerMenu from '../Blocks/Header/BurgerMenu';
import Service from '../Blocks/Service/Service';

import Logo from '../../assets/img/Logo-about.png';
import '../../assets/styles/WorkPage.scss';
import {workImgs} from '../../constant/workImgs';

class WorkPage extends Component {
  render() {
    return (
      <div className='workpage'>
      <div className='wrapper'> 
        <div className='aboutpage-header'>
          <Link to='/'><img className='logo' src={Logo} alt='#' /></Link>        
          <Menu />        
          <div className='aboutpage-header-contact'>(01) 666 - 693 - 456</div>
          <BurgerMenu />  
        </div>
      </div>

      <div className='aboutpage-headline'>
        <div className='wrapper'>                    
          <h1 className='main-title'>Our team</h1>
          <h3 className='about'>We build great business</h3>
        </div> 
      </div>  

      <div className='workpage-intro'>
        <Service
           title="We are"
           subtitle="Our team"
           about="Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Quam elementum pulvinar etiam non. Eu consequat."
          />           
      </div>

      <div className='workpage-team'>
      {workImgs.map( (item, index) => {
          return(
          <div key={index} >
            <div className='workpage-team-item' key={index}>
              <img src={item.img} alt='#' className={`workpage-img-${index+1}`} />            
            </div>
            <div className='active'>
              <h3>Klara Ipsum</h3>
              <h2 className='about'>Designer</h2>
              <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
              <p> klara@lopper.com</p>             
            </div> 
          </div>       
        )})}     
      </div>

      <div className='aboutpage-quote'>
        <Review 
          source={require('../../assets/img/EllipseBigService.png')} 
          person="Jack Smith"
          company="Some Company"  
          quote="Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique."
        />             
      </div>

      <div className='aboutpage-subcribe'>
        <Subscribe />             
      </div>

      <div className='aboutpage-footer'>
          <Footer />             
      </div> 
    
    </div>
    );
  }
}

export default WorkPage;