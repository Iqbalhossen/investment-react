import React from 'react';
import './WorkSection.css';
import background from './worksection2-svg.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";

const WorkSection = () => {

    const styles = {
        header: {
            backgroundImage: `url(${background})`,

        }
    }

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
                            <h3>Get started in 3 simple steps</h3>
                        </div>

                        {/* <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card work-item h-100 shadow-lg p-3 mb-5 bg-body rounded">
                                    <img src="https://static.crowd1.com/cdn-cgi/image/width=220,format=auto,quality=100/static/assets/images/crowd-public/home/phone.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Explore great products</h5>
                                        <p className="card-text">Browse the C-Store and explore all of our great products.</p>
    
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card work-item h-100 shadow-lg p-3 mb-5 bg-body rounded">
                                    <img src="https://static.crowd1.com/cdn-cgi/image/width=220,format=auto,quality=100/static/assets/images/crowd-public/home/megaphone.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Share products</h5>
                                        <p className="card-text">Get more involved and recommend the products to others as an Affiliate. Grow your own network as an entrepreneur.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card work-item h-100 shadow-lg p-3 mb-5 bg-body rounded">
                                    <img src="https://static.crowd1.com/cdn-cgi/image/width=220,format=auto,quality=100/static/assets/images/crowd-public/home/bag.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Get rewarded!</h5>
                                        <p className="card-text">Entrepreneur status entitles an Affiliate to take full advantage of the benefits on offer from Yumeone.</p>
                                    </div>
                                </div>
                            </div>
    
                        </div>
     */}

                    </div>

                    <div>

                    </div>

                </div>

            </section>

            <section className='container'>
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        1200: {
                            width: 1200,
                            slidesPerView: 3,
                        },
                    }}
                >
                    <div className='p-5'>
                        <SwiperSlide>
                            <div className='work-slider-section shadow-lg p-3 mb-5 bg-body roundedm'>
                                <div className='slide-img'>
                                    <img src="https://static.crowd1.com/cdn-cgi/image/width=220,format=auto,quality=100/static/assets/images/crowd-public/home/bag.png" className="card-img-top" alt="..." />
                                    <h5 className="card-title">Explore great products</h5>
                                    <p className="card-text">Entrepreneur status entitles an Affiliate to take full advantage of the benefits on offer from Yumeone.</p>
                                </div>
                            </div>
                        </SwiperSlide>


                    </div>



                    <SwiperSlide>
                        <div className='work-slider-section shadow-lg p-3 mb-5 bg-body rounded'>
                            <div className='slide-img'>
                                <img src="https://static.crowd1.com/cdn-cgi/image/width=220,format=auto,quality=100/static/assets/images/crowd-public/home/bag.png" className="card-img-top" alt="..." />

                                <h5 className="card-title">Get rewarded!</h5>
                                <p className="card-text">Entrepreneur status entitles an Affiliate to take full advantage of the benefits on offer from Yumeone.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='work-slider-section shadow-lg p-3 mb-5 bg-body rounded'>
                            <div className='slide-img'>
                                <img src="https://static.crowd1.com/cdn-cgi/image/width=220,format=auto,quality=100/static/assets/images/crowd-public/home/bag.png" className="card-img-top" alt="..." />
                                <h5 className="card-title">Get rewarded!</h5>
                                <p className="card-text">Entrepreneur status entitles an Affiliate to take full advantage of the benefits on offer from Yumeone.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='work-slider-section shadow-lg p-3 mb-5 bg-body rounded'>
                            <div className='slide-img'>
                                <img src="https://static.crowd1.com/cdn-cgi/image/width=220,format=auto,quality=100/static/assets/images/crowd-public/home/bag.png" className="card-img-top" alt="..." />
                                <h5 className="card-title">Get rewarded!</h5>
                                <p className="card-text">Entrepreneur status entitles an Affiliate to take full advantage of the benefits on offer from Yumeone.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='work-slider-section shadow-lg p-3 mb-5 bg-body rounded'>
                            <div className='slide-img'>
                                <img src="https://static.crowd1.com/cdn-cgi/image/width=220,format=auto,quality=100/static/assets/images/crowd-public/home/bag.png" className="card-img-top" alt="..." />
                                <h5 className="card-title">Get rewarded!</h5>
                                <p className="card-text">Entrepreneur status entitles an Affiliate to take full advantage of the benefits on offer from Yumeone.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='work-slider-section shadow-lg p-3 mb-5 bg-body rounded'>
                            <div className='slide-img'>
                                <img src="https://static.crowd1.com/cdn-cgi/image/width=220,format=auto,quality=100/static/assets/images/crowd-public/home/bag.png" className="card-img-top" alt="..." />
                                <h5 className="card-title">Get rewarded!</h5>
                                <p className="card-text">Entrepreneur status entitles an Affiliate to take full advantage of the benefits on offer from Yumeone.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </section>
        </>
    );
};

export default WorkSection;