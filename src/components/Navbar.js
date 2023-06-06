import React from "react";
import "../components/Navbar.css";
import { GiBiceps } from "react-icons/gi";
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <nav>
          <h2 className="logo">
            <Link to="/home" style={{ textDecoration: 'none' , color:'white'}}>Code <span>Battles </span><GiBiceps/></Link>
          </h2>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <Link to="/signup">Login</Link>
            </li>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
          </ul>
          <div class="navbar-buttons">
            <Link to="/signup"><button type="button">Login</button></Link>
          </div>
        </nav>
      </>
    );
  }
}
