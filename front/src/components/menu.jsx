import React, {Fragment} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import BtnDishes from './btn/btnDishes';


const Menu = () => {
  let history = useHistory();
  const btnDishes = ['entrantes','principales','postres','bebidas']
  const handleClickDishes = (e) => {
    e.preventDefault();
    let namePath = e.target.name;
    if(namePath === 'entrantes'){
        history.push(`entrantes`)
    }
    if(namePath === 'principales'){
        history.push(`principales`)
    }
    if(namePath === 'postres'){
        history.push(`postres`)
    }
    if(namePath === 'bebidas'){
        history.push(`bebidas`)
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
                    handleClickDishes={handleClickDishes}   
                />
            ))}
        </Fragment>
     );
}
 
Menu.propTypes = {
    handleClickDishes: PropTypes.func,
    name: PropTypes.string,
    btnText: PropTypes.string
}
export default Menu;

