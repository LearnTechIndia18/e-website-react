import React from 'react';
// import logo from './logo.svg';
// import Navbar from './components/layouts/navbar'
import Header from './header'
import Products from './products'
import Offers from './offers'
import FeaturedProducts from './featuredProducts'
import PopularBrands from './popularBrand'
// import Footer from './components/layouts/footer'
// import Contact from './components/contact-us/contact'
import '../../App.css';

class dashboard extends React.Component{
  render(){
  return (
    <div className="App">
      <Header/>
      <Products/>
      <Offers/>
      <FeaturedProducts/>
      <PopularBrands/>
    </div>
  );
  }
}

export default dashboard;
