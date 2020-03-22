import React, {Fragment} from 'react';
import { useHistory } from "react-router-dom";

const Desserts = () => {
    let history = useHistory();
    console.log(history);

    return ( 
        <Fragment>
            <h1>Desserts!</h1>
        </Fragment>
    );
}
 
/*PROTOTYPES!!*/

export default Desserts;

