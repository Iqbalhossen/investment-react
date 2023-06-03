import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';

const Monthly = () => {
    const [action, setAction] = useState('overview');
    const handleServices = (data) => {
        if ('overview' === data) {
            setAction('overview');
        }
        else if ('buyPackage' === data) {
            setAction('buyPackage');
        }
        else if ('history' === data) {
            setAction('history');
            console.log(data)
        }

    }




    const  { LoginWithEmail, authUser } = useContext(AuthContext);

    const [message, setMessage] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/fdp/monthly";


    const [deposit, setDeposit] = useState({});

    const [showUsdGenerate, setUsdGenerate] = useState([]);




    // User Balance 



    const [withdrawAmount, setwithdrawAmount] = useState([])

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/withdraw/accept/view/${authUser.userName}/${authUser._id}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setwithdrawAmount(data.data.data);
                });
        }


    }, [])

    let withdrawAmountSum = 0
    for (let i = 0; i <= withdrawAmount?.length; i++) {
        if (withdrawAmount[i]) {
            withdrawAmountSum += parseFloat(withdrawAmount[i]?.amountWithVat);
        }

    }



    const [totalDeposit, setTotalDeposit] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/deposit/accept/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setTotalDeposit(data.data);
                });
        }


    }, [])


    let DepositAmountSum = 0
    for (let i = 0; i <= totalDeposit?.length; i++) {
        if (totalDeposit[i]) {
            DepositAmountSum += parseFloat(totalDeposit[i]?.amount);
        }

    }

    const [bonusAmount, setbonusAmount] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/bonus/balance/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setbonusAmount(data.data.data);
                    // console.log(data.data);
                });
        }

    }, [])

    let userTotalbonusAmount = 0
    for (let i = 0; i <= bonusAmount?.length; i++) {
        if (bonusAmount[i]) {
            userTotalbonusAmount += parseFloat(bonusAmount[i]?.amount);
        }

    }



    const [CoinbonusAmount, setCoinbonusAmount] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/deposit/accept/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setCoinbonusAmount(data.data.data);
                    console.log(data);
                });
        }

    }, [])

    let userTotalCoinbonusAmount = 0
    for (let i = 0; i <= CoinbonusAmount?.length; i++) {
        if (CoinbonusAmount[i]) {
            userTotalCoinbonusAmount += parseFloat(CoinbonusAmount[i]?.amount);
        }

    }





    //  User Balance End 



    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/usd/generate/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setUsdGenerate(data);
                    // console.log(data)
                });
        }

    }, [])


    let UsdGenSum = 0
    for (let i = 0; i <= showUsdGenerate.length; i++) {
        if (showUsdGenerate[i]) {
            UsdGenSum += parseFloat(showUsdGenerate[i].package_amount);
        }

    }



    const [showCoinMining, setCoinMining] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/coin/mining/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setCoinMining(data);
                    // console.log(data)
                });
        }

    }, [])

    // console.log(AmountSum)
    let CoinMiningSum = 0
    for (let i = 0; i <= showCoinMining.length; i++) {
        if (showCoinMining[i]) {
            CoinMiningSum += parseFloat(showCoinMining[i].package_amount);
        }

    }





  
 

    const [monthlyPackageShow, setmonthlyPackageShow] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/monthly/package/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setmonthlyPackageShow(data.data);
                    // console.log(data.data);
                });
        }

    }, [])


const [btnDisable, setBtnDisable] = useState(false);

    const handleForm = event => {
        setBtnDisable(true)
        event.preventDefault();
        // console.log(deposit);
        fetch('http://localhost:5000/api/user/monthly/package/store', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            },
            body: JSON.stringify(deposit)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.success === false) {
                    setBtnDisable(false)
                    setMessage(data);
                    // console.log(data)

                } else {
                    // setMessage(data);
                    navigate(userFrom, { replace: true });
                    toast('package buy successfull!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    // setLoading(false);

                }


            })
            .catch(error => <></>);
        event.target.reset();
    }

    const handleInputBlur = event => {
        setMessage('');
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...deposit, user_name: authUser?.userName };
        newUser[field] = value;
        setDeposit(newUser);
    }



    // Bonus Section 


    const [Totaldirect, setTotaldirect] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/monthly/package/direct/sells/bonus/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setTotaldirect(data.data);
                    // console.log(data.data.data);
                });
        }

    }, [])



    let userTotaldirect = 0


    for (let i = 0; i <= Totaldirect.length; i++) {
        if (Totaldirect[i]) {
            userTotaldirect += parseInt(Totaldirect[i].commision);
        }

    }


    const [Totalteam, setTotalteam] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/monthly/package/team/sells/bonus/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setTotalteam(data.data);
                    // console.log(data.data.data);
                });

        }
    }, [])

    let userTotalteam = 0
    for (let i = 0; i <= Totalteam?.length; i++) {
        if (Totalteam[i]) {
            userTotalteam += parseFloat(Totalteam[i]?.commision);
        }

    }

    const [Totalgeneration, setTotaltgeneration] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/monthly/package/generation/bonus/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setTotaltgeneration(data.data);
                    // console.log(data.data);
                });
        }

    }, [])

    let userTotalgeneration = 0
    for (let i = 0; i <= Totalgeneration?.length; i++) {
        if (Totalgeneration[i]) {
            userTotalgeneration += parseFloat(Totalgeneration[i]?.commision);
        }

    }





    return (
        <>


            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='services-menu container mt-5 d-flex justify-content-between'>
                {/* <Link ><h6 className=''>Overview</h6></Link> */}
                <button onClick={() => handleServices('overview')} class="btn btn-light btn-color fw-bolder ">Overview</button>

                <button onClick={() => handleServices('buyPackage')} class="btn btn-light btn-color fw-bolder"> Buy Package</button>
                <button onClick={() => handleServices('history')} class="btn btn-light btn-color fw-bolder ">History</button>

            </div>

            <section className='container mt-3'>

                <div className={`${action === 'buyPackage' ? 'shadow-lg p-3 mb-5 bg-body rounded d-block ' : 'shadow-lg p-3 mb-5 bg-body rounded d-none'}`}>

                    <div className='deposit-title text-center'>
                        {/* <i className="fa-solid fa-arrow-left"></i> */}
                        <h1>Monthly Fixed Deposit</h1>

                    </div>

                    <form onSubmit={handleForm}>

                        <div className="row g-4">

                            <div className="col-12 col-md-4 col-lg-4 py-lg-3 py-md-3">
                                <div className='deposit-form-area px-md-3 px-lg-3'>
                                    <small>Token Amount</small>
                                    <div className='deposit-form'>
                                        <input type="text" onChange={handleInputBlur} width='70%' name="amount" className="form-control deposit-input" placeholder="Enter your Amount" />
                                
                                        <p className='text-danger'>{message.message}</p>
                                    </div>

                                    <div className='total-calculate'>
                                        <small>Available Balance</small>
                                        <h4>$ {userTotalCoinbonusAmount + userTotalbonusAmount + DepositAmountSum - withdrawAmountSum - UsdGenSum - CoinMiningSum} USD</h4>
                                        <small>Frozen Balance</small>
                                        <h4>$ {deposit?.amount ? userTotalCoinbonusAmount + userTotalbonusAmount + DepositAmountSum - withdrawAmountSum - UsdGenSum - CoinMiningSum - deposit?.amount : 0} USD</h4>
                                        <small>Duration </small>
                                        <h4>1095 Days</h4>
                                        <small>Commission</small>
                                        <h4>3x</h4>
                                        <small>Total Profit Back: </small>
                                        <h4>$ {deposit?.amount ? deposit?.amount * 3 : 0} USD</h4>
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
                                                <small>Available Balance : <strong> USD</strong></small>
                                                <small>Frozen Balance : <strong> USD</strong></small>

                                            </div>
                                            <hr />
                                            <div className='d-flex  m-0 justify-content-between align-items-center'>
                                                <small>Duration : <strong>1095 Days</strong></small>
                                                <small>Commission : <strong>3x</strong></small>

                                            </div>
                                            <hr />
                                            <div className='d-flex  m-0 justify-content-between align-items-center'>
                                                <small>Total Profit Back : <strong>$  USDT</strong></small>
                                            </div>
                                            <hr />
                                            <div className='d-flex  m-0 justify-content-between align-items-center'>

                                            </div>

                                        </div>

                                        <div className='deposit-form-area pb-4 pt-4'>
                                            <small>Yow can't transfer dollers to your main balance from here until your earn $10...</small>
                                        </div>
                                        <div class="d-grid gap-2">



                                        {(() => {
                                                if (btnDisable === true) {
                                                    return (
                                                        <>
                                                            <button class="btn btn-primary deposit-btn-submit" type="submit" disabled>Confirm</button>
                                                        </>
                                                    )
                                                } else {
                                                    return (
                                                        <>
                                                            {userTotalCoinbonusAmount + userTotalbonusAmount + DepositAmountSum - withdrawAmountSum - UsdGenSum - CoinMiningSum - deposit?.amount >= 0 ? <button class="btn btn-primary deposit-btn-submit" type="submit" >Confirm</button> : <button class="btn btn-primary deposit-btn-submit" type="submit" disabled>Confirm</button>}
                                                        </>
                                                    )
                                                }
                                            })()}



                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </form>
                </div>

                {/* Overview buyPackage start  */}
                <div className={`${action === 'overview' ? 'shadow-lg p-3 mb-5 bg-body rounded d-block ' : 'shadow-lg p-3 mb-5 bg-body rounded  d-none'}`}>

                    {message.message}
                    <div className="row row-cols-1 row-cols-md-2 usd-generate-area  row-cols-lg-2 g-4">
                        <div className="col ">
                            <div className="card Withdrawal usd-gen-mining-color1  shadow-lg p-1  bg-body rounded border-0">
                                <Link to={`/usd/generate/direct/sells/bonus/${authUser?.userName}/${authUser._id}`}>
                                    <div className="card-body card-image">
                                        <h3><i class="fa-solid fa-circle-dollar-to-slot"></i>Direct Sells Bonus</h3>
                                        <div className='price d-flex text-center'>
                                            <i class="fa-solid fa-comments-dollar"></i>
                                            <p>$ {userTotaldirect}</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                        <div className="col">
                            <div className="card total shadow-lg usd-gen-mining-color1 p-1  bg-body rounded border-0">
                                <Link to={`/usd/generate/generation/bonus/${authUser?.userName}/${authUser._id}`}>

                                    <div className="card-body card-image">
                                        <h3><i class="fa-solid fa-file-invoice-dollar"></i>Generation Bonus</h3>
                                        <div className='price d-flex text-center'>
                                            <i class="fa-solid fa-comments-dollar"></i>
                                            <p>$ {userTotalgeneration.toFixed(8)}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card total shadow-lg usd-gen-mining-color1 p-1  bg-body rounded border-0">
                                <Link to={`/usd/generate/team/sells/bonus/${authUser?.userName}/${authUser._id}`}>

                                    <div className="card-body card-image">
                                        <h3><i class="fa-solid fa-hand-holding-dollar"></i>Team Sells Bonus</h3>
                                        <div className='price d-flex text-center'>
                                            <i class="fa-solid fa-comments-dollar"></i>
                                            <p>$ {userTotalteam.toFixed(8)}</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>

                        <div className="col">
                            <div className="card total shadow-lg usd-gen-mining-color1 p-1  bg-body rounded border-0">
                                <Link to="/usd/generate/transfer/balance">

                                    <div className="card-body card-image">
                                        <h3><i class="fa-solid fa-filter-circle-dollar"></i>Total Bonus</h3>
                                        <div className='price d-flex text-center'>
                                            <i class="fa-solid fa-comments-dollar"></i>
                                            <p>$ {(userTotalteam + userTotaldirect + userTotalgeneration - userTotalbonusAmount).toFixed(8)}</p>
                                        </div>
                                        {/* <span>transfer</span> */}
                                    </div>

                                </Link>


                            </div>
                        </div>

                    </div>




                    <div className='container mt-2 profile-hide '>

                    </div>













                </div>
                {/* Overview buyPackage end  */}

                <div className={`${action === 'history' ? 'shadow-lg p-3 mb-5 bg-body rounded d-block ' : 'shadow-lg p-3 mb-5 bg-body rounded d-none'}`}>

                    <div className='deposit-title align-items-center mt-3  d-flex'>
                        <i className="fa-solid fa-arrow-left"></i>
                        <h1>History</h1>

                    </div>


                    <div className='scrollbar-x '>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Package Amount</th>
                                    <th scope="col">Profit</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {


                                    monthlyPackageShow.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                                }


                            </tbody>
                        </table>

                    </div>

                </div>


            </section>
        </>
    );
};

export default Monthly;