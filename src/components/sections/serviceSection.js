import React from 'react';


class ServiceSection extends React.Component{

    render(){
        return(
            <div>
                <section class="service-area animated fadeInUp Slower" id="services">
                    <div class="container">
                        <div class="heading">
                            <h1> Our Services</h1>
                        </div>
                        <div class="row margin-top-50">
                            <div class="col-md-4 col-sm-6">
                                {/* <!-- services-content 01--> */}
                                <div class="services-content"> 
                        <div class="services-icon">
                            <a href="#"> <img src="assets/images/services-icons/web.png" alt=""/></a>
                        </div>
                        <div class="services-name margin-top-20">
                            <h2>Easy Customize</h2>
                        </div>
                        <div class="services-info margin-top-15">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                {/* <!-- services-content 02--> */}
                                <div class="services-content"> 
                        <div class="services-icon">
                            <a href="#"> <img src="assets/images/services-icons/web-design.png" alt=""/></a>
                        </div>
                        <div class="services-name margin-top-20">
                            <h2>Easy Customize</h2>
                        </div>
                        <div class="services-info margin-top-15">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                    
                                <div class="services-content"> 
                        <div class="services-icon">
                            <a href="#"> <img src="assets/images/services-icons/web-design.png" alt=""/></a>
                        </div>
                        <div class="services-name margin-top-20">
                            <h2>Easy Customize</h2>
                        </div>
                        <div class="services-info margin-top-15">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                            {/* <!-- services-content 03--> */}
                                <div class="services-content"> 
                        <div class="services-icon">
                            <a href="#"> <img src="assets/images/services-icons/web-design.png" alt=""/></a>
                        </div>
                        <div class="services-name margin-top-20">
                            <h2>Easy Customize</h2>
                        </div>
                        <div class="services-info margin-top-15">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
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

export default ServiceSection;