import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../components/RegisterPage.css';
import HomeBody from './HomeBody';
import Register from './Register';

export default class Home extends Component {
  render() {
    return (
      <div className='signupHero'>
        <Navbar/>
        <div class="registerBody">
        <Register/>
        </div>
        <Footer/> 
      </div>
    )
  }
}
