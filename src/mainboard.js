import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layouts/navbar'
import Footer from './components/layouts/footer'
import Dashboard from './components/productsView';
import Contactus from './components/contact-us/contact';
import Cart from './components/cart/cart'
import Faq from './components/faq/faq';
import Shop from './components/shop/shop'
import Account from './components/account/account';

class mainboard extends React.Component{
  render(){
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/contact-us" component={Contactus} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/faq" component={Faq}/>
      <Route exact path="/shop" component={Shop}/>
      <Route exact path="/account" component={Account}/>
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
  }
}

export default mainboard;
