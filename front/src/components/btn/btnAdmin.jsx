import React, {Fragment} from 'react';


const BtnAdmin = ({handleClickBtn,btnText}) => {

    return ( 
        <Fragment>
           <button 
                onClick={handleClickBtn}
                name='admin'
                className='btn btn-danger text-white'>
                {btnText}   
            </button>
        </Fragment>
     );
}
 
/*PROTOTYPES!!*/

export default BtnAdmin;

