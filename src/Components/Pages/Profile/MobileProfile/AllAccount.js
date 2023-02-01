import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';

const AllAccount = () => {
    
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
            userTotaldirect += parseFloat(Totaldirect[i].commision);
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
                // console.log(data.data);
            });

    }, [])

    let userTotalteam = 0
    for (let i = 0; i <= Totalteam?.length; i++) {
        if (Totalteam[i]) {
            userTotaldirect += parseFloat(Totalteam[i]?.commision);
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


    //  Invite 

    const [copyText, setCopyText] = useState(`http://localhost:3000/invite/${authUser.userName}/${authUser._id}`)

    const [copyTextLinkshow, setCopyTextLinkshow] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(copyText)
        setCopyTextLinkshow(true)
        // alert("Copied")
    }

    const [Services, setServices] = useState(false);


const handleService = () =>{
    if(Services===false){
        setServices(true);
    }else{
        setServices(true);
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


const location = useLocation();
const from = location.state?.from?.pathname || "/login";

const SignOut = () =>{
    
    localStorage.removeItem("ID");
      const data = null;
      LoginWithEmail(data);

      console.log(authUser)
  
    Navigate(from, { replace: true });
   }


    return (
        <>
            <section className='container mobile-hide'>
                <div className='d-flex mobile-header justify-content-between align-items-center py-4'>
                    <div className='menu-balance'>
                        <h3>
                            My Balance
                        </h3>
                        <p>$ {acceptAmountSum - withdrawAmountSum}</p>
                    </div>
                    <div className='menu-user-profile text-end' onClick={handleService}>
                        <div className=''>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsaRe2zqH_BBicvUorUseeTaE4kxPL2FmOQ&usqp=CAU" className="card-img-top" alt="..." />
                            <h2>{authUser.name}</h2>
                        </div>
                    </div>

                </div>

                <Swiper
                    spaceBetween={90}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper"

                    breakpoints={{
                        // when window width is >= 640px
                        // 0: {
                        //     width: 0,
                        //     slidesPerView: 2,
                        // },
                        640: {
                            width: 640,
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        1200: {
                            width: 1200,
                            slidesPerView: 3,
                        },
                    }}
                >
                    <div className='p-2'>

                        <SwiperSlide>
                            <div className='shadow-lg p-1 mt-3 bg-body rounded'>
                                <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">
                                    <div className="card-body card-image padding-menu">
                                        <h3><i className="fa-solid fa-money-bill-transfer"></i> Total Balance</h3>
                                        <div className='price d-flex text-center'>
                                            <i className="fa-solid fa-comments-dollar"></i>
                                            <p>$ {(acceptAmountSum + userTotalbonusAbount - withdrawAmountSum).toFixed(2)}</p>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-lg p-1 mt-3 bg-body rounded'>
                                <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">
                                    <div className="card-body card-image padding-menu">
                                        <h3><i className="fa-solid fa-money-bill-transfer"></i> Pending Balance</h3>
                                        <div className='price d-flex text-center'>
                                            <i className="fa-solid fa-comments-dollar"></i>
                                            <p>$ {pendingAmountSum}</p>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-lg p-1 mt-3 bg-body rounded'>
                                <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">
                                    <div className="card-body card-image padding-menu">
                                        <h3><i className="fa-solid fa-money-bill-transfer"></i> Commission</h3>
                                        <div className='price d-flex text-center'>
                                            <i className="fa-solid fa-comments-dollar"></i>
                                            <p>$ {(userTotalMining + userTotaldirect + userTotalroi + userTotalteam + userTotalgeneration - userTotalbonusAbount).toFixed(2)}</p>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-lg p-1 mt-3 bg-body rounded'>
                                <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">
                                    <div className="card-body card-image padding-menu">
                                        <h3><i className="fa-solid fa-money-bill-transfer"></i>  My Withdraw</h3>
                                        <div className='price d-flex text-center'>
                                            <i className="fa-solid fa-comments-dollar"></i>
                                            <p>$ { withdrawAmountSum }</p>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-lg p-1 mt-3 bg-body rounded'>
                                <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">
                                    <div className="card-body card-image padding-menu">
                                        <h3><i className="fa-solid fa-money-bill-transfer"></i>  Pending Withdraw</h3>
                                        <div className='price d-flex text-center'>
                                            <i className="fa-solid fa-comments-dollar"></i>
                                            <p>$ {pendingwithdrawAmountSum}</p>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>



                    </div>


                </Swiper>


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
                <Link onClick={handleCopy}>
                    <div className='d-flex d-flex justify-content-between align-items-center mobile-section my-1 shadow-lg p-3 bg-body rounded'>
                        <div className='mobile-image'>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                        <div className='mobile-content'>
                            <h1>Invite Friends</h1>
                            <p>A floating action button appears   </p>
                            <div className={`${copyTextLinkshow === false ? "alert alert-primary m-auto p-0 d-none" : "alert alert-primary m-auto p-0 text-center d-block mt-2"}`} role="alert">
                                Copy Invite Link!
                            </div>
                        </div>
                        <div className='arrow'><i className="fa-solid fa-arrow-right"></i></div>
                    </div>
                </Link>
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
                <Link>
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