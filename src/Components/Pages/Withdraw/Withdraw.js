import React, { useContext, useEffect, useState } from 'react';
import { Form, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import './withdraw.css'
const Withdraw = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);

    const [message, setMessage] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/usd/generate";


    const [total, setTotal] = useState([]);


    const [showUsdGenerate, setUsdGenerate] = useState([]);

    const [bonusAmount, setbonusAmount] = useState([]);

    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/bonus/balance/view/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setbonusAmount(data.data.data);
                // console.log(data.data.data);
            });

    }, [])

    let userTotalbonusAbount = 0
    for (let i = 0; i <= bonusAmount?.length; i++) {
        if (bonusAmount[i]) {
            userTotalbonusAbount += parseFloat(bonusAmount[i]?.amount);
        }

    }

    // console.log(userTotalbonusAbount)

    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/usd/generate/view/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setUsdGenerate(data);
                // console.log(data)
            });

    }, [])


    let usergenerateSum = 0
    for (let i = 0; i <= showUsdGenerate?.length; i++) {
        if (showUsdGenerate[i]) {
            usergenerateSum += parseFloat(showUsdGenerate[i]?.package_amount);
        }

    }
    // console.log(usergenerateSum);
    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/deposit/accept/view/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setTotal(data.data);
            });

    }, [])

    let userdepositSum = 0
    for (let i = 0; i <= total?.length; i++) {
        if (total[i]) {
            userdepositSum += parseFloat(total[i]?.amount);
        }

    }

    const [withdrawAmount, setwithdrawAmount] = useState([])
    // console.log(usergenerateSum);
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


    // console.log(withdrawAmountSum)

    const [withdraw, setWithdraw] = useState({});
    const [UserData, setUserData] = useState({});

    const handleInputBlur = event => {
        setMessage('')
        let setTime = new Date();
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...withdraw, user_name: authUser.userName, available: userdepositSum + userTotalbonusAbount - usergenerateSum, status: 0, created_at: setTime };
        newUser[field] = value;
        setWithdraw(newUser);
        // console.log(value)
    }
    // console.log(withdraw)

    const handleForm = event => {
        event.preventDefault();

        // console.log({ ...withdraw })

        if ((userdepositSum + userTotalbonusAbount - usergenerateSum) >= withdraw.withdraw_balance) {

            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/withdraw/store/${authUser.userName}/${authUser._id}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(withdraw)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.success === false) {
                        setMessage(data);
                        console.log(data)
                    } else {

                        setMessage(data.message);
                        navigate(userFrom, { replace: true });
                        // setLoading(false);

                    }


                })
                .catch(error => <></>);
            event.target.reset();
        } else {
            console.log("amount low");
        }


    }





    return (
        <>
            <section className='container mt-3'>

                <div className='shadow-lg p-3 mb-5 bg-body rounded'>

                    <div className='deposit-title text-center'>
                        {message.message}
                        {/* <i className="fa-solid fa-arrow-left"></i> */}
                        <h1> Withdraw</h1>

                    </div>


                    <Form onSubmit={handleForm}>
                        <div className="row g-4">

                            <div className="col-12 col-md-4 col-lg-4 py-lg-3 py-md-3">

                                <div className='deposit-form-area px-md-3 px-lg-3'>
                                    <div className="my-3 deposit-input d-block">
                                        <label className="form-label">Withdraw Balance</label>
                                        <input type="text" name="withdraw_balance" onChange={handleInputBlur} className="form-control deposit-input" id="exampleFormControlInput1" placeholder="Enter your Withdraw Balance" />
                                    </div>

                                    <div className='total-calculate'>
                                        <small>Available Balance</small>
                                        <h4>{(userdepositSum + userTotalbonusAbount - usergenerateSum - withdrawAmountSum).toFixed(2)} USDT</h4>
                                        <small>Withdraw Fee</small>
                                        <h4>5%</h4>
                                        <small>Total Fee</small>
                                        <h4>$ {withdraw?.withdraw_balance ? ((withdraw.withdraw_balance * 5) / 100) : 0}</h4>
                                        <small>Withdraw Amount</small>
                                        <h4>$ {withdraw?.withdraw_balance ? (withdraw.withdraw_balance - (withdraw.withdraw_balance * 5) / 100) : 0}</h4>

                                    </div>
                                </div>

                            </div>

                            <div className="col-12 col-md-8 col-lg-8 py-0 withdraw-input-section py-lg-3 py-md-3">
                                <div className='col-12 col-md-12 col-lg-8'>
                                    <div>
                                        <div className='withdraw-img'>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbXv8bN5un2I_nZEDZgpEpFnRJohSiel_NQ&usqp=CAU" alt="" />



                                        </div>
                                        <div className="my-3 deposit-input d-block">
                                            <label className="form-label">Wallet Address</label>
                                            <input type="text" onChange={handleInputBlur} name="withdraw_wallet" className="form-control deposit-input" id="exampleFormControlInput1" placeholder="Enter your Wallet Address" />
                                        </div>

                                        <div className='mobile-balance-show mb-2'>
                                            <div className='d-flex justify-content-between m-0 align-items-center'>
                                                <small>Withdraw Balance : <strong>0 USD</strong></small>
                                                <small>Available Balance : <strong>{(userdepositSum + userTotalbonusAbount - usergenerateSum).toFixed(2)} USD</strong></small>
                                            </div>
                                            <hr />



                                        </div>



                                        <div class="d-grid gap-2 my-3">
                                            <button class="btn btn-primary deposit-btn-submit" type="submit">Confirm</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </Form>















                </div>
            </section>
        </>
    );
};

export default Withdraw;