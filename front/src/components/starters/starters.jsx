import React, {Fragment} from 'react';
import { useHistory } from "react-router-dom";


const Starters = () => {
    let history = useHistory();
    const path = history;
    console.log(path);
    return ( 
        <Fragment>
            <h1>Starters!</h1>
        </Fragment>
    );
}
 
/*PROTOTYPES!!*/

export default Starters;

