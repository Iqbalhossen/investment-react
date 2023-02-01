import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';
import './Team.css'

const Team = () => {

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
        else if (data === "allGen") {
            setGenegrationShow('allGen')
        }
    }

    console.log(genegrationshow)

    return (
        <>
            <div className='profile-details team-details  shadow-lg p-5 mb-2 bg-body rounded '>
                <div className='d-flex justify-content-between mb-2'>



                    <div ><Link onClick={() => handleGenegration('allGen')}>All Gen</Link></div>
                    <div ><Link onClick={() => handleGenegration('1stGen')}>Gen 1</Link></div>
                    <div  ><Link onClick={() => handleGenegration('2ndGen')}>Gen 2</Link></div>

                    <div ><Link onClick={() => handleGenegration('3rdGen')}>Gen 3</Link></div>
                    <div ><Link onClick={() => handleGenegration('4thGen')}>Gen 4</Link></div>
                    <div ><Link onClick={() => handleGenegration('5thGen')}>Gen 5</Link></div>
                    <div ><Link onClick={() => handleGenegration('6thGen')}>Gen 6</Link></div>
                    <div ><Link onClick={() => handleGenegration('7thGen')}>Gen 7</Link></div>
                    <div ><Link onClick={() => handleGenegration('8thGen')}>Gen 8</Link></div>
                    <div ><Link onClick={() => handleGenegration('9thGen')}>Gen 9</Link></div>
                    <div ><Link onClick={() => handleGenegration('10thGen')}>Gen 10</Link></div>
                </div>

                <h1>Team Details</h1>
                <div className='scrollbar-x ' style={{ height: '200px' }}>
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

export default Team;