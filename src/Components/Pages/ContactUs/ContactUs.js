import React from 'react';
import background from '../../Home/Sliders/slider-8.webp';
import './ContactUs.css'
const ContactUs = () => {
    const styles = {
        header: {
            backgroundImage: `url(${background})`,

        }
    }
    return (
        <>
            <section className="sliders faq contact" style={styles.header}>
                <div className='silder-overlay' >
                    <div className='container'>
                        <div className='slider-content contact-title pt-lg-5 pt-3'>
                            <h1>Contact Us</h1>
                            <p>Please be as specific as possible about your inquiry or issue, so we can provide you with the best possible assistance. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container  p-lg-5 p-md-5 p-3 contact-form '>
                <div className="row row-cols-1 container row-cols-md-2  row-cols-lg-2 m-0 shadow-lg p-0  rounded">

                    <div className="col p-lg-5 p-md-5 p-3">
                        <h1>Get in touch</h1>

                        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-2 g-4">
                            <div className="col">
                                <input type="email" class="form-control" placeholder='Name' />
                            </div>
                            <div className="col">
                                <input type="email" class="form-control" placeholder='Email Address' />

                            </div>
                        </div>
                        <div className='mt-4'>
                            <input type="email" class="form-control" placeholder='Subject' />

                        </div>
                        <div className='mt-4'>
                            <textarea class="form-control" rows="4" placeholder="Message"></textarea>
                        </div>
                        <div className='text-end mt-4'>
                            <button type="button" class="btn btn-primary">Send Message</button>
                        </div>                    </div>
                    <div className="col contact-details  p-lg-5 p-md-5 p-3">
                        <h2>Conatct</h2>

                        <div className='contact-info d-flex align-items-stretch m-0'>
                        <i class="fa-solid fa-location-dot"></i>
                            <h5>Address:</h5>
                            <p>Address :- Modulo Hamamatsucho. Bildg:- 4F 1-3-13. Tokyo, 105-0013 Japan</p>
                        </div>
                        <div className='contact-info d-flex align-items-stretch m-0'>
                        <i class="fa-solid fa-envelope"></i>
                            <h5>Email:</h5>
                            <p>yumeone@gmail.com</p>
                        </div>
                        <div className='contact-info d-flex align-items-stretch m-0'>
                        <i class="fa-solid fa-globe"></i>
                            <h5>WebSite:</h5>
                            <p>yumeone.com</p>
                        </div>

                    </div>
                </div>

            </section>

        </>
    );
};

export default ContactUs;