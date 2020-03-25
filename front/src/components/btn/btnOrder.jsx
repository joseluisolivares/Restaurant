import React, {Fragment} from 'react';
import './btn.css';

const BtnOrder = ({handleClickOrderBtn,btnText,name,dish}) => {
    console.log(dish);
    
    return ( 
        <Fragment>
           <button 
                onClick={handleClickOrderBtn}
                dish={dish}
                name={name}
                className='btn bg-transparent text-white btnOrder text-right w-100 pt-3'>
                {btnText}
            </button>
            <svg className="bi bi-caret-right-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z"/>
            </svg>
        </Fragment>
     );
}
 
/*PROTOTYPES!!*/

export default BtnOrder;

