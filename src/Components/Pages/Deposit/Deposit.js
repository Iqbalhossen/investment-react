import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import './Deposit.css'
import Skeleton from 'react-loading-skeleton';
import SingleItem from './SingleItem';

const Deposit = () => {
    const [action, setAction] = useState('history');
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
    const [depositAmount, setDepositAmount] = useState([]);
    const [copyText, setCopyText] = useState('0xiuhilfwitvfzcvzf65764gafq846')
    const handleCopy = () => {
        navigator.clipboard.writeText(copyText)
        // alert("Copied")
    }

    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/admin/deposit/package/view`)
            .then(res => res.json())
            .then(data => setDepositAmount(data));

    }, [])

    // console.log(depositAmount);



    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);

    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/deposit/now";

    const [message, setMessage] = useState('');

    const [deposit, setUser] = useState({});

    const handleForm = event => {
        event.preventDefault();
        // console.log(deposit);
        fetch('https://crypto-iqbalhossen.vercel.app/api/user/deposit/store', {
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
                    setUserData(data);
                } else {

                    setMessage(data.message);
                    navigate(userFrom, { replace: true });
                    // setLoading(false);

                }


            })
            .catch(error => <></>);
        event.target.reset();
    }

    const handleInputBlur = event => {
        setMessage('')
        let setTime = new Date();
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...deposit, User_id: authUser.userName, status: 0, created_at: setTime };
        newUser[field] = value;
        setUser(newUser);
    }

    const [depositHistory, setDepositHistroy] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/deposit/view/${authUser.userName}`)
                .then(res => res.json())
                .then(data => {
                    setDepositHistroy(data.data);
                });
        }

    }, [])
    // console.log(depositHistory)
    const [total, setTotal] = useState([]);

    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/deposit/accept/view/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setTotal(data.data);
            });

    }, [])

    
    let DepositAmountSum = 0
    for (let i = 0; i <= total?.length; i++) {
        if (total[i]) {
            DepositAmountSum += parseFloat(total[i]?.amount);
        }

    }
    // console.log(DepositAmountSum);



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



            <div className='services-menu container '>
                <Link onClick={() => handleServices('history')}><h6 className=''>Overview</h6></Link>
                <Link onClick={() => handleServices('overview')}><h6 className=''>Deposit Now</h6></Link>
            </div>
            <section className='container mt-3'>

                <div className={`${action === 'overview' ? 'shadow-lg p-3 mb-5 bg-body rounded d-block' : 'shadow-lg p-3 mb-5 bg-body rounded d-none'}`}>

                    <div className='deposit-title text-center'>
                        {/* <i className="fa-solid fa-arrow-left"></i> */}
                        <h1> Deposit</h1>

                    </div>


                    <Form onSubmit={handleForm}>

                        <div className="row g-4">

                            <div className="col-lg-4 col-md-4 col-12 py-lg-3 py-md-3 py-0">
                                {message}
                                <div className='deposit-form-area px-3'>
                                    <small>Token Amount</small>
                                    <div className='deposit-form'>
                                        <select name='amount' className="form-select" onChange={handleInputBlur}>
                                            {<option value="" selected disabled>choise Amount</option>}
                                            {depositAmount.map((data) => {
                                                return (
                                                    <option key={data?._id} value={data?.amount} >
                                                        $  {data?.amount}  {data?.name} </option>
                                                );
                                            })
                                            }
                                        </select>
                                    </div>
                                    <div className='total-calculate'>
                                        <small>Total</small>
                                        <h4>0 USDT</h4>
                                        <small>Available Balance</small>
                                        <h4>{DepositAmountSum - withdrawAmountSum} USD USDT</h4>
                                        <small>Frozen Balance</small>
                                        <h4>0 USDT</h4>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-8 col-md-8 col-12 py-lg-3 py-md-3">
                                <div className='row px-3'>
                                    <div className='col-12 col-md-8 col-lg-8'>

                                        <div className='usd-networks '>
                                            <h3>USDT  Available Networks</h3>

                                            <div className="network-btn-group  align-items-center  d-flex me-2" role="group" aria-label="Second group">


                                                <button className="network-btn">TRC-2</button>
                                                <button className="network-btn">TRC-2</button>
                                                <button className="network-btn">TRC-2</button>

                                            </div>



                                        </div>


                                        <div className='mobile-balance-show mt-2'>
                                            <div className='d-flex justify-content-between m-0 align-items-center'>
                                                <small>Available Balance : <strong>0 USD</strong></small>
                                                <small>Total : <strong>0 USD</strong></small>
                                            </div>
                                            <div className='d-flex justify-content-between m-0 align-items-center'>
                                                <small>Deposit Amont : <strong>0 USD</strong></small>
                                            </div>

                                        </div>

                                        <div className="my-3 deposit-input d-block">
                                            <label className="form-label"> Deposit Walllet Address</label>
                                            <div className='d-flex m-0'>
                                                <input type="text" value={copyText} className="form-control deposit-input wallet-address-copy" id="exampleFormControlInput1" placeholder="Deposit Walllet Address" disabled />
                                                <button onClick={handleCopy} className="btn btn-light">Copy</button>
                                            </div>
                                        </div>
                                        <div className="my-3 deposit-input d-block">
                                            <label className="form-label"> Transaction id</label>
                                            <input type="text" onChange={handleInputBlur} width='70%' name="transaction_id" className="form-control deposit-input" id="exampleFormControlInput1" placeholder="Enter your transaction id" />
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" >
                                                I am aware of the above risks
                                            </label>
                                        </div>

                                        <div className="d-grid gap-2">
                                            <button className="btn btn-primary deposit-btn-submit" type="submit">Confirm</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>

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
                                    <th scope="col">No.</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>

                                {


                                    depositHistory.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                                }

                            </tbody>
                        </table>

                    </div>



                </div>
                {/* Overview history end  */}



            </section>
        </>
    );
};

export default Deposit;