import React, {Fragment} from 'react';


const BtnDishes = ({handleClickDishes,name,btnText,path}) => {
    console.log(path, '--------');
    return ( 
        <Fragment>
           <button 
                name={name}
                onClick={handleClickDishes}
                className='btn btn-danger text-white'>
                {btnText}
            </button>
        </Fragment>
    );
}
 
/*PROTOTYPES!!*/

export default BtnDishes;

