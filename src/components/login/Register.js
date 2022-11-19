import React  from "react";
import { Component } from "react";
 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ChangeTitle } from "../util/ChangeTitle";
export default class Register extends Component{
    render(){
        ChangeTitle("Register : E-commerce");
        return(
            <div class="container-fluid pages" style={{ width: '600px' }}>
            <div class="col-12 grid-margin  ">
 
            <div class="main1">
            <h1 class="sign" align="center">Welcome to E-commerce, Sign Up to join with us!</h1>
             
            <div className="row">
            <form class="forms-sample" autoComplete='off'>
            <div class="col-md-11-sm-11-lg-11">
            <input class="un" type="text" align="center" placeholder="Username"/>  
            </div>
            <div class="col-md-11-sm-11-lg-11">
            <input class="pass" type="email" align="center" placeholder="E-mail"required/>
            </div>
            <div class="col-md-11-sm-11-lg-11">
            <input class="un" type="number" align="center" placeholder="Phone Number"/>  
            </div>
            <div class="col-md-11-sm-11-lg-11">
            <input class="pass" type="pass" align="center" placeholder="Password"required/>
            </div>
            <div class="col-md-11-sm-11-lg-11 m-2">
            <Link class="submit" align="center" to="/" style={{fontWeight:'bolder'}}>Sign Up</Link>
            </div>
            
            </form>   
            </div>
         
            </div>
            </div>
            </div>

         
        )
    }
}