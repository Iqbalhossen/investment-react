import React from 'react';
import './About.css'
import image from './bg8.jpg'
const About = () => {
    return (
        <>

            <div className='about py-5'><h2>About us</h2></div>

            <section className='container py-lg-5 py-2'>

                <div className="row row-cols-1 row-cols-md-2  row-cols-lg-2 g-4">
                    <div className="col">
                        <div className='about-title px-3' >
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long established fact that a reader will</h1>
                        </div>

                    </div>
                    <div className="col align-self-end">
                        <div className='about-sub-title '>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>

                    </div>
                </div>

            </section>
            <div className='about-image py-3'>
                <img src={image} alt="" />

            </div>

            <section className='container about-maddile py-4'>
                <hr />

                <div className="row row-cols-1 row-cols-md-2  row-cols-lg-2 g-4">
                    <div className="col">
                        <div className='about-title px-3' >
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long established fact that a reader will</h1>
                        </div>

                    </div>
                    <div className="col">
                        <div className='about-sub-title '>
                            <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</h5>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.s</p>
                        </div>

                    </div>
                </div>


                <div className='company-author mt-5'>
                    <div className="row row-cols-1 row-cols-md-2  row-cols-lg-2 g-4">
                        <div className="col ">
                                <div className='shadow-lg p-3 px-lg-5 px-3 mb-lg-5 mb-2  rounded'>
                                        <div className='d-flex justify-content-between align-items-center m-0'>
                                        <i class="fa-solid fa-person"></i>
                                        <h3>Lorem Ipsum is (Founder)</h3>
                                        </div>
                                        <hr />
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                </div>
                               
                        </div>
                        <div className="col ">
                                <div className='shadow-lg p-3 px-lg-5 px-3 mb-lg-5 mb-2  rounded'>
                                        <div className='d-flex justify-content-between align-items-center m-0'>
                                        <i class="fa-solid fa-person"></i>
                                        <h3>Lorem Ipsum is  (CEO)</h3>
                                        </div>
                                        <hr />
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                </div>
                               
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default About;