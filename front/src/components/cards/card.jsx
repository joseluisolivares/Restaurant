import React, {Fragment, useState} from 'react';
import './card.css';
import BtnAddItem from '../btn/btnAddItem';


const Card = ({value, dish, setDish}) => {
    const {name,price,image} = value;
    const [btnText, setBtnText] = useState('Añadir Plato');
    const [styleBtn, setStyleBtn] = useState('btn bg-warning btnAddItem text-black');
     
    const handleClickBtn = (e) => {
        e.preventDefault();
        setDish([...dish, value]);
        setStyleBtn('btn bg-success btnAddItem text-white');
        setBtnText('Plato Añadido');
    }
    return ( 
        <Fragment>
            <div className="card mb-3">
                <img src={image} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text d-flex align-items-center justify-content-between">
                        <p className=" text-dark mb-0">Precio: <strong>{price}</strong></p>
                        <BtnAddItem
                            handleClickBtn={handleClickBtn}
                            btnText={btnText}
                            dish={dish}
                            styleBtn={styleBtn}
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

