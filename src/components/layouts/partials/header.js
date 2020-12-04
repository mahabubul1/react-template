import React from 'react'

class Header extends React.Component{

    render(){
      return(
           <div>
               <header>
                    <div class="shape"><div class="shape-effect"></div></div>
                    <div class="container"> 
                        <div class="row">
                            <div class="col-md-3">
                            
                                <div class="logo">
                                    <a href=""><img src="assets/images/logo.svg" alt=""/></a>
                                </div>
                            </div>
                            <div class="col-md-9 d-none d-md-block"> 
                                <div class="cx-menu"> 
                                    <nav>
                                        <ul class="menu">
                                            <li class="menu-list"><a href="" class="menu-item"> Home </a> </li>
                                            <li class="menu-list"><a href="#services" class="menu-item smoth-scroll"> Service </a> </li>
                                            <li class="menu-list"><a href="#portfolio" class="menu-item smoth-scroll"> Profolio </a> </li>
                                            <li class="menu-list"><a href="#team" class="menu-item smoth-scroll"> Team </a> </li>
                                            <li class="menu-list"><a href="#testimonial" class="menu-item smoth-scroll"> Testimonial </a> </li>
                                            <li class="menu-list"><a href="#contact-us" class="menu-item smoth-scroll"> Contact </a> </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* <!--Mobile Menu Start --> */}
                    <div class="cx-menu d-sm-block d-md-none"> 
                    <nav>
                        <div class="menu-toggle">
                        <h3></h3>
                        <button type="button" id="menu-btn">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        </div>
                        <ul class="menu ace-responsive-menu" id="respMenu" data-menu-style="horizontal">
                        <li class="menu-list"><a href="#" class="menu-item"> Home </a> </li>
                        <li class="menu-list"><a href="#services" class="menu-item"> Service </a> </li>
                        <li class="menu-list"><a href="#" class="menu-item"> Profolio </a> </li>
                        <li class="menu-list"><a href="#" class="menu-item"> Team </a> </li>
                        <li class="menu-list"><a href="#" class="menu-item"> Testimonial </a> </li>
                        <li class="menu-list"><a href="#" class="menu-item"> Contact </a> </li>
                        </ul>
                    </nav>
                </div>  
           </header>
        </div>

      )
    }
}

export default Header;