import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';

const TeamSellsBonus = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);

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



    return (
        <>
            <div className='container py-4'>
                <div className='scrollbar-x shadow-lg p-3 mb-5 bg-body rounded'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Generation</th>
                                <th scope="col">Bouns</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {


                                Totalteam.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }


                        </tbody>
                    </table>

                </div>

            </div>
        </>
    );
};

export default TeamSellsBonus;