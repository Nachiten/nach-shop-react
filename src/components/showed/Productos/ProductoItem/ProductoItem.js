import React, { useState } from "react";

import "./ProductoItem.css";

const ProductoItem = (props) => {
   const item = props.item;

   const [amount, setAmount] = useState(1);

   const amountChangeHandler = (event) => {
      setAmount(event.target.value);
   };

   const agregarItemEnCarrito = () => {
      const itemAAgregar = {
         ...item,
         amount: amount,
      };

      props.agregarItemEnCarrito(itemAAgregar);
   };

   return (
      <div className="card">
         <div className="item">
            <img src={item.imageSrc} alt={item.imageAlt} />
            <h2>{item.itemName}</h2>
            <p>{item.itemDescr}</p>
         </div>

         <div className="input">
            <h2>$ {item.price}</h2>
            <input
               type="number"
               min="1"
               max="50"
               step="1"
               value={amount}
               onChange={amountChangeHandler}
            ></input>
            <button onClick={agregarItemEnCarrito}>Añadir al Carro</button>
         </div>
      </div>
   );
};

export default ProductoItem;
