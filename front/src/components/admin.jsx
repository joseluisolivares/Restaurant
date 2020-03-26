import React, {Fragment, useState, useRef} from 'react';
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import BtnDishes from './btn/btnDishes';

const Admin = () => {
    let history = useHistory();
    const btnTextValidate = 'Entrar';
    const btnDishes = ['entrantes','principales','postres','bebidas']
    const [data, setData] = useState({
        user: '',
        password:'',
    });
    const form = useRef(0);
    let {user, password} = data;
    const handleChangeInput = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
        if(user === 'Admin' && password === 'Huecas'){
            form.current.style.display = 'none';
        }
    }
    const handleClickDishes = (e) => {
        let namePath = e.target.name;
        if(namePath === 'entrantes'){
            history.push(`administrador/entrantes`)
        }
        if(namePath === 'principales'){
            history.push(`administrador/principales`)
        }
        if(namePath === 'postres'){
            history.push(`administrador/postres`)
        }
        if(namePath === 'bebidas'){
            history.push(`administrador/bebidas`)
        }
    }
   

    return ( 
        <Fragment>
            <div className="containerAdmin" ref={form}>
                <form>
                    <div className="form-group">
                        <label>User</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        name="user"
                        onChange={handleChangeInput}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                        name="password"
                        onChange={handleChangeInput}/>
                    </div>
                </form>
                <button className="btn btn-info" onClick={handleChangeInput}>{btnTextValidate}</button>
            </div>
            <div className="container adminContainer d-flex flex-column">
                <button 
                    type="button" 
                    className="close w-100 text-right pt-2 text-white" 
                    onClick={ () => history.goBack() }
                    aria-label="Close">
                    <span 
                        aria-hidden="true">
                        &times;
                    </span>
                </button>
                <div className="boxItems d-flex flex-column align-items-center pt-5">
                    {btnDishes.map( (value) => (
                        <BtnDishes
                            key={value}
                            name={value}
                            btnText={value}
                            handleClickDishes={handleClickDishes}   
                        />
                    ))}
                </div>
            
            </div>
        </Fragment>
     );
}
 
Admin.propTypes = {
    handleClickDishes: PropTypes.func,
    name: PropTypes.string,
    btnText: PropTypes.string
}
export default Admin;

