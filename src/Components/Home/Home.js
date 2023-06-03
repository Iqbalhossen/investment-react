import React from 'react';
import Blog from './Blog/Blog';
import Choose from './Choose/Choose';
import Services from './Services/Services';
import Slider from './Sliders/Slider';
import Success from './Success/Success';
import WorkSection from './WorkSection/WorkSection';

const Home = () => {
    return (
        <>
        
       <section className='home-page-section'> 
       <Slider></Slider>
       <WorkSection></WorkSection>
       <Services></Services>
       <Choose></Choose>
       <Success></Success>
       <Blog></Blog>
       </section>
        </>
    );
};

export default Home;