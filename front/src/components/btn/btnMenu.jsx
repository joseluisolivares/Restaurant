import React, {Fragment, useState} from 'react';

const BtnMenu = ({handleClickBtn,btnText}) => {
    
    
    return ( 
        <Fragment>
           <a 
                onClick={handleClickBtn}
                name='menu'
                className='btn btn-success btnSize text-white'>
                {btnText}
            </a>
        </Fragment>
     );
}
 
/*PROTOTYPES!!*/

export default BtnMenu;

