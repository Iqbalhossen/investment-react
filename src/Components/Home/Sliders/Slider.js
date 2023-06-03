import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';
import image from './silder-2.webp';
import background from './slider-8.webp';
import 'react-loading-skeleton/dist/skeleton.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Slider = () => {

    const styles = {
        lg: {
            backgroundImage: `url(${background || <Skeleton />})`,
            width: "100%",



        },

    }


    const matches = useMediaQuery('(min-width:600px)');
    return (
        <>
            <section className="sliders" style={styles.lg || <Skeleton /> }>
                <div className='silder-overlay' >
                    <div className='container  py-5'>
                        <div className='row w-100 slider-row'>
                            <div className='col-lg-6 col-12 col-md-6 slider'>
                                <div className='slider-content '>
                                    <h1>Gain Your Futures Today <br className='slider-br' />
                                        {/* Sell Your Specific */}
                                    </h1>
                                    <h2>Yume One Universe</h2>
                                    <p>
                                        You have got such a universe called YOME ONE
                                        From where you can fulfill all your dreams,
                                        
                                        So now you can ready to start Yume One universe.</p>
                                </div>
                                <div className='slider-btn pt-lg-5 pt-md-5 pt-3 slider-content'>
                                    {/* <Link className='explore-btn'>Explore More</Link> */}
                                    <Link to="/signup" className='create-btn'> Create Now</Link>
                                </div>
                            </div>
                            <div className='col-lg-6 col-12 col-md-6'>
                                <div className='slider-img'>
                                    <img src={image} alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='Work-section'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L80,122.7C160,117,320,107,480,122.7C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div> */}
            </section>
        </>
    );
};

export default Slider;