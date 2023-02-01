import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FreeMode, Scrollbar, Mousewheel, Autoplay, Navigation } from "swiper";
import { EffectCoverflow, Pagination } from "swiper";

import './Blog.css'
const Blog = () => {
    return (
        <>
            <section className='blogs'>
                <div className='container'>
                    <div className='blog-header text-center'>
                        <h1>LATEST <h2>NEWS</h2></h1>
                        <div className="diamond-line-centered-theme-colored"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!
                            ipsum dolor sit Rem autem voluptatem obcaecati</p>
                    </div>

                    {/* <div className='blog-section'>
                        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
                            <div className="col">
                                <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                    <Link><img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-8-400x280.jpg" className="card-img-top" alt="..." /></Link>
                                    <div className="card-body">
                                    <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                        <div className='blog-view-details-btn'>
                                      <Link to="" >View Details</Link>
                                      </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                    <img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-9-400x280.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                        <div className='blog-view-details-btn'>
                                      <Link to="" >View Details</Link>
                                      </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                    <img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-5-400x280.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                      <div className='blog-view-details-btn'>
                                      <Link to="" >View Details</Link>
                                      </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                    <Link><img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-8-400x280.jpg" className="card-img-top" alt="..." /></Link>
                                    <div className="card-body">
                                    <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                        <div className='blog-view-details-btn'>
                                      <Link to="" >View Details</Link>
                                      </div>
                                    </div>
                                    
                                </div>
                             </div>
                            <div className="col">
                                <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                    <img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-9-400x280.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                        <div className='blog-view-details-btn'>
                                      <Link to="" >View Details</Link>
                                      </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                    <img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-5-400x280.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                      <div className='blog-view-details-btn'>
                                      <Link to="" >View Details</Link>
                                      </div>
                                    </div>
                                    
                                </div>
                            </div>
                           
                        </div>
                    </div> */}
                    {/* <div className='blog-view-details-btn text-center my-5'>
                                      <Link to="/blogs" >See More</Link>
                                      </div>   */}

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
                            <div className="col">
                                <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                    <Link><img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-5-400x280.jpg" className="card-img-top" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                        <div className='blog-view-details-btn'>
                                            <Link to="/blog/details/1" >View Details</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>


                    </div>



                    <SwiperSlide>
                        <div className="col">
                            <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                <Link><img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-5-400x280.jpg" className="card-img-top" alt="..." /></Link>
                                <div className="card-body">
                                    <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                    <div className='blog-view-details-btn'>
                                        <Link to="/blog/details/2" >View Details</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                <Link><img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-5-400x280.jpg" className="card-img-top" alt="..." /></Link>
                                <div className="card-body">
                                    <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                    <div className='blog-view-details-btn'>
                                        <Link to="/blog/details/3" >View Details</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                <Link><img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-5-400x280.jpg" className="card-img-top" alt="..." /></Link>
                                <div className="card-body">
                                    <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                    <div className='blog-view-details-btn'>
                                        <Link to="/blog/details/5" >View Details</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                <Link><img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-5-400x280.jpg" className="card-img-top" alt="..." /></Link>
                                <div className="card-body">
                                    <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                    <div className='blog-view-details-btn'>
                                        <Link to="/blog/details/6" >View Details</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                <Link><img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-5-400x280.jpg" className="card-img-top" alt="..." /></Link>
                                <div className="card-body">
                                    <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                    <div className='blog-view-details-btn'>
                                        <Link to="/blog/details/8" >View Details</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </section>
        </>
    );
};

export default Blog;