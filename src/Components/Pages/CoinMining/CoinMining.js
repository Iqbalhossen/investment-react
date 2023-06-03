import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';

const CoinMining = () => {
    const [action, setAction] = useState('overview');
    const handleServices = (data) => {
        if ('buyPackage' === data) {
            setAction('buyPackage');
        }
        else if ('history' === data) {
            setAction('history');
        }
        else if ('overview' === data) {
            setAction('overview');
        }
    }




    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);

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
            fetch(`http://localhost:5000/api/user/coin/mining/package/view`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setUsdGeneratePackage(data.data);
                    // console.log(data.data)
                });
        }

    }, [])


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
                    setTotal(data.data);
                });
        }

    }, [])



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
    

    let AmountSum = 0
    for (let i = 0; i <= total.length; i++) {
        if (total[i]) {
            AmountSum += parseFloat(total[i].amount);
        }

    }

    // console.log(showUsdGenerate)

    const handleForm = event => {
        event.preventDefault();
        console.log(deposit);
        fetch('http://localhost:5000/api/user/coin/mining/store', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization':
                'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0'
            },
            body: JSON.stringify(deposit)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.success === false) {
                    setMessage(data.data);
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
        let setTime = new Date();
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...deposit, user_name: authUser?.userName };
        newUser[field] = value;
        setDeposit(newUser);
    }


    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/coin/mining/package/view/${deposit.package_amount}`, {
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
                        setselectAmont(data.data[0].coin_mining_package_amount)
                        console.log(data.data[0].coin_mining_package_amount)

                    }

                });
        }

    }, [deposit.package_amount])




    ///////////////// mining section //////////////////////////////////

    const [TotalMining, setTotalMining] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/coin/mining/total/earning/view/${authUser.userName}`, {
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

    // console.log(userTotalMining)

    const [Totaldirect, setTotaldirect] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/coin/mining/direct/sells/bonus/${authUser.userName}`, {
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
    // console.log(userTotaldirect)

    // console.log(userTotaldirect)


    const [Totalroi, setTotalroi] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/coin/mining/roi/mint/bonus/${authUser.userName}`, {
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

    let userTotalroiMint = 0
    for (let i = 0; i <= Totalroi.length; i++) {
        if (Totalroi[i]) {
            userTotalroiMint += parseFloat(Totalroi[i].commision);
        }

    }

    // console.log(userTotalroiMint)

    const [Totalteam, setTotalteam] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/coin/mining/team/sells/bonus/${authUser.userName}`, {
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
            fetch(`http://localhost:5000/api/user/coin/mining/generation/bonus/${authUser.userName}`, {
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
            fetch(`http://localhost:5000/api/user/coin/mining/balance/view/${authUser.userName}`, {
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
    // console.log(userTotalbonusAbount);

    const handleTransfer = () => {
        const bounsBalance = (userTotalroiMint + userTotalMining + userTotalteam + userTotaldirect + userTotalgeneration);
        const TotalbounsBalance = { amount: bounsBalance, TotalbonusAbount: userTotalbonusAbount };
        // console.log(bounsBalance)
        if (authUser) {
            fetch(`http://localhost:5000/api/user/coin/mining/balance/store/${authUser.userName}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0'
                },
                body: JSON.stringify(TotalbounsBalance)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.success === false) {
                        setMessage(data);
                        console.log(data)

                    } else {
                        setMessage(data);
                        navigate(userFrom, { replace: true });


                        // setLoading(false);

                    }


                })
                .catch(error => <></>);
        }
    }



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


    let UsdGenSum = 0
    for (let i = 0; i <= showUsdGenerate.length; i++) {
        if (showUsdGenerate[i]) {
            UsdGenSum += parseFloat(showUsdGenerate[i].package_amount);
        }

    }


    return (
        <>

            <div className='services-menu container mt-5 d-flex justify-content-between'>
                {/* <Link ><h6 className=''>Overview</h6></Link> */}
                <button onClick={() => handleServices('overview')} class="btn btn-info ">Overview</button>

                <button onClick={() => handleServices('buyPackage')} class="btn btn-primary"> Buy Package</button>
                <button onClick={() => handleServices('history')} class="btn btn-info ">History</button>

            </div>
            <section className='container mt-3'>

                <div className={`${action === 'buyPackage' ? 'shadow-lg p-3 mb-5 bg-body rounded d-block' : 'shadow-lg p-3 mb-5 bg-body rounded d-none'}`}>


                    <div className='deposit-title text-center'>
                        {/* <i className="fa-solid fa-arrow-left"></i> */}
                        <h1>Coin Mining</h1>

                    </div>

                    <form onSubmit={handleForm}>

                        <div className="row g-4">

                            <div className="col-12 col-md-4 col-lg-4 py-lg-3 py-md-3">

                                <div className='deposit-form-area px-md-3 px-lg-3'>
                                    <small>Token Amount</small>
                                    <div className='deposit-form'>
                                        <select name='package_amount' className="form-select" onChange={handleInputBlur}>
                                            {<option value="" selected disabled>choise Amount</option>}
                                            {UsdGeneratePackage.map((data) => {
                                                return (
                                                    <option key={data._id} value={data.coin_mining_package_amount} >
                                                        $  {data.coin_mining_package_amount}  {data.coin_mining_package_name} </option>
                                                );
                                            })
                                            }
                                        </select>
                                    </div>

                                    <div className='total-calculate'>


                                        <small>Available Balance</small>
                                        <h4>$ {AmountSum - UsdGenSum - CoinMiningSum + userTotalbonusAbount - withdrawAmountSum} USD</h4>
                                        <small>Package Name </small>
                                        <h4>{UsdGeneratePackageByAmount?.coin_mining_package_name ? UsdGeneratePackageByAmount?.coin_mining_package_name : 'please select'}</h4>
                                        <small>Package Amount </small>
                                        <h4>${deposit.package_amount ? deposit.package_amount : 0} USD</h4>

                                        <small>Frozen Balance</small>
                                        <h4>${AmountSum  - CoinMiningSum - deposit.package_amount - UsdGenSum ? AmountSum - deposit?.package_amount - UsdGenSum + userTotalbonusAbount - withdrawAmountSum  - CoinMiningSum : 0} USD</h4>
                                        <small>Commission</small>
                                        <h4>0.5%</h4>
                                        <small>Per Day Profit</small>
                                        <h4>${deposit.package_amount ? `${(deposit.package_amount * 0.5) / 100} USD` : 0}</h4>
                                        <small>Total Profit: </small>
                                        <h4>${UsdGeneratePackageByAmount?.total_profit ? UsdGeneratePackageByAmount?.total_profit : 0} USD</h4>
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
                                            {AmountSum - selectAmont - withdrawAmountSum >= 0 ?
                                                <button class="btn btn-primary deposit-btn-submit" type="submit" >Confirm</button>
                                                :
                                                <button class="btn btn-primary deposit-btn-submit" disabled>Confirm</button>
                                            }

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>

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
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {


                                    showCoinMining.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                                }
                            </tbody>
                        </table>

                    </div>



                </div>
                {/* Overview history end  */}





                {/* Overview overview start  */}
                <div className={`${action === 'overview' ? 'shadow-lg p-3 mb-5 bg-body rounded d-block' : 'shadow-lg p-3 mb-5 bg-body rounded d-none'}`}>

                    <div className='deposit-title align-items-center  d-flex'>
                        <i className="fa-solid fa-arrow-left"></i>
                        <h1>overview</h1>

                    </div>


                    <div className="row row-cols-1 row-cols-md-3 usd-generate-area  row-cols-lg-3 g-4">
                        <div className="col ">
                            <div className="card total shadow-lg usd-gen-mining-color6 p-1  bg-body rounded border-0">
                                <div className="card-body card-image">
                                    <h3><i class="fa-solid fa-sack-dollar"></i>Total Roi</h3>
                                    <div className='price d-flex text-center'>
                                        <i class="fa-solid fa-comments-dollar"></i>
                                        <p>$ {userTotalMining} </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col ">
                            <div className="card Withdrawal usd-gen-mining-color1  shadow-lg p-1  bg-body rounded border-0">
                                <Link to={`/coin/minig/direct/sells/bonus/${authUser?.userName}/${authUser._id}`}>
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
                            <div className="card Withdrawal usd-gen-mining-color shadow-lg p-1  bg-body rounded border-0">
                                <Link to={`/coin/minig/roi/mint/bonus/${authUser?.userName}/${authUser._id}`}>
                                    <div className="card-body card-image">
                                        <h3><i class="fa-solid fa-money-check-dollar"></i>Roi Mint Bonus</h3>
                                        <div className='price d-flex text-center'>
                                            <i class="fa-solid fa-comments-dollar"></i>
                                            <p>$ {userTotalroiMint.toFixed(8)}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card Withdrawal  usd-gen-mining-color3 shadow-lg p-1  bg-body rounded border-0">
                                <Link to={`/coin/mining/generation/bonus/${authUser?.userName}/${authUser._id}`}>

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
                            <div className="card Withdrawal usd-gen-mining-color2 shadow-lg p-1  bg-body rounded border-0">
                                <Link to={`/coin/mining/team/sells/bonus/${authUser?.userName}/${authUser._id}`}>

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
                            <div className="card Withdrawal usd-gen-mining-color4 shadow-lg p-1  bg-body rounded border-0">
                                <Link to="/coin/mining/transfer/balance">

                                    <div className="card-body card-image">
                                        <h3><i class="fa-solid fa-filter-circle-dollar"></i>Total Bonus</h3>
                                        <div className='price d-flex text-center'>
                                            <i class="fa-solid fa-comments-dollar"></i>
                                            <p>$ {(userTotalroiMint + userTotalMining + userTotalteam + userTotaldirect + userTotalgeneration - userTotalbonusAbount).toFixed(8)}</p>
                                        </div>
                                        {/* <span>transfer</span> */}
                                    </div>

                                </Link>


                            </div>
                        </div>

                    </div>



                </div>
                {/* Overview overview end  */}



            </section>



        </>
    );
};

export default CoinMining;