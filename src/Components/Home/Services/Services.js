import React from 'react';
import './Services.css';
const Services = () => {
    return (
        <>

            <section className='container py-5 services'>
                <div className='row'>
                   <div className='col-12 col-lg-8'>
                   <div className='services-header'>
                            <h1>Our <h2>Services</h2></h1>
                            <div className="diamond-line-centered-theme-colored work-diamond"></div>
                            <p className=''>We care for children, protect their welfare, and prepare them for the future are the most important issues we face during our lifetime.
                            </p>
                            
                        </div>
                        <div className='row py-3'>
                                <div className='col-lg-6 col-md-6'>
                                    <div className='row service-item'>
                                        <div className='col-4 p-0 text-end pe-3'><i class="fa fa-unlock-alt"></i></div>
                                        <div className='col-8'>
                                            <h3>Safe & Secure</h3>
                                            <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6'>
                                    <div className='row service-item'>
                                        <div className='col-4 text-end pe-3'><i class="fa fa-suitcase"></i></div>
                                        <div className='col-8'>
                                            <h3>Get Coin to a Wallet</h3>
                                            <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6 col-md-6'>
                                    <div className='row service-item'>
                                        <div className='col-4 p-0 text-end pe-3'><i class="fa fa-credit-card"></i></div>
                                        <div className='col-8'>
                                            <h3>Instant Exchange</h3>
                                            <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6'>
                                    <div className='row service-item'>
                                        <div className='col-4 text-end pe-3'><i class="fa fa-users"></i></div>
                                        <div className='col-8'>
                                            <h3>Experts Support</h3>
                                            <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6'>
                                    <div className='row service-item'>
                                        <div className='col-4 p-0 text-end pe-3'><i class="fa fa-cubes"></i></div>
                                        <div className='col-8'>
                                            <h3>Recuring Buys</h3>
                                            <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6'>
                                    <div className='row service-item'>
                                        <div className='col-4 text-end pe-3'><i class="fa fa-mobile"></i></div>
                                        <div className='col-8'>
                                            <h3>Mobile Apps</h3>
                                            <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam.</p>
                                        </div>
                                    </div>
                                </div>
                                </div>

    
                   </div>
                   <div className='col-lg-4'>
                   <div className='service-image'>
                        <img src="https://kodesolution.com/html/2018/cryptocoin-html/demo/images/services/1.png" alt="" />
                    </div>
                   </div>
                </div>
            </section>

        </>
    );
};

export default Services;