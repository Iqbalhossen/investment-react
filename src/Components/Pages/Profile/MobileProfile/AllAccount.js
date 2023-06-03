import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from 'react-slick';

const AllAccount = () => {

    const { LoginWithEmail, authUser } = useContext(AuthContext);
    const [pendingtotal, setPendingTotal] = useState(0);
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
                    setPendingTotal(data.amount);
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

    const [copyText, setCopyText] = useState(`https://yumeone.com/invite/${authUser?.userName}/${authUser?._id}`)

    const [copyTextLinkshow, setCopyTextLinkshow] = useState(false)

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
        // alert("Copied")
    }

    const [Services, setServices] = useState(false);


    const handleService = () => {
        if (Services === false) {
            setServices(true);
        } else {
            setServices(true);
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
                    // console.log(data.data.data);
                });
        }


    }, [])

    let userTotalbonusAbount = 0
    for (let i = 0; i <= bonusAmount?.length; i++) {
        if (bonusAmount[i]) {
            userTotalbonusAbount += parseFloat(bonusAmount[i]?.amount);
        }

    }




    const [withdrawAmount, setwithdrawAmount] = useState(0)
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
                    setwithdrawAmount(data.totalAmount);
                });
        }


    }, [])


    const [pendingwithdrawAmount, setpendingwithdrawAmount] = useState(0)
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
                    setpendingwithdrawAmount(data.totalAmount);
                });
        }


    }, [])



    const location = useLocation();
    const from = location.state?.from?.pathname || "/login";

    const SignOut = () => {

        localStorage.removeItem("ID");
        const data = null;
        LoginWithEmail(data);

        Navigate(from, { replace: true });
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


    const [CoinbonusAmount, setCoinbonusAmount] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/bonus/coin/mining/balance/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setCoinbonusAmount(data.data.data);
                    // console.log(data.data.data);
                });
        }

    }, [])

    let userTotalCoinbonusAmount = 0
    for (let i = 0; i <= CoinbonusAmount?.length; i++) {
        if (CoinbonusAmount[i]) {
            userTotalCoinbonusAmount += parseFloat(CoinbonusAmount[i]?.amount);
        }

    }











    /////////////////Coin mining section //////////////////////////////////

    const [CoinTotalMining, setCoinTotalMining] = useState([]);

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
                    setCoinTotalMining(data.data);
                    // console.log(data.data);
                });
        }

    }, [])



    let userTotalCoinMining = 0
    for (let i = 0; i <= CoinTotalMining.length; i++) {
        if (CoinTotalMining[i]) {
            userTotalCoinMining += parseFloat(CoinTotalMining[i]?.commision);
        }

    }

    // console.log(userTotalCoinMining)

    const [CoinTotaldirect, setCoinTotaldirect] = useState([]);

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
                    setCoinTotaldirect(data.data.data);
                    // console.log(data.data.data);
                });
        }

    }, [])



    let userTotalCoindirect = 0


    for (let i = 0; i <= CoinTotaldirect.length; i++) {
        if (CoinTotaldirect[i]) {
            userTotalCoindirect += parseInt(CoinTotaldirect[i].commision);
        }

    }
    // console.log(userTotaldirect)

    // console.log(userTotaldirect)


    const [CoinTotalroi, setCoinTotalroi] = useState([]);

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
                    setCoinTotalroi(data.data.data);
                    // console.log(data.data.data);
                });
        }

    }, [])

    let userTotalCoinroiMint = 0
    for (let i = 0; i <= CoinTotalroi.length; i++) {
        if (CoinTotalroi[i]) {
            userTotalCoinroiMint += parseFloat(CoinTotalroi[i].commision);
        }

    }

    // console.log(userTotalroiMint)

    const [CoinTotalteam, setCoinTotalteam] = useState([]);

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
                    setCoinTotalteam(data.data.data);
                    // console.log(data.data.data);
                });

        }
    }, [])

    let userTotalCointeam = 0
    for (let i = 0; i <= CoinTotalteam?.length; i++) {
        if (CoinTotalteam[i]) {
            userTotalCointeam += parseFloat(CoinTotalteam[i]?.commision);
        }

    }

    const [CoinTotalgeneration, setCoinTotaltgeneration] = useState([]);

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
                    setCoinTotaltgeneration(data.data.data);
                    // console.log(data.data);
                });
        }

    }, [])

    let userTotalCoingeneration = 0
    for (let i = 0; i <= CoinTotalgeneration?.length; i++) {
        if (CoinTotalgeneration[i]) {
            userTotalCoingeneration += parseFloat(CoinTotalgeneration[i]?.commision);
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


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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

                <div className='d-flex mobile-header justify-content-between align-items-center py-4'>
                    <div className='menu-balance'>
                        <h3>
                            My Balance
                        </h3>
                        <p>$ {myBalance.toFixed(8)}</p>
                    </div>
                    <div className='menu-user-profile text-center' onClick={handleService}>
                        <div className=''>
                            {usershow?.picture == null  ?  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsaRe2zqH_BBicvUorUseeTaE4kxPL2FmOQ&usqp=CAU" className="card-img-top" alt="..." />   : <img src={`http://localhost:5000/${usershow?.picture}`} className="card-img-top" alt="..." />}
                            <h2>{usershow?.name}</h2>
                        </div>
                    </div>

                </div>


                <div className='py-2'>

                    <Slider {...settings}>
                        <div className='p-1 mt-3'>
                            <div className="card total usd-gen-mining-color1 p-1  rounded border-0">
                                <div className="card-body card-image padding-menu">
                                    <h3><i className="fa-solid fa-money-bill-transfer"></i> Total Balance</h3>
                                    <div className='price d-flex text-center'>
                                        <i className="fa-solid fa-comments-dollar"></i>
                                        <p>$ {myBalance.toFixed(8)}</p>

                                    </div>

                                </div>

                            </div>
                        </div>


                        <div className='p-1 mt-3'>
                            <div className="card total usd-gen-mining-color1 p-1   rounded border-0">
                                <div className="card-body card-image padding-menu">
                                    <h3><i className="fa-solid fa-money-bill-transfer"></i> Pending Balance</h3>
                                    <div className='price d-flex text-center'>
                                        <i className="fa-solid fa-comments-dollar"></i>
                                        <p>$ {pendingtotal ? pendingtotal.toFixed(8) : 0}</p>

                                    </div>

                                </div>

                            </div>
                        </div>


                        <div className=' p-1 mt-3'>
                            <div className="card total  usd-gen-mining-color1 p-1   rounded border-0">
                                <div className="card-body card-image padding-menu">
                                    <h3><i className="fa-solid fa-money-bill-transfer"></i> Commission</h3>
                                    <div className='price d-flex text-center'>
                                        <i className="fa-solid fa-comments-dollar"></i>
                                        <p>$ {(userTotalMining + userTotaldirect + userTotalroi + userTotalteam + userTotalgeneration - userTotalbonusAbount + userTotalCoinMining + userTotalCoindirect + userTotalCoinroiMint + userTotalCointeam + userTotalCoingeneration - userTotalCoinbonusAmount).toFixed(8)}</p>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className='p-1 mt-3'>
                            <div className="card total  usd-gen-mining-color1 p-1   rounded border-0">
                                <div className="card-body card-image padding-menu">
                                    <h3><i className="fa-solid fa-money-bill-transfer"></i>  My Withdraw</h3>
                                    <div className='price d-flex text-center'>
                                        <i className="fa-solid fa-comments-dollar"></i>
                                        <p>$ {withdrawAmount.toFixed(8)}</p>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className='p-1 mt-3 '>
                            <div className="card total usd-gen-mining-color1 p-1   rounded border-0">
                                <div className="card-body card-image padding-menu">
                                    <h3><i className="fa-solid fa-money-bill-transfer"></i>  Pending Withdraw</h3>
                                    <div className='price d-flex text-center'>
                                        <i className="fa-solid fa-comments-dollar"></i>
                                        <p>$ {parseFloat(pendingwithdrawAmount).toFixed(8)}</p>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </Slider>

                </div>


            </section>


            <section className='px-3 mt-5 mb-5 mobile-hide'>
                <Link to="/team/details">
                    <div className='d-flex d-flex justify-content-between align-items-center mobile-section my-1 shadow-lg p-3 bg-body rounded'>
                        <div className='mobile-image'>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                        <div className='mobile-content'>
                            <h1>Team Details</h1>
                            <p>A floating action button appears   </p>
                        </div>
                        <div className='arrow'><i className="fa-solid fa-arrow-right"></i></div>
                    </div>
                </Link>
                <Link to="/deposit/record">
                    <div className='d-flex d-flex justify-content-between align-items-center mobile-section my-1 shadow-lg p-3 bg-body rounded'>
                        <div className='mobile-image'>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                        <div className='mobile-content'>
                            <h1>Deposit Record</h1>
                            <p>A floating action button appears   </p>
                        </div>
                        <div className='arrow'><i className="fa-solid fa-arrow-right"></i></div>
                    </div>
                </Link>
                <Link to="/withdraw/record">
                    <div className='d-flex d-flex justify-content-between align-items-center mobile-section shadow-lg my-1 p-3 bg-body rounded'>
                        <div className='mobile-image'>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                        <div className='mobile-content'>
                            <h1>Withdraw Record</h1>
                            <p>A floating action button appears   </p>
                        </div>
                        <div className='arrow'><i className="fa-solid fa-arrow-right"></i></div>
                    </div>
                </Link>

                <div onClick={handleCopy}>
                    <Link >
                        <div className='d-flex d-flex justify-content-between align-items-center mobile-section my-1 shadow-lg p-3 bg-body rounded'>
                            <div className='mobile-image'>
                                <i className="fa-solid fa-circle-xmark"></i>
                            </div>
                            <div className='mobile-content'>
                                <h1>Invite Friends</h1>
                                <p>A floating action button appears   </p>
                                {/* <div className={`${copyTextLinkshow === false ? "alert alert-primary m-auto p-0 d-none" : "alert alert-primary m-auto p-0 text-center d-block mt-2"}`} role="alert">
                                Copy Invite Link!
                            </div> */}
                            </div>
                            <div className='arrow'><i className="fa-solid fa-arrow-right"></i></div>
                        </div>
                    </Link>
                </div>

                <Link to="/notification">
                    <div className='d-flex d-flex justify-content-between align-items-center mobile-section my-1 shadow-lg p-3 bg-body rounded'>
                        <div className='mobile-image'>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                        <div className='mobile-content'>
                            <h1>Notification</h1>
                            <p>A floating action button appears   </p>
                        </div>
                        <div className='arrow'><i className="fa-solid fa-arrow-right"></i></div>
                    </div>
                </Link>
                <Link to="/my/info">
                    <div className='d-flex d-flex justify-content-between align-items-center mobile-section my-1 shadow-lg p-3 bg-body rounded'>
                        <div className='mobile-image'>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                        <div className='mobile-content'>
                            <h1>My Info</h1>
                            <p>A floating action button appears   </p>
                        </div>
                        <div className='arrow'><i className="fa-solid fa-arrow-right"></i></div>
                    </div>
                </Link>
                <Link onClick={SignOut}>
                    <div className='d-flex d-flex justify-content-between align-items-center mobile-section my-1 shadow-lg p-3 bg-body rounded'>
                        <div className='mobile-image'>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                        <div className='mobile-content'>
                            <h1>Logout</h1>
                            <p>A floating action button appears   </p>
                        </div>
                        <div className='arrow'><i className="fa-solid fa-arrow-right"></i></div>
                    </div>
                </Link>

            </section>


        </>
    );
};

export default AllAccount;