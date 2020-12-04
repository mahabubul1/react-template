import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>
                 {/* <!-- Start Map Container --> */}
                <div class="map-container">
                    <div class="overlay map-overlay text-center">
                        <i class="fa fa-angle-down bounceUpDown animationDuration" aria-hidden="true"></i>
                    </div>
                    <div id="map" class="map"></div>
                </div>
                {/* <!-- Footer Start --> */}
                <footer class="footer">
                    <div class="container footer-info">
                        {/* <!-- Start social-icon --> */}
                        <div class="social-icon">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        {/* <!-- End social-icon --> */}
                        <div class="f-info margin-top-15">
                            <p>@All right reserved <a href="#">codexshaper</a> 2019.</p>
                        </div>
                    </div>
                </footer>
                {/* <!-- Footer End --> */}
            </div>
        )
    }
}


export default Footer;