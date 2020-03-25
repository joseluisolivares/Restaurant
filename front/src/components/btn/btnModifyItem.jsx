import React, {Fragment} from 'react';
import './btn.css';


const BtnModifyItem = ({handleClickBtn, btnText, dish, setDish, styleBtn}) => {
    return ( 
        <Fragment>
           <button 
                onClick={handleClickBtn}
                name='admin'
                className={styleBtn}
                dish={dish}
                setDish={setDish}>
                {btnText}   
            </button>
        </Fragment>
     );
}
 
/*PROTOTYPES!!*/

export default BtnModifyItem;

