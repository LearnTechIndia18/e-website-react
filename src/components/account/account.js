import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
export default class account extends React.Component {
    render() {
        return (
            <div class="main-body">
<section class="account-page-sec">
		<div class="container">
			<div class="account-page-div">
				<div class="product">
					<div class="flex-div">
						<div class="left">

							<div class="top-user text-center">
								<h5 class="main-heading">Account Board</h5>
								<div class="main-img">
									<img src="images/user.jpeg" alt="no images"/>
								</div>
								<p class="name">Tom Cruise</p>
							</div>

							<div class="middle">
								<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
							      	<a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
							      		<i class="la la-user"></i>
							      		Profile
							      	</a>
							      	<a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
							      		<i class="la la-shopping-cart"></i>
							      		My Orders
							      	</a>
							      	<a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
							      		<i class="la la-heart-o"></i>
							      		Wish List
							      	</a>
							      	<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
							      		<i class="la la-bell"></i>	
							      		Notification
							      	</a>
							      	
							    </div>
							</div>
							
						    <div class="bottom">
						    	<a  href="javascript:void(0)" class="log-out">
							      	<i class="la la-power-off"></i>
							    </a>
						    </div>
						</div>

						<div class="right">
							<div class="tab-content" id="v-pills-tabContent">
						      	<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

						      		<div class="profile-div profile-edit-div ">
								  		<div class="profile-heading border sticky-top">
								  			<h6 class="main-header"><i class="la la-gear"></i> Profile Settings 
								  				<a href="javascript:void(0)" class="pull-right"><i class="la la-pencil"></i></a>
								  				<a href="javascript:void(0)" class="pull-right"><i class="la la-power-off"></i></a>
								  				<a href="javascript:void(0)" class="pull-right"><i class="la la-bell"></i></a>
								  			</h6>
								  		</div>
								  		<div class="profile-form">
								  			<div class="heading">
								  				<h5 class="main-header">Personal Information</h5>
								  			</div>
								  			<div class="prfile-main">
								  				<div class="row">
								  					<div class="col-xl-8 offset-xl-2">
								  						<div class="prfile">
								  							<div class="content-div">
								  								<form>
								  									<div class="form-group">
												  						<label class="col-sm-4 col-form-label">First Name :</label>
												  						<span>Adam</span>
												  					</div>
												  					<div class="form-group">
												  						<label class="col-sm-4 col-form-label">Last Name :</label>
												  						<span>Smith</span>
												  					</div>
												  					<div class="form-group">
												  						<label class="col-sm-4 col-form-label">Your Gender :</label>
												  						<span>Male</span>
												  					</div>
  																	<div class="form-group">
												  						<label class="col-sm-4 col-form-label">Email :</label>
												  						<span>Smith@yopmail.com</span>
												  					</div>
												  					<div class="form-group">
												  						<label class="col-sm-4 col-form-label">Phone Number :</label>
												  						<span>9940648468</span>
												  					</div>
												  					<div class="form-group">
												  						<label class="col-sm-4 col-form-label">Password :</label>
												  						<span>********</span>
												  					</div>
												  					<button type="button" class="btn btn-primary offset-sm-4 button-defalte edt-btn">Edit</button>
												  				</form>
												  			</div>
								  						</div>
								  						<div class="prfile-edit">
								  							<form>
								  								<div class="form-group">
																    <label for="exampleInputText1">First Name</label>
																    <input type="text" class="form-control" id="exampleInputText1" placeholder="First Name"/>
																</div>
																<div class="form-group">
																    <label for="exampleInputText2">Last Name</label>
																    <input type="text" class="form-control" id="exampleInputText2" placeholder="Last Name"/>
																</div>

																<div class="form-group">
																    <label for="exampleInputEmail1">Email address</label>
																    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
																</div>
																<div class="form-group">
																    <label for="exampleInputNunmber1">Phone Number</label>
																    <input type="text" class="form-control" id="exampleInputNunmber1" placeholder="Phone Number"/>
																</div>
																<div class="form-group">
																    <label for="exampleInputPassword1">Password</label>
																    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
																</div>
																<div class="form-group">
																    <label for="exampleInputEmail1">Your Gender</label>
																    <div class="next-line">
																	    <div class="custom-control custom-radio custom-control-inline">
																		  	<input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
																		  	<label class="custom-control-label" for="customRadioInline1">Male</label>
																		</div>
																		<div class="custom-control custom-radio custom-control-inline">
																		  	<input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
																		  	<label class="custom-control-label" for="customRadioInline2">Female</label>
																		</div>
																	</div>
																</div>
																<button type="button" class="btn btn-primary button-defalte save-btn">cancel</button>
																<button type="button" class="btn btn-primary button-defalte save-btn">Save</button>
															</form>
								  						</div>
								  					</div>
								  				</div>
								  			</div>
								  			
								  		</div>
								  	</div>
						      	</div>

						      	<div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

						      		<div class="cart-div">
								  		<div class="cart-heading border sticky-top">
								  			<ul class="nav nav-pills" id="pills-tab" role="tablist">
											  	<li class="nav-item">
											    	<a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">New Orders</a>
											  	</li>
												<li class="nav-item">
												    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Old Orders</a>
												</li>
											</ul>
								  		</div>
								  		<div class="cart-table border">
								  			<div class="tab-content" id="pills-tabContent">
											  	<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
											  		<div class="table-responsive">
														<table class="table">
														  	<thead>
															    <tr>
															      	<th scope="col">Dress</th>
															      	<th scope="col">Name</th>
															      	<th scope="col">Count</th>
															      	<th scope="col">Date</th>
															      	<th scope="col">Total</th>
															      	<th scope="col">Delete</th>
															    </tr>
															</thead>
															<tbody>
															    <tr>
																    <td>
																      	<div class="left-img">
																      		<div class="main-img">
																      			<a href="javascript:void(0)">
																	      			<img src="images/dress-1.png" alt="no images"/>
																	      		</a>
																      		</div>
																      	</div>
																    </td>
															      	<td>
																      	<div class="heading">
																      		<h6 class="main-header"><a href="javascript:void(0)">Veg Extravaganza</a></h6>
																      		<p class="sub-content">Burgers, American, Sandwiches, Fast Food, BBQ</p>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="count">
																      		<span>1</span>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="date">
																      		<span>17/03/2018</span>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="mony">
																      		<h6 class="main-header">$19.99</h6>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="delete">
																      		<a href="javascript:void(0)">
																      			<i class="la la-trash"></i>
																      		</a>
																      	</div>
															      	</td>
															    </tr>
															    <tr>
															      	<td>
																      	<div class="left-img">
																      		<div class="main-img">
																      			<a href="javascript:void(0)">
																	      			<img src="images/dress-2.png" alt="no images"/>
																	      		</a>
																      		</div>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="heading">
																      		<h6 class="main-header"><a href="javascript:void(0)">Veg Extravaganza</a></h6>
																      		<p class="sub-content">Burgers, American, Sandwiches, Fast Food, BBQ</p>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="count">
																      		<span>1</span>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="date">
																      		<span>17/03/2018</span>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="mony">
																      		<h6 class="main-header">$19.99</h6>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="delete">
																      		<a href="javascript:void(0)">
																      			<i class="la la-trash"></i>
																      		</a>
																      	</div>
															      	</td>
															    </tr>
															    <tr>
															      	<td>
																      	<div class="left-img">
																      		<div class="main-img">
																      			<a href="javascript:void(0)">
																	      			<img src="images/dress-3.png" alt="no images"/>
																	      		</a>
																      		</div>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="heading">
																      		<h6 class="main-header"><a href="javascript:void(0)">Veg Extravaganza</a></h6>
																      		<p class="sub-content">Burgers, American, Sandwiches, Fast Food, BBQ</p>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="count">
																      		<span>1</span>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="date">
																      		<span>17/03/2018</span>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="mony">
																      		<h6 class="main-header">$19.99</h6>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="delete">
																      		<a href="javascript:void(0)">
																      			<i class="la la-trash"></i>
																      		</a>
																      	</div>
															      	</td>
														    	</tr>
															    <tr>
															      	<td>
																      	<div class="left-img">
																      		<div class="main-img">
																      			<a href="javascript:void(0)">
																	      			<img src="images/dress-4.png" alt="no images"/>
																	      		</a>
																      		</div>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="heading">
																      		<h6 class="main-header"><a href="javascript:void(0)">Veg Extravaganza</a></h6>
																      		<p class="sub-content">Burgers, American, Sandwiches, Fast Food, BBQ</p>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="count">
																      		<span>1</span>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="date">
																      		<span>17/03/2018</span>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="mony">
																      		<h6 class="main-header">$19.99</h6>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="delete">
																      		<a href="javascript:void(0)">
																      			<i class="la la-trash"></i>
																      		</a>
																      	</div>
															      	</td>
															    </tr>
															</tbody>
														</table>
													</div>
											  	</div>
											  	<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
											  		<div class="table-responsive">
														<table class="table">
														  	<thead>
															    <tr>
															      	<th scope="col">Orders</th>
															      	<th scope="col">Dearils</th>
															      	<th scope="col">Due-Date</th>
															      	<th scope="col">Total</th>
															      	<th scope="col">Order Id</th>
															    </tr>
															</thead>
															<tbody>
															    <tr>
																    <td>
																      	<div class="left-img">
																      		<div class="main-img">
																      			<a href="javascript:void(0)">
																	      			<img src="images/dress-1.png" alt="no images"/>
																	      		</a>
																      		</div>
																      	</div>
																    </td>
															      	<td>
																      	<div class="heading">
																      		<h6 class="main-header"><a href="javascript:void(0)">Veg Extravaganza</a></h6>
																      		<p class="sub-content">Burgers, American, Sandwiches, Fast Food, BBQ</p>
																      		<p class="sub-content">Black Color</p>
																      		<p class="sub-content">
																      			<span>Size:</span>
																      			<span>4.5 inch</span>
																      		</p>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="date">
																      		<span>17/03/2018</span><br/>
																      		TO<br/>
																      		<span>21/03/2018</span>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="mony">
																      		<h6 class="main-header">$19.99</h6>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="order-id">
																      		<span>OID123456</span>
																      	</div>
															      	</td>		    	
															    </tr>
															    <tr>
															      	<td>
																      	<div class="left-img">
																      		<div class="main-img">
																      			<a href="javascript:void(0)">
																	      			<img src="images/dress-2.png" alt="no images"/>
																	      		</a>
																      		</div>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="heading">
																      		<h6 class="main-header"><a href="javascript:void(0)">Veg Extravaganza</a></h6>
																      		<p class="sub-content">Burgers, American, Sandwiches, Fast Food, BBQ</p>
																      		<p class="sub-content">Black Color</p>
																      		<p class="sub-content">
																      			<span>Size:</span>
																      			<span>4.5 inch</span>
																      		</p>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="date">
																      		<span>17/03/2018</span><br/>
																      		TO<br/>
																      		<span>21/03/2018</span>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="mony">
																      		<h6 class="main-header">$19.99</h6>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="order-id">
																      		<span>OID123456</span>
																      	</div>
															      	</td>
															    </tr>
															    <tr>
															      	<td>
																      	<div class="left-img">
																      		<div class="main-img">
																      			<a href="javascript:void(0)">
																	      			<img src="images/dress-3.png" alt="no images"/>
																	      		</a>
																      		</div>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="heading">
																      		<h6 class="main-header"><a href="javascript:void(0)">Veg Extravaganza</a></h6>
																      		<p class="sub-content">Burgers, American, Sandwiches, Fast Food, BBQ</p>
																      		<p class="sub-content">Black Color</p>
																      		<p class="sub-content">
																      			<span>Size:</span>
																      			<span>4.5 inch</span>
																      		</p>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="date">
																      		<span>17/03/2018</span><br/>
																      		TO<br/>
																      		<span>21/03/2018</span>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="mony">
																      		<h6 class="main-header">$19.99</h6>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="order-id">
																      		<span>OID123456</span>
																      	</div>
															      	</td>
														    	</tr>
															    <tr>
															      	<td>
																      	<div class="left-img">
																      		<div class="main-img">
																      			<a href="javascript:void(0)">
																	      			<img src="images/dress-4.png" alt="no images"/>
																	      		</a>
																      		</div>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="heading">
																      		<h6 class="main-header"><a href="javascript:void(0)">Veg Extravaganza</a></h6>
																      		<p class="sub-content">Burgers, American, Sandwiches, Fast Food, BBQ</p>
																      		<p class="sub-content">Black Color</p>
																      		<p class="sub-content">
																      			<span>Size:</span>
																      			<span>4.5 inch</span>
																      		</p>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="date">
																      		<span>17/03/2018</span><br/>
																      		TO<br/>
																      		<span>21/03/2018</span>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="mony">
																      		<h6 class="main-header">$19.99</h6>
																      	</div>
															      	</td>
															      	<td>
																      	<div class="order-id">
																      		<span>OID123456</span>
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

						      	</div>
						      	<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

						      		<div class="wishlist-div">
								  		<div class="cart-heading border sticky-top">
								  			<h6 class="main-header"><i class="la la-heart-o"></i> Wishlist.</h6>
								  		</div>
								  		<div class="list-main border">
								  			<ul class="list-unstyled">
								  				<li class="border-bottom">
								  					<div class="list-content">
								  						<div class="row">
								  							<div class="col-xl-4">
								  								<div class="left-img">
								  									<div class="main-img">
								  										<a href="javascript:void(0)">
								  											<img src="images/s9.jpeg" alt="no images"/>
								  										</a>
								  									</div>
								  								</div>
								  							</div>
								  							<div class="col-xl-8">
								  								<div class="content">
								  									<h6 class="main-header"><a href="javascript:void(0)">Lee Cooper Casuals For Men  (Black)</a></h6>
								  									<p class="sub-content">Black Color</p>
								  									<p class="sub-content">
								  										<span>size</span>
								  										<span>4.5 inch</span>
								  									</p>
								  									<div class="star-div">
								  										<span class="star-content">3.7 <i class="la la-star"></i></span>
								  										<span class="count">(9)</span>
								  									</div>
								  									<p class="amount">$19.99</p>
								  									<div class="dlt-btn-div">
								  										<button class="btn btn-primary"><i class="la la-trash-o"></i></button>
								  									</div>
								  								</div>
								  							</div>
								  						</div>
								  					</div>
								  				</li>
								  				<li class="border-bottom">
								  					<div class="list-content">
								  						<div class="row">
								  							<div class="col-xl-4">
								  								<div class="left-img">
								  									<div class="main-img">
								  										<a href="javascript:void(0)">
								  											<img src="images/s2.png" alt="no images"/>
								  										</a>
								  									</div>
								  								</div>
								  							</div>
								  							<div class="col-xl-8">
								  								<div class="content">
								  									<h6 class="main-header"><a href="javascript:void(0)">Lee Cooper Casuals For Men  (Black)</a></h6>
								  									<p class="sub-content">Black Color</p>
								  									<p class="sub-content">
								  										<span>size</span>
								  										<span>4.5 inch</span>
								  									</p>
								  									<div class="star-div">
								  										<span class="star-content">3.7 <i class="la la-star"></i></span>
								  										<span class="count">(9)</span>
								  									</div>
								  									<p class="amount">$19.99</p>
								  									<div class="dlt-btn-div">
								  										<button class="btn btn-primary"><i class="la la-trash-o"></i></button>
								  									</div>
								  								</div>
								  							</div>
								  						</div>
								  					</div>
								  				</li>
								  				<li class="border-bottom">
								  					<div class="list-content">
								  						<div class="row">
								  							<div class="col-xl-4">
								  								<div class="left-img">
								  									<div class="main-img">
								  										<a href="javascript:void(0)">
								  											<img src="images/s3.png" alt="no images"/>
								  										</a>
								  									</div>
								  								</div>
								  							</div>
								  							<div class="col-xl-8">
								  								<div class="content">
								  									<h6 class="main-header"><a href="javascript:void(0)">Lee Cooper Casuals For Men  (Black)</a></h6>
								  									<p class="sub-content">Black Color</p>
								  									<p class="sub-content">
								  										<span>size</span>
								  										<span>4.5 inch</span>
								  									</p>
								  									<div class="star-div">
								  										<span class="star-content">3.7 <i class="la la-star"></i></span>
								  										<span class="count">(9)</span>
								  									</div>
								  									<p class="amount">$19.99</p>
								  									<div class="dlt-btn-div">
								  										<button class="btn btn-primary"><i class="la la-trash-o"></i></button>
								  									</div>
								  								</div>
								  							</div>
								  						</div>
								  					</div>
								  				</li>
								  				<li class="border-bottom">
								  					<div class="list-content">
								  						<div class="row">
								  							<div class="col-xl-4">
								  								<div class="left-img">
								  									<div class="main-img">
								  										<a href="javascript:void(0)">
								  											<img src="images/s4.png" alt="no images"/>
								  										</a>
								  									</div>
								  								</div>
								  							</div>
								  							<div class="col-xl-8">
								  								<div class="content">
								  									<h6 class="main-header"><a href="javascript:void(0)">Lee Cooper Casuals For Men  (Black)</a></h6>
								  									<p class="sub-content">Black Color</p>
								  									<p class="sub-content">
								  										<span>size</span>
								  										<span>4.5 inch</span>
								  									</p>
								  									<div class="star-div">
								  										<span class="star-content">3.7 <i class="la la-star"></i></span>
								  										<span class="count">(9)</span>
								  									</div>
								  									<p class="amount">$19.99</p>
								  									<div class="dlt-btn-div">
								  										<button class="btn btn-primary"><i class="la la-trash-o"></i></button>
								  									</div>
								  								</div>
								  							</div>
								  						</div>
								  					</div>
								  				</li>
								  				<li class="border-bottom">
								  					<div class="list-content">
								  						<div class="row">
								  							<div class="col-xl-4">
								  								<div class="left-img">
								  									<div class="main-img">
								  										<a href="javascript:void(0)">
								  											<img src="images/s5.png" alt="no images"/>
								  										</a>
								  									</div>
								  								</div>
								  							</div>
								  							<div class="col-xl-8">
								  								<div class="content">
								  									<h6 class="main-header"><a href="javascript:void(0)">Lee Cooper Casuals For Men  (Black)</a></h6>
								  									<p class="sub-content">Black Color</p>
								  									<p class="sub-content">
								  										<span>size</span>
								  										<span>4.5 inch</span>
								  									</p>
								  									<div class="star-div">
								  										<span class="star-content">3.7 <i class="la la-star"></i></span>
								  										<span class="count">(9)</span>
								  									</div>
								  									<p class="amount">$19.99</p>
								  									<div class="dlt-btn-div">
								  										<button class="btn btn-primary"><i class="la la-trash-o"></i></button>
								  									</div>
								  								</div>
								  							</div>
								  						</div>
								  					</div>
								  				</li>
								  				<li class="border-bottom">
								  					<div class="list-content">
								  						<div class="row">
								  							<div class="col-xl-4">
								  								<div class="left-img">
								  									<div class="main-img">
								  										<a href="javascript:void(0)">
								  											<img src="images/s6.png" alt="no images"/>
								  										</a>
								  									</div>
								  								</div>
								  							</div>
								  							<div class="col-xl-8">
								  								<div class="content">
								  									<h6 class="main-header"><a href="javascript:void(0)">Lee Cooper Casuals For Men  (Black)</a></h6>
								  									<p class="sub-content">Black Color</p>
								  									<p class="sub-content">
								  										<span>size</span>
								  										<span>4.5 inch</span>
								  									</p>
								  									<div class="star-div">
								  										<span class="star-content">3.7 <i class="la la-star"></i></span>
								  										<span class="count">(9)</span>
								  									</div>
								  									<p class="amount">$19.99</p>
								  									<div class="dlt-btn-div">
								  										<button class="btn btn-primary"><i class="la la-trash-o"></i></button>
								  									</div>
								  								</div>
								  							</div>
								  						</div>
								  					</div>
								  				</li>
								  				<li class="border-bottom">
								  					<div class="list-content">
								  						<div class="row">
								  							<div class="col-xl-4">
								  								<div class="left-img">
								  									<div class="main-img">
								  										<a href="javascript:void(0)">
								  											<img src="images/s7.png" alt="no images"/>
								  										</a>
								  									</div>
								  								</div>
								  							</div>
								  							<div class="col-xl-8">
								  								<div class="content">
								  									<h6 class="main-header"><a href="javascript:void(0)">Lee Cooper Casuals For Men  (Black)</a></h6>
								  									<p class="sub-content">Black Color</p>
								  									<p class="sub-content">
								  										<span>size</span>
								  										<span>4.5 inch</span>
								  									</p>
								  									<div class="star-div">
								  										<span class="star-content">3.7 <i class="la la-star"></i></span>
								  										<span class="count">(9)</span>
								  									</div>
								  									<p class="amount">$19.99</p>
								  									<div class="dlt-btn-div">
								  										<button class="btn btn-primary"><i class="la la-trash-o"></i></button>
								  									</div>
								  								</div>
								  							</div>
								  						</div>
								  					</div>
								  				</li>
								  			</ul>
								  		</div>
								  	</div>

						      	</div>
						      	<div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">

						      		<div class="notification-div">
								  		<div class="cart-heading border sticky-top">
								  			<h6 class="main-header"><i class="la la-bell"></i> Notification.</h6>
								  		</div>
								  		<div class="list-content border">
								  			<ul class="list-unstyled">
								  				<li class="border-bottom">
								  					<div class="flex-div un-read">
								  						<div class="left-close-btn">
								  							<button type="button" class="close" aria-label="Close">
																  <span aria-hidden="true"><i class="la la-times"></i></span>
																</button>
								  						</div>
								  						<div class="middle-img">
								  							<div class="main-img">
								  								<a href="javascript:void(0)">
								  									<img src="images/w1.png" alt="no images"/>
								  								</a>
								  							</div>
								  						</div>
								  						<div class="right-content">
								  							<div class="heading">
								  								<a href="javascript:void(0)">Veg Extravaganza</a>Burgers, American, Sandwiches, Fast Food, BBQ
								  							</div>
								  							<div class="timing">
								  								<span class="time">10:47 am</span>
								  								on
								  								<span class="date">18/03/2018</span>
								  							</div>
								  						</div>
								  					</div>
								  				</li>
								  				<li class="border-bottom">
								  					<div class="flex-div">
								  						<div class="left-close-btn">
								  							<button type="button" class="close" aria-label="Close">
																  <span aria-hidden="true"><i class="la la-times"></i></span>
																</button>
								  						</div>
								  						<div class="middle-img">
								  							<div class="main-img">
								  								<a href="javascript:void(0)">
								  									<img src="images/w2.png" alt="no images"/>
								  								</a>
								  							</div>
								  						</div>
								  						<div class="right-content">
								  							<div class="heading">
								  								<a href="javascript:void(0)">Veg Extravaganza</a>Burgers, American, Sandwiches, Fast Food, BBQ
								  							</div>
								  							<div class="timing">
								  								<span class="time">10:47 am</span>
								  								on
								  								<span class="date">18/03/2018</span>
								  							</div>
								  						</div>
								  					</div>
								  				</li>
								  				<li class="border-bottom">
								  					<div class="flex-div">
								  						<div class="left-close-btn">
								  							<button type="button" class="close" aria-label="Close">
																  <span aria-hidden="true"><i class="la la-times"></i></span>
																</button>
								  						</div>
								  						<div class="middle-img">
								  							<div class="main-img">
								  								<a href="javascript:void(0)">
								  									<img src="images/w3.png" alt="no images"/>
								  								</a>
								  							</div>
								  						</div>
								  						<div class="right-content">
								  							<div class="heading">
								  								<a href="javascript:void(0)">Veg Extravaganza</a>Burgers, American, Sandwiches, Fast Food, BBQ
								  							</div>
								  							<div class="timing">
								  								<span class="time">10:47 am</span>
								  								on
								  								<span class="date">18/03/2018</span>
								  							</div>
								  						</div>
								  					</div>
								  				</li>
								  				<li class="border-bottom">
								  					<div class="flex-div">
								  						<div class="left-close-btn">
								  							<button type="button" class="close" aria-label="Close">
																  <span aria-hidden="true"><i class="la la-times"></i></span>
																</button>
								  						</div>
								  						<div class="middle-img">
								  							<div class="main-img">
								  								<a href="javascript:void(0)">
								  									<img src="images/w4.png" alt="no images"/>
								  								</a>
								  							</div>
								  						</div>
								  						<div class="right-content">
								  							<div class="heading">
								  								<a href="javascript:void(0)">Veg Extravaganza</a>Burgers, American, Sandwiches, Fast Food, BBQ
								  							</div>
								  							<div class="timing">
								  								<span class="time">10:47 am</span>
								  								on
								  								<span class="date">18/03/2018</span>
								  							</div>
								  						</div>
								  					</div>
								  				</li>
								  				<li class="border-bottom">
								  					<div class="flex-div">
								  						<div class="left-close-btn">
								  							<button type="button" class="close" aria-label="Close">
																  <span aria-hidden="true"><i class="la la-times"></i></span>
																</button>
								  						</div>
								  						<div class="middle-img">
								  							<div class="main-img">
								  								<a href="javascript:void(0)">
								  									<img src="images/w5.png" alt="no images"/>
								  								</a>
								  							</div>
								  						</div>
								  						<div class="right-content">
								  							<div class="heading">
								  								<a href="javascript:void(0)">Veg Extravaganza</a>Burgers, American, Sandwiches, Fast Food, BBQ
								  							</div>
								  							<div class="timing">
								  								<span class="time">10:47 am</span>
								  								on
								  								<span class="date">18/03/2018</span>
								  							</div>
								  						</div>
								  					</div>
								  				</li>
								  				<li class="border-bottom">
								  					<div class="flex-div">
								  						<div class="left-close-btn">
								  							<button type="button" class="close" aria-label="Close">
																  <span aria-hidden="true"><i class="la la-times"></i></span>
																</button>
								  						</div>
								  						<div class="middle-img">
								  							<div class="main-img">
								  								<a href="javascript:void(0)">
								  									<img src="images/w6.png" alt="no images"/>
								  								</a>
								  							</div>
								  						</div>
								  						<div class="right-content">
								  							<div class="heading">
								  								<a href="javascript:void(0)">Veg Extravaganza</a>Burgers, American, Sandwiches, Fast Food, BBQ
								  							</div>
								  							<div class="timing">
								  								<span class="time">10:47 am</span>
								  								on
								  								<span class="date">18/03/2018</span>
								  							</div>
								  						</div>
								  					</div>
								  				</li>
								  				<li class="border-bottom">
								  					<div class="flex-div">
								  						<div class="left-close-btn">
								  							<button type="button" class="close" aria-label="Close">
																  <span aria-hidden="true"><i class="la la-times"></i></span>
																</button>
								  						</div>
								  						<div class="middle-img">
								  							<div class="main-img">
								  								<a href="javascript:void(0)">
								  									<img src="images/w7.png" alt="no images"/>
								  								</a>
								  							</div>
								  						</div>
								  						<div class="right-content">
								  							<div class="heading">
								  								<a href="javascript:void(0)">Veg Extravaganza</a>Burgers, American, Sandwiches, Fast Food, BBQ
								  							</div>
								  							<div class="timing">
								  								<span class="time">10:47 am</span>
								  								on
								  								<span class="date">18/03/2018</span>
								  							</div>
								  						</div>
								  					</div>
								  				</li>
								  				<li class="border-bottom">
								  					<div class="flex-div">
								  						<div class="left-close-btn">
								  							<button type="button" class="close" aria-label="Close">
																  <span aria-hidden="true"><i class="la la-times"></i></span>
																</button>
								  						</div>
								  						<div class="middle-img">
								  							<div class="main-img">
								  								<a href="javascript:void(0)">
								  									<img src="images/w8.png" alt="no images"/>
								  								</a>
								  							</div>
								  						</div>
								  						<div class="right-content">
								  							<div class="heading">
								  								<a href="javascript:void(0)">Veg Extravaganza</a>Burgers, American, Sandwiches, Fast Food, BBQ
								  							</div>
								  							<div class="timing">
								  								<span class="time">10:47 am</span>
								  								on
								  								<span class="date">18/03/2018</span>
								  							</div>
								  						</div>
								  					</div>
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
		</div>
	</section>
    </div>
    )
    }
    }