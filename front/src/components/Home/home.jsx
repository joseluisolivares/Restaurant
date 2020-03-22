import React, {Fragment, useState} from 'react';
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import './home.css';
import BtnAdmin from '../btn/btnAdmin';
import BtnMenu from '../btn/btnMenu';


const Home = () => {
    let history = useHistory();

    const handleClickBtn = (e) => {
        e.preventDefault();
        const namePath = e.target.name;
        if(namePath === 'admin') {
            history.push(`/${namePath}`);
        }
        if(e.target.name === 'menu') {
            history.push('/menu');
        }
    }
    
    return ( 
        <Fragment>
           <div className="container">
               <div className="row">
                   <div className="col d-flex justify-content-end mt-4 ">
                        <BtnAdmin
                            handleClickBtn={handleClickBtn}
                            btnText='Admin'
                        />
                    </div>
               </div>
               <div className="row d-flex wrapperMenu">
                   <div className="col d-flex align-items-center justify-content-center ">
                   <BtnMenu
                            handleClickBtn={handleClickBtn}
                            btnText='Menú'
                        />
                    </div>
               </div>
            </div>
        </Fragment>
     );
}


/*<a 
onClick={ () => history.push('/menu') }
className="btn btn-success btnSize text-white">
Ver el menú
</a>*/


Home.propTypes = {
    handleClickBtn: PropTypes.func,
    btnText: PropTypes.string
}

export default Home;

