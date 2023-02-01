import React, { useContext, useEffect, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';
import './UsdGenerate.css'
import Skeleton from 'react-loading-skeleton';

const UsdGenerate = () => {
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
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/usd/generate/package/view`)
            .then(res => res.json())
            .then(data => {
                setUsdGeneratePackage(data.data);
                // console.log(data)
            });

    }, [])


    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/deposit/accept/view/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setTotal(data.data);
            });

    }, [])


    const [showUsdGenerate, setUsdGenerate] = useState([]);

    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/usd/generate/view/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setUsdGenerate(data);
                // console.log(data)
            });

    }, [])


    let AmountSum = 0
    for (let i = 0; i <= total.length; i++) {
        if (total[i]) {
            AmountSum += parseFloat(total[i].amount);
        }

    }

    let UsdGenSum = 0
    for (let i = 0; i <= showUsdGenerate.length; i++) {
        if (showUsdGenerate[i]) {
            UsdGenSum += parseFloat(showUsdGenerate[i].package_amount);
        }

    }

    // console.log(showUsdGenerate)

    const handleForm = event => {
        event.preventDefault();
        // console.log(deposit);
        fetch('https://crypto-iqbalhossen.vercel.app/api/user/usd/generate/store', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
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
                    setMessage(data);
                    navigate(userFrom, { replace: true });


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
        const newUser = { ...deposit, user_name: authUser.userName };
        newUser[field] = value;
        setDeposit(newUser);
    }


    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/usd/generate/package/view/${deposit.package_amount}`)
            .then(res => res.json())
            .then(data => {
                if (data.data) {

                }
                if (data.data[0]) {
                    setUsdGeneratePackageByAmount(data.data[0]);
                    setselectAmont(data.data[0].usd_generate_package_amount)

                }

            });

    }, [deposit])
    // console.log(deposit.package_amount)

    // console.log(UsdGeneratePackageByAmount?.usd_generate_package_name)






    ///////////////// mining section //////////////////////////////////

    const [TotalMining, setTotalMining] = useState([]);

    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/usd/generate/total/earning/view/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setTotalMining(data.data);
                // console.log(data.data);
            });

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
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/bonus/direct/sells/bonus/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setTotaldirect(data.data.data);
                // console.log(data.data.data);
            });

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
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/bonus/roi/mint/bonus/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setTotalroi(data.data.data);
                // console.log(data.data.data);
            });

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
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/bonus/team/sells/bonus/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setTotalteam(data.data.data);
                // console.log(data.data.data);
            });

    }, [])

    let userTotalteam = 0
    for (let i = 0; i <= Totalteam?.length; i++) {
        if (Totalteam[i]) {
            userTotalteam += parseFloat(Totalteam[i]?.commision);
        }

    }

    const [Totalgeneration, setTotaltgeneration] = useState([]);

    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/bonus/generation/bonus/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setTotaltgeneration(data.data.data);
                // console.log(data.data);
            });

    }, [])

    let userTotalgeneration = 0
    for (let i = 0; i <= Totalgeneration?.length; i++) {
        if (Totalgeneration[i]) {
            userTotalgeneration += parseFloat(Totalgeneration[i]?.commision);
        }

    }

    const [bonusAmount, setbonusAmount] = useState([]);

    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/bonus/balance/view/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setbonusAmount(data.data.data);
                // console.log(data.data);
            });

    }, [])

    let userTotalbonusAbount = 0
    for (let i = 0; i <= bonusAmount?.length; i++) {
        if (bonusAmount[i]) {
            userTotalbonusAbount += parseFloat(bonusAmount[i]?.amount);
        }

    }
    // console.log(userTotalbonusAbount);

    const handleTransfer = () => {
        const bounsBalance = (userTotalroi + userTotalMining + userTotalteam + userTotaldirect + userTotalgeneration);
        const TotalbounsBalance = { amount: bounsBalance, TotalbonusAbount: userTotalbonusAbount };
        // console.log(bounsBalance)
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/bonus/balance/store/${authUser.userName}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
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



    const [withdrawAmount, setwithdrawAmount] = useState([])
    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/withdraw/accept/view/${authUser.userName}/${authUser._id}`)
            .then(res => res.json())
            .then(data => {
                setwithdrawAmount(data.data.data);
            });

    }, [])

    let withdrawAmountSum = 0
    for (let i = 0; i <= withdrawAmount?.length; i++) {
        if (withdrawAmount[i]) {
            withdrawAmountSum += parseFloat(withdrawAmount[i]?.amountWithVat);
        }

    }



    return (
        <>

            <div className='services-menu container mt-5 d-flex justify-content-between'>
                {/* <Link ><h6 className=''>Overview</h6></Link> */}
                <button onClick={() => handleServices('overview')} class="btn btn-info me-5">Overview</button>

                <button onClick={() => handleServices('history')} class="btn btn-primary"> Buy Package</button>

            </div>

            <section className='container mt-3'>

                <div className={`${action === 'overview' ? 'shadow-lg p-3 mb-5 bg-body rounded d-none ' : 'shadow-lg p-3 mb-5 bg-body rounded d-block'}`}>

                    <div className='deposit-title text-center'>
                        {/* <i className="fa-solid fa-arrow-left"></i> */}
                        <h1> USD Generate</h1>

                    </div>

                    <Form onSubmit={handleForm}>

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

                                    <div className='total-calculate'>


                                        <small>Available Balance</small>
                                        <h4>${AmountSum - UsdGenSum + userTotalbonusAbount - withdrawAmountSum} USD</h4>
                                        <small>Package Name </small>
                                        <h4>{UsdGeneratePackageByAmount ? UsdGeneratePackageByAmount[0]?.usd_generate_package_name : 0}</h4>
                                        <small>Package Amount </small>
                                        <h4>${deposit.package_amount ? deposit.package_amount : 0} USD</h4>

                                        <small>Frozen Balance</small>
                                        <h4>${AmountSum - deposit.package_amount - UsdGenSum ? AmountSum - deposit?.package_amount - UsdGenSum + userTotalbonusAbount - withdrawAmountSum : 0} USD</h4>
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
                                                <small>Available Balance : <strong>{AmountSum - UsdGenSum - withdrawAmountSum} USD</strong></small>
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

                                            {AmountSum - selectAmont - UsdGenSum + userTotalbonusAbount - withdrawAmountSum >= 0 ? <button class="btn btn-primary deposit-btn-submit" type="submit" >Confirm</button> : <button class="btn btn-primary deposit-btn-submit" type="submit" disabled>Confirm</button>}

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </Form>
                </div>






                {/* Overview history start  */}
                <div className={`${action === 'history' ? 'shadow-lg p-3 mb-5 bg-body rounded d-none ' : 'shadow-lg p-3 mb-5 bg-body rounded  d-block'}`}>

                    {message.message}

                    {/* <div className='deposit-form-area pb-4 pt-4 d-flex justify-content-between'>
                        <small>Yow can't transfer dollers to your main balance from here until your earn $10...</small>
                        <Link>
                            <span onClick={handleTransfer}>Transfer Now Main Balance</span>

                        </Link>
                    </div> */}

                    <div className="row row-cols-1 row-cols-md-6  row-cols-lg-6 g-4">
                        <div className="col ">
                            <div className="card total shadow-lg p-1  bg-body rounded border-0">
                                <div className="card-body card-image">
                                    <h3><i class="fa-solid fa-bitcoin-sign"></i>Total Roi</h3>
                                    <div className='price d-flex text-center'>
                                        <i class="fa-solid fa-comments-dollar"></i>
                                        <p>$ {userTotalMining.toFixed(2)}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">
                                <Link to={`/usd/generate/direct/sells/bonus/${authUser.userName}/${authUser._id}`}>
                                    <div className="card-body card-image">
                                        <h3><i class="fa-solid fa-money-bill-transfer"></i>Direct Sells Bonus</h3>
                                        <div className='price d-flex text-center'>
                                            <i class="fa-solid fa-comments-dollar"></i>
                                            <p>$ {userTotaldirect}</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>

                        <div className="col">
                            <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">
                                <Link to={`/usd/generate/roi/mint/bonus/${authUser.userName}/${authUser._id}`}>
                                    <div className="card-body card-image">
                                        <h3><i class="fa-solid fa-money-bill-transfer"></i>Roi Mint Bonus</h3>
                                        <div className='price d-flex text-center'>
                                            <i class="fa-solid fa-comments-dollar"></i>
                                            <p>$ {userTotalroi.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">
                                <Link to={`/usd/generate/team/sells/bonus/${authUser.userName}/${authUser._id}`}>

                                    <div className="card-body card-image">
                                        <h3><i class="fa-solid fa-money-bill-transfer"></i>Team Sells Bonus</h3>
                                        <div className='price d-flex text-center'>
                                            <i class="fa-solid fa-comments-dollar"></i>
                                            <p>$ {userTotalteam.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                        <div className="col">
                            <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">
                                <Link to={`/usd/generate/generation/bonus/${authUser.userName}/${authUser._id}`}>

                                    <div className="card-body card-image">
                                        <h3><i class="fa-solid fa-money-bill-transfer"></i>Generation Bonus</h3>
                                        <div className='price d-flex text-center'>
                                            <i class="fa-solid fa-comments-dollar"></i>
                                            <p>$ {userTotalgeneration.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">
                                <Link to="/usd/generate/transfer/balance">

                                    <div className="card-body card-image">
                                        <h3><i class="fa-solid fa-money-bill-transfer"></i>Total Bonus</h3>
                                        <div className='price d-flex text-center'>
                                            <i class="fa-solid fa-comments-dollar"></i>
                                            <p>$ {(userTotalroi + userTotalMining + userTotalteam + userTotaldirect + userTotalgeneration - userTotalbonusAbount).toFixed(2)}</p>
                                        </div>
                                        {/* <span>transfer</span> */}
                                    </div>

                                </Link>


                            </div>
                        </div>

                    </div>

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


                    <div className='container mt-2 profile-hide '>

                    </div>













                </div>
                {/* Overview history end  */}

            </section>
        </>
    );
};

export default UsdGenerate;