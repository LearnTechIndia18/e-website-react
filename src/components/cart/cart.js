import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
export default class contact extends React.Component {
    render() {
        return (
<div class="main-body">
	<section class="cart-sec">
		<div class="cart-div">
			<div class="container">
				<div class="main-div">
				<div class="row">
					<div class="col-xl-8">
						<div class="cart-list">
							<div class="heading">
								<h5 class="main-heading">Your Shoping Cart</h5>
							</div>
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
									     		<div class="color">
									     			Black
									     		</div>
									     	</td>
									      	<td>
									      		<div class="count">
									      			<div class="flex-div">
									      				<div class="left">
									      					<input type="text" name="count" value="1"/>
									      				</div>
									      				<div class="right">
									      					<div class="flex-div">
									      						<div class="top">
									      							<a href="javascript:void(0)" class="add"><i class="la la-plus"></i></a>
									      						</div>
									      						<div class="bottom">
									      							<a href="javascript:void(0)" class="less"><i class="la la-minus"></i></a>
									      						</div>
									      					</div>
									      				</div>
									      			</div>
									      		</div>
									      	</td>
									     	<td>
									     		<div class="price">
									     			$120.00
									     		</div>
									     	</td>
									      	<td class="no-color">
									      		<div class="close-btn">
										      		<button type="button" class="close" aria-label="Close">
														<span aria-hidden="true"><i class="la la-close"></i></span>
													</button>
										      	</div>
									      	</td>
									    </tr>
									    <tr class="empty">
									    	<td colspan="6">
									    		<div class="empty-div">
										    		
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
									     		<div class="color">
									     			Red
									     		</div>
									     	</td>
									      	<td>
									      		<div class="count">
									      			<div class="flex-div">
									      				<div class="left">
									      					<input type="text" name="count" value="1"/>
									      				</div>
									      				<div class="right">
									      					<div class="flex-div">
									      						<div class="top">
									      							<a href="javascript:void(0)" class="add"><i class="la la-plus"></i></a>
									      						</div>
									      						<div class="bottom">
									      							<a href="javascript:void(0)" class="less"><i class="la la-minus"></i></a>
									      						</div>
									      					</div>
									      				</div>
									      			</div>
									      		</div>
									      	</td>
									     	<td>
									     		<div class="price">
									     			$120.00
									     		</div>
									     	</td>
									      	<td class="no-color">
									      		<div class="close-btn">
										      		<button type="button" class="close" aria-label="Close">
														<span aria-hidden="true"><i class="la la-close"></i></span>
													</button>
										      	</div>
									      	</td>
									    </tr>
									    <tr class="empty">
									    	<td colspan="6">
									    		<div class="empty-div">
										    		
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
									     		<div class="color">
									     			Blue
									     		</div>
									     	</td>
									      	<td>
									      		<div class="count">
									      			<div class="flex-div">
									      				<div class="left">
									      					<input type="text" name="count" value="1"/>
									      				</div>
									      				<div class="right">
									      					<div class="flex-div">
									      						<div class="top">
									      							<a href="javascript:void(0)" class="add"><i class="la la-plus"></i></a>
									      						</div>
									      						<div class="bottom">
									      							<a href="javascript:void(0)" class="less"><i class="la la-minus"></i></a>
									      						</div>
									      					</div>
									      				</div>
									      			</div>
									      		</div>
									      	</td>
									     	<td>
									     		<div class="price">
									     			$120.00
									     		</div>
									     	</td>
									      	<td class="no-color">
									      		<div class="close-btn">
										      		<button type="button" class="close" aria-label="Close">
														<span aria-hidden="true"><i class="la la-close"></i></span>
													</button>
										      	</div>
									      	</td>
									    </tr>
									    <tr class="empty">
									    	<td colspan="6">
									    		<div class="empty-div">
										    		
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
									     		<div class="color">
									     			Blue
									     		</div>
									     	</td>
									      	<td>
									      		<div class="count">
									      			<div class="flex-div">
									      				<div class="left">
									      					<input type="text" name="count" value="1"/>
									      				</div>
									      				<div class="right">
									      					<div class="flex-div">
									      						<div class="top">
									      							<a href="javascript:void(0)" class="add"><i class="la la-plus"></i></a>
									      						</div>
									      						<div class="bottom">
									      							<a href="javascript:void(0)" class="less"><i class="la la-minus"></i></a>
									      						</div>
									      					</div>
									      				</div>
									      			</div>
									      		</div>
									      	</td>
									     	<td>
									     		<div class="price">
									     			$120.00
									     		</div>
									     	</td>
									      	<td class="no-color">
									      		<div class="close-btn">
										      		<button type="button" class="close" aria-label="Close">
														<span aria-hidden="true"><i class="la la-close"></i></span>
													</button>
										      	</div>
									      	</td>
									    </tr>
								  	</tbody>
								</table>
							</div>
							<div class="bottom">
								<a href="javascript:void(0)" class="back-btn">
									<span><i class="la la-long-arrow-left"></i></span>
									Back To Shop
								</a>
							</div>
						</div>
					</div>
					<div class="col-xl-4">
						<div class="right-div">
							<div class="flex-div">
								<div class="top">
									<div class="heading">
										<h5 class="main-heading">Your Shoping Cart</h5>
									</div>
								</div>
								<div class="middle">
									<div class="card-list">
										<form>
											<div class="flex-div">
												<div class="top">
													<div class="form-check form-check-inline">
													  	<p class="sub-content">Select Card Type</p>
													  	<label class="form-check-label active_style" for="inlineRadio1">
													  		<div class="main-img">
									  							<img class="img" data-toggle="tooltip" title="Mastercard" src="images/m1.png" alt="..."/>
									  							<img class="img-hover" data-toggle="tooltip" title="Mastercard" src="images/m2.png" alt="..."/>
									  						</div>
													  		<input class="form-check-input input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
													  	</label>

													</div>
													<div class="form-check form-check-inline">
													  	
													 	<label class="form-check-label" for="inlineRadio2">
													 		<div class="main-img">
									  							<img class="img" data-toggle="tooltip" title="Visa" src="images/v1.png" alt="..."/>
									  							<img class="img-hover" data-toggle="tooltip" title="Visa" src="images/v2.png" alt="..."/>
									  						</div>
													 		<input class="form-check-input input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
													 	</label>

													</div>
													<div class="form-group">
													      	<label for="inputText4">Card Number</label>
													      	<input type="text" class="form-control" id="inputText4"/>
													    </div>
												  	<div class="form-row">
													    <div class="form-group col-md-6">
													      	<label for="inputText5">Expiry Date</label>
													      	<input type="text" class="form-control" id="inputText5"/>
													    </div>
													    <div class="form-group col-md-6">
													      	<label for="inputText6">CVV</label>
													      	<input type="text" class="form-control" id="inputText6"/>
													    </div>
												  	</div>
												</div>
												<div class="bottom">
												  	<button type="submit" class="btn btn-primary button-defalte">Check Out</button>
												</div>
											</div>
										</form>
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