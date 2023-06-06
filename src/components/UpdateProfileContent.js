import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";
import { AiOutlineUserDelete, AiOutlineLock,AiOutlineFieldTime, AiFillContacts } from "react-icons/ai"; 
import { FaRegAddressBook } from "react-icons/fa";

import React from "react-dom";
export default class Register extends Component {
    constructor(){
        super();
        var error = "" ;
        this.state = {
            password: "",
            confirmPassword: ""
        }
    }

    //function which returns current date
    getCurrentDateInput = () => {

        const dateObj = new Date();
      
        // get the month in this format of 04, the same for months
        const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        const day = ("0" + dateObj.getDate()).slice(-2);
        const year = dateObj.getFullYear();
      
        const shortDate = `${year}-${month}-${day}`;
      
        return shortDate;
      };

    passwordMatch(){
        if(this.state.password=="" && this.state.confirmPassword=="")
        {
            this.error = "" ;
        }
        else if(this.state.password==this.state.confirmPassword && this.state.password!="" && this.state.confirmPassword!="")
        {
            this.error = "matched";   
        }
        else
            this.error = 'passwords do not match!' ;
    }  
  render() {
    return (
      <>
      <section>
        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Update Profile</h2>
                    <div class="inputbox">
                        <input type="text" required/>
                        <label for=""><AiOutlineUserDelete color="#adb5bd70"/> Name</label>
                    </div>
                    <div class="inputbox">
                        <input type="email" required/>
                        <label for=""><AiOutlineLock color="#adb5bd70"/> Email</label>
                    </div>
                    <div class="inputbox">
                        <input type="date"required />
                        <label for=""><AiOutlineFieldTime color="#adb5bd70"/> Date of birth</label>
                    </div>
                    <div class="inputbox">
                        <input type="number"required />
                        <label for=""><AiFillContacts color="#adb5bd70"/> Contact</label>
                    </div>
                    <div class="inputbox">
                        <input type="text"required />
                        <label for=""><FaRegAddressBook color="#adb5bd70"/> City</label>
                    </div>
                    <div class="inputbox">
                        <input type="text"required />
                        <label for=""><FaRegAddressBook color="#adb5bd70"/> Country</label>
                    </div>
                    <div class="inputbox">
                        <input type="number"required />
                        <label for=""><FaRegAddressBook color="#adb5bd70"/> Postal Code</label>
                    </div>
                    <div class="inputbox">
                        <input type="password"required onChange={(e)=>{this.setState({password:e.target.value});}}/>
                        <label for=""><FaRegAddressBook color="#adb5bd70"/> password</label>
                    </div>
                    <div class="inputbox">
                        <input type="password"required onChange={(e)=>{this.setState({confirmPassword:e.target.value});}} onBeforeInput={this.passwordMatch()} />
                        <label for=""><FaRegAddressBook color="#adb5bd70"/> confirm password</label>
                    </div>
                    <p className="text-danger">{this.error}</p>
                    <button id="loginButton">Update</button>
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
