import React, {Fragment} from 'react';
import { useHistory } from "react-router-dom";
import BtnDishes from './btn/btnDishes';

const Admin = () => {
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
            <h1>Admin Section</h1>
            {btnDishes.map( (value) => (
                <BtnDishes
                    key={value}
                    name={value}
                    btnText={value}
                    path={path}
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
 
/*PROTOTYPES!!
Home.propTypes = {
    handleClickBtn: PropTypes.func,
    btnText: PropTypes.string
}*/
export default Admin;

