import React from 'react';
import './BlogsDetails.css'
import image from './bg8.jpg'

const BlogsDetails = () => {
    return (
        <>

            <section className='container py-3'>

                <div className='blogs-title'>

                    <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>

                </div>

                <div className="row row-cols-1 container row-cols-md-2  row-cols-lg-2 g-4 m-0">

                    <div className="col">
                        <div className='blog-image m-auto'>
                            <img src={image} alt="" />
                        </div>
                        <div className='blog-author pt-1 d-flex justify-content-between align-items-center px-5'>
                            <div className='d-flex align-items-center m-0'>
                                <i class="fa-solid fa-user"></i>
                                <p>Admin</p>
                            </div>
                            <div className='d-flex align-items-center m-0'>
                                <i class="fa-solid fa-clock"></i>
                                <p>29-1-23</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='blog-short-dis'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>

             

                </div>

                <div className='blog-short-dis mt-5 container'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>

            </section>

        </>
    );
};

export default BlogsDetails;