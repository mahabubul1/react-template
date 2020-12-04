import React from 'react';

class ContactSection extends React.Component{
    contact ={
        background: `url("assets/images/review.jpg")`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundAttachment: 'fixed' 

     };

    render(){
        return(
            <div>
                <section class="contact-us" id="contact-us" style={this.contact}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7">
                                {/* <!--  Contact Form Start --> */}
                                <div class="contact-form">
                                    <form action="#" method="post" role="form">
                                        <div class="row">
                                            <div class="form-group cs-group col-sm-6">
                                                <input type="text"  id="firstName" class="form-control"/>
                                                <label for="firstName" class="cs-label"> First Name</label>
                                            </div>
                                            <div class="form-group cs-group col-sm-6">
                                                <input type="text"  id="lastName" class="form-control"/>
                                                <label for="lastName" class="cs-label">Last Name</label>
                                            </div>
                                        </div>
                                        <div class="form-group cs-group">
                                            <input type="email" id="email" class="form-control"/>
                                            <label class="cs-label" for="email"> Email</label>
                                        </div> 
                                        <div class="form-group cs-group">
                                            <input type="text"  id="subject" class="form-control"/>
                                            <label class="cs-label" for="subject">Subject</label>
                                        </div> 
                                        <div class="form-group cs-group">
                                            <textarea name="" id="message-box" class="form-control message-box" cols="10" rows="4"></textarea>
                                            <label class="cs-label" for="message">Message Box</label>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn cs-btn"> send</button>
                                        </div>
                                    </form>
                                </div>
                                {/* <!--  Form end --> */}
                            </div>
                        {/* <!-- Contact Info --> */}
                        <div class="col-md-5 contact-info">
                            <div class="heading">
                                    <h1>Contact us</h1>
                                    </div>
                            <ul class="contact-info-list margin-top-30">
                                <li>
                                    <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                    <address>490 W. Oklahoma St. Ontario, CA 91762</address>
                                </li>
                                <li>
                                    <span><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                                    <address><a href="#">codexshaper@gmail.com</a></address>
                                </li>
                                <li>
                                    <span><i class="fa fa-globe" aria-hidden="true"></i></span>
                                    <address><a href="#">www.codexshaper.com</a></address>
                                </li>
                                <li>
                                    <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                                    <address><a href="#">+880 1824844042</a></address>
                                </li>
                            </ul>
                        </div> 
                        </div>
                    </div>   
                </section>
                {/* <!-- contact-us start --> */}
            </div>
        )
    }
}

export default ContactSection;