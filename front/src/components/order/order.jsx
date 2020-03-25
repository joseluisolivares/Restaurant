import React, { Fragment } from "react";
import "./order.css";

const Order = ({ dish }) => {
  return (
    <Fragment>
      <p className="orderText d-flex justify-content-between align-items-center text-center">
        <img className="orderImg" src={dish.image} alt="" />
        <span>{dish.name} </span>
        <span> {dish.price}</span>
      </p>
    </Fragment>
  );
};

/*PROTOTYPES!!*/

export default Order;
