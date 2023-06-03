import React from 'react';
import './WorkSection.css';
import background from './worksection2-svg.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";
import Picture2 from './Picture2.png'
import Picture3 from './Picture3.png'
import Picture4 from './product.png'
import Slider from 'react-slick';

const WorkSection = () => {

    const styles = {
        header: {
            backgroundImage: `url(${background})`,

        }
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className='Work-section'>
                <img src={background} width="auto" className="card-img-top" alt="..." />
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L80,122.7C160,117,320,107,480,122.7C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
            </div>
            <section  >
                <div className='work' >
                    <div className='container work-aaaa'>
                        <div className='text-center title'>
                            <p>HOW IT WORKS</p>
                            <div className="diamond-line-centered-theme-colored work-diamond"></div>
                            <h3>Get Started in 3 Easy Steps</h3>
                        </div>

                    </div>

                    <div>

                    </div>

                </div>

            </section>

            <section className='container'>

                <Slider {...settings}>
                    <div className='p-3 text-center'>
                        <div className='work-slider-section shadow-lg p-3 mb-5 bg-body rounded'>
                            <div className='slide-img'>
                                {/* <img src={Picture2} className="card-img-top" alt="..." /> */}
                                <i class="fa-solid fa-user-plus"></i>
                                <h5 className="card-title">Step One!</h5>
                                <p className="card-text">Sign up and login
                                    Enter the universe of fulfilling Yome One's dream.</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-3 text-center'>
                        <div className='work-slider-section shadow-lg p-3 mb-5 bg-body rounded'>
                            <div className='slide-img '>
                                <img src={Picture4} className="card-img-top d-inline" alt="..." />
                                {/* <i class="fa-solid fa-magnifying-glass-dollar"></i> */}

                                <h5 className="card-title">Step Two!</h5>
                                <p className="card-text">Touch the product option-
                                    Choose a product and buy any choosble product.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='p-3 text-center'>
                        <div className='work-slider-section shadow-lg p-3 mb-5 bg-body rounded'>
                            <div className='slide-img'>
                                {/* <img src={Picture4} className="card-img-top" alt="..." /> */}
                                <i class="fa-solid fa-people-roof"></i>
                                <h5 className="card-title">Step Three!</h5>
                                <p className="card-text">Make unlimited income by creating a well-formed affiliate from your familiar palace.
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        </>
    );
};

export default WorkSection;