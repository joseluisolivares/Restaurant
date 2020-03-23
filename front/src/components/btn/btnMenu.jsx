import React, {Fragment} from 'react';
import './btn.css';

const BtnMenu = ({handleClickBtn,btnText}) => {
    
    
    return ( 
        <Fragment>
           <button 
                onClick={handleClickBtn}
                name='menu'
                className='btn bg-transparent text-white btnMenu'>
                {btnText}
            </button>
        </Fragment>
     );
}
 
/*PROTOTYPES!!*/

export default BtnMenu;

