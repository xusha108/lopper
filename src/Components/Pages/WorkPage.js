import React, { Component } from "react";
import { Link } from "react-router-dom";

import Menu from "../Blocks/Header/Menu";
import Review from "../Blocks/Review/Review";
import Subscribe from "../Blocks/Subscribe/Subscribe";
import Footer from "../Blocks/Footer/Footer";
import BurgerMenu from "../Blocks/Header/BurgerMenu";
import Service from "../Blocks/Service/Service";
import Circle from '../Blocks/Team/Circle';

import Logo from "../../assets/img/Logo-about.png";
import { team } from "../../constant/team";
import '../../assets/styles/WorkPage.scss'


class WorkPage extends Component {
  render() {
    return (
      <div className="workpage">
        <div className="wrapper">
          <div className="aboutpage-header">
            <Link to="/">
              <img className="logo" src={Logo} alt="#" />
            </Link>
            <Menu />
            <div className="aboutpage-header-contact">(01) 666 - 693 - 456</div>
            <BurgerMenu />
          </div>
        </div>

        <div className="aboutpage-headline">
          <div className="wrapper">
            <h1 className="main-title">Our team</h1>
            <h3 className="about">We build great business</h3>
          </div>
        </div>

        <div className="workpage-intro">
          <Service
            title="We are"
            subtitle="Our team"
            about="Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Quam elementum pulvinar etiam non. Eu consequat."
          />
        </div>

        <div  className='workpage-team'>
          <div className='workpage-team-block'>
            <Circle  
              photo={team[1]}
              name={team[4].name}
              profession={team[1].profession}
              about={team[1].about}
              email={team[1].email}
              icon={team[1].icon}
            />
            <Circle             
              photo={team[0]}
              name={team[4].name}
              profession={team[0].profession}
              about={team[0].about}
              email={team[0].email}
              icon={team[0].icon}
            />    
          </div>  

          <div className='workpage-team-block'>
            <Circle
                photo={team[2]}              
                name={team[4].name}
                profession={team[2].profession}
                about={team[2].about}
                email={team[2].email}
                icon={team[2].icon}
              />

              <Circle
                photo={team[3]}              
                name={team[4].name}
                profession={team[3].profession}
                about={team[3].about}
                email={team[3].email}
                icon={team[3].icon}
              />    
          </div> 

          <div className='workpage-team-block'>
            <Circle
                photo={team[4]}              
                name={team[4].name}
                profession={team[4].profession}
                about={team[4].about}
                email={team[4].email}
                icon={team[4].icon}
              />

            <Circle
              photo={team[5]}            
              name={team[4].name}
              profession={team[5].profession}
              about={team[5].about}
              email={team[5].email}
              icon={team[5].icon}
            />    
            </div>
          </div>

        <div className="aboutpage-quote">
          <Review
            source={require("../../assets/img/EllipseBigService.png")}
            person="Jack Smith"
            company="Some Company"
            quote="Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique."
          />
        </div>

        <div className="aboutpage-subcribe">
          <Subscribe />
        </div>

        <div className="aboutpage-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default WorkPage;
