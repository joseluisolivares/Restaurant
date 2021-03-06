import React, {Fragment,useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Card from '../cards/card';
import Order from "../order/order";
import Modify from "../modify/Modify";
import './drinks.css';

const Drinks = () => {
    const [drinks, setDrinks] = useState([]);
    const [dish, setDish] = useState([""]);
    const orderText = "Ver bebidas seleccionados";
    const titleText = 'BEBIDAS';
    let history = useHistory();
    let path = history;
    path = path.location.pathname;
    useEffect(() => {
        localStorage.setItem("order", JSON.stringify(dish));
      }, [dish]);
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
    return ( 
    <Fragment>
      <div className="container menuContainerCard">
        <header>
          <div className="row">
            <div className="col d-flex justify-content-between">
              <div
                className="back d-flex align-items-end"
                onClick={() => history.goBack()}
              >
                <svg
                  className="bi bi-arrow-left starters"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </header>
        {drinks.map((drinks, index) => (
          <Card key={index} value={drinks} dish={dish} setDish={setDish} />
        ))}
        <button
          type="button"
          className="btn btn-success fixed-bottom btn-block"
          data-toggle="modal"
          data-target="#exampleModal"
        >
            {orderText}
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
           <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                type="button"
                className="close opacity"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span className="close opacity closeDessert" aria-hidden="true">
                  &times;
                </span>
              </button>
              <div className="OrderContainer OrderContainerDrinks">
                <h1 className="display-4 text-center pt-5 colorMainTitle">
                  {titleText}
                </h1>
                <div className="lead">
                  {path === '/administrador/bebidas' 
                      ?  
                        <Modify  dish={dish}/>
                      : 
                        dish.map((item, index) => (
                          <Order key={index} dish={item} />
                        )) 
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    );
}
 
/*PROTOTYPES!!*/
Drinks.propTypes = {
  setDish: PropTypes.func,
  dish: PropTypes.array,
}
export default Drinks;

