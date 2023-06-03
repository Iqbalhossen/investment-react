import React from 'react';
import dateFormat from 'dateformat';

const SingleItem = ({data, index}) => {
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy");

    return (
        <>



        <tr>
            <th scope="row">{index+1}</th>
            <td>{data?.user_name}</td>
            <td>$ {data?.commision}</td>
            <td>{time}</td>
        </tr>
    </>
    );
};

export default SingleItem;