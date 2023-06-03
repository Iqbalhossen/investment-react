import React from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

const SingleItem = ({ data, index }) => {
    const time = dateFormat(`${data?.created_at}`, "mmmm dS, yyyy");
    let date1 = data.time;
    date1 = date1.split('/');
    return (
        <>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{data?.package_amount}</td>
                <td>{data?.package_amount}</td>
                <td>$ {data?.TotalProfit}</td>
                <td>{time}</td>

            </tr>
        </>
    );
};

export default SingleItem;