import React, {Fragment,useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Card from '../cards/card';
import BtnOrder from '../btn/btnOrder';
import './drinks.css';

const Drinks = () => {
    
    
    const [drinks, setDrinks] = useState([]);
    
    let history = useHistory();
    let path = history;
    path = path.location.pathname;
	console.log(path);
        
    useEffect( () => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const urlApi = `http://localhost:4000/api/drinks`;
        fetch(urlApi, { signal : signal })
            .then( (res) => {
                return res.json();
            })
            .then ( (res) => {
                setDrinks(res.value)
            })
            return () =>  {
                abortController.abort()
              };
        },[]);

        const handleClickOrderBtn = (e) => {
            e.preventDefault();
            console.log(e.target.name);
            const namePath = e.target.name;
            if(namePath === 'pedido'){
                history.push(`${namePath}`)
            }
        }

    return ( 
        <Fragment>
            <div className="container menuContainerCard pt-3">
            <header>
                <div className="row">
                    <div className="col d-flex justify-content-between">
                        <div className="back d-flex align-items-end" onClick={ () => history.goBack() }>
                            <svg className="bi bi-arrow-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd"/>
                                <path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd"/>
                            </svg>
                        </div>
                        <BtnOrder
                            btnText='Ver pedido'
                            name='pedido'
                            handleClickOrderBtn={handleClickOrderBtn}
                        />  
                        </div>
                </div>
            </header>
                {
                    drinks.map( (drinks, index) => (
                        <Card
                            key={index}
                            value={drinks}
                        />
                    ))
                }
              
            </div>
        </Fragment>
    );
}
 
/*PROTOTYPES!!*/

export default Drinks;

