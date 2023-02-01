import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';

const DirectSellsBonus = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);


    const [TotaldirectShow, setTotaldirectShow] = useState([]);
    const [Totaldirect, setTotaldirect] = useState([]);

    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/bonus/direct/sells/bonus/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setTotaldirectShow(data.data)
                setTotaldirect(data.data.data);
                console.log(data.data.data);
            });

    }, [])



    let userTotaldirect = 0


    for (let i = 0; i <= Totaldirect.length; i++) {
        if (Totaldirect[i]) {
            userTotaldirect += parseInt(Totaldirect[i].commision);
        }

    }
    // console.log(userTotaldirect)

    return (
        <>

           <div className='container py-4'>
           <div className='scrollbar-x shadow-lg p-3 mb-5 bg-body rounded'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Bouns</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {


                            Totaldirect.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                        }


                    </tbody>
                </table>

            </div>

           </div>


        </>
    );
};

export default DirectSellsBonus;