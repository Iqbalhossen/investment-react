import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './AllServices.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FreeMode, Scrollbar, Mousewheel, Autoplay, Navigation } from "swiper";
import { EffectCoverflow, Pagination } from "swiper";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UsdGenerateSingleItem from './UsdGenerateSingleItem';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
const AllServices = () => {


    const [action, setAction] = useState('overview');
    const handleServices = (data) => {
        if ('overview' === data) {
            setAction('overview');
        } else if ('packages' === data) {
            setAction('packages');
        }
    }



    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);



    const [show, setShow] = useState(false);

    const [modalDataId, setModalDataId] = useState([])
    const [modalDataName, setModalDataName] = useState([])
    const [modalDataAmount, setModalDataAmount] = useState([])
    const [modalDataProfit, setModalDataProfit] = useState([])

    const handleClose = (data) => {
        setShow(false)
        setMessage('')
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
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/withdraw/accept/view/${authUser.userName}/${authUser._id}`)
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
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/bonus/balance/view/${authUser.userName}`)
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
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/deposit/accept/view/${authUser.userName}`)
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
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/usd/generate/view/${authUser.userName}`)
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



    const [message, setMessage] = useState([]);
    // console.log(userTotaldepositAmount)

    const handleActive = (modalDataName, modalDataProfit, modalDataAmount, modalDataId) => {
        const userAmount = userTotaldepositAmount + userTotalbonusAbount - withdrawAmountSum - UsdGenSum;
        // console.log(userAmount);
        if (authUser) {
            if (userAmount >= modalDataAmount) {
                const packageBuy = { user_name: authUser.userName, package_id: modalDataId, package_name: modalDataName, package_amount: modalDataAmount, TotalProfit: modalDataProfit };
                // console.log(packageBuy)
                fetch('https://crypto-iqbalhossen.vercel.app/api/user/usd/generate/store', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(packageBuy)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.success === false) {
                            setMessage(data.data);
                            // console.log(data)

                        } else {
                            setMessage(data);
                            // setLoading(false);
                        }


                    })
                    .catch(error => <></>);
                // console.log('ok')
            }


        } else {
            navigate(userLogin, { replace: true });
        }


        console.log(message.message)
    }

    // useEffect(() => {

    //     // fetch(`https://crypto-iqbalhossen.vercel.app/api/user/deposit/view/`)
    //     //     .then(res => res.json())
    //     //     .then(data => {
    //     //         // setDeposits(data.data);
    //     //     });
    //     console.log("ahfhhlkh")


    // }, [handleShow])


    const [UsdGeneratePackage, setUsdGeneratePackage] = useState([]);

    useEffect(() => {      
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/usd/generate/package/view`)
                .then(res => res.json())
                .then(data => {
                    setUsdGeneratePackage(data.data);
                    // console.log(data)
                });
    }, [])

    // console.log(modalDataProfit)
    return (
        <>

            <div className='services-menu container '>
                <Link onClick={() => handleServices('overview')}><h6 className=''>Overview</h6></Link>
                <Link onClick={() => handleServices('packages')}><h6>Packages</h6></Link>
            </div>
            <section className={`${action === 'overview' ? 'all-services py-2' : 'all-services py-2  overview'}`}>

                <div className=' container pb-4'>

                    <div className='all-services-title'>
                        <h1>Our <h2>Services</h2></h1>
                        {/* <div className="diamond-line-centered-theme-colored service-line"></div> */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ipsum eget tortor consequat faucibus. Quisque aliquet nisl vel ante blandit, et convallis neque lobortis. Donec in gravida tellus, in suscipit eros. Cras scelerisque bibendum posuere.</p>
                    </div>


                    <div className='blog-section container '>
                        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">

                            <div className="col">
                                <div className="card  shadow-lg p-3  bg-body rounded border-0">
                                    <Link to="/usd/generate"><img src="https://static.crowd1.com/cdn-cgi/image/width=500,format=auto,quality=100/static/assets/images/crowd-public/products/product-metaversy.jpg" className="card-img-top" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/usd/generate"><h3>USD Generate</h3></Link>
                                        <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ipsum eget tortor consequat faucibus</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card  shadow-lg p-3  bg-body rounded border-0">
                                    <Link to="/coin/mining"><img src="https://static.crowd1.com/cdn-cgi/image/width=500,format=auto,quality=100/static/assets/images/crowd-public/products/product-metaversy.jpg" className="card-img-top" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/coin/mining"><h3>Coin Mining</h3></Link>
                                        <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ipsum eget tortor consequat faucibus</p>

                                    </div>

                                </div>
                            </div>

                            <div className="col">
                                <div className="card  shadow-lg p-3  bg-body rounded border-0">
                                    <Link to="/fdp"><img src="https://static.crowd1.com/cdn-cgi/image/width=500,format=auto,quality=100/static/assets/images/crowd-public/products/product-metaversy.jpg" className="card-img-top" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to="/fdp"><h3>Fixed Deposit Package</h3></Link>
                                        <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ipsum eget tortor consequat faucibus</p>

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
                                        <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/icons-badges/packages/package-20000110.png" className="card-img-top" alt="..." />
                                        <div>
                                            <p>$129</p>
                                            <h6>USD </h6>
                                        </div>
                                    </div>

                                    <div className='services-name'>
                                        <h4>NFT Ownership
                                        </h4>
                                    </div>
                                    <div>
                                        <Swiper
                                            pagination={true} modules={[Pagination]} className="mySwiper"
                                        >




                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>


                                        </Swiper>
                                    </div>
                                    <div className='services-name'>
                                        <h4>Products included
                                        </h4>
                                    </div>
                                    <div>


                                        {


                                            UsdGeneratePackage.map((data, index) => <UsdGenerateSingleItem data={data} handleShow={handleShow} index={index} key={data._id}>  </UsdGenerateSingleItem>)

                                        }


                                    </div>
                                </div>

                            </div>

                            <div className="col">
                                <div className=' shadow-lg  mb-5 bg-body rounded'>
                                    <div className='services-price d-flex justify-content-evenly align-items-center'>
                                        <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/icons-badges/packages/package-20000110.png" className="card-img-top" alt="..." />
                                        <div>
                                            <p>$129</p>
                                            <h6>USD </h6>
                                        </div>
                                    </div>

                                    <div className='services-name'>
                                        <h4>NFT Ownership
                                        </h4>
                                    </div>
                                    <div>
                                        <Swiper
                                            pagination={true} modules={[Pagination]} className="mySwiper"
                                        >




                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>


                                        </Swiper>
                                    </div>
                                    <div className='services-name'>
                                        <h4>Products included
                                        </h4>
                                    </div>
                                    <div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>2 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col">
                                <div className=' shadow-lg  mb-5 bg-body rounded'>
                                    <div className='services-price d-flex justify-content-evenly align-items-center'>
                                        <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/icons-badges/packages/package-20000110.png" className="card-img-top" alt="..." />
                                        <div>
                                            <p>$129</p>
                                            <h6>USD </h6>
                                        </div>
                                    </div>

                                    <div className='services-name'>
                                        <h4>NFT Ownership
                                        </h4>
                                    </div>
                                    <div>
                                        <Swiper
                                            pagination={true} modules={[Pagination]} className="mySwiper"
                                        >




                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='sevice-silder-img'>
                                                    <img src="https://static.crowd1.com/static/assets/images/icons-badges/packages/nft/air.gif" alt="..." />

                                                </div>
                                            </SwiperSlide>


                                        </Swiper>
                                    </div>
                                    <div className='services-name'>
                                        <h4>Products included
                                        </h4>
                                    </div>
                                    <div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
                                        <div className='services-new-details d-flex justify-content-evenly align-items-center py-2'>
                                            <div className='services-thum-image'>
                                                <img src="https://static.crowd1.com/cdn-cgi/image/width=320,format=auto,quality=100/static/assets/images/crowd-public/common/logo-miggsterplus.svg" alt="..." />
                                            </div>
                                            <div className='services-details'>
                                                <h5>Miggster+</h5>
                                                <p>12 month membership</p>

                                                <span>Worth €69</span>
                                            </div>
                                        </div>
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
                    <p className='ms-4 d-block'>{message.message}</p>
                </Modal.Header>
                <Modal.Body>
                    <h5>Amount: $ {modalDataAmount}</h5>
                    <h7 className="d-block">Commision: 0.5%</h7>
                    <h7 className="d-block">Per Day commission: $ {(modalDataProfit * 0.5) / 100}</h7>
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