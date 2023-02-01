import React from 'react';

const UsdGenerateSingleItem = ({data, handleShow}) => {
    return (
        <>

<div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5 onClick={() => handleShow(data._id, data.usd_generate_package_name, data.usd_generate_package_amount , data.total_profit)}>{data.usd_generate_package_name}</h5>
                                                <p>200 Days membership</p>

                                                <span>$ {data.usd_generate_package_amount }</span>
                                            </div>
                                        </div>
            
        </>
    );
};

export default UsdGenerateSingleItem;