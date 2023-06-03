import React, { useContext, useEffect, useState } from 'react';
import './MobileProfile.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import AllServices from '../../Services/AllServices/AllServices';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "./ChangingProgressProvider";
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import image from './Picture1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MobileProfile = () => {

    const percentage = 100;
    const { LoginWithEmail, authUser } = useContext(AuthContext);
    const [pendingtotal, setPendingTotal] = useState([]);
    const [accepttotal, setAcceptTotal] = useState([]);

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
                    setAcceptTotal(data.data);
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

    // console.log(userTotalMining)

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
            userTotaldirect += parseFloat(Totaldirect[i].commision);
        }

    }
    // console.log(userTotaldirect)

    // console.log(userTotaldirect)


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
                    // console.log(data.data);
                });
        }

    }, [])

    let userTotalteam = 0
    for (let i = 0; i <= Totalteam?.length; i++) {
        if (Totalteam[i]) {
            userTotaldirect += parseFloat(Totalteam[i]?.commision);
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


    //  Invite 

    const [copyText, setCopyText] = useState(`https://yumeone.com/invite/${authUser?.userName}/${authUser?._id}`, {
        method: 'GET',
        headers: {
            'authorization':
                'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
        },
    })

    const [copyTextLinkshow, setCopyTextLinkshow] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(copyText)
        setCopyTextLinkshow(true)
        // alert("Copied")
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

    const [pendingwithdrawAmount, setpendingwithdrawAmount] = useState([])
    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/withdraw/pending/view/${authUser.userName}/${authUser._id}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setpendingwithdrawAmount(data.data.data);
                });
        }

    }, [])

    let pendingwithdrawAmountSum = 0
    for (let i = 0; i <= pendingwithdrawAmount?.length; i++) {
        if (pendingwithdrawAmount[i]) {
            pendingwithdrawAmountSum += parseFloat(pendingwithdrawAmount[i]?.amount);
        }

    }


    const [packageMiningbtn, setpackageMining] = useState(false);


    const packageMining = () => {
        setpackageMining(true)
        toast('Mining Proccessing', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        if (authUser) {
            // console.log("okk")
            fetch(`http://localhost:5000/api/user/all/package/bouns/create/${authUser.userName}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.success === true) {
                        toast('Mining Successfull', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    } else if (data.success === false) {
                        console.log(data)
                        toast('Mining  already token', {
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


                })
                .catch(error => <></>);
        }
    }



    const [myBalance, setMyBalance] = useState(0)


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
                    setMyBalance(data.data);
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
    const [progressBtn, setProgressBtn] = useState(false);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/all/package/bouns/claim/btn/${authUser.userName}/${authUser._id}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setProgressBtn(data.success);
                });
        }

    }, [])

    
    // console.log(progressBtn);



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
            <section className='container mobile-hide'>
                <div className='d-flex mobile-header justify-content-between align-items-center pt-4'>
                    <div className='menu-balance'>
                        <h3>
                            My Balance
                        </h3>
                        <p>$ {myBalance.toFixed(8)}</p>
                    </div>
                    <Link to='/account/view'>
                        <div className='menu-user-profile text-center' >
                            <div className=''>
                                {usershow === null || usershow?.picture === null ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsaRe2zqH_BBicvUorUseeTaE4kxPL2FmOQ&usqp=CAU" className="card-img-top" alt="..." /> : <img src={`http://localhost:5000/${usershow?.picture}`} className="card-img-top" alt="..." />}
                                <h2>{usershow?.name}</h2>
                            </div>
                        </div>
                    </Link>

                </div>
                <div className='progressbtn-all-mining'>
                        <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
                            {percentage => (

                                <CircularProgressbarWithChildren value={percentage} styles={buildStyles({
                                    textColor: "yello",
                                    pathColor: "#8345E4",
                                    trailColor: "#FAAC19"
                                })}>
                                    <img style={{ width: "130px", margin: "auto", marginTop: '4px' }} src={image} alt="coin" />
                                </CircularProgressbarWithChildren>
                            )}
                        </ChangingProgressProvider>
                    </div>

            </section>



            <div className='view-mobile-services p-1 mt-0 mobile-account-show'>
                <AllServices></AllServices>

            </div>

        </>
    );
};

export default MobileProfile;