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
       <Slider></Slider>
       <WorkSection></WorkSection>
       <Services></Services>
       <Choose></Choose>
       <Success></Success>
       <Blog></Blog>
        </>
    );
};

export default Home;