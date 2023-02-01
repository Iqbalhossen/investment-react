import React from 'react';
import dateFormat from 'dateformat';

const SingleDeposit = ({ data, index }) => {
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy");
    return (
        <>
           <tr>
                <th scope="row">{index + 1}</th>
                <td>{data?.generation_user_name}</td>
                <td>{data?.generation}</td>
                <td>{time}</td>
                <td>Active</td>
            </tr>
        </>
    );
};

export default SingleDeposit;