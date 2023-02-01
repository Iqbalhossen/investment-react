import React from 'react';
import './FAQ.css'
import background from '../../Home/Sliders/1.jpg';
import { Accordion } from 'react-bootstrap';
const FAQ = () => {
    const styles = {
        header: {
            backgroundImage: `url(${background})`,

        }
    }

    return (
        <>
            <section className="sliders faq" style={styles.header}>
                <div className='silder-overlay' >
                    <div className='container'>
                        <div className='slider-content pt-lg-5 pt-3'>
                            <h1>Discover Digital Art
                                Sell Your Specific</h1>
                            <p>Partner with one of the world’s largest retailers to showcase your brand and products.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container py-lg-5 py-3'>

            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </section>
        </>
    );
};

export default FAQ;