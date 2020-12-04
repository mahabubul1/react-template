import React from 'react';

class PortfolioSection extends React.Component{

    render(){
        return(
            <div>
                <section class="portfolio-area" id="portfolio"> 
                    <div class="container"> 
                        <div class="heading">
                            <h1>Our Portfolio</h1>
                        </div>
                        <div class="filtering margin-top-60">
                            <span data-filter='*' class="active">All</span>
                            <span data-filter='.web'>Web Desgin</span>
                            <span data-filter='.web-development'>Web Development</span>
                            <span data-filter='.graphic'>Graphic Design</span>
                    </div>
                    {/* <!--   portfolio iteam-area  --> */}
                        <div class="portfolio-iteam-area margin-top-40">
                        {/* <!--   portfolio iteam  --> */}
                            <div class="col-md-4  col-sm-6 items web">
                            <div class="portfolio-iteam "> 
                                <img src="assets/images/portfolio/portfolio.jpg" alt=""/>
                                <div class="overflow-info"> 
                                    <div class="proejct-name">
                                        <h3> project name here</h3>
                                    </div>
                                    <div class="icon">
                                        <a href="">
                                            <img src="assets/images/portfolio/link-icon.png" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </div>
                            {/* <!--   portfolio iteam  --> */}
                            <div class="col-md-4  col-sm-6 items web">
                            <div class="portfolio-iteam"> 
                                <img src="assets/images/portfolio/portfolio.jpg" alt=""/>
                                <div class="overflow-info"> 
                                    <div class="proejct-name">
                                        <h3> project name here</h3>
                                    </div>
                                    <div class="icon">
                                        <a href="">
                                            <img src="assets/images/portfolio/link-icon.png" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--   portfolio iteam  --> */}
                        <div class="col-md-4  col-sm-6 items web-development">
                            <div class="portfolio-iteam"> 
                                <img src="assets/images/portfolio/portfolio.jpg" alt=""/>
                                <div class="overflow-info"> 
                                    <div class="proejct-name">
                                        <h3> project name here</h3>
                                    </div>
                                    <div class="icon">
                                        <a href="">
                                            <img src="assets/images/portfolio/link-icon.png" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            {/* <!--   portfolio iteam  --> */}
                        <div class="col-md-4  col-sm-6  items graphic">
                            <div class="portfolio-iteam"> 
                                <img src="assets/images/portfolio/portfolio.jpg" alt=""/>
                                <div class="overflow-info"> 
                                    <div class="proejct-name">
                                        <h3> project name here</h3>
                                    </div>
                                    <div class="icon">
                                        <a href="">
                                            <img src="assets/images/portfolio/link-icon.png" alt=""/>
                                        </a>
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


export default PortfolioSection;