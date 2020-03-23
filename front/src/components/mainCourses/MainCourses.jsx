import React, {Fragment,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Card from '../cards/card';


const MainCourses = () => {
    
    
    let history = useHistory();
    let path = history;
    path = path.location.pathname;
	console.log(path);
    
        
    useEffect( () => {
        const urlApi = `http://localhost:4000/api/maincourses`;
        fetch(urlApi)
            .then( (res) => {
                return res.json();
            })
            .then (res => console.log(res))
        },[]);
    
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

export default MainCourses;

