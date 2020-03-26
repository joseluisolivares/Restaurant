import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import "./modify.css";


const Modify = ({ dish }) => {
  let history = useHistory();
  const [postItem, setPostItem] = useState({
    id:'',
    name: '',
    price:'',
    image:''
  })
  console.log(postItem);
  let pathName =  history.location.pathname;
    console.log(pathName);
    if(pathName === '/administrador/entrantes'){
      pathName = 'starters';
    }
    if(pathName === '/administrador/principales'){
      pathName = 'maincourses';
      console.log(postItem);
      console.log('dentro de modify principales');
    }
    if(pathName === '/administrador/postres'){
      pathName = 'postres';
    }
    if(pathName === '/administrador/bebidas'){
    pathName = 'bebidas';
    }
  const handleChange = (e) => {
    e.preventDefault();
    setPostItem({
      ...postItem,
      [e.target.name] : e.target.value
    });
  }

  const handleAdd = (e) => {
    e.preventDefault();
  
    let urlApi = `http://localhost:4000/api/${pathName}`;
    console.log(urlApi);
    console.log(postItem);
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postItem)
    }
    fetch(urlApi,opts)
      .then( (response) => {
          return response.json();
      })
      .catch(function (err) {
          console.error(err);
      });

  }

  const handleModify = (e) => {
    e.preventDefault();
    let idModify = dish[1]._id;
    let urlApi = `http://localhost:4000/api/${pathName}/${idModify}`;
    console.log(postItem);
    const newDishToModify = {
      name:postItem.name,
      price:postItem.price,
      image:postItem.image
    }
    const opts = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDishToModify)
    }
    fetch(urlApi,opts)
      .then( (response) => {
          return response.json();
      })
      .catch(function (err) {
          console.error(err);
      });
  }

  const handleDelete = (e) => {
    e.preventDefault();
    let idModify = dish[1]._id;
    let urlApi = `http://localhost:4000/api/${pathName}/${idModify}`;
    const opts = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      params: JSON.stringify(idModify)
    }
    fetch(urlApi,opts)
    .then( (response) => {
        return response.json();
    })
    .catch(function (err) {
        console.error(err);
    });
  }
  return (
    <Fragment>
      <div className="boxBtn d-flex flex-column align-items-center">
        <div className="formAdd">
          <input id="name" name="name" type="text" placeholder="Nombre" onChange={handleChange}/>
          <input id="price" name="price" type="text" placeholder="Precio" onChange={handleChange}/>
          <input id="image" name="image" type="text" placeholder="Url imagen" onChange={handleChange}/>
        </div>
        <button type="button" className="btn btn-danger btnModify" name="add"  onClick={handleAdd}>Añadir</button>
        <button type="button" className="btn btn-warning btnModify" name="modify"  onClick={handleModify}>Modificar</button>
        <button type="button" name="delete" className="btn btn-info btnModify" onClick={handleDelete}>Borrar</button>
      </div>
    </Fragment>
  );
};



export default Modify;
