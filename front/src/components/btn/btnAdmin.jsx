import React, {Fragment, useState} from 'react';


const BtnAdmin = ({handleClickBtn,btnText}) => {

    return ( 
        <Fragment>
           <a 
                onClick={handleClickBtn}
                name='admin'
                className='btn btn-danger text-white'>
                {btnText}   
            </a>
        </Fragment>
     );
}
 
/*PROTOTYPES!!*/

export default BtnAdmin;

