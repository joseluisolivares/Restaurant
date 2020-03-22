import React, {Fragment} from 'react';

const BtnMenu = ({handleClickBtn,btnText}) => {
    
    
    return ( 
        <Fragment>
           <button 
                onClick={handleClickBtn}
                name='menu'
                className='btn btn-success btnSize text-white'>
                {btnText}
            </button>
        </Fragment>
     );
}
 
/*PROTOTYPES!!*/

export default BtnMenu;

