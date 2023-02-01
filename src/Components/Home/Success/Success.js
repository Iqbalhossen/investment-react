import React from 'react';
import './Success.css';
const Success = () => {

    // var sectionStyle = {
    //     width: "100%",
    //     height: "auto",
    //     backgroundImage: `url(https://kodesolution.com/html/2018/cryptocoin-html/demo/images/bg/bg1.jpg)`,
    //     backgroundRepeat: " no-repeat",
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",

    // };

    return (
        <>
            <section className=" my-5 py-5 success">
                <div className='success-header text-center'>
                    <h1>Our Success</h1>
                    <div className="diamond-line-centered-theme-colored "></div>
                    <p>Lorem ipsum dolor simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className='container pt-5'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-lg-3'>
                        <div className='d-flex '>
                            <div className='success-icon'>
                            <i className="fa-solid fa-bag-shopping"></i>
                            </div>
                            <div className='success-value'>
                                <h2>10k</h2>
                               
                                <p>WALLET USERS</p>
                            </div>

                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-3'>
                        <div className='d-flex'>
                            <div className='success-icon'>
                            <i className="fa-solid fa-dollar-sign"></i>
                            </div>
                            <div className='success-value'>
                                <h2>10k</h2>
                               
                                <p>TOTAL TRANSACTIONS</p>
                            </div>

                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-3'>
                        <div className='d-flex'>
                            <div className='success-icon'>
                            <i className="fa-solid fa-user"></i>
                            </div>
                            <div className='success-value'>
                                <h2>128</h2>
                               
                                <p>ONLINE CONSULTANTS</p>
                            </div>

                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-3'>
                        <div className='d-flex'>
                            <div className='success-icon'>
                            <i className="fa fa-suitcase"></i>
                            </div>
                            <div className='success-value'>
                                <h2>263</h2>
                               
                                <p>DAILY TRANSACTIONS</p>
                            </div>

                        </div>
                    </div>
               
                </div>
                </div>
            </section>
        </>
    );
};

export default Success;