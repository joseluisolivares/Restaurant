import React, {Fragment } from 'react';
import './order.css';

const Order = ({dish}) => {

    console.log(dish.name);
    console.log(dish.price);
     return ( 
          <Fragment>
               
          <p className="text-white">
               <span>{dish.name} </span>
               <span> {dish.price}</span>
               
          </p>
                  
              
          </Fragment>
     );
}
 
/*PROTOTYPES!!*/

export default Order;

