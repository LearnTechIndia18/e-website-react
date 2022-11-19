import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
export default class shopping extends React.Component {
    render() {
        return (
            <div class="main-body">
<section class="shop-page-sec">
		<div class="container-middle container">
			<div class="shop-page-div">
				<div class="banner">
					<div class="flex-div">
						<div class="left">

							<div class="row">
								<div class="col-lg-6">
									<div class="flex-div">
										<div class="top">
											<span class="tag">Tag</span>
										</div>
										<div class="middle">
											<p class="sub-content">Specifications</p>
											<h5 class="main-heading">ISHWA Men's Checkered Casual Cutaway Collar Shirt</h5>
										</div>
										<div class="bottom">
											<button class="btn button-defalte" type="subnit">But Now</button>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="main-img">
										<img src="images/dress-4.png" alt="no images"/>
									</div>
								</div>
							</div>
							
						</div>
						<div class="right">

							<div class="row">
								<div class="col-lg-6">
									<div class="flex-div">
										<div class="top">
											<span class="tag">Tag</span>
										</div>
										<div class="middle">
											<p class="sub-content">Specifications</p>
											<h5 class="main-heading">ISHWA Men's Checkered Casual Cutaway Collar Shirt</h5>
										</div>
										<div class="bottom">
											<button class="btn button-defalte" type="subnit">But Now</button>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="main-img">
										<img src="images/dress-5.png" alt="no images"/>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div class="product">
					<div class="row no-gutters-0">
						<div class="col-lg-3">
							<div class="filters">
								<div class="heading">
									<h5 class="main-heading">FILTERS</h5>
								</div>
								<div class="filters-list">
									<div class="accordion" id="accordionExample">
									  <div class="card">
									    <div class="card-header" id="headingOne">
									      <h5 class="mb-0">
									        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									          CATEGORIES
									        </button>
									      </h5>
									    </div>

									    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
										    <div class="card-body">
										        <ul class="list-group">
												  	<li class="list-group-item">
												  		<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Bellies
												    		<span class="badge-pill">1</span>
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Boat Shoes
												    		<span class="badge-pill">22</span>
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Boots
												    		<span class="badge-pill">11</span>
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Brogues
												    		<span class="badge-pill">8</span>
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Canvas Shoes
												    		<span class="badge-pill">22</span>
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Casuals
												    		<span class="badge-pill">54</span>
												  		</a>
												  	</li>
												</ul>
										    </div>
									    </div>
									  </div>
									  <div class="card">
									    <div class="card-header" id="headingTwo">
									      <h5 class="mb-0">
									        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
									          PRICE
									        </button>
									      </h5>
									    </div>
									    <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
									      <div class="card-body">
									        <div class="price">
									        	<div class="top">
									        		<div class="left">
									        			<p class="sub-heading">Min</p>
									        			<input type="text" name="min" value="1500"/>
									        		</div>
									        		<div class="right">
									        			<p class="sub-heading">Max</p>
									        			<input type="text" name="max" value="15000"/>
									        		</div>
									        	</div>
									        	<div class="bottom">
									        		<input type="text" id="range_03" name="example_name" value="" />
									        	</div>
									        </div>
									      </div>
									    </div>
									  </div>
									  <div class="card">
									    <div class="card-header" id="headingThree">
									      <h5 class="mb-0">
									        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
									          BRAND
									        </button>
									      </h5>
									    </div>
									    <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
									      <div class="card-body">
									      	<div class="brand-div">
										        <ul class="list-group">
												  	<li class="list-group-item">
												  		<div class="search-div">
												  			<input type="text" name="search" placeholder="Search"/>
												  			<i class="la la-search"></i>
												  		</div>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Boat Shoes
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Boots
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Brogues
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Canvas Shoes
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Casuals
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="more">
												  			250 More
												  		</a>
												  	</li>
												</ul>
											</div>
									      </div>
									    </div>
									  </div>
									  <div class="card">
									    <div class="card-header" id="headingThree1">
									      <h5 class="mb-0">
									        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree1" aria-expanded="true" aria-controls="collapseThree1">
									          THEME
									        </button>
									      </h5>
									    </div>
									    <div id="collapseThree1" class="collapse show" aria-labelledby="headingThree1" data-parent="#accordionExample">
									      <div class="card-body">
									        <div class="brand-div">
										        <ul class="list-group">
												  	<li class="list-group-item">
												  		<div class="search-div">
												  			<input type="text" name="search" placeholder="Search"/>
												  			<i class="la la-search"></i>
												  		</div>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Boat Shoes
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Boots
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Brogues
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Canvas Shoes
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Casuals
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="more">
												  			250 More
												  		</a>
												  	</li>
												</ul>
											</div>
									      </div>
									    </div>
									  </div>
									  <div class="card">
									    <div class="card-header" id="headingThree2">
									      <h5 class="mb-0">
									        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree2" aria-expanded="true" aria-controls="collapseThree2">
									          DISCOUNT
									        </button>
									      </h5>
									    </div>
									    <div id="collapseThree2" class="collapse show" aria-labelledby="headingThree2" data-parent="#accordionExample">
									      <div class="card-body">
									        <div class="brand-div">
										        <ul class="list-group">
												  	<li class="list-group-item">
												  		<div class="search-div">
												  			<input type="text" name="search" placeholder="Search"/>
												  			<i class="la la-search"></i>
												  		</div>
												  	</li> 
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Less than 10%
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			10% or More
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			20% or More
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			30% or More
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			40% or More
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			50% or More
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="more">
												  			250 More
												  		</a>
												  	</li>
												</ul>
											</div>
									      </div>
									    </div>
									  </div>
									  <div class="card">
									    <div class="card-header" id="headingThree3">
									      <h5 class="mb-0">
									        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree3" aria-expanded="true" aria-controls="collapseThree3">
									          COLOR
									        </button>
									      </h5>
									    </div>
									    <div id="collapseThree3" class="collapse show" aria-labelledby="headingThree3" data-parent="#accordionExample">
									      <div class="card-body">
									        <div class="brand-div">
										        <ul class="list-group">
												  	<li class="list-group-item">
												  		<div class="search-div">
												  			<input type="text" name="search" placeholder="Search"/>
												  			<i class="la la-search"></i>
												  		</div>
												  	</li> 
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Beige
												  			<span class="beige">
												  			</span>
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Black
												  			<span class="black">
												  				
												  			</span>
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Blue
												  			<span class="blue">
												  				
												  			</span>
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Bronze
												  			<span class="bronze">
												  				
												  			</span>
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			Burgundy
												  			<span class="burgundy">
												  				
												  			</span>
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="more">
												  			20 More
												  		</a>
												  	</li>
												</ul>
											</div>
									      </div>
									    </div>
									  </div>
									  <div class="card">
									    <div class="card-header" id="headingThree4">
									      <h5 class="mb-0">
									        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree4" aria-expanded="true" aria-controls="collapseThree4">
									          OCCASION
									        </button>
									      </h5>
									    </div>
									    <div id="collapseThree4" class="collapse show" aria-labelledby="headingThree4" data-parent="#accordionExample">
									      <div class="card-body">
									        <ul class="list-group">
											  	<li class="list-group-item">
											  		<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
											  			Casuals
											  		</a>
											  	</li>
											  	<li class="list-group-item">
											    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
											  			Party
											  		</a>
											  	</li>
											  	<li class="list-group-item">
											    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
											  			Wedding
											  		</a>
											  	</li>
											</ul>
									      </div>
									    </div>
									  </div>
									  <div class="card">
									    <div class="card-header" id="headingThree5">
									      <h5 class="mb-0">
									        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree5" aria-expanded="true" aria-controls="collapseThree5">
									          SIZE - UK/INDIA
									        </button>
									      </h5>
									    </div>
									    <div id="collapseThree5" class="collapse show" aria-labelledby="headingThree5" data-parent="#accordionExample">
									      <div class="card-body">
									      	<div class="brand-div">
										        <ul class="list-group">
												  	<li class="list-group-item">
												  		<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			5
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			5.5
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			6
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			6.5
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			7
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			7.5
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			8
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="more">
												  			20 More
												  		</a>
												  	</li>
												</ul>
											</div>
									      </div>
									    </div>
									  </div>
									  <div class="card">
									    <div class="card-header" id="headingThree6">
									      <h5 class="mb-0">
									        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree6" aria-expanded="teue" aria-controls="collapseThree6">
									          CUSTOMER RATINGS
									        </button>
									      </h5>
									    </div>
									    <div id="collapseThree6" class="collapse show" aria-labelledby="headingThree6" data-parent="#accordionExample">
									      <div class="card-body">
									        <div class="brand-div">
										        <ul class="list-group">
												  	<li class="list-group-item">
												  		<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			4★ & above
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			3★ & above
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			2★ & above
												  		</a>
												  	</li>
												  	<li class="list-group-item">
												    	<a href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
												  			1★ & above
												  		</a>
												  	</li>
												</ul>
											</div>
									      </div>
									    </div>
									  </div>
									</div>

								</div>
							</div>
						</div>
						<div class="col-lg-9">
							<div class="filters-right">
								<div class="flex-div">
									<div class="left">
										<div class="heading">
											<h5 class="main-heading">FILTERS</h5>
										</div>
									</div>
									<div class="right">
										<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
										  	<li class="nav-item">
										    	<a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
										    		<i class="la la-table"></i>
										    	</a>
										 	</li>
										  	<li class="nav-item">
										    	<a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">		<i class="la la-list"></i>
										    	</a>
										  	</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="main-flex-div">
								<div class="top">
									<div class="product-list-main">
										<div class="tab-content" id="pills-tabContent">
										  	<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
										  		<div class="product-list">
									      			<div class="row">
									      				<div class="col-lg-3">
									      					<div class="prodict">
									      						<a href="javascript:void(0)" class="overall-div"></a>
									      						<div class="top-img">
									      							<div class="main-img">
									      								<img src="images/dress-1.png" alt="no images"/>
									      							</div>
									      							<div class="discount">
									      								<span>-12%</span>
									      							</div>
									      							<div class="icon-list">
									      								<div class="list">
								      										<a href="javascript:void(0)" class="search">
								      											<i class="la la-search"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="wish-list">
								      											<i class="la la-heart-o"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="cart">
								      											<i class="la la-shopping-cart"></i>
								      										</a>
									      								</div>
									      							</div>
									      						</div>
									      						<div class="prodict-dearils">
									      							<p class="name">Derby Tier Backpack</p>
									      							<div class="stars">
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      							</div>
									      							<div class="amount">
									      								<span class="canceld-amount">$25.00</span>
									      								<span class="main-amount">$22.00</span>
									      							</div>
									      						</div>
									      					</div>
									      				</div>
									      				<div class="col-lg-3">
									      					<div class="prodict">
									      						<a href="javascript:void(0)" class="overall-div"></a>
									      						<div class="top-img">
									      							<div class="main-img">
									      								<img src="images/dress-2.png" alt="no images"/>
									      							</div>
									      							<div class="discount">
									      								<span>-12%</span>
									      							</div>
									      							<div class="icon-list">
									      								<div class="list">
								      										<a href="javascript:void(0)" class="search">
								      											<i class="la la-search"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="wish-list">
								      											<i class="la la-heart-o"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="cart">
								      											<i class="la la-shopping-cart"></i>
								      										</a>
									      								</div>
									      							</div>
									      						</div>
									      						<div class="prodict-dearils">
									      							<p class="name">Derby Tier Backpack</p>
									      							<div class="stars star-active">
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span  class="no-color"><i class="la la-star"></i></span>
									      							</div>
									      							<div class="amount">
									      								<span class="canceld-amount">$25.00</span>
									      								<span class="main-amount">$22.00</span>
									      							</div>
									      						</div>
									      					</div>
									      				</div>
									      				<div class="col-lg-3">
									      					<div class="prodict">
									      						<a href="javascript:void(0)" class="overall-div"></a>
									      						<div class="top-img">
									      							<div class="main-img">
									      								<img src="images/dress-3.png" alt="no images"/>
									      							</div>
									      							<div class="discount">
									      								<span>-12%</span>
									      							</div>
									      							<div class="icon-list">
									      								<div class="list">
								      										<a href="javascript:void(0)" class="search">
								      											<i class="la la-search"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="wish-list">
								      											<i class="la la-heart-o"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="cart">
								      											<i class="la la-shopping-cart"></i>
								      										</a>
									      								</div>
									      							</div>
									      						</div>
									      						<div class="prodict-dearils">
									      							<p class="name">Derby Tier Backpack</p>
									      							<div class="stars">
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      							</div>
									      							<div class="amount">
									      								<span class="canceld-amount">$25.00</span>
									      								<span class="main-amount">$22.00</span>
									      							</div>
									      						</div>
									      					</div>
									      				</div>
									      				<div class="col-lg-3">
									      					<div class="prodict">
									      						<a href="javascript:void(0)" class="overall-div"></a>
									      						<div class="top-img">
									      							<div class="main-img">
									      								<img src="images/dress-4.png" alt="no images"/>
									      							</div>
									      							<div class="discount">
									      								<span>-12%</span>
									      							</div>
									      							<div class="icon-list">
									      								<div class="list">
								      										<a href="javascript:void(0)" class="search">
								      											<i class="la la-search"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="wish-list">
								      											<i class="la la-heart-o"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="cart">
								      											<i class="la la-shopping-cart"></i>
								      										</a>
									      								</div>
									      							</div>
									      						</div>
									      						<div class="prodict-dearils">
									      							<p class="name">Derby Tier Backpack</p>
									      							<div class="stars">
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      							</div>
									      							<div class="amount">
									      								<span class="canceld-amount">$25.00</span>
									      								<span class="main-amount">$22.00</span>
									      							</div>
									      						</div>
									      					</div>
									      				</div>
									      				<div class="col-lg-3">
									      					<div class="prodict">
									      						<a href="javascript:void(0)" class="overall-div"></a>
									      						<div class="top-img">
									      							<div class="main-img">
									      								<img src="images/dress-5.png" alt="no images"/>
									      							</div>
									      							<div class="discount">
									      								<span>-12%</span>
									      							</div>
									      							<div class="icon-list">
									      								<div class="list">
								      										<a href="javascript:void(0)" class="search">
								      											<i class="la la-search"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="wish-list">
								      											<i class="la la-heart-o"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="cart">
								      											<i class="la la-shopping-cart"></i>
								      										</a>
									      								</div>
									      							</div>
									      						</div>
									      						<div class="prodict-dearils">
									      							<p class="name">Derby Tier Backpack</p>
									      							<div class="stars">
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      							</div>
									      							<div class="amount">
									      								<span class="canceld-amount">$25.00</span>
									      								<span class="main-amount">$22.00</span>
									      							</div>
									      						</div>
									      					</div>
									      				</div>
									      				<div class="col-lg-3">
									      					<div class="prodict">
									      						<a href="javascript:void(0)" class="overall-div"></a>
									      						<div class="top-img">
									      							<div class="main-img">
									      								<img src="images/dress-6.png" alt="no images"/>
									      							</div>
									      							<div class="discount">
									      								<span>-12%</span>
									      							</div>
									      							<div class="icon-list">
									      								<div class="list">
								      										<a href="javascript:void(0)" class="search">
								      											<i class="la la-search"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="wish-list">
								      											<i class="la la-heart-o"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="cart">
								      											<i class="la la-shopping-cart"></i>
								      										</a>
									      								</div>
									      							</div>
									      						</div>
									      						<div class="prodict-dearils">
									      							<p class="name">Derby Tier Backpack</p>
									      							<div class="stars">
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      							</div>
									      							<div class="amount">
									      								<span class="canceld-amount">$25.00</span>
									      								<span class="main-amount">$22.00</span>
									      							</div>
									      						</div>
									      					</div>
									      				</div>
									      				<div class="col-lg-3">
									      					<div class="prodict">
									      						<a href="javascript:void(0)" class="overall-div"></a>
									      						<div class="top-img">
									      							<div class="main-img">
									      								<img src="images/dress-7.png" alt="no images"/>
									      							</div>
									      							<div class="discount">
									      								<span>-12%</span>
									      							</div>
									      							<div class="icon-list">
									      								<div class="list">
								      										<a href="javascript:void(0)" class="search">
								      											<i class="la la-search"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="wish-list">
								      											<i class="la la-heart-o"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="cart">
								      											<i class="la la-shopping-cart"></i>
								      										</a>
									      								</div>
									      							</div>
									      						</div>
									      						<div class="prodict-dearils">
									      							<p class="name">Derby Tier Backpack</p>
									      							<div class="stars">
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      							</div>
									      							<div class="amount">
									      								<span class="canceld-amount">$25.00</span>
									      								<span class="main-amount">$22.00</span>
									      							</div>
									      						</div>
									      					</div>
									      				</div>
									      				<div class="col-lg-3">
									      					<div class="prodict">
									      						<a href="javascript:void(0)" class="overall-div"></a>
									      						<div class="top-img">
									      							<div class="main-img">
									      								<img src="images/dress-8.png" alt="no images"/>
									      							</div>
									      							<div class="discount">
									      								<span>-12%</span>
									      							</div>
									      							<div class="icon-list">
									      								<div class="list">
								      										<a href="javascript:void(0)" class="search">
								      											<i class="la la-search"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="wish-list">
								      											<i class="la la-heart-o"></i>
								      										</a>
								      										<a href="javascript:void(0)" class="cart">
								      											<i class="la la-shopping-cart"></i>
								      										</a>
									      								</div>
									      							</div>
									      						</div>
									      						<div class="prodict-dearils">
									      							<p class="name">Derby Tier Backpack</p>
									      							<div class="stars">
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      								<span><i class="la la-star"></i></span>
									      							</div>
									      							<div class="amount">
									      								<span class="canceld-amount">$25.00</span>
									      								<span class="main-amount">$22.00</span>
									      							</div>
									      						</div>
									      					</div>
									      				</div>
									      			</div>
									      		</div>
										  	</div>
										  	<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
										  		<div class="table-list">
													<table class="table table-borderless">
													 	<tbody>
														    <tr>
														      	<th scope="row">
														      		<div class="main-img">
														      			<img src="images/s9.jpeg"/>
														      		</div>
														      	</th>
														      	<td>
														      		<div class="content">
														      			<h6 class="main-heading">Lee Cooper Men Genuine Leather Corporate</h6>
														      			<p class="sub-content">Genuine Leather</p>
														      		</div>
														      	</td>
														      	<td>
														     		<div class="price">
														     			$120.00
														     		</div>
														     	</td>
														     	<td>
														     		<div class="offer">
														     			-20%
														     		</div>
														     	</td>
														      	<td>
														      		<div class="wish-list">
														      			<ul class="list-inline">
														      				<li class="list-inline-item active">
														      					<a href="javascript:void(0)">
														      						<i class="la la-shopping-cart"></i>
														      					</a>
														      				</li>
														      				<li class="list-inline-item">
														      					<a href="javascript:void(0)">
														      						<i class="la la-heart-o"></i>
														      					</a>
														      				</li>
														      			</ul>
														      		</div>
														      	</td>
														     	
														      	<td>
														      		<div class="buy-btn">
															      		<button class="btn button-defalte" type="subnit">
															      			Buy
															      		</button>
															      	</div>
														      	</td>
														    </tr>

														    <tr>
														      	<th scope="row">
														      		<div class="main-img">
														      			<img src="images/s5.png"/>
														      		</div>
														      	</th>
														      	<td>
														      		<div class="content">
														      			<h6 class="main-heading">Lee Cooper Men Genuine Leather Corporate</h6>
														      			<p class="sub-content">Genuine Leather</p>
														      		</div>
														      	</td>
														     	<td>
														     		<div class="price">
														     			$120.00
														     		</div>
														     	</td>
														     	<td>
														     		<div class="offer">
														     			-20%
														     		</div>
														     	</td>
														      	<td>
														      		<div class="wish-list">
														      			<ul class="list-inline">
														      				<li class="list-inline-item active">
														      					<a href="javascript:void(0)">
														      						<i class="la la-shopping-cart"></i>
														      					</a>
														      				</li>
														      				<li class="list-inline-item">
														      					<a href="javascript:void(0)">
														      						<i class="la la-heart-o"></i>
														      					</a>
														      				</li>
														      			</ul>
														      		</div>
														      	</td>
														     	
														      	<td>
														      		<div class="buy-btn">
															      		<button class="btn button-defalte" type="subnit">
															      			Buy
															      		</button>
															      	</div>
														      	</td>
														    </tr>

														    <tr>
														      	<th scope="row">
														      		<div class="main-img">
														      			<img src="images/s6.png"/>
														      		</div>
														      	</th>
														      	<td>
														      		<div class="content">
														      			<h6 class="main-heading">Lee Cooper Men Genuine Leather Corporate</h6>
														      			<p class="sub-content">Genuine Leather</p>
														      		</div>
														      	</td>
														     	<td>
														     		<div class="price">
														     			$120.00
														     		</div>
														     	</td>
														     	<td>
														     		<div class="offer">
														     			-20%
														     		</div>
														     	</td>
														      	<td>
														      		<div class="wish-list">
														      			<ul class="list-inline">
														      				<li class="list-inline-item active">
														      					<a href="javascript:void(0)">
														      						<i class="la la-shopping-cart"></i>
														      					</a>
														      				</li>
														      				<li class="list-inline-item">
														      					<a href="javascript:void(0)">
														      						<i class="la la-heart-o"></i>
														      					</a>
														      				</li>
														      			</ul>
														      		</div>
														      	</td>
														     	
														      	<td>
														      		<div class="buy-btn">
															      		<button class="btn button-defalte" type="subnit">
															      			Buy
															      		</button>
															      	</div>
														      	</td>
														    </tr>

														    <tr>
														      	<th scope="row">
														      		<div class="main-img">
														      			<img src="images/s7.png"/>
														      		</div>
														      	</th>
														      	<td>
														      		<div class="content">
														      			<h6 class="main-heading">Lee Cooper Men Genuine Leather Corporate</h6>
														      			<p class="sub-content">Genuine Leather</p>
														      		</div>
														      	</td>
														     	<td>
														     		<div class="price">
														     			$120.00
														     		</div>
														     	</td>
														     	<td>
														     		<div class="offer">
														     			-20%
														     		</div>
														     	</td>
														      	<td>
														      		<div class="wish-list">
														      			<ul class="list-inline">
														      				<li class="list-inline-item active">
														      					<a href="javascript:void(0)">
														      						<i class="la la-shopping-cart"></i>
														      					</a>
														      				</li>
														      				<li class="list-inline-item">
														      					<a href="javascript:void(0)">
														      						<i class="la la-heart-o"></i>
														      					</a>
														      				</li>
														      			</ul>
														      		</div>
														      	</td>
														     	
														      	<td>
														      		<div class="buy-btn">
															      		<button class="btn button-defalte" type="subnit">
															      			Buy
															      		</button>
															      	</div>
														      	</td>
														    </tr>
													  	</tbody>
													</table>
												</div>
										  	</div>
										</div>
									</div>
								</div>
								<div class="bottom">
									<nav aria-label="Page navigation example">
									  	<ul class="pagination">
										    <li class="page-item">
										      <a class="page-link" href="#" aria-label="Previous">
										        <span aria-hidden="true">
										        	<i class="la la-angle-left"></i>
										        </span>
										        <span class="sr-only">Previous</span>
										      </a>
										    </li>
										    <li class="page-item"><a class="page-link" href="#">1</a></li>
										    <li class="page-item"><a class="page-link" href="#">2</a></li>
										    <li class="page-item"><a class="page-link" href="#">3</a></li>
										    <li class="page-item">
										      <a class="page-link" href="#" aria-label="Next">
										        <span aria-hidden="true">
										        	<i class="la la-angle-right"></i>
										        </span>
										        <span class="sr-only">Next</span>
										      </a>
										    </li>
									  	</ul>
									</nav>
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