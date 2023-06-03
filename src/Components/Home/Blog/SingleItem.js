import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

const SingleItem = ({data}) => {
    return (
<>

       
        <div className="p-3 overflow-hidden w-100">
            <div className="card h-100 shadow-lg overflow-hidden mb-5 bg-body rounded border-0">
                <Link><img src={data.image} className="card-img-top services-zoom" alt="..." /></Link>
                <div className="card-body">
                    <Link to=""><h5 className="card-title">This is a standard post with thumbnail</h5></Link>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor</p>
                    <div className='blog-view-details-btn'>
                        <Link to="/blog/details/2" >View Details</Link>
                    </div>
                </div>

            </div>
        </div>
</>
   
  
    );
};

export default SingleItem;