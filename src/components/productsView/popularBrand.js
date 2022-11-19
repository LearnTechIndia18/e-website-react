import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
export default class popularBrands extends React.Component {
    render() {
        return (
            <div class="main-body">
<section class="popular-brabds-sec">
		<div class="container-middle container">
			<div class="popular-brabds-div">
				<div class="flex-div">
					<div class="left">
						<div class="popular-conte">
							<div class="heading">
								<h1 class="main-heading">Popular Brabds</h1>
							</div>
							<p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							<p class="sub-content">Lorem Ipsum is simply dummy text</p>
						</div>
					</div>
					<div class="right">
						<div class="brands">
							<div class="flex-div">
								<div class="div-1">
									<div class="main-img">
										<img src="images/brand1.png" alt="no images"/>
									</div>
								</div>
								<div class="div-1">
									<div class="main-img">
										<img src="images/brand2.png" alt="no images"/>
									</div>
								</div>
								<div class="div-1">
									<div class="main-img">
										<img src="images/brand3.png" alt="no images"/>
									</div>
								</div>
								<div class="div-1">
									<div class="main-img">
										<img src="images/brand4.png" alt="no images"/>
									</div>
								</div>
								<div class="div-1">
									<div class="main-img">
										<img src="images/brand5.png" alt="no images"/>
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