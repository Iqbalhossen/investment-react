import React from 'react';
import dateFormat from 'dateformat';

const SingleItem = ({ data, index }) => {
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy");
    return (
        <>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{data?.User_id}</td>
                <td>{data?.networks}</td>
                <td>{data?.transaction_id}</td>
                <td>$ {data?.amount}</td>
                <td>{data.status === 0 ? <span class="badge bg-danger">Pending</span> : <span class="badge bg-primary">Accept</span> }</td>
                <td>{time}</td>
                
            </tr>
        </>
    );
};

export default SingleItem;