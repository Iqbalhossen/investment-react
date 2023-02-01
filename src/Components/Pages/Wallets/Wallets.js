import React from 'react';
import { Link } from 'react-router-dom';

const Wallets = () => {
    return (
        <>
        <section className='all-services py-2 pb-4'>

            <div className=' container'>

                <div className='all-services-title'>
                    <h1>Our <h2>Wallets</h2></h1>
                    {/* <div className="diamond-line-centered-theme-colored service-line"></div> */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ipsum eget tortor consequat faucibus. Quisque aliquet nisl vel ante blandit, et convallis neque lobortis. Donec in gravida tellus, in suscipit eros. Cras scelerisque bibendum posuere.</p>
                </div>


                <div className='blog-section container '>
                    <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
                        <div className="col">
                            <div className="card  shadow-lg p-3  bg-body rounded border-0">
                                <Link to="/deposit/now"><img src="https://static.crowd1.com/cdn-cgi/image/width=500,format=auto,quality=100/static/assets/images/crowd-public/products/product-metaversy.jpg" className="card-img-top" alt="..." /></Link>
                                <div className="card-body">
                                <Link to="/deposit/now"><h3>Deposit</h3></Link>
                                            <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ipsum eget tortor consequat faucibus</p>

                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="card  shadow-lg p-3  bg-body rounded border-0">
                                <Link to="/withdraw/now"><img src="https://static.crowd1.com/cdn-cgi/image/width=500,format=auto,quality=100/static/assets/images/crowd-public/products/product-metaversy.jpg" className="card-img-top" alt="..." /></Link>
                                <div className="card-body">
                                <Link to="/withdraw/now"><h3>Withdraw</h3></Link>
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

export default Wallets;