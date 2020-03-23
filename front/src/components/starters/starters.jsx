import React, {Fragment, useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Card from '../cards/card';


const Starters = () => {
    //state citas
    const [urlApi, setUrlApi] = useState('');
    

    let history = useHistory();
    let path = history;
    path = path.location.pathname;
    let keyApi = '';
	console.log(path);
    
        
    useEffect( () => {
        if(path === '/entrantes' || path === '/administrador/entrantes'){
            keyApi = 'entrantes';
        }
        if(path === '/principales' || path === '/administrador/principales'){
            keyApi = 'principales';
        }
        if(path === '/postres' || path === '/administrador/postres'){
            keyApi = 'postres';
        }
        if(path === '/bebidas' || path === '/administrador/bebidas'){
            keyApi = 'bebidas';
        }
        
        const urlApi = `http://localhost:4000/api/${keyApi}`;
        fetch(urlApi)
            .then( (res) => {
                return res.json();
            })
            .then (res => console.log(res))
        },[urlApi]);
    
    return ( 
        <Fragment>
            <div className="container menuContainer">
                <Card

                />
            </div>
        </Fragment>
    );
}
 
/*PROTOTYPES!!*/

export default Starters;

