import React, { useContext, useEffect, useState } from 'react';
import dateFormat from 'dateformat';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import { Link } from 'react-router-dom';

const SingleItem = ({data, index}) => {

    const  { LoginWithEmail, authUser } = useContext(AuthContext);

    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy");

    const [showUsdGenerate, setUsdGenerate] = useState([]);

    useEffect(() => {
      if(authUser){
        fetch(`http://localhost:5000/api/user/usd/generate/packeage/view/${data.package_amount}/${authUser.userName}`, {
            method: 'GET',
            headers: {
                'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            },
        })
        .then(res => res.json())
        .then(data => {
            setUsdGenerate(data);
        });
      }

    }, [])

    // console.log(showUsdGenerate);

    return (
        <>
            <tr>
                <th scope="row">{index+1}</th>
                <td>{data?.package_name}</td>
                <td>$ {data?.package_amount}</td>
                <td>{time}</td>
                <td><Link to={`/usd/generate/mining/${data._id}`} class="btn btn-primary">View</Link></td>
            </tr>
        </>
    );
};

export default SingleItem;