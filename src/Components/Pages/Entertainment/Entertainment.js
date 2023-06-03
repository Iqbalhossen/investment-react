import React from 'react';
import { Link } from 'react-router-dom';
import './Entertainment.css';
import image1 from './image1.webp';
import image4 from './image4.webp';
import image5 from './image5.webp';
import image6 from './image6.webp';
import image7 from './image7.webp';
import image8 from './image8.webp';
import image9 from './image9.webp';
const Entertainment = () => {
    return (
        <>
            <section className='all-services py-2'>

                <div className=' container pb-4'>

                    <div className='all-services-title'>
                        <h2>Entertainment</h2>
                        <p>The entertainment is very important for every human life,
                            you know life is so boring without entertainment,
                            so we aim to entertained everyone,
                            we bring you an entertainment platform,
                            There are free games to play as well as premium games,</p>
                    </div>


                    <div className='blog-section container services-page'>
                        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">

                            <div className="col">
                                <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
                                    <Link to="/free/games"><img src={image1} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/free/games"><h3>
                                            Free Games</h3></Link>
                                      
                                    </div>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-lg overflow-hidden bg-body rounded border-0">
                                    <Link to="/premium/games"><img src={image4} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/premium/games"><h3>Premium Games</h3></Link>
                            

                                    </div>

                                </div>
                            </div>

                            <div className="col">
                                <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
                                    <Link to="/paid/games"><img src={image5} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/paid/games"><h3>Paid Games</h3></Link>
                                       
                                    </div>

                                </div>
                            </div>

                            <div className="col">
                                <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
                                    <Link to="/horse/raceing/games"><img src={image6} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/horse/raceing/games"><h3>Horse Raceing</h3></Link>
                                       

                                    </div>

                                </div>
                            </div>

                            <div className="col">
                                <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
                                    <Link to="/hungry/tiger/games"><img src={image7} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/hungry/tiger/games"><h3>Hungry Tiger</h3></Link>
                                        
                                    </div>

                                </div>
                            </div>

                            <div className="col">
                                <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
                                    <Link to="/ludo/games"><img src={image8} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/ludo/games"><h3>Ludo</h3></Link>
                                      
                                    </div>

                                </div>
                            </div>


                            <div className="col">
                                <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
                                    <Link to="/etc/games"><img src={image9} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/etc/games"><h3>Etc</h3></Link>
                                      
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

export default Entertainment;