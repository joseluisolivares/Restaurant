import React, {Fragment,useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Card from '../cards/card';


const Starters = () => {
    
    
    const [starters, setStarters] = useState([]);
    
    let history = useHistory();
    let path = history;
    path = path.location.pathname;
	console.log(path);
        
    useEffect( () => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const urlApi = `http://localhost:4000/api/starters`;
        fetch(urlApi, { signal : signal })
            .then( (res) => {
                return res.json();
            })
            .then ( (res) => {
                setStarters(res.item)
            })
            return () =>  {
                abortController.abort()
              };
        },[]);
        

    return ( 
        <Fragment>
            <div className="container menuContainer">
                {
                    starters.map( (starters, index) => (
                        <Card
                            key={index}
                            starters={starters}
                        />
                    ))
                }
              
            </div>
        </Fragment>
    );
}
 
/*PROTOTYPES!!*/

export default Starters;

