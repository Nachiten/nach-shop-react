import React from 'react';

import "./Item.css";

const Item = (props) => {

   const item = props.item;

   return (
      <div className="card">
            <img src={item.imageSrc} alt={item.imageAlt} />
            <h2>{item.itemName}</h2>
            <p>{item.itemDescr}</p>
           {/* <span>
               <label>Cantidad:</label>
               <input type="number" min="0" max="50" step="1"></input>
               <button>Añadir al Carro</button>
            </span>
           */}
      </div>
   );
};

export default Item;