import React, {Fragment} from 'react';
import { withRouter } from "react-router";

const BtnDishes = ({handleClickDishes,name,btnText}) => {
    return ( 
        <Fragment>
           <button 
                name={name}
                onClick={handleClickDishes}
                className='btn btn-danger text-white'>
                {btnText}
            </button>
        </Fragment>
    );
}

/** 
<button onClick={(e) => this.handleClick(e)}>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
 * 
*/
/*PROTOTYPES!!*/

export default withRouter(BtnDishes);

