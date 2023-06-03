import React from 'react';
import { Link } from 'react-router-dom';

import withdraw from './withdraw.webp'
import diposite from './diposite.webp'

const Wallets = () => {
    return (
        <>
            <section className='all-services py-2 pb-4'>

                <div className=' container'>

                    <div className='all-services-title'>
                        <h1>Our <h2>Wallets</h2></h1>
                        {/* <div className="diamond-line-centered-theme-colored service-line"></div> */}
                        <p>Start your wealth creation journey with dynamic deposits starting at $50. Choose from our four lucrative packages for maximum earnings, and enjoy instant withdrawals upon completion. Take control of your financial future now!..</p>
                    </div>


                    <div className='blog-section container '>
                        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
                            <div className="col">
                                <div className="card h-100 overflow-hidden  shadow-lg  bg-body rounded border-0">
                                    <Link to="/deposit/now"><img src={diposite} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body ">
                                        <Link to="/deposit/now"><h3>Deposit</h3></Link>
                                        <p>Dynamic deposits put you in control! Deposits start at just $50, with no upper limit. As you deposit, your opportunities increase. Get a head start!</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 overflow-hidden  shadow-lg  bg-body rounded border-0">
                                    <Link to="/withdraw/now"><img src={withdraw} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body ">
                                        <Link to="/withdraw/now"><h3>Withdraw</h3></Link>
                                        <p>Unlock Your Profits Now! Withdraw Your Hard-Earned Money Instantly upon Completion of the Process. Choose from Our Four Lucrative Packages for Optimal Earnings</p>

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

export default Wallets;