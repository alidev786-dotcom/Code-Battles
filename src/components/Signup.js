import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../components/Signup.css';
import HomeBody from './HomeBody';
import Login from './Login';


export default class Home extends Component {
  render() {
    return (
      <div className='signupHero'>
        <Navbar/>
        <div class="signupBody">
        <Login/>
        </div>
        <Footer/> 
      </div>
    )
  }
}
