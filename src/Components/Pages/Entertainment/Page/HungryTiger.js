import React from 'react';
import coming from './coming-soon.png';
const HungryTiger = () => {
    return (
        <section className='container mt-3'>

        <div className='coming-soon'>
                <img src={coming} className="card-img-top services-zoom coming-soon" alt="..." />
        
            </div>
        
        </section>
    );
};

export default HungryTiger;