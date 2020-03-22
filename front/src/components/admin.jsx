import React, {Fragment, useState} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";


const Admin = () => {
    let history = useHistory();

   
    return ( 
        <Fragment>
            <h1>Admin Section</h1>
            <button 
                type="button" 
                className="close" 
                onClick={ () => history.goBack() }
                aria-label="Close">
                <span 
                    aria-hidden="true">
                    &times;
                </span>
            </button>
        </Fragment>
     );
}
 
/*PROTOTYPES!!*/

export default Admin;

