import React from 'react';

class ProjectSection extends React.Component{
    proejects ={
        background: `url("assets/images/review.jpg")`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundAttachment: 'fixed' 

     };

    render(){
        return(
            <div>
                {/* <!-- projects-area start --> */}
                <section class="proejects-area" style={this.proejects}> 
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-sm-6">
                            {/* <!-- 	single-star --> */}
                                <div class="single-star">
                                    <div class="media-text">
                                    <img src="assets/images/haapy.png" alt="Generic placeholder image" />
                                    <div class="media-body">
                                        <h2 class="counter">154</h2>
                                        <h3 class="title">Happy Clients</h3>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                {/* <!-- 	single-star --> */}
                                <div class="single-star">
                                    <div class="media-text">
                                    <img src="assets/images/calendar.png" alt="Generic placeholder image"/>
                                    <div class="media-body">
                                        <h2 class="counter">10</h2>
                                        <h3 class="title">YEARS OF EXPERIENCE</h3>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                {/* <!-- 	single-star --> */}
                                <div class="single-star">
                                    <div class="media-text">
                                    <img src="assets/images/like.png" alt="Generic placeholder image"/>
                                        <div class="media-body">
                                            <h2 class="counter">256</h2>
                                            <h3 class="title">PROJECTS COMPLETED</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                    
                                <div class="single-star">
                                    <div class="media-text">
                                    <img src="assets/images/win.png" alt="Generic placeholder image"/>
                                    <div class="media-body">
                                        <h2 class="counter">154</h2>
                                        <h3 class="title">AWARD WON</h3>
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

export default ProjectSection;