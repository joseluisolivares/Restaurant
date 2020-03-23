import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import BtnDishes from './btn/btnDishes';

const Admin = () => {
    let history = useHistory();
    const btnDishes = ['entrantes','principales','postres','bebidas']
    const handleClickDishes = (e) => {
        let namePath = e.target.name;
        if(namePath === 'entrantes'){
            history.push(`administrador/entrantes`)
        }
        if(namePath === 'principales'){
            history.push(`administrador/principales`)
        }
        if(namePath === 'postres'){
            history.push(`administrador/postres`)
        }
        if(namePath === 'bebidas'){
            history.push(`administrador/bebidas`)
        }
    }
   

    return ( 
        <Fragment>
            <h1>Admin Section</h1>
            {btnDishes.map( (value) => (
                <BtnDishes
                    key={value}
                    name={value}
                    btnText={value}
                    handleClickDishes={handleClickDishes}   
                />
            ))}
            <button 
                type="button" 
                className="close" 
                onClick={ () => history.goBack() }
                aria-label="Close">
                <span 
                    aria-hidden="true">
                    &times;
                </span>
            </button>
        </Fragment>
     );
}
 
Admin.propTypes = {
    handleClickDishes: PropTypes.func,
    name: PropTypes.string,
    btnText: PropTypes.string
}
export default Admin;

