import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';
import './TeamDetails.css'

const TeamDetails = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);


    const [showUsdGenerate, setUsdGenerate] = useState([]);

    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/genegration/team/view/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setUsdGenerate(data.data.data);
                console.log(data)
            });

    }, [])

    const [FirstGen, setFirstGen] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/genegration/levelOne/view/${authUser.userName}`)
                .then(res => res.json())
                .then(data => {
                    setFirstGen(data.data.data);
                    console.log(data.data.data)
                });
        }


    }, [])




    let FirstGenSum = 0
    for (let i = 0; i <= FirstGen.length; i++) {
        if (FirstGen[i]) {
            FirstGenSum += parseFloat(FirstGen[i].amount);
        }

    }



    const [SecoundGen, setSecoundGen] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/genegration/leveltwo/view/${authUser.userName}`)
                .then(res => res.json())
                .then(data => {
                    setSecoundGen(data.data.data);
                    // console.log(data.data.data)
                });
        }


    }, [])


    const [thridGen, setthridGen] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/genegration/levelthree/view/${authUser.userName}`)
                .then(res => res.json())
                .then(data => {
                    setthridGen(data.data.data);
                    console.log(data.data)
                });
        }


    }, [])

    const [fourGen, setfourGen] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/genegration/levelfour/view/${authUser.userName}`)
                .then(res => res.json())
                .then(data => {
                    setfourGen(data.data.data);
                    // console.log(data.data.data)
                });
        }


    }, [])
    const [fiveGen, setfiveGen] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/genegration/levelfive/view/${authUser.userName}`)
                .then(res => res.json())
                .then(data => {
                    setfiveGen(data.data.data);
                    // console.log(data.data.data)
                });
        }


    }, [])
    const [SixGen, setSixGen] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/genegration/levelsix/view/${authUser.userName}`)
                .then(res => res.json())
                .then(data => {
                    setSixGen(data.data.data);
                    console.log(data.data.data)
                });
        }


    }, [])
    const [SevenGen, setSevenGen] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/genegration/levelseven/view/${authUser.userName}`)
                .then(res => res.json())
                .then(data => {
                    setSevenGen(data.data.data);
                    // console.log(data.data.data)
                });
        }


    }, [])
    const [EightGen, setEightGen] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/genegration/leveleight/view/${authUser.userName}`)
                .then(res => res.json())
                .then(data => {
                    setEightGen(data.data.data);
                    // console.log(data.data.data)
                });
        }


    }, [])
    const [NineGen, setNineGen] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/genegration/levelnine/view/${authUser.userName}`)
                .then(res => res.json())
                .then(data => {
                    setNineGen(data.data.data);
                    // console.log(data.data.data)
                });
        }


    }, [])
    const [TenGen, setTenGen] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`https://crypto-iqbalhossen.vercel.app/api/user/genegration/levelten/view/${authUser.userName}`)
                .then(res => res.json())
                .then(data => {
                    setTenGen(data.data.data);
                    // console.log(data.data.data)
                });
        }


    }, [])


    const [genegrationshow, setGenegrationShow] = useState('allGen');

    const handleGenegration = (data) => {
        console.log(data)

        if (data === "1stGen") {
            setGenegrationShow('1stGen')
            console.log(data)
        } else if (data === "2ndGen") {
            setGenegrationShow('2ndGen')
        }
        else if (data === "3rdGen") {
            setGenegrationShow('3rdGen')
        }
        else if (data === "4thGen") {
            setGenegrationShow('4thGen')
        }
        else if (data === "5thGen") {
            setGenegrationShow('5thGen')
        }
        else if (data === "6thGen") {
            setGenegrationShow('6thGen')
        }

        else if (data === "7thGen") {
            setGenegrationShow('7thGen')
        }

        else if (data === "8thGen") {
            setGenegrationShow('8thGen')
        }

        else if (data === "9thGen") {
            setGenegrationShow('9thGen')
        }

        else if (data === "10thGen") {
            setGenegrationShow('10thGen')
        }
    }

    // console.log(genegrationshow)

    return (
        <>

            <div className='deposit-mobile-details shadow-lg p-3 my-2 bg-body rounded '>
                <Swiper
                    spaceBetween={90}
                    autoplay={{
                        delay: 3000,
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
                            <div className='shadow-lg p-1 mt-3 bg-body rounded firstGen'>
                                <div className="card Withdrawal firstGen shadow-lg p-1  bg-body rounded border-0">
                                    <Link onClick={() => handleGenegration('1stGen')}>
                                        <div className="card-body card-image padding-menu" >
                                            <h3><i class="fa-solid fa-person"></i><span>1</span>st Generation</h3>
                                            <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>{FirstGenSum}</p>

                                            </div>

                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-lg p-1 mt-3 bg-body rounded 2ndGen'>
                                <div className="card Withdrawal secoundGen shadow-lg p-1  bg-body rounded border-0">
                                    <Link onClick={() => handleGenegration('2ndGen')}>
                                        <div className="card-body card-image padding-menu">
                                            <h3><i class="fa-solid fa-person"></i><span>2</span>nd Generation</h3>
                                            <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>$ </p>

                                            </div>

                                        </div>

                                    </Link>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='shadow-lg p-1 mt-3 bg-body rounded'>
                                <div className="card Withdrawal threeGen shadow-lg p-1  bg-body rounded border-0">
                                    <Link onClick={() => handleGenegration('3rdGen')}>
                                        <div className="card-body card-image padding-menu">
                                            <h3><i class="fa-solid fa-person"></i><span>3</span>rd Generation</h3>
                                            <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>$ </p>

                                            </div>

                                        </div>

                                    </Link>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-lg p-1 mt-3 bg-body rounded'>
                                <div className="card Withdrawal fourGen shadow-lg p-1  bg-body rounded border-0">
                                    <Link onClick={() => handleGenegration('4thGen')}>
                                        <div className="card-body card-image padding-menu">
                                            <h3><i class="fa-solid fa-person"></i><span>4</span>th Generation</h3>
                                            <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>$ </p>

                                            </div>

                                        </div>

                                    </Link>

                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className='shadow-lg p-1 mt-3 bg-body rounded'>
                                <div className="card Withdrawal fiveGen shadow-lg p-1  bg-body rounded border-0">
                                    <Link onClick={() => handleGenegration('5thGen')}>
                                        <div className="card-body card-image padding-menu">
                                            <h3><i class="fa-solid fa-person"></i><span>5</span>th Generation</h3>
                                            <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>$ </p>

                                            </div>

                                        </div>

                                    </Link>

                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className='shadow-lg p-1 mt-3 bg-body rounded'>
                                <div className="card Withdrawal fiveGen shadow-lg p-1  bg-body rounded border-0">
                                    <Link onClick={() => handleGenegration('6thGen')}>
                                        <div className="card-body card-image padding-menu">
                                            <h3><i class="fa-solid fa-person"></i><span>6</span>th Generation</h3>
                                            <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>$ </p>

                                            </div>

                                        </div>

                                    </Link>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-lg p-1 mt-3 bg-body rounded'>
                                <div className="card Withdrawal fiveGen shadow-lg p-1  bg-body rounded border-0">
                                    <Link onClick={() => handleGenegration('7thGen')}>
                                        <div className="card-body card-image padding-menu">
                                            <h3><i class="fa-solid fa-person"></i><span>7</span>th Generation</h3>
                                            <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>$ </p>

                                            </div>

                                        </div>

                                    </Link>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-lg p-1 mt-3 bg-body rounded'>
                                <div className="card Withdrawal fiveGen shadow-lg p-1  bg-body rounded border-0">
                                    <Link onClick={() => handleGenegration('8thGen')}>
                                        <div className="card-body card-image padding-menu">
                                            <h3><i class="fa-solid fa-person"></i><span>8</span>th Generation</h3>
                                            <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>$ </p>

                                            </div>

                                        </div>

                                    </Link>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-lg p-1 mt-3 bg-body rounded'>
                                <div className="card Withdrawal fiveGen shadow-lg p-1  bg-body rounded border-0">
                                    <Link onClick={() => handleGenegration('9thGen')}>
                                        <div className="card-body card-image padding-menu">
                                            <h3><i class="fa-solid fa-person"></i><span>9</span>th Generation</h3>
                                            <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>$ </p>

                                            </div>

                                        </div>

                                    </Link>

                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className='shadow-lg p-1 mt-3 bg-body rounded'>
                                <div className="card Withdrawal fiveGen shadow-lg p-1  bg-body rounded border-0">
                                    <Link onClick={() => handleGenegration('10thGen')}>
                                        <div className="card-body card-image padding-menu">
                                            <h3><i class="fa-solid fa-person"></i><span>10</span>th Generation</h3>
                                            <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>$ </p>

                                            </div>

                                        </div>

                                    </Link>

                                </div>
                            </div>
                        </SwiperSlide>


                    </div>


                </Swiper>

                <h1>Team Details</h1>

                <div className='scrollbar-y ' >
                    <table className={`${genegrationshow === 'allGen' ? 'd-block table' : 'd-none table'}`}>
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Generation</th>
                                <th scope="col">Date</th>
                                <th scope="col">staus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                showUsdGenerate.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }

                        </tbody>
                    </table>


                    <table className={`${genegrationshow === '1stGen' ? 'd-block table' : 'd-none table'}`}>
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Generation</th>
                                <th scope="col">Date</th>
                                <th scope="col">staus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                FirstGen.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }

                        </tbody>
                    </table>


                    <table className={`${genegrationshow === '2ndGen' ? 'd-block table' : 'd-none table'}`}>
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Generation</th>
                                <th scope="col">Date</th>
                                <th scope="col">staus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                SecoundGen.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }

                        </tbody>
                    </table>
                    <table className={`${genegrationshow === '3rdGen' ? 'd-block table' : 'd-none table'}`}>
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Generation</th>
                                <th scope="col">Date</th>
                                <th scope="col">staus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                thridGen.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }

                        </tbody>
                    </table>
                    <table className={`${genegrationshow === '4thGen' ? 'd-block table' : 'd-none table'}`}>
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Generation</th>
                                <th scope="col">Date</th>
                                <th scope="col">staus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                fourGen.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }

                        </tbody>
                    </table>
                    <table className={`${genegrationshow === '5thGen' ? 'd-block table' : 'd-none table'}`}>
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Generation</th>
                                <th scope="col">Date</th>
                                <th scope="col">staus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                fiveGen.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }

                        </tbody>
                    </table>
                    <table className={`${genegrationshow === '6thGen' ? 'd-block table' : 'd-none table'}`}>
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Generation</th>
                                <th scope="col">Date</th>
                                <th scope="col">staus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                SixGen.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }

                        </tbody>
                    </table>
                    <table className={`${genegrationshow === '7thGen' ? 'd-block table' : 'd-none table'}`}>
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Generation</th>
                                <th scope="col">Date</th>
                                <th scope="col">staus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                SevenGen.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }

                        </tbody>
                    </table>
                    <table className={`${genegrationshow === '8thGen' ? 'd-block table' : 'd-none table'}`}>
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Generation</th>
                                <th scope="col">Date</th>
                                <th scope="col">staus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                EightGen.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }

                        </tbody>
                    </table>
                    <table className={`${genegrationshow === '9thGen' ? 'd-block table' : 'd-none table'}`}>
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Generation</th>
                                <th scope="col">Date</th>
                                <th scope="col">staus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                NineGen.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }

                        </tbody>
                    </table>
                    <table className={`${genegrationshow === '10thGen' ? 'd-block table' : 'd-none table'}`}>
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Generation</th>
                                <th scope="col">Date</th>
                                <th scope="col">staus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                TenGen.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }

                        </tbody>
                    </table>

                </div>

            </div>

        </>
    );
};

export default TeamDetails;