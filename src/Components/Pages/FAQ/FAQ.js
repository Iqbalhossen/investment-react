import React from 'react';
import './FAQ.css'
import background from '../../Home/Sliders/slider-8.webp';
import { Accordion } from 'react-bootstrap';
const FAQ = () => {
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
                            <h1>Explore FAQs for Detailed Feature Instructions!</h1>
                            <p>Discover everything you need to know about specific features by exploring our FAQs for detailed and comprehensive instructions!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container py-lg-5 py-3'>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is the main business of your company?
                        </Accordion.Header>
                        <Accordion.Body>
                            Crypto Mining (Asic Mining)
                            Crypto trading
                            Forex trading
                            Virtual gaming &
                            Eco system
                            etc. etc
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is the income source of your company?

                        </Accordion.Header>
                        <Accordion.Body>
                            Our company is controlling 30% of the top local cryptocurrency,
                            Through trading,
                            also we have our own cryptocurrency.
                            And we have one of the sources of eco system, where there is a huge platform in virtual gaming,
                            Etc. etc
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>I will invest in your company.
                            How safe is my Infusion ?


                        </Accordion.Header>
                        <Accordion.Body>
                            Our company is completely runing on blockchain technology,
                            And each capital is stored in separate blocks,
                            Whose claimant is only the investor,
                            So your capital is 100% safe.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Can I invest multiple times in your company?


                        </Accordion.Header>
                        <Accordion.Body>
                            Yes you can
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>How many days a person can work here by purchasing a package?


                        </Accordion.Header>
                        <Accordion.Body>
                            you can unlimited times in work here by upgrade your package
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </>
    );
};

export default FAQ;