import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
export default class Products extends React.Component {
    render() {
        return (
            <div class="main-body">
<section class="product-list-sec">
		<div class="container container-middle">
			<div class="product-list-div">
				<div class="heading">
					<h3 class="main-heading">Top Products</h3>
				</div>
				<div class="row">
					<div class="col-lg-1">
						<div class="left-list">
							<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						      	<a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
						      		<div class="iconic-div text-center">
						      			<div class="main-img">
						      				<img src="images/icons/dress.png" alt="no images" class="img-b"/>
						      				<img src="images/icons/dress-w.png" alt="no images" class="img-w"/>
						      			</div>
						      			<p class="sub-content">Dress</p>
						      		</div>
						      	</a>
						      	<a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
						      		<div class="iconic-div text-center">
						      			<div class="main-img">
						      				<img src="images/icons/glasses.png" alt="no images" class="img-b"/>
						      				<img src="images/icons/glasses-w.png" alt="no images" class="img-w"/>
						      			</div>
						      			<p class="sub-content">Glasses</p>
						      		</div>
						      	</a>
						      	<a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
						      		<div class="iconic-div text-center">
						      			<div class="main-img">
						      				<img src="images/icons/h-bag.png" alt="no images" class="img-b"/>
						      				<img src="images/icons/h-bag-w.png" alt="no images" class="img-w"/>
						      			</div>
						      			<p class="sub-content">Hand Bag</p>
						      		</div>
						      	</a>
						      	<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
						      		<div class="iconic-div text-center">
						      			<div class="main-img">
						      				<img src="images/icons/shoe.png" alt="no images" class="img-b"/>
						      				<img src="images/icons/shoe-w.png" alt="no images" class="img-w"/>
						      			</div>
						      			<p class="sub-content">Shoes</p>
						      		</div>
						      	</a>
						      	<a class="nav-link" id="v-pills-settings-tab1" data-toggle="pill" href="#v-pills-settings1" role="tab" aria-controls="v-pills-settings1" aria-selected="false">
						      		<div class="iconic-div text-center">
						      			<div class="main-img">
						      				<img src="images/icons/t-bag.png" alt="no images" class="img-b"/>
						      				<img src="images/icons/t-bag-w.png" alt="no images" class="img-w"/>
						      			</div>
						      			<p class="sub-content">Travel Bag</p>
						      		</div>
						      	</a>
						      	<a class="nav-link" id="v-pills-settings-tab2" data-toggle="pill" href="#v-pills-settings2" role="tab" aria-controls="v-pills-settings2" aria-selected="false">
						      		<div class="iconic-div text-center">
						      			<div class="main-img">
						      				<img src="images/icons/w-machine.png" alt="no images" class="img-b"/>
						      				<img src="images/icons/w-machine-w.png" alt="no images" class="img-w"/>
						      			</div>
						      			<p class="sub-content">Elec Machins</p>
						      		</div>
						      	</a>
						      	<a class="nav-link" id="v-pills-settings-tab3" data-toggle="pill" href="#v-pills-settings3" role="tab" aria-controls="v-pills-settings3" aria-selected="false">
						      		<div class="iconic-div text-center">
						      			<div class="main-img">
						      				<img src="images/icons/wristwatch.png" alt="no images" class="img-b"/>
						      				<img src="images/icons/wristwatch-w.png" alt="no images" class="img-w"/>
						      			</div>
						      			<p class="sub-content">Watch</p>
						      		</div>
						      	</a>
						      	<a class="nav-link" id="v-pills-settings-tab4" data-toggle="pill" href="#v-pills-settings4" role="tab" aria-controls="v-pills-settings4" aria-selected="false">
						      		<div class="iconic-div text-center">
						      			<div class="main-img">
						      				<img src="images/icons/sneaker.png" alt="no images" class="img-b"/>
						      				<img src="images/icons/sneaker-w.png" alt="no images" class="img-w"/>
						      			</div>
						      			<p class="sub-content">Sneaker</p>
						      		</div>
						      	</a>
						    </div>
						</div>
					</div>
					<div class="col-lg-11">
						<div class="tab-content" id="v-pills-tabContent">
					      	<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
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
					      	<div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">2</div>
					      	<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">3</div>
					      	<div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">4</div>
					      	<div class="tab-pane fade" id="v-pills-settings1" role="tabpanel" aria-labelledby="v-pills-settings-tab">5</div>
					      	<div class="tab-pane fade" id="v-pills-settings2" role="tabpanel" aria-labelledby="v-pills-settings-tab">6</div>
					      	<div class="tab-pane fade" id="v-pills-settings3" role="tabpanel" aria-labelledby="v-pills-settings-tab">
					      		<div class="product-list">
					      			<div class="row">
					      				<div class="col-lg-3">
					      					<div class="prodict">
					      						<a href="javascript:void(0)" class="overall-div"></a>
					      						<div class="top-img">
					      							<div class="main-img">
					      								<img src="images/w1.png" alt="no images"/>
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
					      								<img src="images/w2.png" alt="no images"/>
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
					      								<img src="images/w3.png" alt="no images"/>
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
					      								<img src="images/w4.png" alt="no images"/>
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
					      								<img src="images/w5.png" alt="no images"/>
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
					      								<img src="images/w6.png" alt="no images"/>
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
					      								<img src="images/w7.png" alt="no images"/>
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
					      								<img src="images/w8.png" alt="no images"/>
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
					      	<div class="tab-pane fade" id="v-pills-settings4" role="tabpanel" aria-labelledby="v-pills-settings-tab">
					      		<div class="product-list">
					      			<div class="row">
					      				<div class="col-lg-3">
					      					<div class="prodict">
					      						<a href="javascript:void(0)" class="overall-div"></a>
					      						<div class="top-img">
					      							<div class="main-img">
					      								<img src="images/s1.png" alt="no images"/>
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
					      								<img src="images/s2.png" alt="no images"/>
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
					      								<img src="images/s3.png" alt="no images"/>
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
					      								<img src="images/s4.png" alt="no images"/>
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
					      								<img src="images/s5.png" alt="no images"/>
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
					      								<img src="images/s6.png" alt="no images"/>
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
					      								<img src="images/s7.png" alt="no images"/>
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
					      								<img src="images/s8.png" alt="no images"/>
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