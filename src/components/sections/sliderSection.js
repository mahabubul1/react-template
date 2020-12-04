import React from 'react';

class SliderSection extends React.Component{
    
    render(){
        return(
            <div>
                {/* <!-- Slider Area Start Here --> */}
                <section class="slider" id="slider">
                    <div  id="particles-js" class="particles-js"></div>
                    <div class="slider-content text-center">
                        {/* <!-- Slider Action Button --> */}
                        <div class="slider-btn-container">
                            <div class="medium-text">We think to create</div>
                            <h1 class="title banner-title">Hello, <span>I'm a</span><strong class="type-content"></strong></h1>
                        </div>
                        <div class="btn-area">
                            <a href="#" class="btn-read">reade more</a>
                            <a href="#contact-us" class="btn-contact smoth-scroll">contact us</a>
                        </div>
                    </div>
                    {/* <!-- Go to Next Section --> */}
                    <div class="go-to-btn">
                        <a href="#services" class="smoth-scroll"><i class="fa fa-long-arrow-down bounceUpDown animationDuration" aria-hidden="true"></i></a>
                    </div>
                </section>
                {/* <!-- End Slider --> */}
                {/* <!-- Slider Area End Here --> */}
            </div>
        )
    }
}



export default SliderSection;