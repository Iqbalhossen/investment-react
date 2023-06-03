import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';
import { Link } from 'react-router-dom';
import './TeamDetails.css'
import Slider from 'react-slick';

const TeamDetails = () => {
    const { LoginWithEmail, authUser } = useContext(AuthContext);


    const [showUsdGenerate, setUsdGenerate] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/genegration/team/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setUsdGenerate(data.data.data);
                    // console.log(data)
                });
        }

    }, [])

    const [FirstGen, setFirstGen] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/genegration/levelOne/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setFirstGen(data.data.data);
                    // console.log(data.data.data)
                });
        }


    }, [])


// console.log(FirstGen.length)


    const [SecoundGen, setSecoundGen] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/genegration/leveltwo/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
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
            fetch(`http://localhost:5000/api/user/genegration/levelthree/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setthridGen(data.data.data);
                });
        }


    }, [])

    const [fourGen, setfourGen] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/genegration/levelfour/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
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
            fetch(`http://localhost:5000/api/user/genegration/levelfive/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
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
            fetch(`http://localhost:5000/api/user/genegration/levelsix/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setSixGen(data.data.data);
                });
        }


    }, [])
    const [SevenGen, setSevenGen] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/genegration/levelseven/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
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
            fetch(`http://localhost:5000/api/user/genegration/leveleight/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
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
            fetch(`http://localhost:5000/api/user/genegration/levelnine/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
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
            fetch(`http://localhost:5000/api/user/genegration/levelten/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setTenGen(data.data.data);
                    // console.log(data.data.data)
                });
        }


    }, [])


    const [genegrationshow, setGenegrationShow] = useState('allGen');

    const handleGenegration = (data) => {

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

    return (
        <>



            <div className='deposit-mobile-details shadow-lg p-3 my-2 bg-body rounded '>

                <div className='mb-4'>
                    <Slider {...settings}>
                        <div>
                            <div className=' p-1 mt-3  firstGen'>
                                <div className="card total usd-gen-mining-color1 p-1   rounded border-0">
                                    <Link onClick={() => handleGenegration('1stGen')}>
                                        <div className="card-body card-image padding-menu" >
                                            <h3><i class="fa-solid fa-person"></i><span>1</span>st Generation</h3>
                                            <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>{FirstGen.length}</p>

                                            </div>

                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className=' p-1 mt-3  2ndGen'>
                            <div className="card total  usd-gen-mining-color1 p-1  rounded border-0">
                                <Link onClick={() => handleGenegration('2ndGen')}>
                                    <div className="card-body card-image padding-menu">
                                        <h3><i class="fa-solid fa-person"></i><span>2</span>nd Generation</h3>
                                        <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>{SecoundGen.length} </p>

                                            </div>

                                    </div>

                                </Link>

                            </div>
                        </div>
                        <div className='p-1 mt-3 '>
                            <div className="card total  usd-gen-mining-color1 p-1   rounded border-0">
                                <Link onClick={() => handleGenegration('3rdGen')}>
                                    <div className="card-body card-image padding-menu">
                                        <h3><i class="fa-solid fa-person"></i><span>3</span>rd Generation</h3>
                                        <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p> {thridGen.length}  </p>

                                            </div>

                                    </div>

                                </Link>

                            </div>
                        </div>
                        <div className='p-1 mt-3 '>
                            <div className="card total  usd-gen-mining-color1 p-1  rounded border-0">
                                <Link onClick={() => handleGenegration('4thGen')}>
                                    <div className="card-body card-image padding-menu">
                                        <h3><i class="fa-solid fa-person"></i><span>4</span>th Generation</h3>
                                        <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>{fourGen.length}  </p>

                                            </div>

                                    </div>

                                </Link>

                            </div>
                        </div>
                        <div className='p-1 mt-3 '>
                            <div className="card total  usd-gen-mining-color1 p-1   rounded border-0">
                                <Link onClick={() => handleGenegration('5thGen')}>
                                    <div className="card-body card-image padding-menu">
                                        <h3><i class="fa-solid fa-person"></i><span>5</span>th Generation</h3>
                                        <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p> {fiveGen.length}  </p>

                                            </div>

                                    </div>

                                </Link>

                            </div>
                        </div>
                        <div className='p-1 mt-3 '>
                            <div className="card total  usd-gen-mining-color1 p-1   rounded border-0">
                                <Link onClick={() => handleGenegration('6thGen')}>
                                    <div className="card-body card-image padding-menu">
                                        <h3><i class="fa-solid fa-person"></i><span>6</span>th Generation</h3>
                                        <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>{SixGen.length}  </p>

                                            </div>

                                    </div>

                                </Link>

                            </div>
                        </div>
                        <div className=' p-1 mt-3 '>
                            <div className="card total usd-gen-mining-color1 p-1   rounded border-0">
                                <Link onClick={() => handleGenegration('7thGen')}>
                                    <div className="card-body card-image padding-menu">
                                        <h3><i class="fa-solid fa-person"></i><span>7</span>th Generation</h3>
                                        <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>{SevenGen.length}  </p>

                                            </div>

                                    </div>

                                </Link>

                            </div>
                        </div>
                        <div className=' p-1 mt-3 '>
                            <div className="card total  usd-gen-mining-color1 p-1  rounded border-0">
                                <Link onClick={() => handleGenegration('8thGen')}>
                                    <div className="card-body card-image padding-menu">
                                        <h3><i class="fa-solid fa-person"></i><span>8</span>th Generation</h3>
                                        <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>{EightGen.length}  </p>

                                            </div>

                                    </div>

                                </Link>

                            </div>
                        </div>
                        <div className='p-1 mt-3 '>
                            <div className="card total usd-gen-mining-color1 p-1  rounded border-0">
                                <Link onClick={() => handleGenegration('9thGen')}>
                                    <div className="card-body card-image padding-menu">
                                        <h3><i class="fa-solid fa-person"></i><span>9</span>th Generation</h3>
                                        <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>{NineGen.length}  </p>

                                            </div>

                                    </div>

                                </Link>

                            </div>
                        </div>
                        <div className=' p-1 mt-3 '>
                            <div className="card total  usd-gen-mining-color1 p-1  rounded border-0">
                                <Link onClick={() => handleGenegration('10thGen')}>
                                    <div className="card-body card-image padding-menu">
                                        <h3><i class="fa-solid fa-person"></i><span>10</span>th Generation</h3>
                                        <div className='price d-flex text-center'>
                                                <i class="fa-solid fa-people-group"></i>
                                                <p>{TenGen.length}  </p>

                                            </div>

                                    </div>

                                </Link>

                            </div>
                        </div>
                    </Slider>
                </div>

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