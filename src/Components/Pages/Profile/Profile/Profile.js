import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import MobileProfile from '../MobileProfile/MobileProfile';
import ChangeProfile from '../Pages/ChangeProfile/ChangeProfile';
import Commission from '../Pages/Commission/Commission';
import Deposit from '../Pages/Deposit/Deposit';
import Team from '../Pages/Team/Team';
import Withdraw from '../Pages/Withdraw/Withdraw';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        else if ('Notification' === data) {
            setAction('Notification');
        }

    }



    const  { LoginWithEmail, authUser } = useContext(AuthContext);
    const [pendingtotal, setPendingTotal] = useState(0);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/deposit/pending/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setPendingTotal(data.data);
                });
        }


    }, [])



    let pendingAmountSum = 0
    for (let i = 0; i <= pendingtotal.length; i++) {
        if (pendingtotal[i]) {
            pendingAmountSum += parseFloat(pendingtotal[i].amount);
        }

    }







    const [copyText, setCopyText] = useState(`https://yumeone.com/invite/${authUser?.userName}/${authUser?._id}`)
    const [copyTextuser, setCopyTextuser] = useState(`${authUser?.userName}`)
    const [copyTextusershow, setCopyTextusershow] = useState(false)
    const [copyTextLinkshow, setCopyTextLinkshow] = useState(false)
    const handleCopyuserName = () => {
        navigator.clipboard.writeText(copyTextuser)
        toast('user name Copies!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        // alert("Copied")
    }
    const handleCopy = () => {
        toast('Invite Link Copies!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
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




    const [withdrawAmount, setwithdrawAmount] = useState(0)
    useEffect(() => {
        if(authUser){
            fetch(`http://localhost:5000/api/user/withdraw/accept/view/${authUser?.userName}/${authUser?._id}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
            .then(res => res.json())
            .then(data => {
                setwithdrawAmount(data.totalAmount);
            });

        }
    
    }, [])


    const [pendingwithdrawAmount, setpendingwithdrawAmount] = useState(0)
    useEffect(() => {
        if(authUser){
            fetch(`http://localhost:5000/api/user/withdraw/pending/view/${authUser.userName}/${authUser._id}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
            .then(res => res.json())
            .then(data => {
                setpendingwithdrawAmount(data.totalAmount);
            });
        }
 

    }, [])





    
  
    
        const [usershow, setUser] = useState({})
        useEffect(() => {
            if (authUser) {
                fetch(`http://localhost:5000/api/user/view/${authUser.userName}/${authUser._id}`, {
                    method: 'GET',
                    headers: {
                        'authorization':
                            'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        setUser(data.data);
                    });
            }
    
        }, [])

    

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

            <ToastContainer />
            <div className='container mt-1 profile-hide'>
                <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 g-4">
                    <div className="col">
                        <div className="card total shadow-lg usd-gen-mining-color1 p-1  bg-body rounded border-0">
                            <div className="card-body card-image">
                                <h3><i class="fa-solid fa-bitcoin-sign"></i> Total  Balance</h3>
                                <div className='price d-flex text-center'>
                                    <i class="fa-solid fa-comments-dollar"></i>
                                    <p>$ { totalBalance ? (totalBalance).toFixed(8) : 0}</p>
                                </div>
                            </div>
 
                        </div> 
                    </div>
                    <div className="col">
                        <div className="card total shadow-lg usd-gen-mining-color1 p-1  bg-body rounded border-0">
                            <div className="card-body card-image">
                                <h3><i class="fa-solid fa-money-bill-transfer"></i> Pending Deposit</h3>
                                <div className='price d-flex text-center'>
                                    <i class="fa-solid fa-comments-dollar"></i>
                                    <p>$ {pendingAmountSum ? pendingAmountSum : 0}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card total shadow-lg usd-gen-mining-color1 p-1  bg-body rounded border-0">
                            <div className="card-body card-image">
                                <h3><i class="fa-solid fa-bitcoin-sign"></i> My Withdraw</h3>
                                <div className='price d-flex text-center'>
                                    <i class="fa-solid fa-comments-dollar"></i>
                                    <p>$ {withdrawAmount ? withdrawAmount : 0}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card total shadow-lg usd-gen-mining-color1 p-1  bg-body rounded border-0">
                            <div className="card-body card-image">
                                <h3><i class="fa-solid fa-bitcoin-sign"></i> Pending Withdraw</h3>
                                <div className='price d-flex text-center'>
                                    <i class="fa-solid fa-comments-dollar"></i>
                                    <p>$ {pendingwithdrawAmount ? pendingwithdrawAmount : 0}</p>
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

                            {action === "Team" ?
                                <div className='profile-btn active' onClick={() => handleServices('Team')}>
                                    <Link>Team Details</Link></div>
                                :
                                <div className='profile-btn' onClick={() => handleServices('Team')}>
                                    <Link>Team Details</Link></div>
                            }

                            {action === "Deposit" ?
                                <div className='profile-btn active' ><Link onClick={() => handleServices('Deposit')}>Deposit Record</Link></div>
                                :
                                <div className='profile-btn' ><Link onClick={() => handleServices('Deposit')}>Deposit Record</Link></div>
                            }

                            {action === "Withdraw" ?
                                <div className='profile-btn active'><Link onClick={() => handleServices('Withdraw')}>Withdraw Record</Link></div>
                                :
                                <div className='profile-btn'><Link onClick={() => handleServices('Withdraw')}>Withdraw Record</Link></div>
                            }
                            {action === "Notification" ?
                                <div className='profile-btn active'><Link onClick={() => handleServices('Notification')}>Notification</Link></div>
                                :
                                <div className='profile-btn'><Link onClick={() => handleServices('Notification')}>Notification</Link></div>
                            }
                            {action === "Profile" ?
                                <div className='profile-btn active'><Link onClick={() => handleServices('Profile')}>Setting</Link></div>
                                :
                                <div className='profile-btn'><Link onClick={() => handleServices('Profile')}>Setting</Link></div>
                            }



                        </div>


                    </div>
                </div>

            </div>

            <div className='profile-section py-4 profile-hide'>
                <div className='container'>

               

                    <div className='row'>

                        <div className='col-12 d-md-none d-lg-block col-lg-4 text-center profile-img'>

                            {usershow?.picture === null ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsaRe2zqH_BBicvUorUseeTaE4kxPL2FmOQ&usqp=CAU" className="card-img-top" alt="..." /> : <img src={`http://localhost:5000/${usershow?.picture}`} className="card-img-top" alt="..." />}


                            <h2>{usershow?.name}</h2>
                            <h5>{usershow?.bio}</h5>
                            <div className='profile-social-icon'>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div className='invite-btn '>
                                <Link onClick={handleInvite} >
                                    Invite Friends
                                </Link>

                                <div className={`${invite === false ? 'd-none' : 'd-block'}  `}>

                                    <div className={`${copyTextusershow === false ? "alert alert-primary m-auto p-0 w-50 d-none" : "alert alert-primary m-auto p-0 w-50 d-block mt-3"}`} role="alert">
                                        Copy User Name!
                                    </div>

                                

                                    <div className='d-flex m-0 mt-4'>

                                        <input type="text" value={authUser?.userName} className="form-control deposit-input wallet-address-copy" id="exampleFormControlInput1" placeholder="Deposit Walllet Address" disabled />
                                        <button onClick={handleCopyuserName} className="btn btn-light">Copy</button>
                                    </div>
                                    <div className='d-flex m-0 mt-4'>
                                        <input type="text" value={`https://yumeone.com/invite/${authUser?.userName}/${authUser?._id}`} className="form-control deposit-input wallet-address-copy" id="exampleFormControlInput1" placeholder="Deposit Walllet Address" disabled />
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