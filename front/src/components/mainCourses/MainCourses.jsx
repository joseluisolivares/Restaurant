import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "../cards/card";
import Order from "../order/order";
import "./mainCourses.css";

const MainCourses = () => {
  const [mainCourses, setMainCourses] = useState([]);
  const [dish, setDish] = useState([]);
  const orderText = "Ver Principales seleccionados";
  const titleText = 'PRINCIPALES';
  let history = useHistory();
  let path = history;
  path = path.location.pathname;

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(dish));
  }, [dish]);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const urlApi = `http://localhost:4000/api/maincourses`;
    fetch(urlApi, { signal: signal })
      .then(res => {
        return res.json();
      })
      .then(res => {
        setMainCourses(res.value);
      });
    return () => {
      abortController.abort();
    };
  }, []);
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
        {mainCourses.map((mainCourses, index) => (
          <Card key={index} value={mainCourses} dish={dish} setDish={setDish} />
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
                <span className="close opacity" aria-hidden="true">
                  &times;
                </span>
              </button>
              <div className="OrderContainer OrderContainerMaincourses">
                <h1 className="display-4 text-center pt-5 colorMainTitle">
                  {titleText}
                </h1>
                <p className="lead">
                  {dish.map((item, index) => (
                    <Order key={index} dish={item} />
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

/*PROTOTYPES!!*/

export default MainCourses;
