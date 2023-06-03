import React from 'react';
import dateFormat from 'dateformat';

const SingleDeposit = ({data, index}) => {
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy");
    return (
        <>
              <tr>
                            <th >{index + 1}</th>
                            <td>{data?.networks}</td>
                            <td>{data?.wallet}</td>
                            <td>$ {data?.amount}</td>
                            <td>{data?.status === 0 ? <span class="badge bg-danger">Pending</span> : '' } {data?.status === 3 ? <span class="badge bg-danger">Rejected</span> : '' }  {data.status === 1 ? <span class="badge bg-success">Accept</span> : '' }</td>
                            <td>{time}</td>
                            
                        </tr>
                     
        </>
    );
};

export default SingleDeposit;