import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import MobileProfile from '../MobileProfile/MobileProfile';
import ChangeProfile from '../Pages/ChangeProfile/ChangeProfile';
import Commission from '../Pages/Commission/Commission';
import Deposit from '../Pages/Deposit/Deposit';
import Team from '../Pages/Team/Team';
import Withdraw from '../Pages/Withdraw/Withdraw';
import './Profile.css'

const Profile = () => {
    const [action, setAction] = useState('Profile');
    const handleServices = (data) => {
        if ('Profile' === data) {
            setAction('Profile');
        }
        else if ('Commission' === data) {
            setAction('Commission');
        }
        else if ('Team' === data) {
            setAction('Team');
        }
        else if ('Deposit' === data) {
            setAction('Deposit');
        }
        else if ('Withdraw' === data) {
            setAction('Withdraw');
        }

    }



    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const [pendingtotal, setPendingTotal] = useState([]);
    const [accepttotal, setAcceptTotal] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/deposit/pending/view/${authUser.userName}`)
                .then(res => res.json())
                .then(data => {
                    setPendingTotal(data.data);
                });
        }


    }, [])

    useEffect(() => {
        if (authUser) {
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/deposit/accept/view/${authUser.userName}`)
                .then(res => res.json())
                .then(data => {
                    setAcceptTotal(data.data);
                });
        }

    }, [])

    const [showUsdGenerate, setUsdGenerate] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/usd/generate/view/${authUser.userName}`)
                .then(res => res.json())
                .then(data => {
                    setUsdGenerate(data);
                });
        }

    }, [])

    let pendingAmountSum = 0
    for (let i = 0; i <= pendingtotal.length; i++) {
        if (pendingtotal[i]) {
            pendingAmountSum += parseFloat(pendingtotal[i].amount);
        }

    }
    // const [pendingAmount, setPendingAmount] = useState(0)


    let acceptAmountSum = 0
    for (let i = 0; i <= accepttotal.length; i++) {
        if (accepttotal[i]) {
            acceptAmountSum += parseFloat(accepttotal[i].amount);
        }

    }



    let UsdGenSum = 0
    for (let i = 0; i <= showUsdGenerate.length; i++) {
        if (showUsdGenerate[i]) {
            UsdGenSum += parseFloat(showUsdGenerate[i].package_amount);
        }

    }




    const [copyText, setCopyText] = useState(`http://localhost:3000/invite/${authUser.userName}/${authUser._id}`)
    const [copyTextuser, setCopyTextuser] = useState(`${authUser.userName}`)
    const [copyTextusershow, setCopyTextusershow] = useState(false)
    const [copyTextLinkshow, setCopyTextLinkshow] = useState(false)
    const handleCopyuserName = () => {
        navigator.clipboard.writeText(copyTextuser)
        setCopyTextLinkshow(false)
        setCopyTextusershow(true)
        // alert("Copied")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(copyText)
        setCopyTextusershow(false)
        setCopyTextLinkshow(true)
        // alert("Copied")
    }

    const [invite, setInvite] = useState(false);
    const handleInvite = () => {
        if (invite === false) {
            setInvite(true)
            setCopyTextusershow(false)
        } else {
            setInvite(false)
            setCopyTextusershow(false)
        }
    }

    const [bonusAmount, setbonusAmount] = useState([]);

useEffect(() => {
    fetch(`https://crypto-iqbalhossen.vercel.app/api/user/bonus/balance/view/${authUser.userName}`)
        .then(res => res.json())
        .then(data => {
            setbonusAmount(data.data.data);
            console.log(data.data.data);
        });

}, [])

let userTotalbonusAbount = 0
for (let i = 0; i <= bonusAmount?.length; i++) {
    if (bonusAmount[i]) {
        userTotalbonusAbount += parseFloat(bonusAmount[i]?.amount);
    }

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
        withdrawAmountSum += parseFloat(withdrawAmount[i]?.amount);
    }

}

const [pendingwithdrawAmount, setpendingwithdrawAmount] = useState([])
useEffect(() => {
    fetch(`https://crypto-iqbalhossen.vercel.app/api/user/withdraw/pending/view/${authUser.userName}/${authUser._id}`)
        .then(res => res.json())
        .then(data => {
            setpendingwithdrawAmount(data.data.data);
        });

}, [])

let pendingwithdrawAmountSum = 0
for (let i = 0; i <= pendingwithdrawAmount?.length; i++) {
    if (pendingwithdrawAmount[i]) {
        pendingwithdrawAmountSum += parseFloat(pendingwithdrawAmount[i]?.amount);
    }

}


// console.log(pendingwithdrawAmount)


    // console.log(invite)

    return (
        <>
            <div className='container mt-1 profile-hide'>
                <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 g-4">
                    <div className="col">
                        <div className="card total shadow-lg p-1  bg-body rounded border-0">
                            <div className="card-body card-image">
                                <h3><i class="fa-solid fa-bitcoin-sign"></i> Total  Balance</h3>
                                <div className='price d-flex text-center'>
                                    <i class="fa-solid fa-comments-dollar"></i>
                                    <p>$ {(acceptAmountSum - UsdGenSum + userTotalbonusAbount - withdrawAmountSum).toFixed(2)}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">
                            <div className="card-body card-image">
                                <h3><i class="fa-solid fa-money-bill-transfer"></i> Pending Deposit</h3>
                                <div className='price d-flex text-center'>
                                    <i class="fa-solid fa-comments-dollar"></i>
                                    <p>${pendingAmountSum}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card total shadow-lg p-1  bg-body rounded border-0">
                            <div className="card-body card-image">
                                <h3><i class="fa-solid fa-bitcoin-sign"></i> My Withdraw</h3>
                                <div className='price d-flex text-center'>
                                    <i class="fa-solid fa-comments-dollar"></i>
                                    <p>$ {withdrawAmountSum}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card total shadow-lg p-1  bg-body rounded border-0">
                            <div className="card-body card-image">
                                <h3><i class="fa-solid fa-bitcoin-sign"></i> Pending Withdraw</h3>
                                <div className='price d-flex text-center'>
                                    <i class="fa-solid fa-comments-dollar"></i>
                                    <p>$ {pendingwithdrawAmountSum}</p>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
            <div className='container pt-2 pb-1 profile-hide'>
                <div className='row pt-5'>
                    <div className='4'>

                    </div>
                    <div className='8 text-center py-3'>
                        <div className="">



                        </div>
                        <div className='d-flex justify-content-end'>



                            {/* <div className='profile-btn'><Link onClick={() => handleServices('Commission')}>All Commission</Link></div> */}
                            <div className='profile-btn' onClick={() => handleServices('Team')}>
                                <Link>Team Details</Link></div>
                            <div className='profile-btn' ><Link onClick={() => handleServices('Deposit')}>Deposit Record</Link></div>

                            <div className='profile-btn'><Link onClick={() => handleServices('Withdraw')}>Withdraw Record</Link></div>
                            <div className='profile-btn'><Link onClick={() => handleServices('Withdraw')}>Notification</Link></div>
                            <div className='profile-btn'><Link onClick={() => handleServices('Profile')}>Setting</Link></div>
                        </div>


                    </div>
                </div>

            </div>

            <div className='profile-section py-4 profile-hide'>
                <div className='container'>


                    <div className='row'>

                        <div className='col-12 d-md-none d-lg-block col-lg-4 text-center profile-img'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsaRe2zqH_BBicvUorUseeTaE4kxPL2FmOQ&usqp=CAU" className="card-img-top" alt="..." />
                            <h2>{authUser.name}</h2>
                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</h5>
                            <div className='profile-social-icon'>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div  className='invite-btn '>
                                <Link onClick={handleInvite} >
                                    Invite Friends
                                </Link>

                                <div className={`${invite === false ? 'd-none' : 'd-block'}  `}>

                                    <div className= {`${copyTextusershow === false ? "alert alert-primary m-auto p-0 w-50 d-none"  : "alert alert-primary m-auto p-0 w-50 d-block mt-3" }`} role="alert">
                                        Copy User Name!
                                    </div>

                                    <div className= {`${copyTextLinkshow === false ? "alert alert-primary m-auto p-0 w-50 d-none"  : "alert alert-primary m-auto p-0 w-50 d-block mt-3" }`} role="alert">
                                        Copy Invite Link!
                                    </div>


                                    <div className='d-flex m-0 mt-4'>

                                        <input type="text" value={authUser.userName} className="form-control deposit-input wallet-address-copy" id="exampleFormControlInput1" placeholder="Deposit Walllet Address" disabled />
                                        <button onClick={handleCopyuserName} className="btn btn-light">Copy</button>
                                    </div>
                                    <div className='d-flex m-0 mt-4'>
                                        <input type="text" value={`http://localhost:3000/invite/${authUser.userName}/${authUser._id}`} className="form-control deposit-input wallet-address-copy" id="exampleFormControlInput1" placeholder="Deposit Walllet Address" disabled />
                                        <button onClick={handleCopy} className="btn btn-light">Copy</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={`${action === 'Profile' ? ' d-block col-12 col-md-12 col-lg-8  ' : 'col-12 col-md-12 col-lg-8 d-none'}`}>
                            <ChangeProfile></ChangeProfile>

                        </div>
                        <div className={`${action === 'Commission' ? ' d-block col-12 col-md-12 col-lg-8  ' : 'col-12 col-md-12 col-lg-8 d-none'}`}>
                            <Commission></Commission>
                        </div>
                        <div className={`${action === 'Team' ? ' d-block col-12 col-md-12 col-lg-8  ' : 'col-12 col-md-12 col-lg-8 d-none'}`}>
                            <Team></Team>
                        </div>
                        <div className={`${action === 'Deposit' ? ' d-block col-12 col-md-12 col-lg-8  ' : 'col-12 col-md-8 col-lg-8 d-none'}`}>
                            <Deposit></Deposit>
                        </div>
                        <div className={`${action === 'Withdraw' ? ' d-block col-12 col-md-12 col-lg-8  ' : 'col-8 d-none'}`}>
                            <Withdraw></Withdraw>
                        </div>
                    </div>

                </div>
            </div>


            {/* Mobile Section  */}



            <MobileProfile></MobileProfile>
        </>
    );
};

export default Profile;