import React from 'react';
import dateFormat from 'dateformat';

const SingleDeposit = ({data, index}) => {
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy");
    return (
        <>
              <tr>
                            <th >{index + 1}</th>
                            <td>{data?.transaction_id}</td>
                            <td>$ {data?.amount}</td>
                            <td>{time}</td>
                            <td>{data?.status === 0 ? <span class="badge bg-danger">Pending</span> : <span class="badge bg-primary">Accept</span> }</td>
                        </tr>
                     
        </>
    );
};

export default SingleDeposit;