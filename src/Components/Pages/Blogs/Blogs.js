import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <>
           <section className='blogs'>
                <div className='container'>
                   
                    <div className='blog-section'>
                        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 g-4">
                            <div className="col">
                                <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                    <Link><img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-8-400x280.jpg" className="card-img-top" alt="..." /></Link>
                                    <div className="card-body">
                                    <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                        <div className='blog-view-details-btn'>
                                      <Link to="/blog/details/53" >View Details</Link>
                                      </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                    <img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-9-400x280.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                        <div className='blog-view-details-btn'>
                                      <Link to="/blog/details/43" >View Details</Link>
                                      </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                    <img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-5-400x280.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                      <div className='blog-view-details-btn'>
                                      <Link to="/blog/details/3" >View Details</Link>
                                      </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                    <Link><img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-8-400x280.jpg" className="card-img-top" alt="..." /></Link>
                                    <div className="card-body">
                                    <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                        <div className='blog-view-details-btn'>
                                      <Link to="/blog/details/4" >View Details</Link>
                                      </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                    <img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-9-400x280.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                        <div className='blog-view-details-btn'>
                                      <Link to="/blog/details/6" >View Details</Link>
                                      </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded border-0">
                                    <img src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/blog-5-400x280.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                                      <div className='blog-view-details-btn'>
                                      <Link to="/blog/details/7" >View Details</Link>
                                      </div>
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

export default Blogs;