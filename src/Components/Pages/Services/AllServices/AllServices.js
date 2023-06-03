import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './AllServices.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UsdGenerateSingleItem from './UsdGenerateSingleItem';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import logo1 from './Picture2.png';
import Picture2 from './services(1).webp';
import Picture3 from './services(2).webp';
import Picture4 from './services(3).webp';
import Picture5 from './services(4).webp';

import servicesBanner1 from './services-bannar-1.gif'
const AllServices = () => {


    const [action, setAction] = useState('overview');
    const handleServices = (data) => {
        if ('overview' === data) {
            setAction('overview');
        } else if ('packages' === data) {
            setAction('packages');
        }
    }



    const  { LoginWithEmail, authUser } = useContext(AuthContext);



    const [show, setShow] = useState(false);

    const [modalDataId, setModalDataId] = useState([])
    const [modalDataName, setModalDataName] = useState([])
    const [modalDataAmount, setModalDataAmount] = useState([])
    const [modalDataProfit, setModalDataProfit] = useState([])

    const handleClose = (data) => {
        setShow(false)
    };
    const handleShow = (id, name, amount, profit) => {
        setShow(true)
        setModalDataId(id)
        setModalDataName(name)
        setModalDataAmount(amount)
        setModalDataProfit(profit)

    };

    const navigate = useNavigate();
    const location = useLocation();
    const userLogin = location.state?.from?.pathname || "/login";


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

    const [total, setTotal] = useState([]);


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

    let userTotaldepositAmount = 0
    for (let i = 0; i <= total?.length; i++) {
        if (total[i]) {
            userTotaldepositAmount += parseFloat(total[i]?.amount);
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



    const [message, setMessage] = useState(false);
    // console.log(userTotalbonusAbount)

    const handleActive = (modalDataName, modalDataProfit, modalDataAmount, modalDataId) => {
        const userAmount = userTotaldepositAmount + userTotalbonusAbount - withdrawAmountSum - UsdGenSum;
        // console.log(userAmount);
        if (authUser) {
            if (userAmount >= modalDataAmount) {
                setMessage(true);
                setShow(false);
                const packageBuy = { user_name: authUser.userName, package_id: modalDataId, package_name: modalDataName, package_amount: modalDataAmount, TotalProfit: modalDataProfit };
                // console.log(packageBuy)
                fetch('http://localhost:5000/api/user/usd/generate/store', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0'
                    },
                    body: JSON.stringify(packageBuy)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.success === false) {
                            // console.log(data)

                        } else {
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
                        }


                    })
                    .catch(error => <></>);
                // console.log('ok')
            } else {
                toast('amount is low', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                // console.log("okk")
            }


        } else {
            navigate(userLogin, { replace: true });
        }



    }
    // console.log(message.message)




    const [UsdGeneratePackage, setUsdGeneratePackage] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/user/usd/generate/package/view`, {
            method: 'GET',
            headers: {
                'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            },
        })
            .then(res => res.json())
            .then(data => {
                setUsdGeneratePackage(data.data);
                // console.log(data)
            });
    }, [])

    // console.log(modalDataProfit)
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
            <div className='services-menu container mt-5 d-flex justify-content-between'>
                {/* <Link ><h6 className=''>Overview</h6></Link> */}
                {/* <button onClick={() => handleServices('overview')} >Overview</button>

                <button onClick={() => handleServices('history')} c> Buy Package</button> */}

                <Button onClick={() => handleServices('overview')} className="btn btn-light btn-color fw-bolder text-center">Overview</Button>
                <Button onClick={() => handleServices('packages')} className="btn btn-light btn-color fw-bolder text-center">Packages</Button>

            </div>

            <section className={`${action === 'overview' ? 'all-services py-2' : 'all-services py-2  overview'}`}>

                <div className=' container pb-4'>

                    <div className='all-services-title'>
                        <h1>Our <h2>Services</h2></h1>
                        {/* <div className="diamond-line-centered-theme-colored service-line"></div> */}
                        <p>Unlock Your Financial Potential with These Four Power Services, Designed to Help You Build a Brighter Future, Today!</p>
                    </div>


                    <div className='blog-section container services-page'>
                        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">

                            <div className="col">
                                <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
                                    <Link to="/usd/generate"><img src={Picture2} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/usd/generate"><h3>USD Generate</h3></Link>
                                        <p>Unlock the Power of Daily Rewards with Your First Deposit! Start Earning Right Away by Activating Your Package and Receiving a Bonus Every Single Day. Don't Miss Out on This Incredible Opportunity to Boost Your Earnings and Secure Your Financial Future Today!</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-lg overflow-hidden bg-body rounded border-0">
                                    <Link to="/coin/mining"><img src={Picture3} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/coin/mining"><h3>Coin Mining</h3></Link>
                                        <p>It is time for you to take the first step towards financial freedom by purchasing this package today! You will find that your Bonus is waiting for you when you log into your account and claim your Daily Rewards! You can make the most of your Infusion and watch the growth of your earnings with every visit.</p>

                                    </div>

                                </div>
                            </div>

                            <div className="col">
                                <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
                                    <Link to="/fdp"><img src={Picture4} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/fdp"><h3>Fixed Deposit Package</h3></Link>
                                        <p> Purchase a specific service for a fixed number of days to unlock a world of opportunities. In return for completing all conditions, you will be rewarded with a sum that matches your package. You can propel your success to new heights with this once-in-a-lifetime opportunity!
                                        </p>

                                    </div>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 shadow-lg overflow-hidden  bg-body rounded border-0">
                                    <Link to="/entertainment"><img src={Picture5} className="card-img-top services-zoom" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/entertainment"><h3>Entertainment</h3></Link>
                                        <p>It is an entertainment universe,
                                            every human being needs entertainment as well as work in their life.
                                            And most people want to fill their lack of entertainment by playing games.
                                            We have an entertainment universe,
                                            Here you can have a lot of entertainment by playing some new and unique games.</p>

                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>


                </div>

            </section>


            <section className={`${action === 'packages' ? 'all-services py-3' : 'all-services py-3  packages'}`}>

                <div className=' '>

                    <div className='blog-section container '>
                        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">




                            <div className="col">
                                <div className=' shadow-lg  mb-5 bg-body rounded'>
                                    <div className='services-price d-flex justify-content-evenly align-items-center'>
                                        <img src={logo1} className="card-img-top" alt="..." />
                                        <div>
                                            {/* <p>$129</p>
                                            <h6>USD </h6> */}
                                        </div>
                                    </div>

                                    <div className='services-name'>
                                        <h4>Usd Generate
                                        </h4>
                                    </div>
                                    <div>
                                        <Swiper
                                            pagination={true} modules={[Pagination]} className="mySwiper"
                                        >




                                            <SwiperSlide>
                                                <div className='sevice-silder-img text-center'>
                                                    <img src={servicesBanner1} alt="..." />

                                                </div>
                                            </SwiperSlide>



                                        </Swiper>
                                    </div>
                                    <div className='services-name'>
                                        <h4>Products Package
                                        </h4>
                                    </div>
                                    <div>


                                        {


                                            UsdGeneratePackage.map((data, index) => <UsdGenerateSingleItem data={data} handleShow={handleShow} index={index} key={data._id}>  </UsdGenerateSingleItem>)

                                        }


                                    </div>
                                </div>

                            </div>




                        </div>
                    </div>




                </div>

            </section>


            <Modal show={show} onHide={handleClose} animation={false}>

                <Modal.Header closeButton>
                    <Modal.Title >{modalDataName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Amount: $ {modalDataAmount}</h5>
                    <h7 className="d-block">Commision: 0.5%</h7>
                    <h7 className="d-block">Per Day commission: $ {(modalDataAmount * 0.5) / 100}</h7>
                    <h7 className="d-block">Total Profit: $ {modalDataProfit}</h7>

                </Modal.Body>
                <Modal.Footer>
                    {message.success === true ?

                        <Button variant="primary" disabled>
                            Active Now
                        </Button>
                        :
                        <Button variant="primary" onClick={() => handleActive(modalDataName, modalDataProfit, modalDataAmount, modalDataId)}>
                            Active Now
                        </Button>
                    }

                </Modal.Footer>
            </Modal>

        </>
    );
};

export default AllServices;