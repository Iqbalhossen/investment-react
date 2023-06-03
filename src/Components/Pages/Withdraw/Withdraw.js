import React, { useContext, useEffect, useState } from 'react';
import { Form, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import './withdraw.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
const Withdraw = () => {
    const  { LoginWithEmail, authUser } = useContext(AuthContext);

    const [message, setMessage] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/account";



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



    // console.log(withdrawAmounttPenddingSum);

    const [usdBtnDisable, setUsdBtnDisable] = useState(false)
    const [notANumber, setNotANumber] = useState('');
    const [netMessage, setNetMessage] = useState('')
    const [withdraw, setWithdraw] = useState({});

    const handleInputBlur = event => {
        setMessage('');
        if (event.target.name === "withdraw_balance") {
            const checkNumber = /^[0-9\b]+$/;

            if (event.target.value === '' || checkNumber.test(event.target.value)) {
                setUsdBtnDisable(false)
                setNotANumber('');

            } else {
                setNotANumber('Invalid Number!')
                setUsdBtnDisable(true)
            }

        }

        if (event.target.name === "networks") {
            setUsdBtnDisable(false)
        }

        let setTime = new Date();
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...withdraw, totalBalance, status: 0, created_at: setTime };
        newUser[field] = value;
        setWithdraw(newUser);
        // console.log(value)
    }

    

    const handleForm = event => {
        setUsdBtnDisable(true);
        event.preventDefault();
        if (withdraw.networks) {

            if ((totalBalance - withdraw.withdraw_balance) >= 0) {

              if(withdraw.withdraw_balance > 9){
                fetch(`http://localhost:5000/api/user/withdraw/store/${authUser?.userName}/${authUser._id}`, {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json",
                        'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                    },
                    body: JSON.stringify(withdraw)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success === false) {
                            setMessage(data);
                            console.log(data)
                            setUsdBtnDisable(false);
                        } else {
                            console.log(data)
    
                            // setMessage(data.message);
                            navigate(userFrom, { replace: true });
                            toast('Your withdraw is pending!', {
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

              }else{
                toast('Minimum Amount $10', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
              }

            } else {
                toast('Your amount is low!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setUsdBtnDisable(true);
            }
    
        }else{
            setNetMessage("please select your network");

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
            <section className='container mt-3'>

                <div className='shadow-lg p-3 mb-5 bg-body rounded'>

                    <div className='deposit-title text-center'>
                        {message.message}
                        {/* <i className="fa-solid fa-arrow-left"></i> */}
                        <h1> Withdraw</h1>

                    </div>


                    <form onSubmit={handleForm}>
                        <div className="row g-4">

                            <div className="col-12 col-md-4 col-lg-4 py-lg-3 py-md-3">

                                <div className='deposit-form-area px-md-3 px-lg-3'>
                                    <div className="my-3 deposit-input d-block">
                                        <label className="form-label">Withdraw Balance</label>
                                        <input type="text" name="withdraw_balance" onChange={handleInputBlur} className="form-control deposit-input" id="exampleFormControlInput1" placeholder="Enter your Withdraw Balance" required/>

                                        <p className='text-danger'>{notANumber}</p>
                                    </div>

                                    <div className='total-calculate'>
                                        <small>Available Balance</small>
                                        <h4>$ {withdraw?.withdraw_balance ? (totalBalance - withdraw?.withdraw_balance).toFixed(8) : (totalBalance).toFixed(8)} USDT</h4>
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
                                           <div className='usd-networks '>
                                            <h3>USDT  Available Networks</h3>

                                            <div className="network-btn-group  align-items-center justify-content-center  d-flex me-2"  >
                                                <input type="radio" onChange={handleInputBlur} value='Yone / polygon' className="btn-check " name="networks" id="danger-outlined" />
                                                <label className="btn btn-outline-secondary network-btn" htmlFor="danger-outlined">Yone <br /> polygon</label>

                                                <input type="radio" onChange={handleInputBlur} value='Usdt / trc20' className="btn-check" name="networks" id="danger-outlined2" />
                                                <label className="btn btn-outline-secondary network-btn" htmlFor="danger-outlined2">Usdt <br /> trc20</label>

                                                <input type="radio" onChange={handleInputBlur} value='Busd / bep20' className="btn-check" name="networks" id="danger-outlined3" />
                                                <label className="btn btn-outline-secondary network-btn" htmlFor="danger-outlined3">Busd <br /> bep20</label>
                                           
                                            </div>


                                        </div>
                                        <p className='text-danger'>{netMessage}</p>
                                        <div className="my-3 deposit-input d-block">
                                            <label className="form-label">Wallet Address</label>
                                            <input type="text" onChange={handleInputBlur} name="withdraw_wallet" className="form-control deposit-input" id="exampleFormControlInput1" placeholder="Enter your Wallet Address"required />
                                        </div>

                                        <div className='mobile-balance-show mb-2'>
                                            <div className='d-flex justify-content-between m-0 align-items-center'>
                                                <small>Withdraw Balance : <strong>$ {withdraw?.withdraw_balance ? (withdraw.withdraw_balance - (withdraw.withdraw_balance * 5) / 100) : 0} USDT</strong></small>
                                                <small>Available Balance : <strong>{withdraw?.withdraw_balance ? (totalBalance - withdraw?.withdraw_balance).toFixed(8) : (totalBalance).toFixed(8)} USDT</strong></small>
                                            </div>
                                            <div className='d-flex justify-content-between m-0 align-items-center'>
                                                <small>Withdraw Fee : <strong>5%</strong></small>
                                                <small>Total Fee : <strong>$ {withdraw?.withdraw_balance ? ((withdraw.withdraw_balance * 5) / 100) : 0} USDT</strong></small>
                                            </div>
                                            <hr />



                                        </div>



                                        <div class="d-grid gap-2 my-3">

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
                                                            {totalBalance - withdraw?.withdraw_balance >= 0 ? <button class="btn btn-primary deposit-btn-submit" type="submit" >Confirm</button> : <button class="btn btn-primary deposit-btn-submit" type="submit" disabled>Confirm</button>}
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
            </section>
        </>
    );
};

export default Withdraw;