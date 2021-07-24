import React, {useState} from 'react';

import "./ItemCarrito.css";

const ItemCarrito = (props) => {

   const item = props.item;

   const [amount, setAmount] = useState(props.amount);

   const amountChangeHandler = (event) => {
      setAmount(event.target.value);
   }

   return (
      <span className="card-carrito">
         <img src={item.imageSrc} alt={item.imageAlt} />
         <h2>{item.itemName}</h2>
         <input type="number" min="1" max="50" step="1" value={amount} onChange={amountChangeHandler}></input>
         <button>Cambiar Cantidad</button>
      </span>
   );
};

export default ItemCarrito;