import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';

const TransferBalance = () => {

    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    
    const [message, setMessage] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/usd/generate/transfer/balance";
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
            userTotaldirect += parseInt(Totaldirect[i].commision);
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
                // console.log(data.data.data);
            });

    }, [])

    let userTotalteam = 0
    for (let i = 0; i <= Totalteam?.length; i++) {
        if (Totalteam[i]) {
            userTotalteam += parseFloat(Totalteam[i]?.commision);
        }

    }

    const [Totalgeneration, setTotaltgeneration] = useState([]);

    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/bonus/generation/bonus/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setTotaltgeneration(data.data.data);
                // console.log(data.data.data);
            });

    }, [])

    let userTotalgeneration = 0
    for (let i = 0; i <= Totalgeneration?.length; i++) {
        if (Totalgeneration[i]) {
            userTotalgeneration += parseFloat(Totalgeneration[i]?.commision);
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
    // console.log(userTotalbonusAbount);

    const handleTransfer = () => {
        const bounsBalance = (userTotalroi + userTotalMining + userTotalteam + userTotaldirect + userTotalgeneration);
        const TotalbounsBalance = { amount: bounsBalance, TotalbonusAbount: userTotalbonusAbount };
        console.log(bounsBalance)
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/bonus/balance/store/${authUser.userName}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(TotalbounsBalance)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.success === false) {
                    setMessage(data);
                    // console.log(data)

                } else {
                    setMessage(data);
                    navigate(userFrom, { replace: true });


                    // setLoading(false);

                }


            })
            .catch(error => <></>);
    }




    return (
        <>

<section className='container mt-3'>



{/* Overview history start  */}
<div className='shadow-lg p-3 mb-5 bg-body rounded'>

    {message.message}

       <div className='deposit-form-area pb-4 pt-4 d-flex justify-content-between'>
                        <small>Yow can't transfer dollers to your main balance from here until your earn $10...</small>

                        <button  onClick={handleTransfer} class="btn btn-light">Transfer Now</button>
                        
                    </div>

    <div className="row row-cols-1 row-cols-md-2  row-cols-lg-6 g-4">
       

        <div className="col">
            <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">

                    <div className="card-body card-image">
                        <h3><i class="fa-solid fa-money-bill-transfer"></i>Total Bonus</h3>
                        <div className='price d-flex text-center'>
                            <i class="fa-solid fa-comments-dollar"></i>
                            <p>$ {(userTotalroi + userTotalMining + userTotalteam + userTotaldirect + userTotalgeneration - userTotalbonusAbount).toFixed(2)}</p>
                        </div>
                    </div>
            </div>
        </div>
        <div className="col">
            <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">
                
                <div className="card-body card-image">
                    <h3><i class="fa-solid fa-money-bill-transfer"></i>Total Transfer Amount</h3>
                    <div className='price d-flex text-center'>
                        <i class="fa-solid fa-comments-dollar"></i>
                        <p>$ {userTotalbonusAbount.toFixed(2)}</p>
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


                    bonusAmount.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

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