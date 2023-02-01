import React from 'react';
import './ServicesBlog.css'
const ServicesBlog = () => {
    return (
        <>
            <section className='services-blog'>
                <div className='row'>
                <div className='image'>
                        <img src="https://kodesolution.com/html/2018/cryptocoin-html/demo/images/about/1.jpg" alt="" />
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <div className='services-blog-content'>
                            <h1>A New Money <h2>Yumeone</h2></h1>
                            <div class="diamond-line-centered-theme-colored service-line"></div>
                            <h5>We can change life with the teach of new kind of money and use anywhere as our wish.</h5>
                            
                            <p>Digital currency (digital money or electronic money or electronic currency) is a type of currency available only in digital form, not in physical (such as banknotes and coins). It exhibits properties similar to physical currencies, but allows for instantaneous transactions and borderless transfer-of-ownership. Examples include virtual currencies and cryptocurrencies or even central bank issued "digital base money".</p>
                        </div>
                    </div>
                    <div className='col-6 col-md-6 services-blog-img'>
                        <img src="https://kodesolution.com/html/2018/cryptocoin-html/demo/images/about/1.jpg" alt="" />
                    </div>
                </div>
            </section>

        </>
    );
};

export default ServicesBlog;