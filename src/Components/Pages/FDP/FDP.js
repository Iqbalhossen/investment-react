import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Picture2 from './services(1).webp';
import Picture3 from './services(2).webp';
import coming from './coming-soon.png';
const FDP = () => {


    return (
        <>
            <section className='all-services py-2'>

                <div className=' container pb-4'>

                    <div className='all-services-title'>
                        <h1>Fixed Deposit  <h2>Package</h2></h1>
                        {/* <div className="diamond-line-centered-theme-colored service-line"></div> */}
                        <p>Learn about profitable financial opportunities with Yumeone - Make Money Smarter with Our 4 User-Friendly Services: USD Generator, Coin Mining, and Fixed Deposit Package</p>
                    </div>


                    <div className='blog-section container services-page'>
                        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">

                            <div className="col">
                                <div className="card  shadow-lg overflow-hidden  bg-body rounded border-0">
                                    <Link to="/fdp/monthly"><img src={Picture2} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/fdp/monthly"><h3>Monthly Fixed Deposit Package</h3></Link>
                                        <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ipsum eget tortor consequat faucibus</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card  shadow-lg overflow-hidden bg-body rounded border-0">
                                    <Link to="/coin/mining"><img src={Picture3} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/coin/mining"><h3>Yearly Fixed Deposit Package</h3></Link>
                                        <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ipsum eget tortor consequat faucibus</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>


          



        </>
    );
};

export default FDP;