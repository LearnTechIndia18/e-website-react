import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../../App.css'
import Banner from './banner-sec'
import Shopping from './shop-page'

class Shop extends React.Component{
    render(){
    return (
        <div className="App">
            <Banner/>
            <Shopping/>
        </div>
    )
    }
}
export default Shop;