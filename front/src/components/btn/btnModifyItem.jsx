import React, {Fragment} from 'react';
import './btn.css';


const BtnModifyItem = ({handleClickBtn, btnText, dish, styleBtn}) => {
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

export default BtnModifyItem;

