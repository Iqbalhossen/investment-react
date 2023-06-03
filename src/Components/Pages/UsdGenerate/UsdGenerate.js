import React, { useContext, useEffect, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';
import './UsdGenerate.css'
import Skeleton from 'react-loading-skeleton';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const UsdGenerate = () => {
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




    const { LoginWithEmail,  authUser } = useContext(AuthContext);

    const [message, setMessage] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/usd/generate";


    const [deposit, setDeposit] = useState({});


    const [total, setTotal] = useState([]);
    const [UsdGeneratePackage, setUsdGeneratePackage] = useState([]);

    const [UsdGeneratePackageByAmount, setUsdGeneratePackageByAmount] = useState([]);

    const [selectAmont, setselectAmont] = useState(0)

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/usd/generate/package/view`,
           {
                method: 'GET',
                headers: {
                    'authorization': 'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            }
            )
                .then(res => res.json())
                .then(data => {
                    setUsdGeneratePackage(data.data);
                    // console.log(data)
                });
        }

    }, [])



    const [showUsdGenerate, setUsdGenerate] = useState([]);

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





    // console.log(showUsdGenerate)
    const [usdBtnDisable, setUsdBtnDisable] = useState(false)
    const [usdSelectPackage, setusdSelectPackage] = useState('')
    
    const handleForm = event => {
        event.preventDefault();
        if (deposit.package_amount !== undefined) {
            setUsdBtnDisable(true);
            fetch('http://localhost:5000/api/user/usd/generate/store', {
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
                        setMessage(data.data);
                        // console.log(data)
                        setUsdBtnDisable(false);
                        toast('package buy unsuccessfull!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });

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
        } else {
            setusdSelectPackage("please select your package")
        }

    }

    const handleInputBlur = event => {
        setusdSelectPackage('')
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...deposit, user_name: authUser?.userName };
        newUser[field] = value;
        setDeposit(newUser);
    }


    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/usd/generate/package/view/${deposit.package_amount}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.data) {

                    }
                    if (data.data[0]) {
                        setUsdGeneratePackageByAmount(data.data[0]);
                        setselectAmont(data.data[0].usd_generate_package_amount)

                    }

                });
        }

    }, [deposit])






    ///////////////// mining section //////////////////////////////////

    const [TotalMining, setTotalMining] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/usd/generate/total/earning/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setTotalMining(data.data);
                    // console.log(data.data);
                });
        }

    }, [])



    let userTotalMining = 0
    for (let i = 0; i <= TotalMining.length; i++) {
        if (TotalMining[i]) {
            userTotalMining += parseFloat(TotalMining[i]?.commision);
        }

    }


    const [Totaldirect, setTotaldirect] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/bonus/direct/sells/bonus/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setTotaldirect(data.data.data);
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

    const [Totalroi, setTotalroi] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/bonus/roi/mint/bonus/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setTotalroi(data.data.data);
                    // console.log(data.data.data);
                });
        }

    }, [])

    let userTotalroi = 0
    for (let i = 0; i <= Totalroi.length; i++) {
        if (Totalroi[i]) {
            userTotalroi += parseFloat(Totalroi[i].commision);
        }

    }

    // console.log(userTotalroi)

    const [Totalteam, setTotalteam] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/bonus/team/sells/bonus/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setTotalteam(data.data.data);
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
            fetch(`http://localhost:5000/api/user/bonus/generation/bonus/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setTotaltgeneration(data.data.data);
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

    let userTotalbonusAbount = 0
    for (let i = 0; i <= bonusAmount?.length; i++) {
        if (bonusAmount[i]) {
            userTotalbonusAbount += parseFloat(bonusAmount[i]?.amount);
        }

    }




    
    const [totalBalance, setTotalBalance] = useState(0);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/personal/balance/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setTotalBalance(data.data);
                });
        }

    }, [])


    // console.log(totalBalance)

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
                <button onClick={() => handleServices('overview')} class="btn btn-light btn-color fw-bolder">Overview</button>

                <button onClick={() => handleServices('buyPackage')} class="btn btn-light btn-color  fw-bolder"> Buy Package</button>
                <button onClick={() => handleServices('history')} class="btn btn-light btn-color  fw-bolder">History</button>

            </div>

            <section className='container mt-3'>

                <div className={`${action === 'buyPackage' ? 'shadow-lg p-3 mb-5 bg-body rounded d-block ' : 'shadow-lg p-3 mb-5 bg-body rounded d-none'}`}>

                    <div className='deposit-title text-center'>
                        {/* <i className="fa-solid fa-arrow-left"></i> */}
                        <h1> USD Generate</h1>

                    </div>

                    <form onSubmit={handleForm}>

                        <div className="row g-4">

                            <div className="col-12 col-md-4 col-lg-4 py-lg-3 py-md-3">
                                {message.message}
                                <div className='deposit-form-area px-md-3 px-lg-3'>
                                    <small>Token Amount</small>
                                    <div className='deposit-form'>
                                        <select name='package_amount' className="form-select" onChange={handleInputBlur}>
                                            {<option value="" selected disabled>choise Amount</option>}
                                            {UsdGeneratePackage.map((data) => {
                                                return (
                                                    <option key={data._id} value={data.usd_generate_package_amount} >
                                                        $  {data.usd_generate_package_amount}  {data.usd_generate_package_name} </option>
                                                );
                                            })
                                            }
                                        </select>
                                    </div>
                                    <p className='text-danger'>{usdSelectPackage}</p>
                                    <div className='total-calculate'>


                                        <small>Available Balance</small>
                                        <h4>$ {totalBalance} USD</h4>
                                        <small>Package Name </small>
                                        <h4>{UsdGeneratePackageByAmount?.usd_generate_package_name ? UsdGeneratePackageByAmount?.usd_generate_package_name : 'please select'}</h4>
                                        <small>Package Amount </small>
                                        <h4>$ {deposit.package_amount ? deposit.package_amount : 0} USD</h4>

                                        <small>Frozen Balance</small>
                                        <h4>$ {totalBalance - deposit.package_amount ? totalBalance - deposit?.package_amount : totalBalance} USD</h4>
                                        <small>Commission</small>
                                        <h4>0.5%</h4>
                                        <small>Per Day Profit</small>
                                        <h4>$ {deposit.package_amount ? `${(deposit.package_amount * 0.5) / 100} USD` : 0}</h4>
                                        <small>Total Profit: </small>
                                        <h4>$ {UsdGeneratePackageByAmount?.total_profit ? UsdGeneratePackageByAmount?.total_profit : 0} USD</h4>
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
                                                <small>Available Balance : <strong>{totalBalance} USD</strong></small>
                                                <small>Package Amount : <strong>{deposit.package_amount ? deposit.package_amount : 0} USD</strong></small>
                                            </div>
                                            <hr />
                                            <div className='d-flex  m-0 justify-content-between align-items-center'>
                                                <small>Package Name: <strong>{UsdGeneratePackageByAmount ? UsdGeneratePackageByAmount?.usd_generate_package_name : 0}</strong></small>
                                                <small>Commission : <strong>$0.5%</strong></small>

                                            </div>
                                            <hr />
                                            <div className='d-flex  m-0 justify-content-between align-items-center'>
                                                <small>Per Day Profit : <strong>{deposit.package_amount ? `${(deposit.package_amount * 0.5) / 100} USD` : 0}</strong></small>
                                                <small>Total Profit: <strong>$ {UsdGeneratePackageByAmount?.total_profit ? UsdGeneratePackageByAmount?.total_profit : 0} USDT</strong></small>
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
                                                if (usdBtnDisable === true) {
                                                    return (
                                                        <>
                                                            <button class="btn btn-primary deposit-btn-submit" type="submit" disabled>Confirm</button>
                                                        </>
                                                    )
                                                } else {
                                                    return (
                                                        <>
                                                            {totalBalance - selectAmont >= 0 ? <button class="btn btn-primary deposit-btn-submit" type="submit" >Confirm</button> : <button class="btn btn-primary deposit-btn-submit" type="submit" disabled>Confirm</button>}
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
                            <div className="card total shadow-lg usd-gen-mining-color1 p-1  bg-body rounded border-0">
                                <div className="card-body card-image">
                                    <h3><i class="fa-solid fa-sack-dollar"></i>Total Roi</h3>
                                    <div className='price d-flex text-center'>
                                        <i class="fa-solid fa-comments-dollar"></i>
                                        <p>$ {userTotalMining.toFixed(8)}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col ">
                            <div className="card Withdrawal usd-gen-mining-color1  shadow-lg p-1  bg-body rounded border-0">
                                <Link to={`/usd/generate/direct/sells/bonus/${authUser?.userName}/${authUser._id}`}>
                                    <div className="card-body card-image">
                                        <h3><i class="fa-solid fa-circle-dollar-to-slot"></i>Direct Sells Bonus</h3>
                                        <div className='price d-flex text-center'>
                                            <i class="fa-solid fa-comments-dollar"></i>
                                            <p>$ {userTotaldirect.toFixed(8)}</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>

                        <div className="col">
                            <div className="card Withdrawal usd-gen-mining-color1 shadow-lg p-1  bg-body rounded border-0">
                                <Link to={`/usd/generate/roi/mint/bonus/${authUser?.userName}/${authUser._id}`}>
                                    <div className="card-body card-image">
                                        <h3><i class="fa-solid fa-money-check-dollar"></i>Roi Mint Bonus</h3>
                                        <div className='price d-flex text-center'>
                                            <i class="fa-solid fa-comments-dollar"></i>
                                            <p>$ {userTotalroi.toFixed(8)}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card Withdrawal  usd-gen-mining-color1 shadow-lg p-1  bg-body rounded border-0">
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
                            <div className="card Withdrawal usd-gen-mining-color1 shadow-lg p-1  bg-body rounded border-0">
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
                            <div className="card Withdrawal usd-gen-mining-color1 shadow-lg p-1  bg-body rounded border-0">
                                <Link to="/usd/generate/transfer/balance">

                                    <div className="card-body card-image">
                                        <h3><i class="fa-solid fa-filter-circle-dollar"></i>Total Bonus</h3>
                                        <div className='price d-flex text-center'>
                                            <i class="fa-solid fa-comments-dollar"></i>
                                            <p>$ {(userTotalroi + userTotalMining + userTotalteam + userTotaldirect + userTotalgeneration - userTotalbonusAbount).toFixed(8)}</p>
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
                                    <th scope="col">Package Name</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {


                                    showUsdGenerate.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                                }


                            </tbody>
                        </table>

                    </div>

                </div>


            </section>
        </>
    );
};

export default UsdGenerate;