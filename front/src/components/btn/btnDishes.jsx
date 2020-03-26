import React, {Fragment} from 'react';
import { withRouter } from "react-router";
import './btn.css';

const BtnDishes = ({handleClickDishes,name,btnText}) => {
    return ( 
        <Fragment>
           <button 
                name={name}
                onClick={handleClickDishes}
                className='btn text-white btnDishes bg-transparent text-white'>
                {btnText}
            </button>
        </Fragment>
    );
}

export default withRouter(BtnDishes);

