import React  from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ChangeTitle } from "../util/ChangeTitle";
export default class ForgotPassword extends Component{
    render(){
        ChangeTitle("Forgot Password : E-commerce");
        return(
            <div class="container-fluid pages" style={{ width: '600px' }}>
            <div class="col-12 grid-margin  ">
   
            <div class="main1">
            <h1 class="forgot-pass" align="center">Forgot Password</h1>
             
            <div className="row">
            <form class="forms-sample" autoComplete='off'>
            <div class="col-md-11-sm-11-lg-11">
            <input class="un " type="text" align="center" placeholder="Username"/>  
            </div>
            <div class="col-md-11-sm-11-lg-11">
            <input class="pass" type="password" align="center" placeholder="Old Password"/>
            </div>
            <div class="col-md-11-sm-11-lg-11">
            <input class="pass" type="password" align="center" placeholder="New Password"/>
            </div>
            <div class="col-md-11-sm-11-lg-11">
            <input class="pass" type="password" align="center" placeholder="Confirm Password"/>
            </div>
            <div class="col-md-11-sm-11-lg-11 m-2">
            <Link class="submit" align="center" to="/">Submit</Link>
            </div>
            
            </form>   
            </div>
         
            </div>
            </div>
            </div>

           
        )
    }
}