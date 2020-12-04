import React from 'react';
import Header from '../components/layouts/partials/header';
import Footer from '../components/layouts/partials/footer';
import SliderSection from '../components/sections/sliderSection';
import ServiceSection from '../components/sections/serviceSection';
import PortfolioSection from '../components/sections/portfolioSection';
import TeamSection from '../components/sections/teamSection';
import ProjectSection from '../components/sections/projectSection';
import TestimonialSection from '../components/sections/testimonialSection';
import ContactSection from '../components/sections/contactSection';


class Home extends React.Component{

    render(){
        return(
           <div>
            <Header/>
            <SliderSection/>
            <ServiceSection/>
            <PortfolioSection/>
            <TeamSection/>
            <ProjectSection/>
            <TestimonialSection/>
            <ContactSection/>
            <Footer/>

           </div>
        )

    }

}

export default Home;