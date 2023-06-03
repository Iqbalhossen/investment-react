import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TransferBalance = () => {

    const  { LoginWithEmail, authUser } = useContext(AuthContext);

    const [message, setMessage] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/usd/generate/transfer/balance";
    ///////////////// mining section //////////////////////////////////

    const [TotalMining, setTotalMining] = useState([]);

    useEffect(() => {
       if(authUser){
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
       if(authUser){
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
            userTotaldirect += parseInt(Totaldirect[i].commision);
        }

    }
    // console.log(userTotaldirect)

    // console.log(userTotaldirect)


    const [Totalroi, setTotalroi] = useState([]);

    useEffect(() => {
        if(authUser){
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
      if(authUser){
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
            // console.log(data.data.data);
        });

      }
    }, [])

    let userTotalteam = 0
    for (let i = 0; i <= Totalteam?.length; i++) {
        if (Totalteam[i]) {
            userTotalteam += parseFloat(Totalteam[i]?.commision);
        }

    }

    const [Totalgeneration, setTotaltgeneration] = useState([]);

    useEffect(() => {
       if(authUser){
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
            // console.log(data.data.data);
        });

       }
    }, [])

    let userTotalgeneration = 0
    for (let i = 0; i <= Totalgeneration?.length; i++) {
        if (Totalgeneration[i]) {
            userTotalgeneration += parseFloat(Totalgeneration[i]?.commision);
        }

    }

    const [bonusAmount, setbonusAmount] = useState([]);

    useEffect(() => {
      if(authUser){
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

    const [disBtn, setDisbtn] = useState(false);

    const handleTransfer = () => {
        setDisbtn(true)
        const bounsBalance = (userTotalroi + userTotalMining + userTotalteam + userTotaldirect + userTotalgeneration - userTotalbonusAbount);
        const TotalbounsBalance = { amount: bounsBalance , TotalbonusAbount: userTotalbonusAbount };
        // console.log(bounsBalance)
      if(authUser){
        fetch(`http://localhost:5000/api/user/bonus/balance/store/${authUser.userName}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization':
                'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            },
            body: JSON.stringify(TotalbounsBalance)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.success === false) {
                    setMessage(data);
                    // console.log(data)
                    toast('Bouns Amount Low', {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                } else {
                    toast('Bouns Transfer successfull!', {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setMessage(data);
                    navigate(userFrom, { replace: true });


                    // setLoading(false);

                }


            })
            .catch(error => <></>);
      }
    }


    const handleDelete = (id) =>{

        console.log(id);
        fetch(`http://localhost:5000/api/admin/common/all/bouns/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization':
                'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            },
        })
            .then(res => res.json())
            .then(data => {
                
                toast('User Delete Successfull', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            })
            .catch(error => <></>);
    }





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

            <section className='container mt-3'>



                {/* Overview history start  */}
                <div className='shadow-lg p-3 mb-5 bg-body rounded'>

                    {/* {message.message} */}

                    <div className='deposit-form-area pb-4 pt-4 d-flex justify-content-between'>
                        <small>You can't transfer dollers to your main balance from here until your earn $10...</small>

                        {disBtn ? 
                        <button onClick={handleTransfer} class="btn btn-light btn-color fw-bolder" disabled>Transfer Now</button>
                         : 
                         <button onClick={handleTransfer} class="btn btn-light btn-color fw-bolder">Transfer Now</button>
                         }

                        

                    </div>

                    <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 g-4">


                        <div className="col">
                            <div className="card total shadow-lg usd-gen-mining-color1 p-1  bg-body rounded border-0">

                                <div className="card-body card-image">
                                    <h3><i class="fa-solid fa-money-bill-transfer"></i>Total Bonus</h3>
                                    <div className='price d-flex text-center'>
                                        <i class="fa-solid fa-comments-dollar"></i>
                                        <p>$ {(userTotalroi + userTotalMining + userTotalteam + userTotaldirect + userTotalgeneration - userTotalbonusAbount).toFixed(8)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card total shadow-lg usd-gen-mining-color1 p-1  bg-body rounded border-0">

                                <div className="card-body card-image">
                                    <h3><i class="fa-solid fa-money-bill-transfer"></i>Total Transfer Amount</h3>
                                    <div className='price d-flex text-center'>
                                        <i class="fa-solid fa-comments-dollar"></i>
                                        <p>$ {userTotalbonusAbount.toFixed(8)}</p>
                                    </div>
                                    {/* <span>transfer</span> */}
                                </div>



                            </div>
                        </div>

                    </div>



                    <div className='container mt-2 profile-hide '>

                    </div>











                    <div className='deposit-title align-items-center  d-flex'>
                        <i className="fa-solid fa-arrow-left"></i>
                        <h1>History</h1>

                    </div>


                    <div className='scrollbar-x '>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Transfer Amount</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>

                                {


                                    bonusAmount.map((data, index) => <SingleItem data={data} index={index} key={data._id} handleDelete= {handleDelete}>  </SingleItem>)

                                }


                            </tbody>
                        </table>

                    </div>



                </div>
                {/* Overview history end  */}






            </section>

        </>
    );
};

export default TransferBalance;