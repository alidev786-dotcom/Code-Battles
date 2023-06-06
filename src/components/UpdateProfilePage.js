import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../components/UpdateProfilePage.css';
import HomeBody from './HomeBody';
import UpdateProfileContent from './UpdateProfileContent' ;

export default class Home extends Component {
  render() {
    return (
      <div className='signupHero'>
        <Navbar/>
        <div class="registerBody">
        <UpdateProfileContent/>
        </div>
        <Footer/> 
      </div>
    )
  }
}
