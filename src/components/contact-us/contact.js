import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
export default class Contactus extends React.Component {
    render() {
        return (
            <div class="main-body">
                <section class="contact-sec">
                    <div class="contact-div">
                        <div class="contact-inner-div">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.609048035681!2d80.2380553148229!3d13.06053899079755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666706f4f133%3A0x31a746b7d6f3638a!2sNanlogical+Consultancy+Services+Pvt.+Ltd.%2C!5e0!3m2!1sen!2sin!4v1534229244493" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                        </div>
                        <div class="small-bottom">
                            <div class="container">
                                <div class="content-main">
                                    <div class="content">
                                        Value, Description, Play it. baseline, The element is aligned
                                    </div>
                                    <a href="javascript:void(0)" class="add-btn">
                                        <i class="la la-close"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="full-page">
                            <div class="flex-div">
                                <div class="top">
                                    <div class="container">
                                        <div class="content">
                                            <p class="sub-content">Contact.</p>
                                            <h3 class="main-header">Say Hi!</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xl-8">
                                                <form>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="inputText1">User Name</label>
                                                            <input type="text" class="form-control" id="inputText1" placeholder="User Name"/>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="inputText2">Phone</label>
                                                            <input type="password" class="form-control" id="inputText2" placeholder="Phone"/>
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="inputEmail4">Email</label>
                                                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="inputPassword4">Password</label>
                                                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputAddress">Address</label>
                                                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary button-defalte">Send</button>
                                                </form>
                                                <a href="javascript:void(0)" class="close-btn"><i class="la la-map-marker"></i></a>
                                            </div>
                                            <div class="col-xl-4">
                                                <div class="contact-right">
                                                    <div class="call">
                                                        <p class="name">Call Us</p>
                                                        <p class="sub-content">+91 9986945389</p>
                                                    </div>
                                                    <div class="call">
                                                        <p class="name">E-mail</p>
                                                        <p class="sub-content">Hellow@gnail.com</p>
                                                    </div>
                                                    <div class="call">
                                                        <p class="name">Address</p>
                                                        <p class="sub-content">														1/44 big street<br />
                                                            fabakdfkadnfadfadf<br />
                                                            viklllsjdsj
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}