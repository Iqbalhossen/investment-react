import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CoinMining = () => {
    const [action, setAction] = useState('overview');
    const handleServices = (data) => {
        if ('overview' === data) {
            setAction('overview');
        }
        else if ('history' === data) {
            setAction('history');
        }
        else if ('claim' === data) {
            setAction('claim');
        }
    }
    return (
        <>

            <div className='services-menu container '>
                <Link onClick={() => handleServices('overview')}><h6 className=''>Overview</h6></Link>
                <Link onClick={() => handleServices('history')}><h6 className=''>History</h6></Link>
                <Link onClick={() => handleServices('claim')}><h6>Claim</h6></Link>
            </div>
            <section className='container mt-3'>

                <div className={`${action === 'overview' ? 'shadow-lg p-3 mb-5 bg-body rounded d-block' : 'shadow-lg p-3 mb-5 bg-body rounded d-none'}`}>

                   
                <div className='deposit-title text-center'>
                        {/* <i className="fa-solid fa-arrow-left"></i> */}
                        <h1>Coin Mining</h1>

                    </div>



                    <div className="row g-4">

                        <div className="col-12 col-md-4 col-lg-4 py-lg-3 py-md-3">

                            <div className='deposit-form-area px-md-3 px-lg-3'>
                                <small>Token Amount</small>
                                <div className='deposit-form'>
                                    <select className="form-select withdraw-input" aria-label="Default select example">
                                        <option selected disabled>Selceted Amount</option>
                                        <option value="1">35</option>
                                        <option value="2">43</option>
                                        <option value="3">65</option>
                                    </select>
                                </div>

                                <div className='total-calculate'>
                                    <small>Available Balance</small>
                                    <h4>0 USDT</h4>
                                    <small>Profit Per Day</small>
                                    <h4>0 USDT</h4>
                                    <small>Commission</small>
                                    <h4>0.5%</h4>

                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-md-8 col-lg-8 py-0 py-lg-3 py-md-3">
                            <div className='col-12 col-md-12 col-lg-8'>
                                <div>
                                    <div className='withdraw-img'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbXv8bN5un2I_nZEDZgpEpFnRJohSiel_NQ&usqp=CAU" alt="" />



                                    </div>

                                    <div className='mobile-balance-show mb-2'>
                                        <div className='d-flex justify-content-between m-0 align-items-center'>
                                            <small>Available Balance : <strong>0 USD</strong></small>
                                            <small>Package Amount : <strong>0 USD</strong></small>
                                        </div>
                                        <hr />
                                        <div className='d-flex  m-0 justify-content-between align-items-center'>
                                            <small>Package Name: <strong>Silver</strong></small>
                                            <small>Duration Days: <strong>14 days</strong></small>
                                        </div>
                                        <hr />
                                        <div className='d-flex  m-0 justify-content-between align-items-center'>
                                            <small>Per Day Profit : <strong>1.5 USD</strong></small>
                                            <small>Total Profit: <strong>$405- USDT</strong></small>
                                        </div>
                                        <hr />
                                        <div className='d-flex  m-0 justify-content-between align-items-center'>
                                            <small>Commission : <strong>$0.5%</strong></small>

                                        </div>

                                    </div>

                                    <div className='deposit-form-area pb-4 pt-4'>
                                        <small>Yow can't transfer dollers to your main balance from here until your earn $10...</small>
                                    </div>

                                    <div className="d-grid gap-2 my-3">
                                        <button className="btn btn-primary deposit-btn-submit" type="button">Confirm</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>


                {/* Overview history start  */}
                <div className={`${action === 'history' ? 'shadow-lg p-3 mb-5 bg-body rounded d-block' : 'shadow-lg p-3 mb-5 bg-body rounded d-none'}`}>

                    <div className='deposit-title align-items-center  d-flex'>
                        <i className="fa-solid fa-arrow-left"></i>
                        <h1>History</h1>

                    </div>


                    <div className='scrollbar-x '>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Generation</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td >Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>



                </div>
                {/* Overview history end  */}





                {/* Overview Claim start  */}
                <div className={`${action === 'claim' ? 'shadow-lg p-3 mb-5 bg-body rounded d-block' : 'shadow-lg p-3 mb-5 bg-body rounded d-none'}`}>

                    <div className='deposit-title align-items-center  d-flex'>
                        <i className="fa-solid fa-arrow-left"></i>
                        <h1>Claim</h1>

                    </div>


                    <div className='scrollbar-x '>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Generation</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td >Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>




                </div>
                {/* Overview Claim end  */}



            </section>
        </>
    );
};

export default CoinMining;