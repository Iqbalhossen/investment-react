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
        fetch(`http://localhost:5000/api/user/usd/generate/packeage/view/${data.package_amount}/${authUser.userName}`)
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
                <td><Link to={`/coin/mining/view/${data._id}`} class="btn btn-primary">View</Link></td>
            </tr>
        </>
    );
};

export default SingleItem;