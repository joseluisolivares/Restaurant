import React, {Fragment} from 'react';


const Card = (starters) => {
    let name = starters.starters.name;
    let price = starters.starters.price;
    let image = starters.starters.image;
  
    return ( 
        <Fragment>
            <div className="card mb-3">
                <img src={image} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><small className=" text-dark">Precio: <strong>{price}</strong></small></p>
                </div>
            </div>
        </Fragment>
    );
}
 
/*PROTOTYPES!!*/

export default Card;

