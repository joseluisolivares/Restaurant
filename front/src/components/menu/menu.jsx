import React, {Fragment} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import BtnDishes from '../btn/btnDishes';
import './menu.css';
import '../btn/btn.css';

const Menu = () => {
  let history = useHistory();
  const btnDishes = ['entrantes','principales','postres','bebidas']
  const handleClickDishes = (e) => {
    e.preventDefault();
    let namePath = e.target.name;
  
    if(namePath === 'entrantes'){
        history.push(`${namePath}`)
    }
    if(namePath === 'principales'){
        history.push(`${namePath}`)
    }
    if(namePath === 'postres'){
        history.push(`${namePath}`)
    }
    if(namePath === 'bebidas'){
        history.push(`${namePath}`)
    }
  }
    return ( 
        <Fragment>
            <button 
                type="button" 
                className="close w-100 text-right pt-2 text-black closeMenu" 
                onClick={ () => history.goBack() }
                aria-label="Close">
                <span 
                    aria-hidden="true">
                    &times;
                </span>
            </button>
            <div className="container menuContainer">
                <div className="boxItems d-flex flex-column align-items-center pt-5">
                    {btnDishes.map( (value) => (
                        <BtnDishes
                            key={value}
                            name={value}
                            btnText={value}
                            handleClickDishes={handleClickDishes}   
                        />
                    ))}
                </div>
            </div>
        </Fragment>
     );
}
 
Menu.propTypes = {
    handleClickDishes: PropTypes.func,
    name: PropTypes.string,
    btnText: PropTypes.string
}
export default Menu;

