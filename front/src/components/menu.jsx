import React, {Fragment, useState} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import BtnDishes from './btn/btnDishes';


const Menu = () => {
  let history = useHistory();
  const path = history.location.pathname;
  const btnDishes = ['entrantes','principales','postres','bebidas']
  const handleClickDishes = (e) => {
    e.preventDefault();
    let namePath = e.target.name;
    if(namePath === 'entrantes'){
        history.push(`/${namePath}`)
    }
    if(namePath === 'principales'){
        history.push(`/${namePath}`)
    }
    if(namePath === 'postres'){
        history.push(`/${namePath}`)
    }
    if(namePath === 'bebidas'){
        history.push(`/${namePath}`)
    }
  }
    return ( 
        <Fragment>
          <h1>Menu Section</h1>
           {btnDishes.map( (value) => (
                <BtnDishes
                    key={value}
                    name={value}
                    btnText={value}
                    path={path}
                    handleClickDishes={handleClickDishes}   
                />
            ))}
        </Fragment>
     );
}
 
/*PROTOTYPES!!*/

export default Menu;

