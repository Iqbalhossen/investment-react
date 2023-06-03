import React from "react";
import Picture6 from "./Picture3.png";
const UsdGenerateSingleItem = ({ data, handleShow }) => {
  return (
    <>
      <div className="services-new-details d-flex justify-content-evenly align-items-center py-2">
        <div className="services-thum-image">
          <img src={Picture6} alt="..." />
        </div>
        <div className="services-details">
          <h5
            onClick={() =>
              handleShow(
                data._id,
                data.usd_generate_package_name,
                data.usd_generate_package_amount,
                data.total_profit
              )
            }
          >
            {data.usd_generate_package_name}
          </h5>
          <p>{data?.membership} Days membership</p>

          <span>$ {data.usd_generate_package_amount}</span>
        </div>
      </div>
    </>
  );
};

export default UsdGenerateSingleItem;
