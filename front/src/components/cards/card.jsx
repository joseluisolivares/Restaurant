import React, {Fragment} from 'react';
import './card.css';
import BtnAddItem from '../btn/btnAddItem';


const Card = ({value, dish, setDish}) => {
    const {name,price,image} = value;
     
    const handleClickBtn = (e) => {
        e.preventDefault();
        setDish([...dish, value]);
    }
    return ( 
        <Fragment>
            <div className="card mt-3">
                <img src={image} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        <small className=" text-dark">Precio: <strong>{price}</strong></small>
                        <BtnAddItem
                            handleClickBtn={handleClickBtn}
                            btnText='Añadir plato'
                            dish={dish}
                            setDish={setDish}
                        />
                    </p>
                </div>
            </div>
        </Fragment>
    );
}
 
/*PROTOTYPES!!*/

export default Card;

