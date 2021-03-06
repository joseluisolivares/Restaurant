import React, {Fragment} from 'react';
import './btn.css';


const BtnAddItem = ({handleClickBtn, btnText, dish, setDish, styleBtn}) => {
    return ( 
        <Fragment>
           <button 
                onClick={handleClickBtn}
                name='admin'
                className={styleBtn}
                dish={dish}>
                {btnText}   
            </button>
        </Fragment>
     );
}
 
/*PROTOTYPES!!*/

export default BtnAddItem;

