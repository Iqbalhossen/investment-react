import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';
import background from './1.jpg';
const Slider = () => {

    const styles = {
        header: {
          backgroundImage: `url(${background})`,
       
        }
      } 

    return (
        <>
            <section className="sliders"  style={styles.header}>
                <div className='silder-overlay' >
                <div className='container  py-5'>
                    <div className='row'>
                        <div className='col-lg-6 col-12 col-md-6 slider'>
                            <div className='slider-content'>
                                <h1>Discover Digital Art <br className='slider-br'/>
                                    Sell Your Specific</h1>
                                <h2>Yumeone</h2>
                                <p>Partner with one of the world’s largest retailers to showcase your brand and products.</p>
                            </div>
                            <div className='slider-btn pt-5'>
                                <Link className='explore-btn'>Explore More</Link>
                                <Link className='create-btn'> Create Now</Link>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12 col-md-6'>
                            <div className='slider-img'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjnuNZQG7FjZjM3tL2sX3CovG_pz8j2xZsQ&usqp=CAU" alt="" />

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