import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
export default class navbar extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }
        logout(){
            localStorage.clear();
            <Redirect to={"/"} />
        }
    render() {
        return (
            <div class="main-body">
                <nav class="navbar navbar-expand-lg fixed-top navbar-light">
                    <div class="container">
                       <h1>B-Kart</h1>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <Link to="/" class="nav-link">HOME <span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="shop" class="nav-link">SHOP</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/faq" class="nav-link disabled">FAQ</Link>
                                </li>
                                {/* <li class="nav-item">
                                    <Link to="/contact-us" class="nav-link disabled">CONTACT</Link>
                                </li> */}
                                <li class="nav-item">
                                    <Link to="/cart" class="nav-link disabled">CART</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/account" class="nav-link disabled">ACCOUNT</Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" onClick={this.logout}>LOG OUT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}