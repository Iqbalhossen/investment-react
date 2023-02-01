import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';

const Mining = () => {

    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);


    let { id } = useParams();
    // console.log(id)
    const [showUsdGenerateMining, setUsdGenerateMining] = useState([]);
    const [packageAmount, setpackageAmount] = useState(0);

    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/usd/generate/earning/view/${authUser.userName}/${id}`)
            .then(res => res.json())
            .then(data => {
                setUsdGenerateMining(data.data);
                setpackageAmount(data.usdAmount.TotalProfit)
            });

    }, [])

    let TotalMining = 0
    for (let i = 0; i <= showUsdGenerateMining.length; i++) {
        if (showUsdGenerateMining[i]) {
            TotalMining += parseFloat(showUsdGenerateMining[i].commision);
        }

    }
    // console.log(TotalMining)
    return (
        <>

            <div className='container mt-2 '>
                <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 g-4">
                    <div className="col">
                        <div className="card total shadow-lg p-1  bg-body rounded border-0">
                            <div className="card-body card-image">
                                <h3><i class="fa-solid fa-bitcoin-sign"></i> Total  Roi</h3>
                                <div className='price d-flex text-center'>
                                    <i class="fa-solid fa-comments-dollar"></i>
                                    <p>$ {TotalMining}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">
                            <div className="card-body card-image">
                                <h3><i class="fa-solid fa-money-bill-transfer"></i> Pending Roi</h3>
                                <div className='price d-flex text-center'>
                                    <i class="fa-solid fa-comments-dollar"></i>
                                    <p>$ {packageAmount - TotalMining}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col">
                        <div className="card Withdrawal shadow-lg p-1  bg-body rounded border-0">
                            <div className="card-body card-image">
                                <h3><i class="fa-solid fa-money-bill-transfer"></i>Total Profit</h3>
                                <div className='price d-flex text-center'>
                                    <i class="fa-solid fa-comments-dollar"></i>
                                    <p>$ {packageAmount}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            <div className='container'>
                {/* Overview history start  */}
                <div className="shadow-lg p-3 mb-5 bg-body rounded mt-2">

                    <div className='deposit-title align-items-center  d-flex'>
                        <i className="fa-solid fa-arrow-left"></i>
                        <h1>History</h1>

                    </div>


                    <div className='scrollbar-x '>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Mining</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>

                                {


                                    showUsdGenerateMining.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                                }


                            </tbody>
                        </table>

                    </div>



                </div>
                {/* Overview history end  */}
            </div>

        </>
    );
};

export default Mining;