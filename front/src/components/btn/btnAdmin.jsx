import React, {Fragment} from 'react';
import './btn.css';


const BtnAdmin = ({handleClickBtn,btnText}) => {

    return ( 
        <Fragment>
           <button 
                onClick={handleClickBtn}
                name='admin'
                className='btn bg-transparent text-white btnAdmin'>
                {btnText}   
            </button>
        </Fragment>
     );
}
 
/*PROTOTYPES!!*/

export default BtnAdmin;

