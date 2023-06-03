import React from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

const SingleItem = ({ data, index }) => {
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy");
    return (
        <>
            <div className='shadow-lg p-2 bg-body user-message rounded notification-btn px-4 my-2'>
                <h1>{data?.Title}</h1>
                <span>{data?.author_name}</span>
                <small>{time}</small>
                <p>{(data?.messages).substring(0, 180) + "..."} </p>
                <p>
                <Link class="btn fw-bolder " to={`/notification/details/${data?._id}`}>More</Link>
                </p>

            </div>

        </>
    );
};
export default SingleItem;