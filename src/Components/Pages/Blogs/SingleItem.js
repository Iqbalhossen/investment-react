import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({ data, index }) => {
    return (
        <>

            <div className="col">
                <div className="card h-100 shadow-lg  mb-5 bg-body rounded border-0 overflow-hidden">
                    <Link><img src={data.image} className="card-img-top services-zoom" alt="..." /></Link>
                    <div className="card-body">
                        <Link to=""><h5 className="card-title">{data.title}</h5></Link>
                        <p className="card-text">{(data.shortDisc).substring(0, 80) + "..."}</p>
                        <div className='blog-view-details-btn'>
                            <Link to={`/blog/details/${data._id}`} >View Details</Link>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
};

export default SingleItem;