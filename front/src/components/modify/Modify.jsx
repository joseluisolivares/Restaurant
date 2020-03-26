import React, { Fragment, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./modify.css";

const Modify = ({ dish }) => {
  let history = useHistory();
  const warning = useRef(0);
  const danger = useRef(0);
  const info = useRef(0);
  const [postItem, setPostItem] = useState({
    id: "",
    name: "",
    price: "",
    image: ""
  });
  let pathName = history.location.pathname;
  if (pathName === "/administrador/entrantes") {
    pathName = "starters";
  }
  if (pathName === "/administrador/principales") {
    pathName = "maincourses";
  }
  if (pathName === "/administrador/postres") {
    pathName = "postres";
  }
  if (pathName === "/administrador/bebidas") {
    pathName = "bebidas";
  }
  const handleChange = e => {
    e.preventDefault();
    setPostItem({
      ...postItem,
      [e.target.name]: e.target.value
    });
  };

  const handleAdd = e => {
    e.preventDefault();
    let urlApi = `http://localhost:4000/api/${pathName}`;
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postItem)
    };
    fetch(urlApi, opts)
      .then(response => {
        return response.json();
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  const handleModify = e => {
    e.preventDefault();
    let idModify = dish[1]._id;
    let urlApi = `http://localhost:4000/api/${pathName}/${idModify}`;
    const newDishToModify = {
      name: postItem.name,
      price: postItem.price,
      image: postItem.image
    };
    const opts = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDishToModify)
    };
    fetch(urlApi, opts)
      .then(response => {
        return response.json();
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  const handleDelete = e => {
    e.preventDefault();
    let idModify = dish[1]._id;
    let urlApi = `http://localhost:4000/api/${pathName}/${idModify}`;
    const opts = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      params: JSON.stringify(idModify)
    };
    fetch(urlApi, opts)
      .then(response => {
        return response.json();
      })
      .catch(function(err) {
        console.error(err);
      });
  };
  const handleClose = e => {
    e.preventDefault();
    if (e.target.className === "closeModifyInfo text-right") {
      info.current.style.display = "none";
    }
    if (e.target.className === "closeModifyDanger text-right") {
      danger.current.style.display = "none";
    }
    if (e.target.className === "closeModifyWarning text-right") {
      warning.current.style.display = "none";
    }
  };
  return (
    <Fragment>
      <div className="alert alert-light alertModify" role="alert">
        Para ver los resultados recarga la página
      </div>
      <div
        className="alert alert-warning alertModify"
        role="alert"
        ref={warning}
      >
        <div
          className="closeModifyWarning text-right"
          onClick={handleClose}
          name="warning"
        >
          X
        </div>
        <p>
          <strong>Modificar</strong>: Selecciona un plato en la pantalla
          anterior, vuelve a esta, rellena el campo a modificar, se modificará
          automaticamente
        </p>
      </div>
      <div className="alert alert-danger alertModify" role="alert" ref={danger}>
        <div
          className="closeModifyDanger text-right"
          onClick={handleClose}
          name="warning"
        >
          X
        </div>
        <p>
          <strong>Borrar</strong>: Selecciona un plato en la pantalla anterior,
          vuelve a esta, y pulsa borrar, se borrará automaticamente
        </p>
      </div>
      <div className="alert alert-info alertModify" role="alert" ref={info}>
        <div
          className="closeModifyInfo text-right"
          onClick={handleClose}
          name="warning"
        >
          X
        </div>
        <p>
          <strong>Añadir</strong>: No es necesario que selecciones ningún plato
          en la pantalla anterior, solo accede a esta y rellena los campos
        </p>
      </div>
      <div className="boxBtn d-flex flex-column align-items-center">
        <div className="formAdd">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
          />
          <input
            id="price"
            name="price"
            type="text"
            placeholder="Precio"
            onChange={handleChange}
          />
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Url imagen"
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-danger btnModify"
          name="add"
          onClick={handleAdd}
        >
          Añadir
        </button>
        <button
          type="button"
          className="btn btn-warning btnModify"
          name="modify"
          onClick={handleModify}
        >
          Modificar
        </button>
        <button
          type="button"
          name="delete"
          className="btn btn-info btnModify"
          onClick={handleDelete}
        >
          Borrar
        </button>
      </div>
    </Fragment>
  );
};

export default Modify;
