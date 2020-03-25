import React, {Fragment} from 'react';
import './btn.css';


const BtnAddItem = ({handleClickBtn,btnText,dish,setDish}) => {
    return ( 
        <Fragment>
           <button 
                onClick={handleClickBtn}
                name='admin'
                className='btn bg-transparent btnAdmin'
                dish={dish}
                setDish={setDish}>
                {btnText}   
            </button>
        </Fragment>
     );
}
 
/*PROTOTYPES!!*/

export default BtnAddItem;

