import React, { useEffect, useState } from 'react';
import dateFormat from 'dateformat';
const SingleItem = ({data, index}) => {
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy");


    const [Generation, setGeneration] = useState([]);

    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/usd/generate/generation/view/${data.generation_user_name}`)
            .then(res => res.json())
            .then(data => {
                setGeneration(data.data);
                // console.log(data.data);
            });

    }, [])
  
  
// console.log(data?.generation_user_name);


    return (
        <>



        <tr>
            <th scope="row">{index+1}</th>
            <td>{data?.generation_user_name}</td>
            <td>{Generation?.generation}</td>
            <td>$ {data?.commision}</td>
            <td>{time}</td>
        </tr>
    </>
    );
};

export default SingleItem;