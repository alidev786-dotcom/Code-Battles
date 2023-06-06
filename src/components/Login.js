import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";
import { AiFillLock } from "react-icons/ai"; 
import React from "react-dom";
import "../components/Login.css";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <>
      <section>
        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Login</h2>
                    <div class="inputbox">
                        <input type="email" required/>
                        <label for=""><AiFillLock/> Email</label>
                    </div>
                    <div class="inputbox">
                        <input type="password" required/>
                        <label for=""><AiFillLock/> Password</label>
                    </div>
                    <div class="forget">
                        <label for=""><input type="checkbox"/>Remember Me<br/></label>
                    </div>
                    <button>Log in</button>&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" className="forget_anchor">Forget Password</a>
                    <div class="register">
                        <p>Don't have a account?  <Link to="/register">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </section>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </>
    );
  }
}
