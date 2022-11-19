import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
export default class Header extends React.Component {
    render() {
        return (
            <div class="main-body">
                {/* <section class="slider-sec">
                    <div class="banner-back">
                        <img src="images/banner.jpg" alt="no images" />
                    </div>
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="product-1-div">
                                    <div class="flex-div">
                                        <div class="left">
                                            <div class="flex-div">
                                                <div class="top ">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                </div>
                                                <div class="middle">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                </div>
                                                <div class="bottom">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="middle">
                                            <div class="main-img">
                                                <img src="images/p1.png" alt="no img" />
                                            </div>
                                        </div>
                                        <div class="right">
                                            <div class="flex-div">
                                                <div class="top ">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                </div>
                                                <div class="middle">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                </div>
                                                <div class="bottom">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="product-1-div">
                                    <div class="flex-div">
                                        <div class="left">
                                            <div class="flex-div">
                                                <div class="top ">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                </div>
                                                <div class="middle">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                                </div>
                                                <div class="bottom">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="middle">
                                            <div class="main-img">
                                                <img src="images/p3.png" alt="no img" />
                                            </div>
                                        </div>
                                        <div class="right">
                                            <div class="flex-div">
                                                <div class="top">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                </div>
                                                <div class="middle">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                </div>
                                                <div class="bottom">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="product-1-div">
                                    <div class="flex-div">
                                        <div class="left">
                                            <div class="flex-div text-center">
                                                <div class="top ">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                </div>
                                                <div class="middle">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                </div>
                                                <div class="bottom">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="middle">
                                            <div class="main-img">
                                                <img src="images/p4.png" alt="no img" />
                                            </div>
                                        </div>
                                        <div class="right">
                                            <div class="flex-div text-center">
                                                <div class="top ">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                                </div>
                                                <div class="middle">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                                </div>
                                                <div class="bottom">
                                                    <div class="arrow-img">
                                                        <img src="images/images/arrow1.png" />
                                                    </div>
                                                    <p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span class="la la-angle-left" aria-hidden="true" style="font-size: 50px;"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span class="la la-angle-right" style="font-size: 50px;" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </section> */}

<section class="banner-sec">
		<div class="container">
			<div class="banner-div">
				<div class="flex-div">
					<div class="left">
						<h5 class="sun-heading">Buy World Class</h5>
						<h3 class="main-heading">Best of Smart Wearables High RAM Phones</h3>
						<p class="sub-content">From Our Stotus</p>
					</div>
					<div class="right">
						<button class="btn button-defalte" type="submit">Shop Now</button>
					</div>
				</div>
			</div>
		</div>
	</section>
            </div>
        )
    }
}